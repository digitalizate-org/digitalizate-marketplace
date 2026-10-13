import { describe, expect, test } from 'claude-code/testing'

import { classify, type TaskClassification } from '../hooks/classify'
import { DEFAULT_AGENT_MODELS } from '../hooks/matrix'
import {
  type ActionContext,
  currentOf,
  estimateSwitch,
  implementIntent,
  judgeSpawn,
  sessionAction,
  type SpawnFacts,
  type SpawnPolicy,
  tierOfModel,
} from '../hooks/route'

function task(text: string): TaskClassification {
  const result = classify(text)

  if (result.kind !== 'task') {
    throw new Error(`expected a task for «${text}»`)
  }

  return result
}

const SMALL: ActionContext = { contextTokens: 20000, mechanicalStreak: 1, wantsCode: false, isSmallTask: false }
const POLICY: SpawnPolicy = { agentModels: DEFAULT_AGENT_MODELS, isUserPinned: false, isEnforced: true }

function spawn(fields: Partial<SpawnFacts> & Pick<SpawnFacts, 'agent' | 'prompt'>): SpawnFacts {
  return { description: 'subtarea', parentModel: 'claude-opus-5-5', isFork: false, isTeammate: false, isWorkflow: false, ...fields }
}

describe('session model', () => {
  test('recognizes ids and aliases', async () => {
    expect(tierOfModel('claude-opus-5-5')).toBe('opus')
    expect(tierOfModel('sonnet')).toBe('sonnet')
    expect(tierOfModel('claude-fable-5-1')).toBe('fable')
    expect(tierOfModel('default')).toBeNull()
  })

  test('opusplan executes in Sonnet and plans in Opus', async () => {
    expect(currentOf('opusplan', false).tier).toBe('sonnet')
    expect(currentOf('opusplan', true).tier).toBe('opus')
  })
})

describe('session action', () => {
  const MECHANICAL = 'Escribe tests unitarios para el parser con vitest'
  const ARCHITECTURE = 'Rediseña la arquitectura: desacopla la capa de datos y define los contratos entre capas'

  test('mechanical task in Opus: delegates to sonnet-implementer', async () => {
    const action = sessionAction(task(MECHANICAL), currentOf('claude-opus-5-5', false), SMALL)

    expect(action.kind).toBe('delegate')
    expect(action.agent).toBe('sonnet-implementer')
  })

  test('small task in Opus: does not delegate', async () => {
    const action = sessionAction(task('Corrige el typo en el README de instalación'), currentOf('claude-opus-5-5', false), {
      ...SMALL,
      isSmallTask: true,
    })

    expect(action.kind).toBe('stay')
  })

  test('mechanical task in opusplan: stays', async () => {
    expect(sessionAction(task(MECHANICAL), currentOf('opusplan', false), SMALL).kind).toBe('stay')
  })

  test('three consecutive mechanical tasks with small context: switches to opusplan', async () => {
    const action = sessionAction(task(MECHANICAL), currentOf('claude-opus-5-5', false), { ...SMALL, mechanicalStreak: 3 })

    expect(action.kind).toBe('switch')
    expect(action.alias).toBe('opusplan')
  })

  test('with huge context switching does not pay off: delegates', async () => {
    const action = sessionAction(task(MECHANICAL), currentOf('claude-opus-5-5', false), {
      ...SMALL,
      contextTokens: 400000,
      mechanicalStreak: 5,
    })

    expect(action.kind).toBe('delegate')
  })

  test('intermittent bug in Sonnet: delegates to opus-debugger', async () => {
    const action = sessionAction(task('El login falla a veces: parece una race condition'), currentOf('claude-sonnet-5-5', false), SMALL)

    expect(action.kind).toBe('delegate')
    expect(action.agent).toBe('opus-debugger')
  })

  test('architecture refactor in Sonnet: /model opus', async () => {
    const action = sessionAction(task(ARCHITECTURE), currentOf('claude-sonnet-5-5', false), SMALL)

    expect(action.kind).toBe('switch')
    expect(action.alias).toBe('opus')
  })

  test('implementing security work is not sent to the read-only reviewer', async () => {
    const action = sessionAction(
      task('Implementa la autenticación con OAuth y revisa que no quede una vulnerabilidad de CSRF'),
      currentOf('claude-sonnet-5-5', false),
      { ...SMALL, wantsCode: true },
    )

    expect(action.agent).not.toBe('opus-reviewer')
    expect(action.kind).toBe('switch')
  })

  test('auditing security does go to the reviewer', async () => {
    const action = sessionAction(
      task('Revisa la seguridad del login: jwt, permisos y secretos en el .env'),
      currentOf('claude-sonnet-5-5', false),
      SMALL,
    )

    expect(action.agent).toBe('opus-reviewer')
  })

  test('design in opusplan outside plan mode: enters plan mode', async () => {
    const action = sessionAction(task('Crea un nuevo proyecto desde cero: elige el stack y diseña el sistema'), currentOf('opusplan', false), SMALL)

    expect(action.kind).toBe('plan')
  })

  test('research in Opus: delegates to fable-researcher', async () => {
    const action = sessionAction(task('Investiga y compara librerías de colas para node, con pros y contras'), currentOf('claude-opus-5-5', false), SMALL)

    expect(action.kind).toBe('delegate')
    expect(action.agent).toBe('fable-researcher')
  })

  test('large plan in Opus with small context: /model fable', async () => {
    const action = sessionAction(task('Planifica la reescritura completa del sistema en fases para los próximos meses'), currentOf('claude-opus-5-5', false), SMALL)

    expect(action.kind).toBe('switch')
    expect(action.alias).toBe('fable')
  })

  test('large plan with large context: delegates instead of rewriting the cache', async () => {
    const action = sessionAction(task('Planifica la reescritura completa del sistema en fases para los próximos meses'), currentOf('claude-opus-5-5', false), {
      ...SMALL,
      contextTokens: 150000,
    })

    expect(action.kind).toBe('delegate')
    expect(action.agent).toBe('fable-researcher')
  })

  test('normal code in Fable: /model opusplan', async () => {
    const action = sessionAction(task(ARCHITECTURE), currentOf('claude-fable-5-1', false), SMALL)

    expect(action.kind).toBe('switch')
    expect(action.alias).toBe('opusplan')
  })

  test('mechanical work in Haiku: moves up to Sonnet, not opusplan', async () => {
    const action = sessionAction(task(MECHANICAL), currentOf('claude-haiku-5-5', false), SMALL)

    expect(action.kind).toBe('switch')
    expect(action.alias).toBe('sonnet')
  })

  test('a development migration without a strong signal does not force Opus', async () => {
    const action = sessionAction(task('Corre prisma migrate dev para la columna nickname que ya está en el schema'), currentOf('claude-sonnet-5-5', false), SMALL)

    expect(action.kind).not.toBe('switch')
  })

  test('low confidence: recommends nothing', async () => {
    const weak: TaskClassification = { ...task(MECHANICAL), confidence: 'low' }

    expect(sessionAction(weak, currentOf('claude-opus-5-5', false), SMALL).kind).toBe('stay')
  })
})

describe('cost of switching models', () => {
  test('Opus to Sonnet at 100K: rewrites about $0.40 and pays back in 7 turns', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-sonnet-5-5', 100000)

    expect(Math.abs(estimate.switchUsd - 0.4) < 1e-9).toBe(true)
    expect(estimate.breakEvenTurns).toBe(7)
  })

  test('with a 5-minute TTL the write costs 1.25x', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-sonnet-5-5', 100000, { writeUsd: 0, ttl: '5m', isWarm: true })

    expect(Math.abs(estimate.switchUsd - 0.25) < 1e-9).toBe(true)
  })

  test('Opus to Fable at 100K: rewrites about $2 and each turn costs more', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-fable-5-1', 100000)

    expect(Math.abs(estimate.switchUsd - 2) < 1e-9).toBe(true)
    expect(estimate.breakEvenTurns).toBeNull()
    expect(estimate.perTurnDelta).toBeGreaterThan(0)
  })

  test('uses the re-cache cost computed by the engine', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-fable-5-1', 150000, { writeUsd: 3, ttl: '1h', isWarm: true })

    expect(estimate.switchUsd).toBe(3)
    expect(estimate.isCacheCold).toBe(false)
  })

  test('with a cold cache only the difference against staying counts', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-sonnet-5-5', 150000, { writeUsd: 0.6, ttl: '1h', isWarm: false, pricing: 'catalog' })

    expect(estimate.switchUsd).toBe(0)
    expect(estimate.isCacheCold).toBe(true)
  })

  test('with configured prices it does not mix sources when subtracting', async () => {
    const estimate = estimateSwitch('claude-opus-5-5', 'claude-sonnet-5-5', 150000, { writeUsd: 0.6, ttl: '1h', isWarm: false, pricing: 'configured' })

    expect(estimate.switchUsd).toBe(0.6)
  })
})

describe('sub-agent judgment: what it must correct', () => {
  test('general-purpose inheriting Opus for tests: drops to Sonnet', async () => {
    const plan = judgeSpawn(spawn({ agent: 'general-purpose', prompt: 'Escribe tests unitarios para utils/date.ts con vitest y córrelos' }), POLICY)

    expect(plan.verdict).toBe('rewrite')
    expect(plan.model).toBe('sonnet')
  })

  test('general-purpose inheriting Fable for a bug with a stack trace: drops to Sonnet', async () => {
    const plan = judgeSpawn(
      spawn({ agent: 'general-purpose', parentModel: 'claude-fable-5-1', prompt: 'Arregla el bug: el stack trace muestra TypeError en api.ts' }),
      POLICY,
    )

    expect(plan.verdict).toBe('rewrite')
    expect(plan.model).toBe('sonnet')
  })

  test('general-purpose inheriting Sonnet for architecture: moves up to Opus', async () => {
    const plan = judgeSpawn(
      spawn({ agent: 'general-purpose', parentModel: 'claude-sonnet-5-5', prompt: 'Rediseña la arquitectura de módulos y desacopla la capa de datos' }),
      POLICY,
    )

    expect(plan.verdict).toBe('rewrite')
    expect(plan.model).toBe('opus')
  })

  test('sonnet-implementer with a race condition: rejects and names opus-debugger', async () => {
    const plan = judgeSpawn(spawn({ agent: 'sonnet-implementer', prompt: 'Corrige el fallo: hay una race condition entre dos requests' }), POLICY)

    expect(plan.verdict).toBe('reject')
    expect(plan.reason).toContain('opus-debugger')
  })

  test('the same rejection a second time in the turn passes as a warning', async () => {
    const prompt = 'Corrige el fallo: hay una race condition entre dos requests'
    const first = judgeSpawn(spawn({ agent: 'sonnet-implementer', prompt }), POLICY)
    const second = judgeSpawn(spawn({ agent: 'sonnet-implementer', prompt }), {
      ...POLICY,
      rejectedThisTurn: new Set([first.rejectionKey ?? '']),
    })

    expect(second.verdict).toBe('warn')
  })

  test('opus-reviewer asked to implement: rejects', async () => {
    expect(judgeSpawn(spawn({ agent: 'opus-reviewer', prompt: 'Implementa los arreglos del review en auth.ts' }), POLICY).verdict).toBe('reject')
  })

  test('fable-researcher asked to implement: rejects', async () => {
    expect(judgeSpawn(spawn({ agent: 'fable-researcher', prompt: 'Implementa el parser nuevo en src/parser.ts' }), POLICY).verdict).toBe('reject')
  })

  test('the plugin-prefixed name is judged the same', async () => {
    const plan = judgeSpawn(
      spawn({ agent: 'digitalizate-model-router:opus-reviewer', prompt: 'Implementa los arreglos del review en auth.ts' }),
      POLICY,
    )

    expect(plan.verdict).toBe('reject')
  })
})

describe('sub-agent judgment: what it must let through', () => {
  const legit: [string, string, string, string?][] = [
    ['opus-reviewer', 'review', 'Write a code review of the diff in src/payments and list findings by severity'],
    ['opus-reviewer', 'review', 'Review PR 42. Create a list of the issues you find, with file and line'],
    ['opus-reviewer', 'review', 'Re-review the fixes in auth.ts. Update your verdict for each prior finding'],
    ['opus-reviewer', 'Fix verification review', 'Revisa los cambios del último commit y reporta hallazgos. No edites archivos.'],
    ['opus-reviewer', 'review', 'Revisa el diff de auth.ts y reporta hallazgos con archivo y línea. No edites archivos.'],
    ['fable-researcher', 'informe', 'Escribe un informe comparando librerías de PDF para node, con fuentes'],
    ['fable-researcher', 'roadmap', 'Crea un roadmap de 3 meses para migrar el monolito a servicios'],
    ['fable-researcher', 'research', 'Research caching strategies for the API. Write a recommendation doc'],
    ['sonnet-implementer', 'format', 'Fix inconsistent indentation in src/ and run prettier'],
    ['sonnet-implementer', 'log', 'Add a timing log around handleRequest and run the tests'],
    ['sonnet-implementer', 'fetch', 'Use Promise.all so the three fetches run concurrently; run the tests'],
    ['sonnet-implementer', 'fixtures', 'Generate random IDs for the user fixtures'],
    ['sonnet-implementer', 'color', 'Cambia el color del botón de login a azul'],
    ['sonnet-implementer', 'migration', 'Run prisma migrate dev for the nickname column already defined in the schema'],
    ['sonnet-implementer', 'endpoint', 'Agrega el endpoint de facturas siguiendo la arquitectura existente de controllers y services'],
  ]

  for (const [agent, description, prompt] of legit) {
    test(`${agent}: «${prompt.slice(0, 60)}»`, async () => {
      expect(judgeSpawn(spawn({ agent, description, prompt }), POLICY).verdict).not.toBe('reject')
    })
  }

  test('sonnet-implementer with an explicit model "opus" is not rejected for "not for Sonnet"', async () => {
    const plan = judgeSpawn(
      spawn({ agent: 'sonnet-implementer', model: 'opus', prompt: 'Corrige el fallo: hay una race condition entre dos requests' }),
      POLICY,
    )

    expect(plan.verdict).not.toBe('reject')
  })

  test('a read-only exploration does not move up to Opus', async () => {
    const plan = judgeSpawn(
      spawn({
        agent: 'general-purpose',
        parentModel: 'claude-sonnet-5-5',
        prompt: 'Explore the auth module and its tests and summarize how sessions work. Do not edit any files.',
      }),
      POLICY,
    )

    expect(plan.verdict).toBe('pass')
  })

  test('fable-researcher with real research: passes', async () => {
    const plan = judgeSpawn(
      spawn({ agent: 'fable-researcher', prompt: 'Investiga y compara librerías de colas para node; devuelve una recomendación con fuentes' }),
      POLICY,
    )

    expect(plan.verdict).toBe('pass')
  })

  test('a fork inherits and passes', async () => {
    expect(judgeSpawn(spawn({ agent: 'fork', prompt: 'Escribe tests', isFork: true }), POLICY).verdict).toBe('pass')
  })

  test('if the user pinned the model, it passes', async () => {
    expect(judgeSpawn(spawn({ agent: 'general-purpose', prompt: 'Escribe tests unitarios con vitest' }), { ...POLICY, isUserPinned: true }).verdict).toBe('pass')
  })

  test('in advise mode it only warns', async () => {
    const plan = judgeSpawn(spawn({ agent: 'general-purpose', prompt: 'Escribe tests unitarios para utils/date.ts con vitest' }), {
      ...POLICY,
      isEnforced: false,
    })

    expect(plan.verdict).toBe('warn')
    expect(plan.model).toBeUndefined()
  })

  test('an agent with an unknown own model passes', async () => {
    expect(judgeSpawn(spawn({ agent: 'Explore', prompt: 'Busca dónde se define el middleware de auth' }), POLICY).verdict).toBe('pass')
  })
})

describe('intent to edit code', () => {
  test('only code verbs count, and a scope limit is not read-only', async () => {
    expect(implementIntent('Implementa el endpoint de pagos')).toBe(true)
    expect(implementIntent('Fix the flaky test. Do not edit unrelated files.')).toBe(true)
    expect(implementIntent('Revisa el diff. Reporta hallazgos.')).toBe(false)
    expect(implementIntent('Write a code review of the diff')).toBe(false)
    expect(implementIntent('Crea un roadmap de 3 meses')).toBe(false)
    expect(implementIntent('Investiga cómo funciona el cache y propón un plan')).toBe(false)
    expect(implementIntent('Fix verification review\nRevisa los cambios. No edites archivos.')).toBe(false)
  })
})
