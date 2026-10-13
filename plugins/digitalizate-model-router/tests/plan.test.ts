import { describe, expect, test } from 'claude-code/testing'

import { agrees, EMPTY_PLAN_STATS, parsePlanLine, planStatsOf, scorePlan } from '../hooks/plan'

const DELEGATE_ACTION = { kind: 'delegate' as const, agent: 'sonnet-implementer', text: 'delega a sonnet-implementer: tarea mecánica' }
const STAY_ACTION = { kind: 'stay' as const, text: 'Opus 5.5 encaja' }

describe('reading the model plan line', () => {
  test('stay, even when it says what it will not delegate', () => {
    expect(parsePlanLine('Plan de modelos: sigo en Opus 5.5.')?.kind).toBe('stay')
    expect(parsePlanLine('Plan de modelos: sigo en Opus 5.5. No delego el commit a `sonnet-implementer` porque es un comando.')?.kind).toBe('stay')
  })

  test('delegation names the agent, with markdown around the line', () => {
    expect(parsePlanLine('**Plan de modelos:** delego los tests a `sonnet-implementer`.')).toEqual({
      kind: 'delegate',
      text: 'delego los tests a sonnet-implementer.',
      agent: 'sonnet-implementer',
    })
    expect(parsePlanLine('Plan de modelos: sigo en Opus; delegaré la implementación a sonnet-implementer')?.kind).toBe('delegate')
  })

  test('a session switch reads the alias', () => {
    const plan = parsePlanLine('Intro\nPlan de modelos: recomiendo /model fable porque es una migración completa.')

    expect(plan?.kind).toBe('switch')
    expect(plan?.alias).toBe('fable')
  })

  test('no line, no plan', () => {
    expect(parsePlanLine('Listo, subí el commit.')).toBeNull()
    expect(parsePlanLine('Plan de modelos:')).toBeNull()
  })
})

describe('agreement with the suggestion', () => {
  test('kind and agent must match; plan mode and none are not compared', () => {
    expect(agrees(DELEGATE_ACTION, { kind: 'delegate', text: '', agent: 'sonnet-implementer' })).toBe(true)
    expect(agrees(DELEGATE_ACTION, { kind: 'delegate', text: '', agent: 'opus-reviewer' })).toBe(false)
    expect(agrees(DELEGATE_ACTION, { kind: 'stay', text: '' })).toBe(false)
    expect(agrees(STAY_ACTION, { kind: 'stay', text: '' })).toBe(true)
    expect(agrees({ kind: 'plan', text: 'Shift+Tab ×2' }, { kind: 'stay', text: '' })).toBeNull()
  })

  test('scoring counts the line and keeps the disagreement', () => {
    const missing = scorePlan(EMPTY_PLAN_STATS, { action: STAY_ACTION, label: 'Bug', at: 1, plan: null })
    const disagreed = scorePlan(missing, { action: DELEGATE_ACTION, label: 'Tests', at: 2, plan: { kind: 'stay', text: 'sigo en Opus' } })

    expect(disagreed).toMatchObject({ requested: 2, declared: 1, compared: 1, disagreed: 1 })
    expect(disagreed.recent).toEqual([{ at: 2, label: 'Tests', suggested: DELEGATE_ACTION.text, declared: 'sigo en Opus' }])
  })

  test('stored stats survive a malformed value', () => {
    expect(planStatsOf(undefined)).toEqual(EMPTY_PLAN_STATS)
    expect(planStatsOf({ requested: 'x', declared: 3 })).toMatchObject({ requested: 0, declared: 3, recent: [] })
  })
})
