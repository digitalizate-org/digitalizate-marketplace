import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'

import { classify, isSmallTask, NEUTRAL_REASON_LABEL, type TaskClassification } from '../hooks/classify'
import { CONFIDENCE_LABEL } from '../hooks/labels'
import type { Confidence } from '../types'
import { CATEGORIES, MODELS, TIER_RANK } from '../hooks/matrix'
import {
  type CacheTtl,
  costRatio,
  currentOf,
  estimateSwitch,
  implementIntent,
  kTokens,
  modelName,
  sessionAction,
  switchText,
  tierOfModel,
  turnUsd,
  usd,
} from '../hooks/route'

const PLUGIN_ROOT = resolve(dirname(resolve(process.argv[1] ?? '.')), '..')
const MATRIX_REFERENCE = join(PLUGIN_ROOT, 'skills', 'model-route', 'references', 'matrix.md')
const SUBAGENT_CONTEXT = 15000

type Flags = Record<string, string | true>

function parse(argv: readonly string[]): { words: string[]; flags: Flags } {
  const words: string[] = []
  const flags: Flags = {}

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index] ?? ''

    if (!arg.startsWith('--')) {
      words.push(arg)
      continue
    }

    const name = arg.slice(2)
    const value = argv[index + 1]

    if (value !== undefined && !value.startsWith('--')) {
      flags[name] = value
      index += 1
    } else {
      flags[name] = true
    }
  }

  return { words, flags }
}

function text(flags: Flags, name: string): string | undefined {
  const value = flags[name]

  return typeof value === 'string' ? value : undefined
}

function readInput(source: string | undefined): string {
  if (source === undefined || source === '-') {
    return readFileSync(0, 'utf8')
  }

  return existsSync(source) ? readFileSync(source, 'utf8') : source
}

function describe(classification: TaskClassification): string {
  return classification.risk === undefined
    ? classification.category.label
    : `${classification.category.label} (riesgo: ${classification.risk.label})`
}

function evaluate(words: string[], flags: Flags): number {
  const task = words.join(' ').trim()

  if (task === '') {
    process.stderr.write('uso: route.ts evaluate "<tarea>" [--model <modelo>] [--plan-mode] [--context <tokens>] [--json]\n')

    return 2
  }

  const classification = classify(task)
  const model = text(flags, 'model') ?? 'opusplan'
  const current = currentOf(model, flags['plan-mode'] === true)
  const contextTokens = Number(text(flags, 'context') ?? 0)

  if (classification.kind !== 'task') {
    if (flags.json === true) {
      process.stdout.write(`${JSON.stringify({ kind: classification.kind, reason: classification.kind === 'trivial' ? 'trivial' : classification.reason }, null, 2)}\n`)
    } else {
      const reason = classification.kind === 'trivial' ? 'mensaje trivial' : NEUTRAL_REASON_LABEL[classification.reason]

      process.stdout.write(`Sin ruta: ${reason}. Decide con tu juicio; con el modelo actual (${modelName(model)}) basta.\n`)
    }

    return 0
  }

  const action = sessionAction(classification, current, {
    contextTokens,
    mechanicalStreak: 0,
    wantsCode: implementIntent(task),
    isSmallTask: isSmallTask(task),
  })
  const category = classification.category
  const alternatives = classification.ranked
    .slice(1)
    .map(scored => `${scored.category.label} (${scored.score})`)
    .join(', ')

  if (flags.json === true) {
    process.stdout.write(
      `${JSON.stringify(
        {
          category: category.id,
          label: describe(classification),
          tier: classification.tier,
          model: MODELS[classification.tier].id,
          effort: classification.effort,
          confidence: classification.confidence,
          isStrong: classification.isStrong,
          signals: classification.signals,
          risk: classification.risk?.id ?? null,
          agent: category.agent ?? null,
          why: (classification.risk ?? category).why,
          session: { model, tier: current.tier, planMode: current.planMode },
          action,
          alternatives: classification.ranked.slice(1).map(scored => ({ category: scored.category.id, score: scored.score })),
        },
        null,
        2,
      )}\n`,
    )

    return 0
  }

  process.stdout.write(
    [
      `Tarea: ${describe(classification)} (${category.id}) · confianza ${CONFIDENCE_LABEL[classification.confidence]}${classification.isStrong ? ' · señal fuerte' : ''}`,
      `Modelo: ${MODELS[classification.tier].name} · effort ${classification.effort}`,
      `Señales: ${classification.signals.join(', ') || 'ninguna'}`,
      `Por qué: ${(classification.risk ?? category).why}`,
      `Delegar a: ${category.agent ?? 'sin agente fijo (sesión o general-purpose con model)'}`,
      `Con la sesión en ${modelName(model)}${current.planMode ? ' (plan mode)' : ''}: ${action.text}`,
      `Alternativas: ${alternatives || 'ninguna'}`,
    ].join('\n') + '\n',
  )

  return 0
}

const STEP = /^\s{0,3}(?:[-*+]|\d+[.)])\s+(?:\[[ xX]\]\s+)?(.+)$/
const HEADING = /^#{2,4}\s+(.+)$/

function matches(lines: readonly string[], pattern: RegExp): string[] {
  return lines.map(line => pattern.exec(line)?.[1]?.trim()).filter((item): item is string => item !== undefined && item !== '')
}

function stepsOf(source: string): string[] {
  const lines = source.split(/\r?\n/)
  const items = matches(lines, STEP)

  if (items.length > 0) {
    return items
  }

  const headings = matches(lines, HEADING)

  return headings.length > 0
    ? headings
    : source
        .split(/\n\s*\n/)
        .map(paragraph => paragraph.replace(/\s+/g, ' ').trim())
        .filter(paragraph => paragraph !== '')
}

function split(words: string[]): number {
  const steps = stepsOf(readInput(words[0]))

  if (steps.length === 0) {
    process.stderr.write('uso: route.ts split <archivo.md | -> (pasos como lista, numeración o encabezados)\n')

    return 2
  }

  const rows: string[] = ['| # | Paso | Modelo | Effort | Agente | Confianza |', '|---|---|---|---|---|---|']
  const counts: Record<string, number> = {}
  let hardest = 0

  steps.forEach((step, index) => {
    const classification = classify(step)
    const shown = step.length > 70 ? `${step.slice(0, 67)}...` : step

    if (classification.kind !== 'task') {
      rows.push(`| ${index + 1} | ${shown} | sesión | - | - | sin señales |`)

      return
    }

    const agent = classification.category.agent ?? '-'
    const isResearch = agent === 'fable-researcher'

    counts[agent] = (counts[agent] ?? 0) + 1

    if (!isResearch && classification.confidence !== 'low') {
      hardest = Math.max(hardest, TIER_RANK[classification.tier])
    }

    rows.push(
      `| ${index + 1} | ${shown} | ${MODELS[classification.tier].name} | ${classification.effort} | ${agent} | ${CONFIDENCE_LABEL[classification.confidence]} |`,
    )
  })

  const session = hardest >= TIER_RANK.opus ? 'opusplan (Opus decide, Sonnet ejecuta) o opus si hay riesgo alto' : 'sonnet u opusplan'
  const delegations = Object.entries(counts)
    .filter(([agent]) => agent !== '-')
    .map(([agent, count]) => `${count} a ${agent}`)
    .join(', ')

  process.stdout.write(
    `${rows.join('\n')}\n\nSesión que orquesta: ${session}.\nDelegaciones: ${delegations || 'ninguna'}.\nLos pasos de Sonnet en zonas de riesgo pasan por opus-reviewer antes de merge.\n`,
  )

  return 0
}

function cost(flags: Flags): number {
  const from = text(flags, 'from')
  const to = text(flags, 'to')
  const contextTokens = Number(text(flags, 'context') ?? 0)
  const ttl: CacheTtl = text(flags, 'ttl') === '5m' ? '5m' : '1h'

  if (from === undefined || to === undefined || !Number.isFinite(contextTokens)) {
    process.stderr.write('uso: route.ts cost --from <modelo> --to <modelo> --context <tokens> [--ttl 1h|5m] [--cold]\n')

    return 2
  }

  const estimate = estimateSwitch(from, to, contextTokens, { writeUsd: 0, ttl, isWarm: flags.cold !== true })
  const target = tierOfModel(to)
  const lines = [switchText(estimate, null).replace(/^model-router: /, '')]

  if (target !== null) {
    lines.push(
      `Delegar en vez de cambiar: un sub-agente en ${MODELS[target].name} arranca con ~${kTokens(SUBAGENT_CONTEXT)} de contexto, ≈${usd(turnUsd(target, SUBAGENT_CONTEXT))} por turno, y la sesión conserva su caché.`,
    )
  }

  const source = tierOfModel(from)

  if (source !== null && target !== null && TIER_RANK[target] < TIER_RANK[source]) {
    lines.push(`${MODELS[target].name} cuesta ~${costRatio(source, target, contextTokens)}x menos por turno con este contexto.`)
  }

  process.stdout.write(`${lines.join('\n')}\n`)

  return 0
}

type Finding = { severity: Confidence; text: string; fix: string }

const EXPECTED_AGENTS: Record<string, { model: string; effort: string }> = {
  'sonnet-implementer': { model: MODELS.sonnet.id, effort: 'medium' },
  'opus-reviewer': { model: MODELS.opus.id, effort: 'high' },
  'opus-debugger': { model: MODELS.opus.id, effort: 'xhigh' },
  'fable-researcher': { model: MODELS.fable.id, effort: 'high' },
}

function readJson(path: string): Record<string, unknown> | undefined {
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as Record<string, unknown>
  } catch {
    return undefined
  }
}

function frontmatter(path: string): Record<string, string> {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(readFileSync(path, 'utf8'))?.[1] ?? ''
  const fields: Record<string, string> = {}

  for (const line of block.split(/\r?\n/)) {
    const pair = /^([A-Za-z_-]+):\s*(.*)$/.exec(line)

    if (pair?.[1] !== undefined && pair[2] !== undefined) {
      fields[pair[1]] = pair[2].trim().replace(/^["']|["']$/g, '')
    }
  }

  return fields
}

function agentsIn(dir: string): Map<string, Record<string, string>> {
  const found = new Map<string, Record<string, string>>()

  if (!existsSync(dir)) {
    return found
  }

  for (const name of readdirSync(dir)) {
    if (name.endsWith('.md')) {
      const fields = frontmatter(join(dir, name))

      if (fields.name !== undefined) {
        found.set(fields.name, fields)
      }
    }
  }

  return found
}

function doctor(flags: Flags): number {
  const home = homedir()
  const settingsPath = text(flags, 'settings') ?? join(home, '.claude', 'settings.json')
  const settings = readJson(settingsPath) ?? {}
  const project = { ...(readJson(join(process.cwd(), '.claude', 'settings.json')) ?? {}), ...(readJson(join(process.cwd(), '.claude', 'settings.local.json')) ?? {}) }
  const model = (project.model ?? settings.model) as string | undefined
  const findings: Finding[] = []

  if (model === undefined) {
    findings.push({ severity: 'low', text: 'sin modelo por defecto: Claude Code usa el de tu plan', fix: '"model": "opusplan" en settings.json' })
  } else if (/fable/i.test(model)) {
    findings.push({ severity: 'high', text: `modelo por defecto ${model}: todo corre en Fable (2.5x Opus), también el código normal`, fix: '"model": "opusplan" y /model fable solo para planear' })
  } else if (model === 'opus' || /opus-/.test(model)) {
    findings.push({ severity: 'medium', text: `modelo por defecto ${model}: lo mecánico también corre en Opus (~2x por turno frente a Sonnet)`, fix: '"model": "opusplan" (Opus planea, Sonnet ejecuta), o delega lo mecánico a sonnet-implementer' })
  }

  const claudeMd = join(home, '.claude', 'CLAUDE.md')

  if (existsSync(claudeMd) && /opusplan/.test(readFileSync(claudeMd, 'utf8')) && model !== undefined && model !== 'opusplan') {
    findings.push({ severity: 'low', text: `tu CLAUDE.md describe opusplan como default, pero settings.json usa ${model}`, fix: 'alinea uno de los dos' })
  }

  const modelSettings = (settings.modelSettings ?? {}) as Record<string, { effortLevel?: string }>
  const effortOf = (id: string) => modelSettings[id]?.effortLevel
  const sonnetEffort = effortOf(MODELS.sonnet.id)
  const opusEffort = effortOf(MODELS.opus.id)
  const fableEffort = effortOf(MODELS.fable.id)

  if (sonnetEffort === 'low') {
    findings.push({ severity: 'medium', text: 'Sonnet en low: a veces reporta "listo" sin correr tests ni build', fix: `modelSettings.${MODELS.sonnet.id}.effortLevel = "medium"` })
  } else if (sonnetEffort === 'xhigh' || sonnetEffort === 'max') {
    findings.push({ severity: 'medium', text: `Sonnet en ${sonnetEffort}: turnos más largos y caros en tareas acotadas`, fix: `modelSettings.${MODELS.sonnet.id}.effortLevel = "medium" (la guía)` })
  }

  if (opusEffort === 'low' || opusEffort === 'medium') {
    findings.push({ severity: 'low', text: `Opus en ${opusEffort}: la guía usa high o xhigh para trabajo con juicio`, fix: `modelSettings.${MODELS.opus.id}.effortLevel = "high"` })
  }

  if (fableEffort === 'xhigh' || fableEffort === 'max') {
    findings.push({ severity: 'low', text: `Fable en ${fableEffort}: redacta archivos largos dos veces y amplía alcance`, fix: `modelSettings.${MODELS.fable.id}.effortLevel = "high" (en low sigue siendo muy bueno)` })
  }

  const personal = agentsIn(join(home, '.claude', 'agents'))
  const projectAgents = agentsIn(join(process.cwd(), '.claude', 'agents'))
  const bundled = agentsIn(join(PLUGIN_ROOT, 'agents'))
  const enabled = Object.entries((settings.enabledPlugins ?? {}) as Record<string, boolean>).some(
    ([id, isOn]) => isOn && id.startsWith('digitalizate-model-router@'),
  )

  for (const [name, expected] of Object.entries(EXPECTED_AGENTS)) {
    const own = projectAgents.get(name) ?? personal.get(name)
    const agent = own ?? (enabled ? bundled.get(name) : undefined)

    if (agent === undefined) {
      findings.push({ severity: 'medium', text: `falta el agente ${name}: las recomendaciones de delegación lo nombran`, fix: 'instala el plugin (trae los cuatro agentes) o crea el archivo en ~/.claude/agents' })
      continue
    }

    if (own !== undefined && enabled && bundled.has(name)) {
      findings.push({ severity: 'low', text: `${name} existe en tus agentes y en el plugin`, fix: `borra tu copia de ${name} y usa la del plugin` })
    }

    if (agent.model !== expected.model) {
      findings.push({ severity: 'medium', text: `${name} corre en ${agent.model ?? 'el modelo de la sesión'}, la guía lo fija en ${modelName(expected.model)}`, fix: `model: ${expected.model}` })
    }

    if (agent.effort !== undefined && agent.effort !== expected.effort) {
      findings.push({ severity: 'low', text: `${name} con effort ${agent.effort}; la guía usa ${expected.effort}`, fix: `effort: ${expected.effort}` })
    }

    if (name === 'opus-reviewer' && (agent.tools === undefined || /\b(Edit|Write|NotebookEdit)\b/.test(agent.tools))) {
      findings.push({ severity: 'high', text: 'opus-reviewer puede editar: pierde su papel de revisor de solo lectura', fix: 'tools: Read, Grep, Glob, Bash' })
    }
  }

  const hooks = JSON.stringify(settings.hooks ?? {})

  if (hooks.includes('model-router.sh') && enabled) {
    findings.push({ severity: 'medium', text: 'el hook ~/.claude/hooks/model-router.sh y el mod inyectan la misma rúbrica', fix: 'quita model-router.sh de SessionStart y UserPromptSubmit en settings.json' })
  }

  if (!enabled) {
    findings.push({ severity: 'low', text: 'el mod del plugin no está activo: sin juicio de delegaciones ni gate de verificación en Claude Code', fix: '/plugin install digitalizate-model-router@digitalizate' })
  }

  const order: Record<Confidence, number> = { high: 0, medium: 1, low: 2 }

  findings.sort((a, b) => order[a.severity] - order[b.severity])
  process.stdout.write(
    findings.length === 0
      ? 'Setup alineado con la guía.\n'
      : `${findings.map(finding => `[${CONFIDENCE_LABEL[finding.severity]}] ${finding.text}\n        → ${finding.fix}`).join('\n')}\n`,
  )

  return 0
}

function matrixMarkdown(): string {
  const rows = CATEGORIES.map(
    category =>
      `| \`${category.id}\` | ${category.label} | ${MODELS[category.tier].name} | ${category.effortLabel} | ${category.agent ?? '-'} | ${category.why} |`,
  )

  return [
    '# Matriz de modelos',
    '',
    'Generado por `scripts/route.ts matrix --md` desde `hooks/matrix.ts`. No lo edites a mano: cambia la matriz y regenera.',
    '',
    '| ID | Tarea | Modelo | Effort | Delegar a | Por qué |',
    '|---|---|---|---|---|---|',
    ...rows,
    '',
    '## Cómo decide',
    '',
    '- Cada categoría tiene señales por concepto (no palabras sueltas). Cada señal suma su peso una vez; una señal de peso 3 es fuerte.',
    '- Confianza alta: puntaje 4 o más y 2 por encima de la mejor categoría de otro modelo. Media: puntaje 2 o más y 1 por encima. Si no, baja.',
    '- Con confianza baja no se recomienda nada: decide el modelo principal con su juicio.',
    '- Riesgo: si una categoría de riesgo (seguridad, migración riesgosa, bug intermitente, arquitectura) trae una señal fuerte y queda a un punto o menos de la ganadora, la tarea sube a su modelo y effort.',
    '- Empates: primero la categoría de riesgo, después el modelo más barato (Sonnet por defecto, Fable nunca por empate).',
    '- Una pregunta sin verbo de tarea y sin señal fuerte no se enruta. Un mensaje trivial tampoco.',
    '',
    '## Ruta según la sesión',
    '',
    '- Mismo modelo: sigue.',
    '- La tarea pide un modelo más barato: delega al agente de la categoría; cambia la sesión solo tras 3 tareas mecánicas seguidas y si el costo de reescribir la caché se recupera en 8 turnos o menos. Una tarea chica (un typo, una línea) se hace sin delegar.',
    '- La tarea pide Opus desde Sonnet: bug difícil → opus-debugger; revisar → opus-reviewer (nunca para editar); diseño → plan mode con opusplan o /model opusplan; riesgo → /model opus. Cambiar exige confianza alta, o media con riesgo y señal fuerte.',
    '- La tarea pide Fable: research, informe o codebase heredado → fable-researcher; plan grande, problema abierto, algoritmo o corrida larga → /model fable antes de plan mode, o fable-researcher si la sesión ya carga más de 60K de contexto.',
    '- Código normal en Fable: /model opusplan.',
    '',
  ].join('\n')
}

function matrix(flags: Flags): number {
  if (flags.md === true) {
    process.stdout.write(matrixMarkdown())

    return 0
  }

  for (const category of CATEGORIES) {
    process.stdout.write(`${category.id.padEnd(22)} ${MODELS[category.tier].name.padEnd(10)} ${category.effortLabel.padEnd(13)} ${category.label}\n`)
  }

  return 0
}

function check(): number {
  const current = existsSync(MATRIX_REFERENCE) ? readFileSync(MATRIX_REFERENCE, 'utf8') : ''

  if (current === matrixMarkdown()) {
    process.stdout.write('references/matrix.md al día.\n')

    return 0
  }

  process.stderr.write('references/matrix.md desactualizado: corre `npx tsx scripts/route.ts matrix --md > skills/model-route/references/matrix.md`\n')

  return 1
}

function main(argv: readonly string[]): number {
  const [command, ...rest] = argv
  const { words, flags } = parse(rest)

  switch (command) {
    case 'evaluate':
      return evaluate(words, flags)
    case 'split':
      return split(words)
    case 'cost':
      return cost(flags)
    case 'doctor':
      return doctor(flags)
    case 'matrix':
      return matrix(flags)
    case 'check':
      return check()
    default:
      process.stderr.write('comandos: evaluate | split | cost | doctor | matrix [--md] | check\n')

      return 2
  }
}

process.exitCode = main(process.argv.slice(2))
