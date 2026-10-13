import { atom, read, update } from 'claude-code'
import type { EngineInterface, PluginOptions, Register, ToolCallResult, TurnUsage } from 'claude-code'

import type { Calibration, CalibrationRow, Decision, Ledger, ModelTier, SpawnRecord } from '../types'
import {
  type Classification,
  classify,
  isSmallTask,
  LABELS,
  NEUTRAL_REASON_LABEL,
  needsSecondOpinion,
  normalize,
  type TaskClassification,
  withSecondOpinion,
} from './classify'
import { DEFAULT_AGENT_MODELS, INHERITING_AGENTS, MODELS } from './matrix'
import {
  agentKey,
  type CacheTtl,
  currentOf,
  estimateSwitch,
  implementIntent,
  judgeSpawn,
  modelName,
  sessionAction,
  switchText,
  tierOfModel,
  usageUsd,
} from './route'
import {
  admitsNoVerification,
  basename,
  commandFailed,
  type EditChange,
  type EscalationSignal,
  type LoopTrack,
  newTrack,
  noteCommand,
  noteEdit,
  pendingVerification,
  writeChange,
} from './track'
import {
  bandModel,
  contextLine,
  describeDecision,
  matrixText,
  renderBand,
  renderPane,
  RUBRIC_ID,
  rubricFor,
  simulationText,
  statusText,
  taskLabel,
} from './views'

const PANE_ID = 'route'
const PANE_TITLE = 'Ruta de modelos'
const HISTORY_MAX = 40
const SPAWNS_MAX = 30
const SIGNALS_MAX = 5
const CLASSIFIER_TIMEOUT_MS = 1500
const PIN = /\b(sonnet|opus|fable|haiku|opusplan|sonnet-implementer|opus-reviewer|opus-debugger|fable-researcher)\b/
const USER_ORIGINS: ReadonlySet<string> = new Set(['composer', 'bridge', 'sdk'])

const decisionAtom = atom({ plugin: 'digitalizate-model-router', key: 'decision' } as const, null)
const historyAtom = atom({ plugin: 'digitalizate-model-router', key: 'history' } as const, [])
const spawnsAtom = atom({ plugin: 'digitalizate-model-router', key: 'spawns' } as const, [])
const ledgerAtom = atom({ plugin: 'digitalizate-model-router', key: 'ledger' } as const, {})
const calibrationAtom = atom({ plugin: 'digitalizate-model-router', key: 'calibration' } as const, {})
const signalsAtom = atom({ plugin: 'digitalizate-model-router', key: 'signals' } as const, [])
const dismissedAtom = atom({ plugin: 'digitalizate-model-router', key: 'dismissed' } as const, '')
const sessionAtom = atom(
  { plugin: 'digitalizate-model-router', key: 'session' } as const,
  { model: '', modelTier: null, planMode: false, contextTokens: 0, legacyHook: false },
)

type Config = {
  isEnforced: boolean
  isHybrid: boolean
  isEffortByMatrix: boolean
  verify: 'sonnet' | 'all' | 'off'
  switchThreshold: number
}

type Runtime = {
  config: Config
  agentModels: Record<string, string>
  pendingImages: number
  pendingOrigin: string | undefined
  cacheTtl: CacheTtl | undefined
  rejectedThisTurn: Set<string>
  isUserPinned: boolean
  mainStepModel: string | undefined
  ownSwitch: ModelTier | null
  mainTrack: LoopTrack
  subTracks: Map<string, LoopTrack>
  loopModels: Map<string, string>
  spawnByToolUse: Map<string, SpawnRecord>
}

function configOf(options: PluginOptions): Config {
  return {
    isEnforced: options.mode !== 'advise',
    isHybrid: options.classifier !== 'heuristic',
    isEffortByMatrix: options.effort === 'matrix',
    verify: options.verification === 'all' ? 'all' : options.verification === 'off' ? 'off' : 'sonnet',
    switchThreshold: typeof options.switchThreshold === 'number' ? options.switchThreshold : 1,
  }
}

function freshRuntime(options: PluginOptions): Runtime {
  return {
    config: configOf(options),
    agentModels: { ...DEFAULT_AGENT_MODELS },
    pendingImages: 0,
    pendingOrigin: undefined,
    cacheTtl: undefined,
    rejectedThisTurn: new Set(),
    isUserPinned: false,
    mainStepModel: undefined,
    ownSwitch: null,
    mainTrack: newTrack(),
    subTracks: new Map(),
    loopModels: new Map(),
    spawnByToolUse: new Map(),
  }
}

const runtime: Runtime = freshRuntime({})

function frontmatter(text: string): Record<string, string> {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1]
  const fields: Record<string, string> = {}

  for (const line of (block ?? '').split(/\r?\n/)) {
    const pair = /^([A-Za-z_-]+):\s*(.*)$/.exec(line)

    if (pair?.[1] !== undefined && pair[2] !== undefined) {
      fields[pair[1]] = pair[2].trim().replace(/^["']|["']$/g, '')
    }
  }

  return fields
}

function mechanicalStreak(history: readonly Decision[], next: TaskClassification): number {
  if (next.tier !== 'sonnet') {
    return 0
  }

  let streak = 1

  for (let index = history.length - 1; index >= 0 && history[index]?.tier === 'sonnet'; index -= 1) {
    streak += 1
  }

  return streak
}

function addUsage(ledger: Ledger, usage: TurnUsage, cost: number): Ledger {
  const row = ledger[usage.model] ?? { usd: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, steps: 0 }

  return {
    ...ledger,
    [usage.model]: {
      usd: row.usd + cost,
      input: row.input + usage.input_tokens,
      output: row.output + usage.output_tokens,
      cacheRead: row.cacheRead + usage.cache_read_input_tokens,
      cacheWrite: row.cacheWrite + usage.cache_creation_input_tokens,
      steps: row.steps + 1,
    },
  }
}

function withContext(ran: ToolCallResult, line: string): ToolCallResult {
  if (ran.deny !== undefined) {
    return ran
  }

  return { ...ran, context: [...(ran.context ?? []), line] }
}

function calibrationKey(decision: Decision): string {
  return `${decision.category}@${decision.modelTier ?? '?'}`
}

function trackFor(agentId: string | undefined): LoopTrack {
  if (agentId === undefined) {
    return runtime.mainTrack
  }

  const existing = runtime.subTracks.get(agentId)

  if (existing !== undefined) {
    return existing
  }

  const track = newTrack()
  runtime.subTracks.set(agentId, track)

  return track
}

async function readAgentModels($: EngineInterface): Promise<Record<string, string>> {
  const home = await $.env.get('HOME').catch(() => undefined)
  const root = await $.session.root().catch(() => undefined)
  const dirs = [
    `${$.plugin.root}/agents`,
    home === undefined ? undefined : `${home}/.claude/agents`,
    root === undefined ? undefined : `${root}/.claude/agents`,
  ]
  const found: Record<string, string> = {}

  for (const dir of dirs) {
    if (dir === undefined) {
      continue
    }

    const entries = await $.fs.list(dir).catch(() => [])

    for (const entry of entries) {
      if (entry.kind !== 'file' || !entry.name.endsWith('.md')) {
        continue
      }

      const fields = frontmatter(await $.fs.read(`${dir}/${entry.name}`).catch(() => ''))

      if (fields.name !== undefined && fields.model !== undefined) {
        found[fields.name] = fields.model
      }
    }
  }

  return found
}

async function hasLegacyHook($: EngineInterface): Promise<boolean> {
  const settings = await $.settings.read({ source: 'user' }).catch(() => undefined)

  return JSON.stringify(settings ?? {}).includes('hooks/model-router.sh')
}

async function secondOpinion($: EngineInterface, text: string): Promise<string | undefined> {
  const stop = new AbortController()
  const timeout = $.clock.sleep(CLASSIFIER_TIMEOUT_MS, { signal: stop.signal }).then(
    () => undefined,
    () => undefined,
  )
  const answer = $.model.classify(text.slice(0, 4000), LABELS).catch(() => undefined)
  const label = await Promise.race([answer, timeout])

  stop.abort()

  return label
}

async function classifyPrompt(
  $: EngineInterface,
  text: string,
  images: number,
): Promise<{ classification: Classification; source: Decision['source'] }> {
  const base = classify(text, { images })

  if (!runtime.config.isHybrid || !needsSecondOpinion(base, text)) {
    return { classification: base, source: 'heuristic' }
  }

  const label = await secondOpinion($, text)

  return label === undefined
    ? { classification: base, source: 'heuristic' }
    : { classification: withSecondOpinion(base, label), source: 'classifier' }
}

async function loopTier($: EngineInterface, agentId: string | undefined): Promise<ModelTier | null> {
  if (agentId !== undefined) {
    return tierOfModel(runtime.loopModels.get(agentId))
  }

  const session = await read($, sessionAtom)

  return tierOfModel(runtime.mainStepModel) ?? currentOf(session.model, session.planMode).tier
}

async function bumpCalibration($: EngineInterface, field: 'escalations' | 'blocks'): Promise<void> {
  const decision = await read($, decisionAtom)

  if (decision === null) {
    return
  }

  const key = calibrationKey(decision)
  const next = await update($, calibrationAtom, calibration => {
    const row: CalibrationRow = calibration[key] ?? { tasks: 0, usd: 0, escalations: 0, blocks: 0 }

    return { ...calibration, [key]: { ...row, [field]: row[field] + 1 } }
  })

  await $.store.set('calibration', next)
}

async function finalizeDecision($: EngineInterface): Promise<void> {
  const decision = await read($, decisionAtom)

  if (decision === null || decision.isClosed) {
    return
  }

  const key = calibrationKey(decision)
  const closed: Decision = { ...decision, isClosed: true }
  const next = await update($, calibrationAtom, calibration => {
    const row: CalibrationRow = calibration[key] ?? { tasks: 0, usd: 0, escalations: 0, blocks: 0 }

    return { ...calibration, [key]: { ...row, tasks: row.tasks + 1, usd: row.usd + decision.usd } }
  })

  await update($, decisionAtom, () => closed)
  await update($, historyAtom, history => history.map(entry => (entry.id === closed.id ? closed : entry)))
  await $.store.set('calibration', next)
}

async function recordUsage($: EngineInterface, usage: TurnUsage, isMain: boolean): Promise<void> {
  const cost = usageUsd(usage, runtime.cacheTtl)

  await update($, ledgerAtom, ledger => addUsage(ledger, usage, cost))

  if (cost > 0) {
    await update($, decisionAtom, decision => (decision === null ? null : { ...decision, usd: decision.usd + cost }))
  }

  if (isMain) {
    const contextTokens = usage.input_tokens + usage.cache_read_input_tokens + usage.cache_creation_input_tokens + usage.output_tokens

    await update($, sessionAtom, session => ({ ...session, contextTokens }))
  }
}

async function escalate(
  $: EngineInterface,
  agentId: string | undefined,
  ran: ToolCallResult,
  signal: EscalationSignal,
): Promise<ToolCallResult> {
  const where = agentId === undefined ? '' : ' (sub-agente)'
  const tier = await loopTier($, agentId)
  const advice =
    tier === 'sonnet'
      ? 'Para de parchar: formula la causa raíz antes del próximo cambio; si no la ves, delega a opus-debugger o recomienda /model opus.'
      : 'Replantea con hipótesis explícitas antes del próximo cambio; opus-debugger con contexto fresco ayuda.'

  await update($, signalsAtom, signals => [...signals, `${signal.text}${where}`].slice(-SIGNALS_MAX))
  await bumpCalibration($, 'escalations')

  return withContext(ran, `model-router: señal para escalar — ${signal.text}${where}. ${advice}`)
}

async function onEdit(
  $: EngineInterface,
  agentId: string | undefined,
  path: string,
  change: EditChange,
  ran: ToolCallResult,
): Promise<ToolCallResult> {
  if (ran.deny !== undefined || ran.isError === true) {
    return ran
  }

  const signal = noteEdit(trackFor(agentId), path, change)

  return signal === undefined ? ran : escalate($, agentId, ran, signal)
}

async function resetSession($: EngineInterface): Promise<void> {
  runtime.mainTrack = newTrack()
  runtime.subTracks.clear()
  runtime.loopModels.clear()
  runtime.spawnByToolUse.clear()
  runtime.rejectedThisTurn.clear()
  await update($, decisionAtom, () => null)
  await update($, historyAtom, () => [])
  await update($, spawnsAtom, () => [])
  await update($, ledgerAtom, () => ({}))
  await update($, signalsAtom, () => [])
  await update($, dismissedAtom, () => '')
}

async function learnAgentModel($: EngineInterface, agent: string, model: string): Promise<void> {
  runtime.agentModels = { ...runtime.agentModels, [agent]: model }

  const learned = await $.store.get('agentModels').catch(() => undefined)

  await $.store.set('agentModels', { ...(typeof learned === 'object' && learned !== null ? learned : {}), [agent]: model })
}

export const register: Register = (on, options) => {
  Object.assign(runtime, freshRuntime(options))

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'route',
      description: 'Enrutador de modelos: decisión actual, matriz, sub-agentes y costo por modelo',
      argumentHint: '[texto a clasificar | matrix]',
    })

    const learned = await $.store.get('agentModels').catch(() => undefined)
    const calibration = await $.store.get('calibration').catch(() => undefined)

    runtime.agentModels = {
      ...(typeof learned === 'object' && learned !== null ? (learned as Record<string, string>) : {}),
      ...DEFAULT_AGENT_MODELS,
      ...(await readAgentModels($)),
    }

    if (typeof calibration === 'object' && calibration !== null) {
      await update($, calibrationAtom, () => calibration as Calibration)
    }

    const model = await $.session.model().catch(() => '')
    const legacyHook = await hasLegacyHook($)
    const session = await update($, sessionAtom, current => ({
      ...current,
      model,
      modelTier: currentOf(model, current.planMode).tier,
      legacyHook,
    }))

    $.ui.status(statusText(await read($, decisionAtom), session.model))

    if (legacyHook) {
      $.ui.log(
        'model-router: ~/.claude/hooks/model-router.sh sigue registrado en settings.json (SessionStart y UserPromptSubmit) y duplica la rúbrica del mod. Retíralo.',
        { to: 'debug' },
      )
    }

    return next(e)
  })

  on('session.end', async ($, e, next) => {
    await finalizeDecision($)

    if (e.reason === 'clear') {
      await resetSession($)
    }

    return next(e)
  })

  on('prompt.compose', async ($, e, next) => {
    const composed = await next(e)

    if (e.traits.includes('bare')) {
      return composed
    }

    const text = rubricFor(tierOfModel(e.model), e.tools.includes('Agent'))

    if (text === null) {
      return composed
    }

    return {
      sections: [...composed.sections.filter(section => section.id !== RUBRIC_ID), { id: RUBRIC_ID, text, scope: 'session' }],
    }
  })

  on('prompt.submit', ($, e, next) => {
    runtime.pendingImages = (e.attachments ?? []).filter(attachment => attachment.type === 'image').length
    runtime.pendingOrigin = e.origin.kind

    return next(e)
  })

  on('classic.UserPromptSubmit', async ($, e, next) => {
    const result = await next(e)

    const origin = runtime.pendingOrigin

    runtime.pendingOrigin = undefined

    if ((e.source !== undefined && e.source !== 'user' && e.source !== 'sdk') || (origin !== undefined && !USER_ORIGINS.has(origin))) {
      return result
    }

    const images = runtime.pendingImages
    runtime.pendingImages = 0
    runtime.isUserPinned = PIN.test(normalize(e.prompt))

    const planMode = e.permission_mode === 'plan'
    const { classification, source } = await classifyPrompt($, e.prompt, images)
    const fallbackModel = (await read($, sessionAtom)).model
    const model = await $.session.model().catch(() => fallbackModel)
    const current = currentOf(model, planMode, runtime.mainStepModel)
    const session = await update($, sessionAtom, view => ({ ...view, model, modelTier: current.tier, planMode }))

    if (classification.kind !== 'task') {
      $.ui.status(statusText(await read($, decisionAtom), model))

      return result
    }

    await finalizeDecision($)

    const history = await read($, historyAtom)
    const at = await $.clock.now()
    const action = sessionAction(classification, current, {
      contextTokens: session.contextTokens,
      mechanicalStreak: mechanicalStreak(history, classification),
      wantsCode: implementIntent(e.prompt),
      isSmallTask: isSmallTask(e.prompt),
      ...(runtime.cacheTtl === undefined ? {} : { ttl: runtime.cacheTtl }),
    })
    const decision: Decision = {
      id: e.prompt_id ?? `${at}`,
      at,
      snippet: e.prompt.replace(/\s+/g, ' ').trim().slice(0, 80),
      category: classification.category.id,
      label: taskLabel(classification),
      tier: classification.tier,
      effort: classification.effort,
      confidence: classification.confidence,
      source,
      signals: classification.signals,
      ...(classification.risk === undefined ? {} : { risk: classification.risk.id }),
      model,
      modelTier: current.tier,
      planMode,
      action,
      usd: 0,
      isClosed: false,
    }
    const previous = history[history.length - 1]

    await update($, decisionAtom, () => decision)
    await update($, historyAtom, list => [...list, decision].slice(-HISTORY_MAX))
    await update($, signalsAtom, () => [])
    $.ui.status(statusText(decision, model))

    const line = contextLine(decision, {
      isFirst: previous === undefined,
      changed:
        previous !== undefined &&
        decision.confidence !== 'low' &&
        (previous.tier !== decision.tier || previous.category !== decision.category),
    })

    return line === null ? result : { ...result, additionalContext: [...(result.additionalContext ?? []), line] }
  })

  on('turn.start', async ($, e, next) => {
    runtime.mainTrack = newTrack()
    runtime.rejectedThisTurn.clear()

    return next(e)
  })

  on('turn.step', async function* ($, e, next) {
    let request = e

    if (e.agentId === undefined) {
      runtime.mainStepModel = e.model

      if (runtime.config.isEffortByMatrix && typeof e.effort === 'string' && e.effort !== 'max') {
        const decision = await read($, decisionAtom)

        if (decision !== null && decision.confidence !== 'low' && tierOfModel(e.model) === decision.tier && decision.effort !== e.effort) {
          request = { ...e, effort: decision.effort }
        }
      }
    } else {
      runtime.loopModels.set(e.agentId, e.model)
    }

    const response = yield* next(request)

    if (response.usage !== null) {
      await recordUsage($, response.usage, e.agentId === undefined)
    }

    return response
  })

  on('agent.spawn', async ($, e, next) => {
    const plan = judgeSpawn(
      {
        agent: e.subagentType,
        description: e.description,
        prompt: e.prompt,
        ...(e.model === undefined ? {} : { model: e.model }),
        parentModel: e.parentModel,
        isFork: e.fork,
        isTeammate: e.isTeammate === true,
        isWorkflow: e.workflow !== undefined,
      },
      {
        agentModels: runtime.agentModels,
        isUserPinned: runtime.isUserPinned,
        isEnforced: runtime.config.isEnforced,
        rejectedThisTurn: runtime.rejectedThisTurn,
      },
    )
    const record: SpawnRecord = {
      at: await $.clock.now(),
      toolUseId: e.tool_use_id,
      agent: e.subagentType,
      description: e.description,
      from: plan.from,
      to: plan.to,
      verdict: plan.verdict,
      reason: plan.reason,
      ...(plan.category === undefined ? {} : { category: plan.category }),
    }

    await update($, spawnsAtom, spawns => [...spawns, record].slice(-SPAWNS_MAX))

    if (plan.verdict === 'reject') {
      if (plan.rejectionKey !== undefined) {
        runtime.rejectedThisTurn.add(plan.rejectionKey)
      }

      $.ui.toast(`model-router: rechacé ${e.subagentType}. ${plan.reason}`)

      return { deny: `model-router: ${plan.reason}. Re-despacha con el agente o modelo indicado.` }
    }

    if (plan.verdict !== 'pass') {
      runtime.spawnByToolUse.set(e.tool_use_id, record)
    }

    if (plan.verdict === 'rewrite') {
      $.ui.toast(`model-router: ${e.subagentType} → ${modelName(plan.to)}. ${plan.reason}`)
    } else if (plan.verdict === 'warn') {
      $.ui.toast(`model-router: ${e.subagentType}: ${plan.reason}`)
    }

    const started = await next(plan.verdict === 'rewrite' && plan.model !== undefined ? { ...e, model: plan.model } : e)
    const resolved = started.deny === undefined ? started.model : undefined

    if (
      resolved !== undefined &&
      e.model === undefined &&
      !INHERITING_AGENTS.has(agentKey(e.subagentType)) &&
      runtime.agentModels[e.subagentType] === undefined &&
      runtime.agentModels[agentKey(e.subagentType)] === undefined &&
      resolved !== e.parentModel
    ) {
      await learnAgentModel($, e.subagentType, resolved)
    }

    return started
  })

  on('tool.call', { tool: 'Agent' }, async ($, e, next) => {
    const ran = await next(e)
    const record = e.tool_use_id === undefined ? undefined : runtime.spawnByToolUse.get(e.tool_use_id)

    if (record === undefined) {
      return ran
    }

    runtime.spawnByToolUse.delete(record.toolUseId)

    return withContext(
      ran,
      record.verdict === 'rewrite'
        ? `model-router: ${record.agent} corrió en ${modelName(record.to)} en vez de ${modelName(record.from)}. ${record.reason}.`
        : `model-router: aviso sobre ${record.agent}: ${record.reason}.`,
    )
  })

  on('tool.call', { tool: 'Edit' }, async ($, e, next) =>
    onEdit($, e.agentId, e.file_path, { before: e.old_string, after: e.new_string }, await next(e)),
  )

  on('tool.call', { tool: 'Write' }, async ($, e, next) => {
    const ran = await next(e)

    return onEdit($, e.agentId, e.file_path, writeChange(trackFor(e.agentId), e.file_path, e.content), ran)
  })

  on('tool.call', { tool: 'NotebookEdit' }, async ($, e, next) =>
    onEdit($, e.agentId, e.notebook_path, { before: '', after: e.new_source }, await next(e)),
  )

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    const ran = await next(e)

    if (ran.deny !== undefined) {
      return ran
    }

    const signal = noteCommand(trackFor(e.agentId), e.command, commandFailed(ran.isError, ran.text))

    return signal === undefined ? ran : escalate($, e.agentId, ran, signal)
  })

  on('tool.call', { tool: 'EnterPlanMode' }, async ($, e, next) => {
    const ran = await next(e)

    if (e.agentId === undefined && ran.deny === undefined && ran.isError !== true) {
      await update($, sessionAtom, session => ({ ...session, planMode: true }))
    }

    return ran
  })

  on('tool.call', { tool: 'ExitPlanMode' }, async ($, e, next) => {
    const ran = await next(e)

    if (e.agentId !== undefined || ran.deny !== undefined || ran.isError === true) {
      return ran
    }

    const session = await update($, sessionAtom, view => ({ ...view, planMode: false }))

    if (tierOfModel(session.model) !== 'fable') {
      return ran
    }

    await update($, signalsAtom, signals => [...signals, 'plan aceptado en Fable: ejecuta con /model opusplan'].slice(-SIGNALS_MAX))

    return withContext(
      ran,
      'model-router: el plan quedó aprobado en Fable 5.1. No implementes en Fable: delega la implementación a sonnet-implementer o pide al usuario /model opusplan antes de seguir (Fable cuesta 2.5x Opus y rinde menos en código).',
    )
  })

  on('classic.Stop', async ($, e, next) => {
    const result = await next(e)

    if (runtime.config.verify === 'off' || e.stop_hook_active || result.block !== undefined) {
      return result
    }

    const tier = await loopTier($, undefined)

    if (runtime.config.verify === 'sonnet' && tier !== 'sonnet') {
      return result
    }

    const pending = pendingVerification(runtime.mainTrack)

    if (pending.length === 0 || admitsNoVerification(e.last_assistant_message ?? '')) {
      return result
    }

    const files = pending.slice(0, 4).map(basename).join(', ')

    await bumpCalibration($, 'blocks')

    if (!runtime.config.isEnforced) {
      $.ui.toast(`model-router: el turno cerró sin verificar ${files}`)

      return result
    }

    return {
      ...result,
      block: `model-router: editaste ${pending.length} archivo(s) de código (${files}) y no corriste tests, build ni el comando cambiado después del último cambio. Corre la verificación real y reporta su resultado; si no hay forma de verificar, dilo explícitamente.`,
    }
  })

  on('classic.SubagentStop', async ($, e, next) => {
    const result = await next(e)
    const track = runtime.subTracks.get(e.agent_id)
    const tier = tierOfModel(runtime.loopModels.get(e.agent_id))
    const pending = track === undefined ? [] : pendingVerification(track)
    const shouldGate =
      runtime.config.verify !== 'off' &&
      !e.stop_hook_active &&
      result.block === undefined &&
      (runtime.config.verify === 'all' || tier === 'sonnet') &&
      pending.length > 0 &&
      !admitsNoVerification(e.last_assistant_message ?? '')

    if (!shouldGate) {
      runtime.subTracks.delete(e.agent_id)
      runtime.loopModels.delete(e.agent_id)

      return result
    }

    const files = pending.slice(0, 4).map(basename).join(', ')

    if (!runtime.config.isEnforced) {
      $.ui.toast(`model-router: ${e.agent_type} cerró sin verificar ${files}`)

      return result
    }

    return {
      ...result,
      block: `model-router: editaste ${pending.length} archivo(s) de código (${files}) sin correr tests, build ni el comando cambiado. Verifica y reporta el resultado real; si no hay forma de verificar, dilo explícitamente.`,
    }
  })

  on('classic.PreModelSwitch', async ($, e, next) => {
    const result = await next(e)

    if (result.permissionDecision !== undefined || (e.source !== 'command' && e.source !== 'picker')) {
      return result
    }

    runtime.cacheTtl = e.cache_ttl

    const to = tierOfModel(e.to_model)
    const estimate = estimateSwitch(e.from_model, e.to_model, e.context_tokens, {
      writeUsd: e.estimated_cache_write_usd,
      ttl: e.cache_ttl,
      isWarm: e.prompt_cache_warm,
      pricing: e.pricing,
    })
    const decision = await read($, decisionAtom)
    const needsOpus = decision !== null && (decision.risk !== undefined || decision.tier === 'opus')
    const conflict =
      decision === null || decision.confidence !== 'high' || to === null
        ? null
        : to === 'fable' && decision.tier !== 'fable'
          ? `la tarea actual («${decision.label}») no es de Fable: cuesta 2.5x Opus y rinde menos en código`
          : (to === 'sonnet' || to === 'haiku') && needsOpus
            ? `la tarea actual («${decision.label}») pide ${MODELS[decision.tier].name}`
            : null
    const isOwn = runtime.ownSwitch !== null && runtime.ownSwitch === to
    const text = switchText(estimate, conflict)

    runtime.ownSwitch = null

    if (isOwn || !runtime.config.isEnforced || (estimate.switchUsd < runtime.config.switchThreshold && conflict === null)) {
      if (estimate.contextTokens > 0) {
        $.ui.toast(text)
      }

      return result
    }

    return { ...result, permissionDecision: 'ask', permissionDecisionReason: text }
  })

  on('classic.PostModelSwitch', async ($, e, next) => {
    const result = await next(e)
    const model = e.requested_model ?? e.to_model

    runtime.mainStepModel = undefined
    runtime.cacheTtl = e.cache_ttl

    const session = await update($, sessionAtom, view => ({
      ...view,
      model,
      modelTier: currentOf(model, view.planMode).tier,
      contextTokens: e.context_tokens,
    }))
    const decision = await read($, decisionAtom)

    if (decision === null) {
      $.ui.status(statusText(null, model))

      return result
    }

    const classification = classify(decision.snippet)
    const current = currentOf(model, session.planMode)
    const refreshed: Decision = {
      ...decision,
      model,
      modelTier: current.tier,
      action:
        classification.kind === 'task' && classification.category.id === decision.category
          ? sessionAction(classification, current, {
              contextTokens: e.context_tokens,
              mechanicalStreak: 0,
              wantsCode: implementIntent(decision.snippet),
              isSmallTask: isSmallTask(decision.snippet),
              ttl: e.cache_ttl,
            })
          : { kind: 'stay', text: `sesión ahora en ${modelName(model)}` },
    }

    await update($, decisionAtom, () => refreshed)
    $.ui.status(statusText(refreshed, model))

    return result
  })

  on('command.run', { command: 'route' }, async ($, e) => {
    const args = e.args.trim()

    if (args === 'matrix') {
      return { text: matrixText() }
    }

    const session = await read($, sessionAtom)

    if (args === '') {
      await $.ui.open({ id: PANE_ID, title: PANE_TITLE })

      return { text: describeDecision(await read($, decisionAtom), session) }
    }

    const { classification } = await classifyPrompt($, args, 0)

    if (classification.kind !== 'task') {
      return {
        text: `model-router: «${args.slice(0, 80)}» no es una tarea que la matriz enrute (${classification.kind === 'trivial' ? 'trivial' : NEUTRAL_REASON_LABEL[classification.reason]}).`,
      }
    }

    const model = session.model === '' ? await $.session.model().catch(() => '') : session.model
    const action = sessionAction(classification, currentOf(model, session.planMode, runtime.mainStepModel), {
      contextTokens: session.contextTokens,
      mechanicalStreak: 0,
      wantsCode: implementIntent(args),
      isSmallTask: isSmallTask(args),
      ...(runtime.cacheTtl === undefined ? {} : { ttl: runtime.cacheTtl }),
    })

    return { text: simulationText(args, classification, action, model) }
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) {
      return next(e)
    }

    const decision = await read($, decisionAtom)
    const signals = await read($, signalsAtom)
    const dismissed = await read($, dismissedAtom)
    const session = await read($, sessionAtom)
    const band = bandModel(decision, signals, dismissed, currentOf(session.model, session.planMode, runtime.mainStepModel).tier)

    if (band === null) {
      return next(e)
    }

    return renderBand(
      $.ui.resolve(e),
      band,
      {
        onSwitch: alias => {
          runtime.ownSwitch = tierOfModel(alias === 'opusplan' ? MODELS.sonnet.id : alias)
          void update($, dismissedAtom, () => band.key)
          void $.command.run({ command: 'model', args: alias }).catch(() => {
            runtime.ownSwitch = null
            $.ui.toast(`model-router: no pude correr /model ${alias}; escríbelo tú.`)
          })
        },
        onMatrix: () => {
          void $.ui.open({ id: PANE_ID, title: PANE_TITLE })
        },
        onDismiss: key => {
          void update($, dismissedAtom, () => key)
        },
      },
      e.props.bodyColumns,
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE_ID }, async ($, e) =>
    renderPane(
      $.ui.resolve(e),
      {
        decision: await read($, decisionAtom),
        session: await read($, sessionAtom),
        spawns: await read($, spawnsAtom),
        ledger: await read($, ledgerAtom),
        calibration: await read($, calibrationAtom),
        signals: await read($, signalsAtom),
      },
      e.props.bodyColumns,
    ),
  )
}
