import { describe, expect, test } from 'claude-code/testing'

import { BAND, command, MODE, PANE, SESSION, spawnInput, textOf, worldOf } from './fixtures'

const MECHANICAL = 'Escribe tests unitarios para el parser con vitest'
const DESIGN = 'Crea un nuevo proyecto desde cero: elige el stack y diseña el sistema'
const ARCHITECTURE = 'Rediseña la arquitectura: desacopla la capa de datos y define los contratos entre capas'

const SWITCH = {
  requested_model: 'fable',
  source: 'command' as const,
  prompt_cache_warm: true,
  cache_ttl: '1h' as const,
  pricing: 'catalog' as const,
}

const isNear = (actual: number | undefined, expected: number) => Math.abs((actual ?? Number.NaN) - expected) < 1e-9

async function drain(stream: AsyncGenerator<unknown, unknown> & { result: Promise<unknown> }) {
  for await (const chunk of stream) {
    void chunk
  }

  return stream.result
}

describe('startup', () => {
  test('registers /route and sets the status line', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    expect(world.commands).toEqual(['route'])
    expect(world.statuses.at(-1)).toBeUndefined()
    expect(textOf(await $.ui.render(MODE))).toBe('[ROUTER]')
  })

  test('detects the legacy bash hook', async ($, on) => {
    const world = worldOf(on, {
      settings: { hooks: { SessionStart: [{ hooks: [{ command: 'bash "/home/x/.claude/hooks/model-router.sh"' }] }] } },
    })

    await $.session.start(SESSION)

    expect(world.state.session?.legacyHook).toBe(true)
    expect(world.logs.some(line => line.includes('model-router.sh'))).toBe(true)
  })
})

describe('decision per prompt', () => {
  test('mechanical task in Opus: context with delegation and the model plan line', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const result = await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    const line = result.additionalContext?.join('\n') ?? ''

    expect(line).toContain('Tests, fixtures, mocks')
    expect(line).toContain('delega a sonnet-implementer')
    expect(line).toContain('Plan de modelos')
    expect(world.state.decision?.tier).toBe('sonnet')
    expect(world.state.decision?.action.kind).toBe('delegate')
    expect(textOf(await $.ui.render(MODE))).toBe('[ROUTER] ⇢ sonnet-implementer')
  })

  test('a trivial message adds no context and does not change the decision', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })

    const result = await $.classic.UserPromptSubmit({ prompt: 'dale', prompt_id: 'p2' })

    expect(result.additionalContext).toBeUndefined()
    expect(world.state.decision?.id).toBe('p1')
  })

  test('the same fitting task does not repeat context', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: DESIGN, prompt_id: 'p1' })

    const again = await $.classic.UserPromptSubmit({
      prompt: 'Crea otro proyecto desde cero con su stack y el diseño del sistema',
      prompt_id: 'p2',
    })

    expect(again.additionalContext).toBeUndefined()
  })

  test('a prompt from another source is not routed', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const result = await $.classic.UserPromptSubmit({ prompt: MECHANICAL, source: 'system' })

    expect(result.additionalContext).toBeUndefined()
    expect(world.state.decision).toBeUndefined()
  })

  test('a task or other-agent notification is not routed', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.prompt.submit({
      text: 'El sub-agente terminó: falla a veces por una race condition',
      origin: { kind: 'task-notification' },
      wait: false,
    })

    const result = await $.classic.UserPromptSubmit({ prompt: 'El sub-agente terminó: falla a veces por una race condition' })

    expect(result.additionalContext).toBeUndefined()
    expect(world.state.decision).toBeUndefined()
  })

  test('a typed prompt is routed', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.prompt.submit({ text: MECHANICAL, origin: { kind: 'composer' }, wait: false })
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })

    expect(world.state.decision?.category).toBe('tests')
  })

  test('closing the session and returning does not count the same task twice', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    await $.session.end({ reason: 'other', sessionId: 's1', resume: {} as never })
    await $.session.end({ reason: 'other', sessionId: 's1', resume: {} as never })
    await $.classic.UserPromptSubmit({ prompt: DESIGN, prompt_id: 'p2' })

    expect(world.state.calibration?.['tests@opus']?.tasks).toBe(1)
  })

  test('when the heuristic sees nothing, the classifier breaks the tie', async ($, on) => {
    const world = worldOf(on, { classified: 'Feature que cruza varios módulos' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: 'Necesito que la app soporte varias empresas con datos aislados por cliente', prompt_id: 'p1' })

    expect(world.state.decision?.category).toBe('cross-module-feature')
    expect(world.state.decision?.source).toBe('classifier')
  })

  test('with the classifier off there is no second opinion', { options: { classifier: 'heuristic' } }, async ($, on) => {
    const world = worldOf(on, { classified: 'Feature que cruza varios módulos' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: 'Necesito que la app soporte varias empresas con datos aislados por cliente', prompt_id: 'p1' })

    expect(world.state.decision).toBeUndefined()
  })
})

describe('rubric in the system prompt', () => {
  test("the main thread receives its model's rubric", async ($, on) => {
    worldOf(on)

    const composed = await $.prompt.compose({
      model: 'claude-opus-5-5',
      promptModel: 'claude-opus-5-5',
      surfaces: ['terminal'],
      tools: ['Agent', 'Bash'],
      outputStyle: null,
      traits: [],
    })
    const rubric = composed.sections.find(section => section.id === 'digitalizate-model-router:rubric')

    expect(rubric?.scope).toBe('session')
    expect(rubric?.text).toContain('Corres en Opus 5.5')
    expect(composed.sections[0]?.id).toBe('intro')
  })

  test('a Sonnet sub-agent only receives the verification rule', async ($, on) => {
    worldOf(on)

    const composed = await $.prompt.compose({
      model: 'claude-sonnet-5-5',
      promptModel: 'claude-sonnet-5-5',
      surfaces: [],
      tools: ['Bash', 'Edit'],
      outputStyle: null,
      traits: [],
    })

    expect(composed.sections.find(section => section.id === 'digitalizate-model-router:rubric')?.text).toContain('nunca reportes "listo"')
  })

  test('an Opus sub-agent receives nothing', async ($, on) => {
    worldOf(on)

    const composed = await $.prompt.compose({
      model: 'claude-opus-5-5',
      promptModel: 'claude-opus-5-5',
      surfaces: [],
      tools: ['Read', 'Bash'],
      outputStyle: null,
      traits: [],
    })

    expect(composed.sections.map(section => section.id)).toEqual(['intro'])
  })
})

describe('delegation', () => {
  test('general-purpose for tests drops to Sonnet and is recorded', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const started = await $.agent.spawn(
      spawnInput({ subagentType: 'general-purpose', prompt: 'Escribe tests unitarios para utils/date.ts con vitest y córrelos' }),
    )

    expect(started.deny).toBeUndefined()
    expect(world.spawned[0]?.model).toBe('sonnet')
    expect(world.toasts.some(toast => toast.includes('Sonnet 5.5'))).toBe(true)
    expect(world.state.spawns?.[0]?.verdict).toBe('rewrite')
  })

  test('sonnet-implementer with a race condition is rejected naming the right agent', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const started = await $.agent.spawn(
      spawnInput({ subagentType: 'sonnet-implementer', prompt: 'Corrige el fallo intermitente: hay una race condition entre dos requests' }),
    )

    expect(started.deny).toContain('opus-debugger')
    expect(world.spawned).toEqual([])
  })

  test('in advise mode it neither rewrites nor rejects', { options: { mode: 'advise' } }, async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.agent.spawn(spawnInput({ subagentType: 'general-purpose', prompt: 'Escribe tests unitarios para utils/date.ts con vitest' }))

    const denied = await $.agent.spawn(
      spawnInput({
        tool_use_id: 'toolu_2',
        subagentType: 'sonnet-implementer',
        prompt: 'Corrige el fallo intermitente: hay una race condition entre dos requests',
      }),
    )

    expect(world.spawned[0]?.model).toBeUndefined()
    expect(denied.deny).toBeUndefined()
    expect(world.spawned.length).toBe(2)
    expect(world.state.spawns?.map(spawn => spawn.verdict)).toEqual(['warn', 'warn'])
  })
})

describe('verification gate', () => {
  test('Sonnet that edited code without verifying cannot close, once only', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    on('tool.call', () => ({ result: {} as never, text: 'ok' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })

    const blocked = await $.classic.Stop({ stop_hook_active: false, last_assistant_message: 'Listo.' })

    expect(blocked.block).toContain('a.ts')

    const again = await $.classic.Stop({ stop_hook_active: true, last_assistant_message: 'Listo.' })

    expect(again.block).toBeUndefined()
  })

  test('running the tests releases the close', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    on('tool.call', () => ({ result: {} as never, text: 'ok' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })

    expect((await $.classic.Stop({ stop_hook_active: false })).block).toBeUndefined()
  })

  test('admitting it could not verify releases the close', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    on('tool.call', () => ({ result: {} as never, text: 'ok' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })

    const result = await $.classic.Stop({
      stop_hook_active: false,
      last_assistant_message: 'Cambié a.ts, pero no pude correr los tests: falta la base de datos local.',
    })

    expect(result.block).toBeUndefined()
  })

  test('Opus skips the gate by default', async ($, on) => {
    worldOf(on)
    on('tool.call', () => ({ result: {} as never, text: 'ok' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })

    expect((await $.classic.Stop({ stop_hook_active: false })).block).toBeUndefined()
  })

  test('with verification set to all, Opus also goes through the gate', { options: { verification: 'all' } }, async ($, on) => {
    worldOf(on)
    on('tool.call', () => ({ result: {} as never, text: 'ok' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })

    expect((await $.classic.Stop({ stop_hook_active: false })).block).toContain('a.ts')
  })

  test('three consecutive test failures after editing raise the escalation signal', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5' })

    on('tool.call', { tool: 'Edit' }, () => ({ result: {} as never, text: 'ok' }))
    on('tool.call', { tool: 'Bash' }, () => ({ isError: true as const, result: 'Exit code 1', text: 'Exit code 1\nFAIL src/a.test.ts' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })

    const third = await $.tool.call({ tool: 'Bash', command: 'npm test' })

    expect(third.context?.join('\n')).toContain('señal para escalar')
    expect(world.state.signals?.[0]).toContain('arregla síntomas')
    expect(textOf(await $.ui.render(BAND))).toContain('/model opus')
  })
})

describe('model switch', () => {
  test('switching to Fable with a warm cache and lots of context asks for confirmation with the engine cost', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-opus-5-5',
      to_model: 'claude-fable-5-1',
      context_tokens: 150000,
      estimated_cache_write_usd: 3,
    })

    expect(result.permissionDecision).toBe('ask')
    expect(result.permissionDecisionReason).toContain('$3.00')
    expect(result.permissionDecisionReason).toContain('fable-researcher')
  })

  test('with an already cold cache the switch is not blocked', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-opus-5-5',
      to_model: 'claude-sonnet-5-5',
      requested_model: 'sonnet',
      context_tokens: 150000,
      estimated_cache_write_usd: 0.6,
      prompt_cache_warm: false,
    })

    expect(result.permissionDecision).toBeUndefined()
    expect(world.toasts.at(-1)).toContain('ya expiró')
  })

  test('a cheap switch passes with a notice', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-opus-5-5',
      to_model: 'claude-sonnet-5-5',
      requested_model: 'sonnet',
      context_tokens: 20000,
      estimated_cache_write_usd: 0.08,
    })

    expect(result.permissionDecision).toBeUndefined()
    expect(world.toasts.at(-1)).toContain('reescribe la caché')
  })

  test('dropping to Sonnet in the middle of a risky task asks for confirmation even if cheap', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: 'Revisa la seguridad del login: jwt, permisos y secretos en el .env', prompt_id: 'p1' })

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-opus-5-5',
      to_model: 'claude-sonnet-5-5',
      requested_model: 'sonnet',
      context_tokens: 20000,
      estimated_cache_write_usd: 0.08,
    })

    expect(result.permissionDecision).toBe('ask')
    expect(result.permissionDecisionReason).toContain('Revisión de seguridad')
  })

  test('in advise mode it never blocks the switch', { options: { mode: 'advise' } }, async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-opus-5-5',
      to_model: 'claude-fable-5-1',
      context_tokens: 150000,
      estimated_cache_write_usd: 3,
    })

    expect(result.permissionDecision).toBeUndefined()
  })

  test('after the switch the decision is recomputed with the new model', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })

    expect(world.state.decision?.action.kind).toBe('switch')

    await $.classic.PostModelSwitch({
      ...SWITCH,
      from_model: 'claude-sonnet-5-5',
      to_model: 'claude-opus-5-5',
      requested_model: 'opus',
      context_tokens: 30000,
      estimated_cache_write_usd: 0.24,
    })

    expect(world.state.decision?.action.kind).toBe('stay')
  })
})

describe('band, pane and command', () => {
  test('a switch recommendation draws the button and runs it', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })

    expect(textOf(await $.ui.render(BAND))).toContain('/model opus')

    await $.ui.press({ plugin: 'digitalizate-model-router', key: 'switch' })

    expect(world.ran).toEqual(['model opus'])
  })

  test('a switch requested from the band does not ask for confirmation again', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })
    await $.ui.render(BAND)
    await $.ui.press({ plugin: 'digitalizate-model-router', key: 'switch' })

    const result = await $.classic.PreModelSwitch({
      ...SWITCH,
      from_model: 'claude-sonnet-5-5',
      to_model: 'claude-opus-5-5',
      requested_model: 'opus',
      context_tokens: 400000,
      estimated_cache_write_usd: 3.2,
    })

    expect(result.permissionDecision).toBeUndefined()
  })

  test('without a recommendation the band stays free', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: DESIGN, prompt_id: 'p1' })

    expect(textOf(await $.ui.render(BAND))).toBe('')
  })

  test('the pane shows the matrix with the current task marked', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })

    const pane = textOf(await $.ui.render(PANE))

    expect(pane).toContain('▸ Tests, fixtures, mocks')
    expect(pane).toContain('Frontend desde cero')
  })

  test('/route matrix prints the table, /route <text> simulates and /route opens the pane', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)

    expect((await $.command.run(command('route', 'matrix'))).text).toContain('| Tarea | Modelo |')

    const simulated = await $.command.run(command('route', 'El login a veces falla, parece una race condition'))

    expect(simulated.text).toContain('Bug intermitente')
    expect(simulated.text).toContain('Opus 5.5')

    await $.command.run(command('route'))

    expect(world.opened).toEqual(['route'])
  })
})

describe('cost', () => {
  test('each request adds to the per-model ledger and to the task', async ($, on) => {
    const world = worldOf(on)

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    await drain($.turn.step({ turnId: 't1', index: 0, model: 'claude-opus-5-5', effort: 'xhigh', messageCount: 3 }))

    const row = world.state.ledger?.['claude-opus-5-5']
    const expected = (1000 * 4 + 2000 * 20 + 40000 * 0.2 + 3000 * 8) / 1e6

    expect(row?.steps).toBe(1)
    expect(isNear(row?.usd, expected)).toBe(true)
    expect(isNear(world.state.decision?.usd, expected)).toBe(true)
    expect(world.state.session?.contextTokens).toBe(46000)
  })
})

describe('effort per task', () => {
  test('by default it respects the session effort', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    await drain($.turn.step({ turnId: 't1', index: 0, model: 'claude-sonnet-5-5', effort: 'xhigh', messageCount: 3 }))

    expect(world.steps[0]?.effort).toBe('xhigh')
  })

  test('in matrix mode it applies the task effort, except max', { options: { effort: 'matrix' } }, async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5' })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    await drain($.turn.step({ turnId: 't1', index: 0, model: 'claude-sonnet-5-5', effort: 'xhigh', messageCount: 3 }))
    await drain($.turn.step({ turnId: 't1', index: 1, model: 'claude-sonnet-5-5', effort: 'max', messageCount: 5 }))

    expect(world.steps.map(step => step.effort)).toEqual(['medium', 'max'])
  })
})

describe('opusplan session', () => {
  test('an opusplan default reads as opusplan while Sonnet executes', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5', settings: { model: 'opusplan' } })

    await $.session.start(SESSION)

    expect(world.state.session?.model).toBe('opusplan')

    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })

    expect(world.state.decision?.model).toBe('opusplan')
    expect(world.state.decision?.action.kind).toBe('plan')
  })

  test('plan mode under opusplan reads Opus as the planner', async ($, on) => {
    const world = worldOf(on, { model: 'claude-opus-5-5', settings: { model: 'opusplan' } })

    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1', permission_mode: 'plan' })

    expect(world.state.decision?.model).toBe('opusplan')
    expect(world.state.decision?.action.kind).toBe('stay')
  })

  test('an explicit Opus model over an opusplan default is not read as opusplan', async ($, on) => {
    const world = worldOf(on, { model: 'claude-opus-5-5', settings: { model: 'opusplan' } })

    await $.session.start(SESSION)

    expect(world.state.session?.model).toBe('claude-opus-5-5')
  })

  test('a /model switch wins over the settings default', async ($, on) => {
    const world = worldOf(on, { model: 'claude-sonnet-5-5', settings: { model: 'opusplan' } })

    await $.session.start(SESSION)
    await $.classic.PostModelSwitch({
      ...SWITCH,
      from_model: 'claude-sonnet-5-5',
      to_model: 'claude-sonnet-5-5',
      requested_model: 'sonnet',
      context_tokens: 20000,
      estimated_cache_write_usd: 0.08,
    })
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })

    expect(world.state.decision?.model).toBe('sonnet')
    expect(world.state.decision?.action.kind).toBe('switch')
  })
})

describe('footer indicator', () => {
  test('a session that fits the task shows only the tag', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: DESIGN, prompt_id: 'p1' })

    expect(textOf(await $.ui.render(MODE))).toBe('[ROUTER]')
  })

  test('a recommended switch shows the command, without a warning sign', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: ARCHITECTURE, prompt_id: 'p1' })

    expect(textOf(await $.ui.render(MODE))).toBe('[ROUTER] ↻ /model opus')
  })

  test('hiding the band leaves only the tag', async ($, on) => {
    worldOf(on)
    await $.session.start(SESSION)
    await $.classic.UserPromptSubmit({ prompt: MECHANICAL, prompt_id: 'p1' })
    await $.ui.render(BAND)
    await $.ui.press({ plugin: 'digitalizate-model-router', key: 'dismiss' })

    expect(textOf(await $.ui.render(MODE))).toBe('[ROUTER]')
  })

  test('an escalation signal shows up and keeps the other modes', async ($, on) => {
    worldOf(on, { model: 'claude-sonnet-5-5' })
    on('tool.call', { tool: 'Edit' }, () => ({ result: {} as never, text: 'ok' }))
    on('tool.call', { tool: 'Bash' }, () => ({ isError: true as const, result: 'Exit code 1', text: 'Exit code 1\nFAIL src/a.test.ts' }))

    await $.session.start(SESSION)
    await $.tool.call({ tool: 'Edit', file_path: '/work/src/a.ts', old_string: 'a', new_string: 'b' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })
    await $.tool.call({ tool: 'Bash', command: 'npm test' })

    expect(textOf(await $.ui.render({ ...MODE, props: { modes: ['focus'] } }))).toBe('focus & [ROUTER] ↑ escalar')
  })
})
