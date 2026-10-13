export type Tier = 'sonnet' | 'opus' | 'fable'

export type ModelTier = Tier | 'haiku'

export type Effort = 'low' | 'medium' | 'high' | 'xhigh' | 'max'

export type Confidence = 'high' | 'medium' | 'low'

export type ActionKind = 'stay' | 'delegate' | 'switch' | 'plan' | 'none'

export type RouteAction = {
  kind: ActionKind
  text: string
  agent?: string
  alias?: string
  switchUsd?: number
  breakEvenTurns?: number
}

export type Decision = {
  id: string
  at: number
  snippet: string
  category: string
  label: string
  tier: Tier
  effort: Effort
  confidence: Confidence
  source: 'heuristic' | 'classifier'
  signals: string[]
  risk?: string
  model: string
  modelTier: ModelTier | null
  planMode: boolean
  action: RouteAction
  usd: number
  isClosed: boolean
}

export type SpawnVerdict = 'pass' | 'rewrite' | 'reject' | 'warn'

export type SpawnRecord = {
  at: number
  toolUseId: string
  agent: string
  description: string
  from: string
  to: string
  verdict: SpawnVerdict
  reason: string
  category?: string
}

export type LedgerRow = {
  usd: number
  input: number
  output: number
  cacheRead: number
  cacheWrite: number
  steps: number
}

export type Ledger = Record<string, LedgerRow>

export type CalibrationRow = {
  tasks: number
  usd: number
  escalations: number
  blocks: number
}

export type Calibration = Record<string, CalibrationRow>

export type HealthIssue = {
  where: string
  reason: string
}

export type Health = {
  issues: HealthIssue[]
  active: number
}

export type PlanDisagreement = {
  at: number
  label: string
  suggested: string
  declared: string
}

export type PlanStats = {
  requested: number
  declared: number
  compared: number
  disagreed: number
  unkept: number
  recent: PlanDisagreement[]
}

export type SessionView = {
  model: string
  modelTier: ModelTier | null
  planMode: boolean
  contextTokens: number
  legacyHook: boolean
}

declare module 'claude-code' {
  interface PluginState {
    'digitalizate-model-router': {
      decision: Decision | null
      history: Decision[]
      spawns: SpawnRecord[]
      ledger: Ledger
      calibration: Calibration
      signals: string[]
      dismissed: string
      session: SessionView
      health: Health
      plans: PlanStats
    }
  }
}
