import type { PlanStats, RouteAction } from '../types'

export type DeclaredKind = 'stay' | 'delegate' | 'switch' | 'other'

export type DeclaredPlan = {
  kind: DeclaredKind
  text: string
  agent?: string
  alias?: string
}

export const EMPTY_PLAN_STATS: PlanStats = { requested: 0, declared: 0, compared: 0, disagreed: 0, unkept: 0, recent: [] }

const PLAN_LINE = /plan de modelos\**\s*:\**\s*([^\n]+)/i
const NEGATED = /\bno\s+(?:(?:lo|la|los|las|le|les)\s+)?(?:deleg\w*|recomiend\w*)/gi
const DELEGATE = /\bdeleg(?:o|amos|ar[ée]|ando)(?![\p{L}\d-])/iu
const SWITCH = /\brecomiendo\b[^/]{0,20}\/model\s+(opusplan|sonnet|opus|fable|haiku)\b/i
const STAY = /\b(?:sigo|me quedo|seguimos)\b/i
const AGENT = /\b(sonnet-implementer|opus-reviewer|opus-debugger|fable-researcher|general-purpose|explore)\b/i
const AGENT_TOOLS: ReadonlySet<string> = new Set(['Agent', 'Task'])
const RECENT_MAX = 8

export function isAgentCall(toolName: string): boolean {
  return AGENT_TOOLS.has(toolName)
}

export function parsePlanLine(answer: string): DeclaredPlan | null {
  const text = PLAN_LINE.exec(answer)?.[1]?.replace(/[*_`]/g, '').trim()

  if (text === undefined || text === '') {
    return null
  }

  const affirmed = text.replace(NEGATED, ' ')
  const switchMatch = SWITCH.exec(affirmed)

  if (switchMatch?.[1] !== undefined) {
    return { kind: 'switch', text, alias: switchMatch[1].toLowerCase() }
  }

  const delegateMatch = DELEGATE.exec(affirmed)

  if (delegateMatch !== null) {
    const agent = AGENT.exec(affirmed.slice(delegateMatch.index))?.[1]?.toLowerCase()

    return agent === undefined ? { kind: 'delegate', text } : { kind: 'delegate', text, agent }
  }

  return { kind: STAY.test(affirmed) ? 'stay' : 'other', text }
}

export function agrees(action: RouteAction, plan: DeclaredPlan): boolean | null {
  switch (action.kind) {
    case 'none':
    case 'plan':
      return null
    case 'stay':
      return plan.kind === 'stay'
    case 'delegate':
      return plan.kind === 'delegate' && (action.agent === undefined || plan.agent === undefined || plan.agent === action.agent)
    case 'switch':
      return plan.kind === 'switch' && (action.alias === undefined || plan.alias === action.alias)
  }
}

export function scorePlan(
  stats: PlanStats,
  turn: { action: RouteAction; label: string; at: number; plan: DeclaredPlan | null },
): PlanStats {
  const declared = turn.plan === null ? 0 : 1
  const agreement = turn.plan === null ? null : agrees(turn.action, turn.plan)
  const recent =
    agreement === false && turn.plan !== null
      ? [...stats.recent, { at: turn.at, label: turn.label, suggested: turn.action.text, declared: turn.plan.text }].slice(-RECENT_MAX)
      : stats.recent

  return {
    ...stats,
    requested: stats.requested + 1,
    declared: stats.declared + declared,
    compared: stats.compared + (agreement === null ? 0 : 1),
    disagreed: stats.disagreed + (agreement === false ? 1 : 0),
    recent,
  }
}

export function planStatsOf(value: unknown): PlanStats {
  if (typeof value !== 'object' || value === null) {
    return EMPTY_PLAN_STATS
  }

  const stored = value as Partial<PlanStats>
  const count = (field: unknown) => (typeof field === 'number' && Number.isFinite(field) ? field : 0)

  return {
    requested: count(stored.requested),
    declared: count(stored.declared),
    compared: count(stored.compared),
    disagreed: count(stored.disagreed),
    unkept: count(stored.unkept),
    recent: Array.isArray(stored.recent) ? stored.recent.slice(-RECENT_MAX) : [],
  }
}

export function planStatsLine(stats: PlanStats): string {
  if (stats.requested === 0 && stats.unkept === 0) {
    return 'Plan de modelos: sin turnos medidos todavía.'
  }

  return `Plan de modelos: declarado en ${stats.declared}/${stats.requested} turnos que lo pedían · desacuerdos con la sugerencia ${stats.disagreed}/${stats.compared} · «delego» sin Agent ${stats.unkept}`
}
