import { describe, expect, test } from 'claude-code/testing'

import { admitsNoVerification, commandFailed, newTrack, noteCommand, noteEdit, pendingVerification, writeChange } from '../hooks/track'

const OLD = 'const total = items.reduce((sum, item) => sum + item.price, 0)'
const NEW = 'const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)'

describe('escalation signals', () => {
  test('writing a file over several edits is not circling', async () => {
    const track = newTrack()

    for (let index = 0; index < 7; index += 1) {
      expect(noteEdit(track, 'tests/a.test.ts', { before: `bloque ${index} viejo`, after: `bloque ${index} nuevo` })).toBeUndefined()
    }
  })

  test('restoring code removed in the same turn is circling, once only', async () => {
    const track = newTrack()

    expect(noteEdit(track, 'src/a.ts', { before: OLD, after: NEW })).toBeUndefined()
    expect(noteEdit(track, 'src/a.ts', { before: NEW, after: OLD })?.key).toBe('circling')
    expect(noteEdit(track, 'src/a.ts', { before: OLD, after: NEW })).toBeUndefined()
  })

  test('rewriting a file with earlier content is circling', async () => {
    const track = newTrack()
    const first = 'export const limit = 10\nexport const retries = 3\n'
    const second = 'export const limit = 20\nexport const retries = 5\n'

    expect(noteEdit(track, 'src/b.ts', writeChange(track, 'src/b.ts', first))).toBeUndefined()
    expect(noteEdit(track, 'src/b.ts', writeChange(track, 'src/b.ts', second))).toBeUndefined()
    expect(noteEdit(track, 'src/b.ts', writeChange(track, 'src/b.ts', first))?.key).toBe('circling')
  })

  test('eight distinct edits to the same file in a turn raise no signal', async () => {
    const track = newTrack()

    for (let index = 0; index < 8; index += 1) {
      expect(noteEdit(track, 'src/a.ts', { before: `bloque ${index} viejo`, after: `bloque ${index} nuevo` })).toBeUndefined()
    }
  })

  test('three consecutive verification failures after editing is patching symptoms', async () => {
    const track = newTrack()

    noteEdit(track, 'src/a.ts')
    expect(noteCommand(track, 'npm test', true)).toBeUndefined()
    noteEdit(track, 'src/a.ts')
    expect(noteCommand(track, 'npm test', true)).toBeUndefined()
    expect(noteCommand(track, 'npm test', true)?.key).toBe('symptoms')
  })

  test('a success resets the streak', async () => {
    const track = newTrack()

    noteEdit(track, 'src/a.ts')
    noteCommand(track, 'npm test', true)
    noteCommand(track, 'npm test', true)
    noteCommand(track, 'npm test', false)
    expect(noteCommand(track, 'npm test', true)).toBeUndefined()
  })
})

describe('pending verification', () => {
  test('editing code leaves verification pending until tests run', async () => {
    const track = newTrack()

    noteEdit(track, 'src/a.ts')
    expect(pendingVerification(track)).toEqual(['src/a.ts'])

    noteCommand(track, 'cat src/a.ts', false)
    expect(pendingVerification(track)).toEqual(['src/a.ts'])

    noteCommand(track, 'pnpm run typecheck', false)
    expect(pendingVerification(track)).toEqual([])
  })

  test('editing docs or config without a build requires no verification', async () => {
    const track = newTrack()

    noteEdit(track, 'README.md')
    noteEdit(track, 'docs/CHANGELOG')
    noteEdit(track, '.gitignore')
    noteEdit(track, '.claude/settings.json')
    noteEdit(track, 'src/styles.css')
    expect(pendingVerification(track)).toEqual([])
  })

  test('a compound command verifies if any of its segments verifies', async () => {
    const track = newTrack()

    noteEdit(track, 'src/a.ts')
    noteCommand(track, 'ls dist && npm run build', false)
    expect(pendingVerification(track)).toEqual([])

    noteEdit(track, 'src/a.ts')
    noteCommand(track, 'cat .nvmrc; npm test 2>&1 | tail -20', false)
    expect(pendingVerification(track)).toEqual([])
  })

  test('running the changed script counts as verification', async () => {
    const track = newTrack()

    noteEdit(track, 'scripts/deploy.sh')
    noteCommand(track, 'bash scripts/deploy.sh --dry-run', false)
    expect(pendingVerification(track)).toEqual([])
  })

  test('detects failures from the tool error or from the output text', async () => {
    expect(commandFailed(true, '')).toBe(true)
    expect(commandFailed(undefined, 'Tests: 2 failed, 10 passed')).toBe(true)
    expect(commandFailed(undefined, 'Found 0 errors')).toBe(false)
  })

  test('recognizes when the model admits it could not verify', async () => {
    expect(admitsNoVerification('Listo, pero no pude correr los tests porque falta la base de datos.')).toBe(true)
    expect(admitsNoVerification('Listo, todo funciona.')).toBe(false)
  })
})
