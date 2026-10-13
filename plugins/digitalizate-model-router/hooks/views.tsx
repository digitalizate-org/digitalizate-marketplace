import type { Elements, RenderChildren } from 'claude-code'

import type { ActionKind, Calibration, Decision, Health, Ledger, ModelTier, PlanStats, RouteAction, SessionView, SpawnRecord } from '../types'
import type { TaskClassification } from './classify'
import { describeTask } from './classify'
import { CATEGORIES, MODELS } from './matrix'
import { planStatsLine } from './plan'
import { CONFIDENCE_LABEL, SOURCE_LABEL, VERDICT_LABEL } from './labels'
import { kTokens, modelName, usd } from './route'

export { CONFIDENCE_LABEL, SOURCE_LABEL, VERDICT_LABEL }

export type Kit = Pick<Elements['mobile'], 'Box' | 'Text' | 'Button'>

export const RUBRIC_ID = 'digitalizate-model-router:rubric'

const MARK: Record<ActionKind, string> = { stay: '✓', delegate: '⇢', switch: '↻', plan: '◇', none: '·' }

const VERIFY_RULE =
  'Verificación: nunca reportes "listo" sin correr tests, build o el comando cambiado y leer su resultado. Si no hay forma de verificar, dilo explícitamente.'

const BY_TIER: Record<ModelTier, string> = {
  sonnet:
    'Corres en Sonnet 5.5. ' +
    VERIFY_RULE +
    ' El mod bloquea una vez el cierre de un turno que editó código sin verificar. Si das vueltas o parchas síntomas, para y escala: opus-debugger o recomienda /model opus.',
  opus:
    'Corres en Opus 5.5: no gastes Opus en trabajo mecánico largo, delégalo a sonnet-implementer. Para planes de rutina no propongas Fable (~2.5x la cuota por plan).',
  fable:
    'Corres en Fable 5.1 (2.5x Opus y menos preciso en código normal): planea, investiga y delega la implementación a sonnet-implementer; no amplíes alcance ni reescribas archivos largos dos veces. Con el plan aceptado, recomienda /model opusplan.',
  haiku: 'Corres en Haiku 5.5: para cualquier cambio de código no trivial recomienda /model sonnet u opusplan.',
}

export function rubricFor(tier: ModelTier | null, hasAgentTool: boolean): string | null {
  if (!hasAgentTool) {
    return tier === 'sonnet' ? VERIFY_RULE : null
  }

  return [
    '# Enrutador de modelos (mod model-router)',
    'Matriz: Sonnet 5.5 (medium) para lo acotado y verificable; Opus 5.5 (high/xhigh) cuando el cambio es estructural, riesgoso o Sonnet titubea; Fable 5.1 (high) solo para planes grandes, problemas abiertos, research profundo o corridas de horas. Mide costo por tarea terminada, no por token.',
    'El mod clasifica cada prompt y te deja su lectura como contexto ("model-router: ..."). Es una heurística: si tu juicio difiere, dilo y explica por qué.',
    'Con el primer mensaje de trabajo, y cuando cambie el tipo de tarea, abre con una línea "Plan de modelos: ..." (sigo en <modelo> / delego <subtarea> a <agente> / recomiendo /model <alias> porque <razón>). Omítela en mensajes triviales. Si declaras «delego», llama a Agent en ese mismo turno; no hagas tú la subtarea. Si recomiendas /model, sigue trabajando en el modelo actual sin esperar el cambio. Alias de /model: sonnet, opus, fable, opusplan.',
    'Delegación: mecánico → sonnet-implementer; bug difícil → opus-debugger; review o seguridad con contexto fresco → opus-reviewer (solo lectura); research o plan grande → fable-researcher (no implementa). No uses general-purpose heredando Opus o Fable para trabajo mecánico. El mod revisa cada Agent: puede fijar el modelo o rechazar la delegación nombrando el agente correcto; si la rechaza, re-despacha.',
    'Cambiar el modelo de la sesión reescribe toda la caché y descarta el razonamiento previo; delegar no. Prefiere delegar salvo que toda la sesión deba correr en otro modelo.',
    tier === null ? '' : BY_TIER[tier],
  ]
    .filter(line => line !== '')
    .join('\n')
}

function shortLabel(label: string, room = 30): string {
  return label.length > room ? `${label.slice(0, room - 1)}…` : label
}

export function taskLabel(classification: TaskClassification): string {
  return describeTask(classification)
}

export function contextLine(decision: Decision, flags: { isFirst: boolean; changed: boolean }): string | null {
  const isActionable = decision.action.kind !== 'stay' && decision.action.kind !== 'none'

  if (!flags.isFirst && !flags.changed && !isActionable) {
    return null
  }

  const parts = [
    `model-router (lectura de la matriz, no una orden): tarea ≈ «${decision.label}» → ${MODELS[decision.tier].name} · ${decision.effort}`,
    `confianza ${CONFIDENCE_LABEL[decision.confidence]}${decision.signals.length > 0 ? ` (señales: ${decision.signals.join(', ')})` : ''}`,
    `sesión: ${modelName(decision.model)}${decision.planMode ? ' en plan mode' : ''}`,
    `sugerencia: ${decision.action.text}`,
  ]
  const ask = flags.isFirst || flags.changed ? ' Abre con la línea «Plan de modelos: …» (sigue la sugerencia o di por qué no).' : ''

  return `${parts.join('. ')}.${ask}`
}

export function describeAction(action: RouteAction): string {
  return `${MARK[action.kind]} ${action.text}`
}

export function describeDecision(decision: Decision | null, session: SessionView, health: Health, plans: PlanStats): string {
  if (decision === null) {
    return `model-router: sin decisión todavía. Sesión en ${modelName(session.model)}. /route <texto> clasifica una tarea; /route matrix muestra la matriz.\n${planStatsLine(plans)}\n${healthLine(health)}`
  }

  const category = CATEGORIES.find(candidate => candidate.id === decision.category)

  return [
    `Tarea: «${decision.label}» → ${MODELS[decision.tier].name} · ${decision.effort} (confianza ${CONFIDENCE_LABEL[decision.confidence]}, ${SOURCE_LABEL[decision.source]})`,
    `Señales: ${decision.signals.join(', ') || 'ninguna'}`,
    `Por qué: ${category?.why ?? '-'}`,
    `Sesión: ${modelName(decision.model)}${decision.planMode ? ' en plan mode' : ''} · contexto ${kTokens(session.contextTokens)}`,
    `Acción: ${describeAction(decision.action)}`,
    `Costo de esta tarea hasta ahora: ≈${usd(decision.usd)}`,
    planStatsLine(plans),
    healthLine(health),
  ].join('\n')
}

export function simulationText(text: string, classification: TaskClassification, action: RouteAction, sessionModel: string): string {
  return [
    `model-router (simulación): «${text.length > 80 ? `${text.slice(0, 77)}...` : text}»`,
    `→ ${taskLabel(classification)} · ${MODELS[classification.tier].name} · ${classification.effort} (confianza ${CONFIDENCE_LABEL[classification.confidence]})`,
    `Señales: ${classification.signals.join(', ') || 'ninguna'}`,
    `Con la sesión en ${modelName(sessionModel)}: ${describeAction(action)}`,
  ].join('\n')
}

export function matrixText(): string {
  const rows = CATEGORIES.map(
    category => `| ${category.label} | ${MODELS[category.tier].name} | ${category.effortLabel} | ${category.agent ?? '-'} | ${category.why} |`,
  )

  return ['| Tarea | Modelo | Effort | Delegar a | Por qué |', '|---|---|---|---|---|', ...rows].join('\n')
}

export type BandModel = {
  key: string
  tone: 'warning' | 'suggestion'
  title: string
  detail: string
  switchAlias?: string
}

export function bandModel(decision: Decision | null, signals: readonly string[], dismissed: string, sessionTier: ModelTier | null): BandModel | null {
  if (signals.length > 0) {
    const key = `signal:${signals.join('|')}`

    if (dismissed !== key) {
      return {
        key,
        tone: 'warning',
        title: `Señal para escalar: ${signals[signals.length - 1] ?? ''}`,
        detail:
          sessionTier === 'sonnet'
            ? 'Sonnet titubea: escala la sesión a Opus o delega a opus-debugger con contexto fresco.'
            : 'Replantea con hipótesis explícitas; opus-debugger con contexto fresco ayuda.',
        ...(sessionTier === 'sonnet' ? { switchAlias: 'opus' } : {}),
      }
    }
  }

  if (decision === null || decision.confidence === 'low' || dismissed === decision.id) {
    return null
  }

  const kind = decision.action.kind

  if (kind === 'stay' || kind === 'none') {
    return null
  }

  return {
    key: decision.id,
    tone: kind === 'switch' ? 'warning' : 'suggestion',
    title: `${decision.label} → ${MODELS[decision.tier].name} · ${decision.effort}`,
    detail: decision.action.text,
    ...(kind === 'switch' && decision.action.alias !== undefined ? { switchAlias: decision.action.alias } : {}),
  }
}

const INDICATOR_TAG = '[MODEL ROUTER]'

function indicatorAction(band: BandModel | null, decision: Decision | null): string | null {
  if (band === null) {
    return null
  }

  if (band.key.startsWith('signal:')) {
    return '↑ escalar'
  }

  const action = decision?.action

  if (action?.kind === 'delegate' && action.agent !== undefined) {
    return `${MARK.delegate} ${action.agent}`
  }

  if (action?.kind === 'switch' && action.alias !== undefined) {
    return `${MARK.switch} /model ${action.alias}`
  }

  return action?.kind === 'plan' ? `${MARK.plan} plan mode` : null
}

export function isFailing(health: Health): boolean {
  return health.active > 0
}

export function indicatorText(band: BandModel | null, decision: Decision | null, health: Health): string {
  if (isFailing(health)) {
    return `${INDICATOR_TAG} ✗`
  }

  return `${INDICATOR_TAG} ${indicatorAction(band, decision) ?? '✓'}`
}

function healthLine(health: Health): string {
  const last = health.issues.at(-1)

  if (!isFailing(health) || last === undefined) {
    return 'Salud: ✓ sin fallos'
  }

  const count = health.active === 1 ? 'falló' : `${health.active} fallos, el último en`

  return `Salud: ✗ ${count} ${last.where}: ${last.reason}`
}

export type BandHandlers = {
  onSwitch: (alias: string) => void
  onMatrix: () => void
  onDismiss: (key: string) => void
}

export function renderBand(kit: Kit, band: BandModel, handlers: BandHandlers, columns: number) {
  const { Box, Text, Button } = kit
  const room = Math.max(20, columns - 8)

  return (
    <Box flexDirection="column">
      <Box flexDirection="row" gap={1}>
        <Text color={band.tone === 'warning' ? 'warning' : 'suggestion'} bold>
          route
        </Text>
        <Text wrap="truncate-end">{shortLabel(band.title, room)}</Text>
      </Box>
      <Text dimColor wrap="wrap">
        {band.detail}
      </Text>
      <Box flexDirection="row" gap={1}>
        {band.switchAlias !== undefined ? (
          <Button
            key="switch"
            label={`/model ${band.switchAlias}`}
            hotkey="1"
            variant="primary"
            onPress={() => handlers.onSwitch(band.switchAlias ?? '')}
          />
        ) : null}
        <Button key="matrix" label="Matriz" hotkey="2" onPress={() => handlers.onMatrix()} />
        <Button key="dismiss" label="Ocultar" hotkey="3" onPress={() => handlers.onDismiss(band.key)} />
      </Box>
    </Box>
  )
}

export type PaneData = {
  decision: Decision | null
  session: SessionView
  spawns: readonly SpawnRecord[]
  ledger: Ledger
  calibration: Calibration
  signals: readonly string[]
  health: Health
  plans: PlanStats
}

function pad(text: string, width: number): string {
  return text.length >= width ? `${text.slice(0, width - 1)}…` : text.padEnd(width)
}

function Section(kit: Kit, title: string, rows: RenderChildren[]) {
  const { Box, Text } = kit

  return (
    <Box flexDirection="column">
      <Text bold>{title}</Text>
      {rows}
    </Box>
  )
}

export function renderPane(kit: Kit, data: PaneData, columns: number) {
  const { Box, Text } = kit
  const labelWidth = Math.max(18, Math.min(46, columns - 30))
  const decision = data.decision
  const session = data.session

  const sessionRows = [
    <Text key="model" wrap="truncate-end">
      {modelName(session.model || '?')}
      {session.planMode ? ' · plan mode' : ''} · contexto {kTokens(session.contextTokens)}
    </Text>,
    ...(session.legacyHook
      ? [
          <Text key="legacy" color="warning" wrap="wrap">
            ~/.claude/hooks/model-router.sh sigue en settings.json y duplica la rúbrica: retíralo.
          </Text>,
        ]
      : []),
  ]

  const decisionRows =
    decision === null
      ? [
          <Text key="none" dimColor>
            {'Sin decisión todavía. /route <texto> simula una.'}
          </Text>,
        ]
      : [
          <Text key="task" wrap="wrap">
            «{decision.label}» → {MODELS[decision.tier].name} · {decision.effort}
          </Text>,
          <Text key="confidence" dimColor wrap="wrap">
            confianza {CONFIDENCE_LABEL[decision.confidence]} ({SOURCE_LABEL[decision.source]}) · señales: {decision.signals.join(', ') || 'ninguna'}
          </Text>,
          <Text key="action" color={decision.action.kind === 'switch' ? 'warning' : 'suggestion'} wrap="wrap">
            {describeAction(decision.action)}
          </Text>,
          <Text key="cost" dimColor>
            costo de la tarea ≈{usd(decision.usd)}
          </Text>,
          ...data.signals.map(signal => (
            <Text key={`signal-${signal}`} color="warning" wrap="wrap">
              ↑ {signal}
            </Text>
          )),
        ]

  const matrixRows = CATEGORIES.map(category => {
    const isCurrent = decision?.category === category.id

    return (
      <Text key={`row-${category.id}`} wrap="truncate-end" bold={isCurrent} color={isCurrent ? 'suggestion' : undefined} dimColor={!isCurrent}>
        {isCurrent ? '▸ ' : '  '}
        {pad(category.label, labelWidth)} {pad(MODELS[category.tier].name, 10)} {category.effortLabel}
      </Text>
    )
  })

  const spawnRows =
    data.spawns.length === 0
      ? [
          <Text key="none" dimColor>
            Ninguna delegación todavía.
          </Text>,
        ]
      : data.spawns.slice(-6).map(spawn => (
          <Text
            key={`spawn-${spawn.toolUseId}-${spawn.at}`}
            wrap="wrap"
            color={spawn.verdict === 'reject' ? 'error' : spawn.verdict === 'rewrite' ? 'warning' : undefined}
          >
            {VERDICT_LABEL[spawn.verdict]} · {spawn.agent} {modelName(spawn.from)}
            {spawn.to === spawn.from ? '' : ` → ${modelName(spawn.to)}`} · {spawn.reason}
          </Text>
        ))

  const ledgerEntries = Object.entries(data.ledger).sort((a, b) => b[1].usd - a[1].usd)
  const ledgerRows =
    ledgerEntries.length === 0
      ? [
          <Text key="none" dimColor>
            Sin requests medidos todavía.
          </Text>,
        ]
      : ledgerEntries.map(([model, row]) => (
          <Text key={`ledger-${model}`} wrap="truncate-end">
            {pad(modelName(model), 12)} ≈{usd(row.usd)} · {row.steps} requests · out {kTokens(row.output)} · caché {kTokens(row.cacheRead)}
          </Text>
        ))

  const calibrationEntries = Object.entries(data.calibration)
    .sort((a, b) => b[1].tasks - a[1].tasks)
    .slice(0, 8)
  const calibrationRows =
    calibrationEntries.length === 0
      ? [
          <Text key="none" dimColor>
            Se llena al cerrar tareas: costo medio, escalados y bloqueos por tarea y modelo.
          </Text>,
        ]
      : calibrationEntries.map(([key, row]) => (
          <Text key={`cal-${key}`} wrap="truncate-end">
            {pad(key, labelWidth)} {row.tasks} tareas · ≈{usd(row.usd / Math.max(1, row.tasks))} c/u · ↑{row.escalations} · ⛔{row.blocks}
          </Text>
        ))

  const planRows = [
    <Text key="summary" wrap="wrap" dimColor={data.plans.requested === 0}>
      {planStatsLine(data.plans).replace('Plan de modelos: ', '')}
    </Text>,
    ...data.plans.recent.slice(-3).map(entry => (
      <Text key={`plan-${entry.at}`} color="warning" wrap="wrap">
        ≠ «{entry.label}»: sugerido {entry.suggested} · declarado {entry.declared}
      </Text>
    )),
  ]

  const firstActive = data.health.issues.length - data.health.active
  const healthRows =
    data.health.issues.length === 0
      ? [
          <Text key="none" dimColor>
            ✓ sin fallos
          </Text>,
        ]
      : data.health.issues.map((issue, index) => (
          <Text key={`health-${index}`} color={index >= firstActive ? 'error' : undefined} dimColor={index < firstActive} wrap="wrap">
            {index >= firstActive ? '✗' : '·'} {issue.where}: {issue.reason}
          </Text>
        ))

  return (
    <Box flexDirection="column" gap={1}>
      {Section(kit, 'Sesión', sessionRows)}
      {Section(kit, 'Decisión', decisionRows)}
      {Section(kit, 'Matriz', matrixRows)}
      {Section(kit, 'Sub-agentes', spawnRows)}
      {Section(kit, 'Costo por modelo (estimado)', ledgerRows)}
      {Section(kit, 'Calibración', calibrationRows)}
      {Section(kit, 'Plan de modelos', planRows)}
      {Section(kit, 'Salud', healthRows)}
    </Box>
  )
}
