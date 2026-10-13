import type { AgentSpawnInput, On, RenderInput, RenderNode, SessionStartInput, TurnStepInput } from 'claude-code'
import { mock } from 'claude-code/testing'

import type { Calibration, Decision, Ledger, SessionView, SpawnRecord } from '../types'

export const SESSION: SessionStartInput = { surface: 'terminal', isInteractive: true, cwd: '/work' }

export const HOME = '/home/test'

export const AGENT_FILES: Readonly<Record<string, string>> = {
  'sonnet-implementer.md': '---\nname: sonnet-implementer\nmodel: claude-sonnet-5-5\neffort: medium\n---\nImplementa.',
  'opus-reviewer.md': '---\nname: opus-reviewer\nmodel: claude-opus-5-5\ntools: Read, Grep\n---\nRevisa.',
  'opus-debugger.md': '---\nname: opus-debugger\nmodel: claude-opus-5-5\n---\nDepura.',
  'fable-researcher.md': '---\nname: fable-researcher\nmodel: claude-fable-5-1\n---\nInvestiga.',
}

export const BAND: RenderInput<'AbovePrompt'> = {
  component: 'AbovePrompt',
  surface: 'terminal',
  requestId: 'band',
  viewport: { columns: 160, rows: 48, isFullscreen: true },
  props: {
    hasSurvey: false,
    isWorking: false,
    maxRows: 20,
    bodyColumns: 120,
    scroll: { offset: 0, bodyRows: 19 },
    view: {},
  },
}

export const PANE: RenderInput<'Pane'> = {
  component: 'Pane',
  surface: 'terminal',
  requestId: 'route',
  viewport: { columns: 180, rows: 48, isFullscreen: true },
  props: {
    title: 'Ruta de modelos',
    isFocused: false,
    bodyColumns: 72,
    placement: 'dock',
    scroll: { offset: 0, bodyRows: 44 },
    view: {},
  },
}

export type Captured = {
  decision?: Decision | null
  spawns?: SpawnRecord[]
  ledger?: Ledger
  signals?: string[]
  session?: SessionView
  calibration?: Calibration
}

export type World = {
  state: Captured
  model: string
  classified: string | undefined
  toasts: string[]
  statuses: (string | undefined)[]
  logs: string[]
  commands: string[]
  opened: string[]
  ran: string[]
  spawned: AgentSpawnInput[]
  steps: TurnStepInput[]
}

export type WorldOptions = {
  model?: string
  classified?: string
  settings?: unknown
  store?: Readonly<Record<string, unknown>>
}

export function worldOf(on: On, options: WorldOptions = {}): World {
  const world: World = {
    state: {},
    model: options.model ?? 'claude-opus-5-5',
    classified: options.classified,
    toasts: [],
    statuses: [],
    logs: [],
    commands: [],
    opened: [],
    ran: [],
    spawned: [],
    steps: [],
  }

  mock.clock(on)
  mock.store(on, options.store ?? {})

  on('state.set', ($, e, next) => {
    if (e.plugin === 'digitalizate-model-router') {
      ;(world.state as Record<string, unknown>)[e.key] = e.value
    }

    return next(e)
  })

  on('session.model', () => ({ value: world.model }))
  on('session.root', () => ({ value: '/work' }))
  on('env.get', ($, e) => ({ value: e.name === 'HOME' ? HOME : undefined }))
  on('settings.read', () => ({ value: (options.settings ?? {}) as never }))

  on('fs.list', ($, e) =>
    e.path === `${HOME}/.claude/agents`
      ? {
          value: Object.keys(AGENT_FILES).map(name => ({
            name,
            kind: 'file' as const,
            size: 1,
            mtimeMs: 0,
            isLink: false,
          })),
        }
      : { deny: `ENOENT: ${e.path}` },
  )

  on('fs.read', ($, e) => {
    const text = AGENT_FILES[e.path.split('/').pop() ?? '']

    return text === undefined ? { deny: `ENOENT: ${e.path}` } : { value: text as never }
  })

  on('command.register', ($, e) => {
    world.commands.push(e.name)

    return { value: { command: e.name } }
  })

  on('model.classify', () => (world.classified === undefined ? { deny: 'no model here' } : { value: world.classified }))

  on('ui.toast', ($, e) => {
    world.toasts.push(e.text)

    return { value: undefined }
  })

  on('ui.status', ($, e) => {
    world.statuses.push(e.text)

    return { value: undefined }
  })

  on('ui.log', ($, e) => {
    world.logs.push(e.text)

    return { value: undefined }
  })

  on('ui.open', ($, e) => {
    world.opened.push(e.id)

    return { value: { isPlaced: true } } as never
  })

  on('session.start', ($, e) => ({ cwd: e.cwd }))
  on('session.end', ($, e) => ({ sessionId: e.sessionId }))
  on('turn.start', ($, e) => ({ turnId: e.turnId }))
  on('prompt.submit', ($, e) => ({ text: e.text, ...(e.context === undefined ? {} : { context: e.context }) }))
  on('prompt.compose', () => ({ sections: [{ id: 'intro', text: 'base', scope: 'shared' as const }] }))
  on('ui.render', () => ({ type: 'Text', children: [''] }) as never)

  on('classic.UserPromptSubmit', () => ({}))
  on('classic.Stop', () => ({}))
  on('classic.SubagentStop', () => ({}))
  on('classic.PreModelSwitch', () => ({}))
  on('classic.PostModelSwitch', () => ({}))

  on('agent.spawn', ($, e) => {
    world.spawned.push(e)

    return { model: e.model ?? e.parentModel, agentId: `agent-${world.spawned.length}` }
  })

  on('command.run', { command: 'model' }, ($, e) => {
    world.ran.push(`model ${e.args}`)

    return { text: '' }
  })

  on('turn.step', async function* ($, e) {
    world.steps.push(e)

    return {
      turnId: e.turnId,
      index: e.index,
      answer: '',
      toolUses: [],
      stopReason: 'end_turn' as const,
      usage: {
        model: e.model,
        input_tokens: 1000,
        output_tokens: 2000,
        cache_read_input_tokens: 40000,
        cache_creation_input_tokens: 3000,
      },
    }
  })

  return world
}

export function spawnInput(fields: Partial<AgentSpawnInput> & Pick<AgentSpawnInput, 'subagentType' | 'prompt'>): AgentSpawnInput {
  return {
    tool_use_id: 'toolu_1',
    description: 'subtarea',
    provider: { plugin: 'engine', tier: 'core' },
    parentModel: 'claude-opus-5-5',
    background: false,
    fork: false,
    ...fields,
  }
}

export const command = (name: string, args = '') => ({
  command: name,
  args,
  origin: { kind: 'composer' as const },
  presentation: { isFullscreen: true, columns: 180 },
})

export function stringsOf(node: unknown): string[] {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return []
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return [String(node)]
  }

  if (Array.isArray(node)) {
    return node.flatMap(child => stringsOf(child))
  }

  const element = node as { type?: string; props?: Record<string, unknown>; children?: readonly RenderNode[] }
  const own = element.type === 'Button' && typeof element.props?.label === 'string' ? [element.props.label] : []

  return [...own, ...(element.children ?? []).flatMap(child => stringsOf(child))]
}

export const textOf = (node: unknown): string => stringsOf(node).join('')
