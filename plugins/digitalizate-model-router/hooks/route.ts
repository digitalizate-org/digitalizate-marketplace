import type { ModelTier, RouteAction, SpawnVerdict, Tier } from '../types'
import { classify, describeTask, normalize, type TaskClassification } from './classify'
import { CACHE_WRITE_MULTIPLIER, type Category, INHERITING_AGENTS, MODELS, RESEARCH_CATEGORIES, TIER_RANK } from './matrix'

const TURN_NEW_INPUT = 6000
const TURN_OUTPUT = 4000
const SUBAGENT_CONTEXT = 15000
const FABLE_SWITCH_CONTEXT_LIMIT = 60000
const MAX_BREAK_EVEN_TURNS = 8
const SHORT_TTL_MULTIPLIER = 1.25

export type CacheTtl = '5m' | '1h'

export type Current = {
  model: string
  tier: ModelTier | null
  isOpusplan: boolean
  planMode: boolean
}

export type ActionContext = {
  contextTokens: number
  mechanicalStreak: number
  wantsCode: boolean
  isSmallTask: boolean
  ttl?: CacheTtl
}

export type SwitchEstimate = {
  from: ModelTier | null
  to: ModelTier | null
  contextTokens: number
  switchUsd: number
  perTurnDelta: number
  breakEvenTurns: number | null
  isCacheCold: boolean
}

export type CacheFacts = {
  writeUsd: number
  ttl: CacheTtl
  isWarm: boolean
  pricing?: 'configured' | 'catalog' | 'default'
}

export function tierOfModel(model: string | null | undefined): ModelTier | null {
  const name = (model ?? '').toLowerCase()

  if (name.includes('fable') || name.includes('mythos')) {
    return 'fable'
  }

  if (name.includes('opus')) {
    return 'opus'
  }

  if (name.includes('sonnet')) {
    return 'sonnet'
  }

  return name.includes('haiku') ? 'haiku' : null
}

export function isOpusplan(model: string): boolean {
  return /opusplan/i.test(model)
}

export function currentOf(sessionModel: string, planMode: boolean, stepModel?: string): Current {
  const opusplan = isOpusplan(sessionModel)
  const tier = opusplan ? (planMode ? 'opus' : 'sonnet') : (tierOfModel(sessionModel) ?? tierOfModel(stepModel))

  return { model: sessionModel, tier, isOpusplan: opusplan, planMode }
}

export function modelName(model: string): string {
  if (isOpusplan(model)) {
    return 'opusplan'
  }

  const tier = tierOfModel(model)

  return tier === null ? model : MODELS[tier].name
}

export function resolveAlias(model: string): string {
  const tier = tierOfModel(model)

  return tier !== null && model === MODELS[tier].alias ? MODELS[tier].id : model
}

export function agentKey(agent: string): string {
  return agent.replace(/^[^:]+:/, '')
}

export function writeMultiplier(ttl: CacheTtl | undefined): number {
  return ttl === '5m' ? SHORT_TTL_MULTIPLIER : CACHE_WRITE_MULTIPLIER
}

export function usd(amount: number): string {
  return amount < 0.01 ? '<$0.01' : `$${amount.toFixed(2)}`
}

export function kTokens(tokens: number): string {
  return tokens >= 1000 ? `${Math.round(tokens / 1000)}K` : `${tokens}`
}

export type UsageLike = {
  model: string
  input_tokens: number
  output_tokens: number
  cache_read_input_tokens: number
  cache_creation_input_tokens: number
}

export function usageUsd(usage: UsageLike, ttl?: CacheTtl): number {
  const tier = tierOfModel(usage.model)

  if (tier === null) {
    return 0
  }

  const price = MODELS[tier]

  return (
    usage.input_tokens * price.input +
    usage.output_tokens * price.output +
    usage.cache_read_input_tokens * price.cacheRead +
    usage.cache_creation_input_tokens * price.input * writeMultiplier(ttl)
  ) / 1e6
}

export function turnUsd(tier: ModelTier, contextTokens: number, multiplier = CACHE_WRITE_MULTIPLIER): number {
  const price = MODELS[tier]

  return (contextTokens * price.cacheRead + TURN_NEW_INPUT * price.input * multiplier + TURN_OUTPUT * price.output) / 1e6
}

export function costRatio(from: ModelTier, to: ModelTier, contextTokens = SUBAGENT_CONTEXT): number {
  return Math.max(1, Math.round((turnUsd(from, contextTokens) / turnUsd(to, contextTokens)) * 10) / 10)
}

export function estimateSwitch(fromModel: string, toModel: string, contextTokens: number, cache?: CacheFacts): SwitchEstimate {
  const from = tierOfModel(fromModel)
  const to = tierOfModel(toModel)
  const isCacheCold = cache?.isWarm === false

  if (to === null) {
    return { from, to, contextTokens, switchUsd: cache?.writeUsd ?? 0, perTurnDelta: 0, breakEvenTurns: null, isCacheCold }
  }

  const multiplier = writeMultiplier(cache?.ttl)
  const hasEngineCost = cache !== undefined && cache.writeUsd > 0
  const writeTo = hasEngineCost ? cache.writeUsd : (contextTokens * MODELS[to].input * multiplier) / 1e6
  const canCompare = !hasEngineCost || cache.pricing === undefined || cache.pricing === 'catalog'
  const writeFrom = from === null || !canCompare ? 0 : (contextTokens * MODELS[from].input * multiplier) / 1e6
  const switchUsd = isCacheCold ? Math.max(0, writeTo - writeFrom) : writeTo
  const perTurnDelta = from === null ? 0 : turnUsd(to, contextTokens, multiplier) - turnUsd(from, contextTokens, multiplier)
  const breakEvenTurns = perTurnDelta < 0 ? Math.ceil(switchUsd / -perTurnDelta) : null

  return { from, to, contextTokens, switchUsd, perTurnDelta, breakEvenTurns, isCacheCold }
}

export function switchText(estimate: SwitchEstimate, conflict: string | null): string {
  const target = estimate.to === null ? 'otro modelo' : MODELS[estimate.to].name
  const parts = [
    estimate.isCacheCold
      ? `model-router: la caché actual ya expiró, así que pasar a ${target} con ${kTokens(estimate.contextTokens)} de contexto cuesta ≈${usd(estimate.switchUsd)} más que quedarse`
      : `model-router: cambiar a ${target} con ${kTokens(estimate.contextTokens)} de contexto reescribe la caché (≈${usd(estimate.switchUsd)}; volver también la reescribe)`,
  ]

  if (estimate.breakEvenTurns === 0) {
    parts.push('ahorra desde el primer turno')
  } else if (estimate.breakEvenTurns !== null) {
    parts.push(`se recupera en ~${estimate.breakEvenTurns} turnos`)
  } else if (estimate.perTurnDelta > 0) {
    parts.push(`cada turno cuesta ≈${usd(estimate.perTurnDelta)} más`)
  }

  if (conflict !== null) {
    parts.push(conflict)
  }

  if (estimate.to === 'fable' && estimate.contextTokens > FABLE_SWITCH_CONTEXT_LIMIT) {
    parts.push('alternativa: delega a fable-researcher con contexto limpio')
  }

  return `${parts.map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1))).join('. ')}.`
}

function stay(text: string): RouteAction {
  return { kind: 'stay', text }
}

function delegate(agent: string, why: string): RouteAction {
  return { kind: 'delegate', agent, text: `delega a ${agent}: ${why}` }
}

function switchTo(alias: string, current: Current, context: ActionContext, why: string): RouteAction {
  const estimate = estimateSwitch(current.model, alias === 'opusplan' ? MODELS.sonnet.id : alias, context.contextTokens, {
    writeUsd: 0,
    ttl: context.ttl ?? '1h',
    isWarm: true,
  })
  const cost =
    context.contextTokens > 0
      ? ` (reescribe ${kTokens(context.contextTokens)} de caché ≈${usd(estimate.switchUsd)}${estimate.breakEvenTurns === null ? '' : `, se recupera en ~${estimate.breakEvenTurns} turnos`})`
      : ''

  return {
    kind: 'switch',
    alias,
    text: `recomiendo /model ${alias} porque ${why}${cost}`,
    switchUsd: estimate.switchUsd,
    ...(estimate.breakEvenTurns === null ? {} : { breakEvenTurns: estimate.breakEvenTurns }),
  }
}

function lower(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1).replace(/\.$/, '')
}

function isRisky(decided: TaskClassification): boolean {
  return decided.category.isRisk === true || decided.risk !== undefined
}

function fableAction(decided: TaskClassification, current: Current, context: ActionContext, isStrong: boolean): RouteAction {
  const category = decided.category

  if (current.tier === 'fable') {
    return stay('Fable 5.1 encaja')
  }

  if (!isStrong) {
    return stay('podría ser trabajo de Fable; sin evidencia fuerte, acota primero en el modelo actual')
  }

  if (category.agent === 'fable-researcher' && category.id !== 'large-plan') {
    return delegate('fable-researcher', 'investiga en Fable con contexto limpio y devuelve el plan; la sesión sigue en su modelo')
  }

  if (context.contextTokens > FABLE_SWITCH_CONTEXT_LIMIT) {
    const estimate = estimateSwitch(current.model, MODELS.fable.id, context.contextTokens)

    return delegate(
      'fable-researcher',
      `cambiar a Fable reescribiría ${kTokens(context.contextTokens)} de caché (≈${usd(estimate.switchUsd)}); que planee con contexto limpio`,
    )
  }

  return switchTo('fable', current, context, `${lower(category.label)}: /model fable → plan mode → aceptar → /model opusplan`)
}

function opusAgentFor(category: Category, context: ActionContext): string | undefined {
  if (category.agent === 'opus-debugger') {
    return category.agent
  }

  return category.agent === 'opus-reviewer' && !context.wantsCode ? category.agent : undefined
}

export function sessionAction(decided: TaskClassification, current: Current, context: ActionContext): RouteAction {
  const category = decided.category
  const isStrong = decided.confidence === 'high' || (decided.confidence === 'medium' && isRisky(decided) && decided.isStrong)

  if (decided.confidence === 'low') {
    return stay('lectura débil de la matriz: decide con tu juicio')
  }

  if (current.tier === null) {
    return { kind: 'none', text: 'no sé en qué modelo corre la sesión' }
  }

  if (decided.tier === 'fable') {
    return fableAction(decided, current, context, isStrong)
  }

  const opusAgent = opusAgentFor(category, context)

  if (current.isOpusplan) {
    if (decided.tier === 'sonnet') {
      return stay(current.planMode ? 'opusplan: Sonnet ejecuta al salir de plan mode' : 'opusplan: Sonnet ejecuta')
    }

    if (current.planMode) {
      return stay('Opus 5.5 planea en plan mode')
    }

    if (opusAgent !== undefined) {
      return delegate(opusAgent, lower(category.why))
    }

    if (category.id === 'vision') {
      return switchTo('opus', current, context, 'la imagen está en el contexto principal y Opus la lee mucho mejor')
    }

    return {
      kind: 'plan',
      text:
        isRisky(decided) && decided.isStrong
          ? 'Shift+Tab ×2: que Opus 5.5 planee; con este riesgo, /model opus también para ejecutar'
          : 'Shift+Tab ×2: que Opus 5.5 planee y Sonnet ejecute el plan',
    }
  }

  if (current.tier === decided.tier) {
    return stay(`${MODELS[decided.tier].name} encaja`)
  }

  if (TIER_RANK[current.tier] > TIER_RANK[decided.tier]) {
    if (decided.tier === 'sonnet') {
      if (context.isSmallTask) {
        return stay('tarea chica: delegarla cuesta más que hacerla aquí')
      }

      const estimate = estimateSwitch(current.model, MODELS.sonnet.id, context.contextTokens, {
        writeUsd: 0,
        ttl: context.ttl ?? '1h',
        isWarm: true,
      })

      if (
        isStrong &&
        context.mechanicalStreak >= 3 &&
        estimate.breakEvenTurns !== null &&
        estimate.breakEvenTurns <= MAX_BREAK_EVEN_TURNS
      ) {
        return switchTo('opusplan', current, context, `llevas ${context.mechanicalStreak} tareas mecánicas seguidas`)
      }

      return delegate(
        category.agent ?? 'sonnet-implementer',
        `tarea mecánica; Sonnet cuesta ~${costRatio(current.tier, 'sonnet')}x menos por turno y no toca tu caché`,
      )
    }

    return isStrong
      ? switchTo('opusplan', current, context, 'Fable cuesta 2.5x Opus y rinde menos en código normal')
      : stay('Fable sirve, pero es caro para código normal; considera /model opusplan')
  }

  if (decided.tier === 'sonnet') {
    return isStrong
      ? switchTo('sonnet', current, context, 'Haiku no alcanza para escribir código con criterio; Sonnet 5.5 sí')
      : stay('Sonnet 5.5 encajaría mejor que Haiku; sin evidencia fuerte no recomiendo cambiar')
  }

  if (opusAgent !== undefined) {
    return delegate(opusAgent, lower(category.why))
  }

  if (!isStrong) {
    return stay(`${MODELS[decided.tier].name} encajaría mejor; sin evidencia fuerte no recomiendo cambiar`)
  }

  return isRisky(decided)
    ? switchTo('opus', current, context, lower((decided.risk ?? category).why))
    : switchTo('opusplan', current, context, 'hay decisiones de diseño: Opus planea (Shift+Tab ×2) y Sonnet ejecuta')
}

const CODE_EDIT_START = /^(?:por favor,? |please,? )?(implementa\w*|implement\w*|arregla\w*|corrige|corregir|fix(es|ed)?|edita\w*|edit|refactoriza\w*|refactor\w*|parchea\w*|patch|aplica\w* (el |los |este |estos )?(fix|parche|cambios|diff)|apply (the |this |these )?(fix|patch|changes|diff))\b/
const READ_ONLY_CUE = /\b(solo lectura|read[- ]only|sin (editar|modificar)( nada| archivos| codigo)?|no (edites|modifiques|toques) (nada|ningun archivo|ningun codigo|el codigo|codigo)|no (edites|modifiques) archivos(?=[.;,]|$)|no (hagas|apliques) cambios|no implementes|do not (edit|modify|change|write|touch) (any |the )?(files?|code|anything)|don'?t (edit|modify|change|write|touch) (any |the )?(files?|code|anything)|reporta (los )?hallazgos|report (the |your )?findings)\b/

export function isReadOnlyBrief(text: string): boolean {
  return READ_ONLY_CUE.test(normalize(text))
}

export function implementIntent(text: string): boolean {
  if (READ_ONLY_CUE.test(normalize(text))) {
    return false
  }

  return text
    .split(/\n+|[.!?:;]\s+/)
    .map(normalize)
    .filter(sentence => sentence !== '')
    .slice(0, 4)
    .some(sentence => CODE_EDIT_START.test(sentence))
}

export type SpawnFacts = {
  agent: string
  description: string
  prompt: string
  model?: string
  parentModel: string
  isFork: boolean
  isTeammate: boolean
  isWorkflow: boolean
}

export type SpawnPolicy = {
  agentModels: Readonly<Record<string, string>>
  isUserPinned: boolean
  isEnforced: boolean
  rejectedThisTurn?: ReadonlySet<string>
}

export type SpawnPlan = {
  verdict: SpawnVerdict
  model?: string
  from: string
  to: string
  reason: string
  category?: string
  rejectionKey?: string
}

function suggestionFor(category: Category, risk: Category | undefined): string {
  const id = (risk ?? category).id

  if (id === 'intermittent-bug') {
    return 'opus-debugger (Opus 5.5 xhigh) busca la causa raíz'
  }

  if (id === 'security') {
    return 'opus-reviewer para revisar, o general-purpose con model "opus" para implementar'
  }

  if (id === 'architecture-refactor' || id === 'risky-migration') {
    return 'general-purpose con model "opus", o decide el diseño en la sesión y delega solo pasos mecánicos ya definidos'
  }

  return 'general-purpose con model "opus"'
}

export function judgeSpawn(facts: SpawnFacts, policy: SpawnPolicy): SpawnPlan {
  const pass = (from: string, reason: string, category?: string): SpawnPlan => ({
    verdict: 'pass',
    from,
    to: from,
    reason,
    ...(category === undefined ? {} : { category }),
  })

  if (facts.isFork) {
    return pass(facts.parentModel, 'fork: hereda el modelo del padre')
  }

  if (facts.isWorkflow) {
    return pass(facts.model ?? facts.parentModel, 'agente de workflow: orquestación explícita')
  }

  if (facts.isTeammate) {
    return pass(facts.model ?? facts.parentModel, 'teammate')
  }

  const agent = agentKey(facts.agent)
  const fixed = policy.agentModels[facts.agent] ?? policy.agentModels[agent]
  const inherits = INHERITING_AGENTS.has(agent) || fixed === 'inherit'
  const isExplicit = facts.model !== undefined
  const effective =
    facts.model !== undefined
      ? resolveAlias(facts.model)
      : fixed !== undefined && fixed !== 'inherit'
        ? resolveAlias(fixed)
        : inherits
          ? facts.parentModel
          : undefined

  if (effective === undefined) {
    return pass('propio', 'agente con modelo propio que el mod no conoce')
  }

  if (policy.isUserPinned) {
    return pass(effective, 'el usuario fijó modelo o agente en su prompt')
  }

  const effectiveTier = tierOfModel(effective)

  if (effectiveTier === null) {
    return pass(effective, 'modelo fuera de la matriz')
  }

  const brief = `${facts.description}\n${facts.prompt}`
  const wantsCode = implementIntent(brief)
  const isReadOnly = isReadOnlyBrief(brief)

  const reject = (reason: string, categoryId: string): SpawnPlan => {
    const rejectionKey = `${agent}:${categoryId}`

    if (!policy.isEnforced || policy.rejectedThisTurn?.has(rejectionKey) === true) {
      return {
        verdict: 'warn',
        from: effective,
        to: effective,
        reason: policy.isEnforced ? `${reason} (ya lo rechacé una vez en este turno: dejo pasar)` : reason,
        category: categoryId,
      }
    }

    return { verdict: 'reject', from: effective, to: effective, reason, category: categoryId, rejectionKey }
  }

  if (agent === 'opus-reviewer' && wantsCode) {
    return reject('opus-reviewer es solo lectura y no edita. Para implementar: sonnet-implementer (mecánico) u opus-debugger (bug difícil)', 'implement')
  }

  if (agent === 'fable-researcher' && wantsCode) {
    return reject('fable-researcher no implementa: que devuelva el plan y sonnet-implementer lo ejecute', 'implement')
  }

  const classification = classify(brief)

  if (classification.kind !== 'task') {
    return pass(effective, 'el brief no trae señales claras de la matriz')
  }

  const category = classification.category
  const need: Tier = classification.tier
  const risky = isRisky(classification)
  const label = describeTask(classification)

  const rewrite = (tier: Tier, reason: string): SpawnPlan =>
    policy.isEnforced
      ? { verdict: 'rewrite', model: MODELS[tier].alias, from: effective, to: MODELS[tier].id, reason, category: category.id }
      : { verdict: 'warn', from: effective, to: effective, reason: `${reason} (modo consejo: no lo cambio)`, category: category.id }

  if (agent === 'fable-researcher' && need === 'sonnet' && classification.confidence === 'high' && !risky) {
    return reject(`«${label}» es mecánico: Fable cuesta ~${costRatio('fable', 'sonnet')}x Sonnet por turno sin aportar. Usa sonnet-implementer`, category.id)
  }

  if (
    agent === 'fable-researcher' &&
    need === 'opus' &&
    classification.confidence === 'high' &&
    !RESEARCH_CATEGORIES.has(category.id) &&
    !isExplicit
  ) {
    return rewrite('opus', `«${label}» no es research abierto: Opus 5.5 basta y cuesta ~2.5x menos`)
  }

  if (
    agent === 'sonnet-implementer' &&
    effectiveTier === 'sonnet' &&
    need !== 'sonnet' &&
    risky &&
    classification.isStrong &&
    classification.confidence !== 'low'
  ) {
    return reject(`«${label}» no es para Sonnet: ${suggestionFor(category, classification.risk)}`, category.id)
  }

  if (agent === 'opus-debugger' && need === 'sonnet' && classification.confidence === 'high' && category.id !== 'bug-repro') {
    return reject(`«${label}» es mecánico: opus-debugger es para bugs difíciles. Usa sonnet-implementer`, category.id)
  }

  if (!inherits && !isExplicit) {
    return pass(effective, `modelo fijo del agente para «${label}»`, category.id)
  }

  const gap = TIER_RANK[effectiveTier] - TIER_RANK[need]

  if (gap > 0) {
    if (need === 'sonnet' && category.isMechanical === true && !risky && classification.confidence === 'high') {
      return rewrite('sonnet', `«${label}» es mecánico: Sonnet 5.5 basta (~${costRatio(effectiveTier, 'sonnet')}x menos por turno)`)
    }

    if (need === 'opus' && effectiveTier === 'fable' && classification.confidence !== 'low' && !RESEARCH_CATEGORIES.has(category.id)) {
      return rewrite('opus', `«${label}»: Fable no aporta en código normal; Opus 5.5 puntúa más y cuesta ~2.5x menos`)
    }

    return pass(effective, `sobra modelo para «${label}», pero sin evidencia fuerte no lo bajo`, category.id)
  }

  if (gap < 0 && classification.confidence !== 'low') {
    if (need === 'fable') {
      return {
        verdict: 'warn',
        from: effective,
        to: effective,
        reason: `«${label}» encaja en fable-researcher; no escalo a Fable sin pedirlo (2.5x Opus)`,
        category: category.id,
      }
    }

    if (agent === 'Plan') {
      return rewrite('opus', 'planear exige juicio: Opus 5.5')
    }

    if (!isReadOnly && (risky ? classification.isStrong : classification.confidence === 'high')) {
      return rewrite('opus', `«${label}»: ${lower((classification.risk ?? category).why)}; Sonnet no basta`)
    }
  }

  return pass(effective, `encaja con «${label}»`, category.id)
}
