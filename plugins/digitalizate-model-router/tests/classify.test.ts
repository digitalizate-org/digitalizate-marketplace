import { describe, expect, test } from 'claude-code/testing'

import { classify, needsSecondOpinion, normalize, withSecondOpinion } from '../hooks/classify'

function task(text: string, images = 0) {
  const result = classify(text, { images })

  if (result.kind !== 'task') {
    throw new Error(`expected a task for «${text}», got ${result.kind}`)
  }

  return result
}

describe('matrix: task to model', () => {
  test('normalizes accents, tildes and whitespace', async () => {
    expect(normalize('  Migración   de AÑOS ')).toBe('migracion de anos')
  })

  test('intermittent bug goes to Opus with high confidence', async () => {
    const result = task('El login a veces falla cuando dos usuarios entran a la vez, parece una race condition')

    expect(result.category.id).toBe('intermittent-bug')
    expect(result.tier).toBe('opus')
    expect(result.confidence).toBe('high')
  })

  test('bug with a clear stack trace goes to Sonnet', async () => {
    const result = task('Arregla este TypeError: cannot read properties of undefined, el stack trace apunta a api.ts')

    expect(result.category.id).toBe('bug-repro')
    expect(result.tier).toBe('sonnet')
  })

  test('tests go to Sonnet', async () => {
    const result = task('Escribe tests unitarios para el parser con vitest')

    expect(result.category.id).toBe('tests')
    expect(result.tier).toBe('sonnet')
    expect(result.confidence).toBe('high')
  })

  test('tests for an auth module do not escalate for mentioning auth', async () => {
    const result = task('Escribe tests para el módulo de auth')

    expect(result.category.id).toBe('tests')
    expect(result.tier).toBe('sonnet')
    expect(result.risk).toBeUndefined()
  })

  test('a strong security signal escalates a mechanical task to Opus', async () => {
    const result = task('Agrega un campo al formulario igual que el de perfil; ojo que hay una vulnerabilidad XSS')

    expect(result.category.id).toBe('feature-pattern')
    expect(result.risk?.id).toBe('security')
    expect(result.tier).toBe('opus')
    expect(result.effort).toBe('xhigh')
  })

  test('mechanical refactor goes to Sonnet', async () => {
    expect(task('Renombra getUser a fetchUser en todo el repo').category.id).toBe('mechanical-refactor')
  })

  test('docs go to Sonnet', async () => {
    expect(task('Actualiza el README con los comandos nuevos').category.id).toBe('docs')
  })

  test('security goes to Opus xhigh', async () => {
    const result = task('Revisa la seguridad del login: jwt, permisos y secretos en el .env')

    expect(result.category.id).toBe('security')
    expect(result.effort).toBe('xhigh')
  })

  test('migration with live data goes to Opus', async () => {
    const result = task('Migra la base de datos de mysql a postgres con datos en producción y sin downtime')

    expect(result.category.id).toBe('risky-migration')
    expect(result.tier).toBe('opus')
  })

  test('greenfield goes to Opus', async () => {
    const result = task('Crea un mod que implemente la guía con una matriz de decisión de modelo')

    expect(result.category.id).toBe('greenfield')
    expect(result.tier).toBe('opus')
  })

  test('research goes to Fable', async () => {
    const result = task('Investiga y compara librerías de colas para node, con pros y contras')

    expect(result.category.id).toBe('research')
    expect(result.tier).toBe('fable')
  })

  test('legacy codebase goes to Fable', async () => {
    expect(task('Necesito entender este codebase legacy sin documentación antes de tocarlo').category.id).toBe('legacy-codebase')
  })

  test('an attached image goes to visual reading in Opus', async () => {
    const result = task('mira esto [Image #1]', 1)

    expect(result.category.id).toBe('vision')
    expect(result.tier).toBe('opus')
  })

  test('greetings and confirmations are trivial', async () => {
    expect(classify('hola').kind).toBe('trivial')
    expect(classify('Dale, gracias!').kind).toBe('trivial')
    expect(classify('/model opus').kind).toBe('trivial')
  })

  test('a question without a task is neutral', async () => {
    expect(classify('¿qué hace esta función de utilidades?').kind).toBe('neutral')
  })

  test('a question with a strong signal is still a task', async () => {
    expect(task('¿por qué el job falla a veces solo en producción?').category.id).toBe('intermittent-bug')
  })
})

describe('confidence: independent signals add up', () => {
  const cases: [string, string, string][] = [
    ['Renombra getUser a fetchUser en todo el repo', 'mechanical-refactor', 'high'],
    ['Actualiza el README con los comandos nuevos', 'docs', 'high'],
    ['Configura github actions para correr el lint en cada PR', 'scripts-ci', 'high'],
    ['Investiga y compara librerías de colas para node, con pros y contras', 'research', 'high'],
    ['Diseña un algoritmo de programación dinámica con complejidad O(n log n)', 'algorithm-math', 'high'],
    ['Prepara una presentación en slides con el informe del trimestre', 'document-deliverable', 'high'],
    ['Nadie ha resuelto esto: no sé cómo abordar la sincronización offline sin servidor', 'open-problem', 'high'],
    ['Deja corriendo una migración autónoma durante horas con sub-agentes en paralelo', 'long-autonomous-run', 'high'],
  ]

  for (const [text, category, confidence] of cases) {
    test(`«${text}» → ${category} (${confidence})`, async () => {
      const result = task(text)

      expect(result.category.id).toBe(category)
      expect(result.confidence).toBe(confidence)
    })
  }
})

describe('second opinion', () => {
  test('requested when the heuristic doubts or sees nothing in a long prompt', async () => {
    expect(needsSecondOpinion(classify('Escribe tests unitarios para el parser con vitest'), 'x')).toBe(false)

    const text = 'Necesito que la app soporte varias empresas con datos aislados por cliente'

    expect(needsSecondOpinion(classify(text), text)).toBe(true)
  })

  test('the classifier label replaces a weak reading', async () => {
    const result = withSecondOpinion({ kind: 'neutral', reason: 'no-signals' }, 'Feature que cruza varios módulos')

    expect(result.kind).toBe('task')
    expect(result.kind === 'task' && result.category.id).toBe('cross-module-feature')
    expect(result.kind === 'task' && result.confidence).toBe('medium')
  })

  test('an unknown label changes nothing', async () => {
    const base = classify('Escribe tests unitarios para el parser con vitest')

    expect(withSecondOpinion(base, 'otra cosa')).toBe(base)
  })
})
