import { normalize } from './classify'

export type LoopTrack = {
  seq: number
  edits: Map<string, number>
  removed: Map<string, string[]>
  written: Map<string, string>
  lastEditSeq: number
  unverified: Set<string>
  failStreak: number
  fired: Set<string>
}

export type EscalationSignal = {
  key: 'circling' | 'symptoms'
  text: string
}

export type EditChange = {
  before: string
  after: string
}

const FAIL_STREAK = 3
const MIN_REVERT_LENGTH = 20
const REMOVED_MEMORY = 30
const MAX_REMEMBERED = 20000

const CODE_FILE = /\.(ts|tsx|js|jsx|mjs|cjs|mts|cts|py|rb|go|rs|java|kt|kts|scala|swift|m|mm|c|cc|cpp|cxx|h|hh|hpp|cs|fs|php|vue|svelte|astro|sql|sh|bash|zsh|fish|ps1|lua|dart|ex|exs|erl|clj|hs|ml|r|jl|zig|nim|sol|graphql|gql|prisma|proto|tf|ipynb)$/i

const READ_ONLY_COMMAND = /^\s*(cat|less|more|head|tail|grep|rg|ag|sed -n|ls|ll|tree|wc|diff|file|stat|find|git (diff|status|log|show|blame)|echo|printf|pwd|which|type)\b/

const VERIFY_COMMAND = /\b(test|tests|jest|vitest|pytest|mocha|playwright|cypress|rspec|phpunit|go (test|build|vet)|cargo (test|build|check|clippy|run)|(npm|pnpm|yarn|bun) (run )?(test|build|lint|typecheck|check|verify)|npx (tsc|vitest|jest|eslint|playwright)|tsc|eslint|ruff|mypy|pyright|flake8|make|gradlew?|mvn|dotnet (test|build)|swift (test|build)|xcodebuild|deno (test|check|lint)|python3? -m (pytest|unittest|py_compile|mypy)|node --test|shellcheck|bash -n|sh -n|terraform (validate|plan)|docker (build|compose up)|claude plugin (test|validate)|php -l|ruby -c|rubocop|biome|oxlint|astro check|svelte-check|next build|vite build)\b/

const FAILURE_TEXT = /(^|\n)\s*(FAIL|FAILED)\b|\b[1-9]\d* (failed|failing|errors?)\b|error TS\d{4}|Traceback \(most recent call last\)|exit code [1-9]|Command failed/

const NO_VERIFICATION = /\b(no (pude|puedo|fue posible) (verificar|correr|ejecutar|probar)|sin verificar|no verifique|no hay (tests|pruebas|forma de verificar)|could ?n[o']?t (verify|run|test)|unable to (verify|run|test)|not (verified|tested)|no tests? (exist|available))\b/

export function newTrack(): LoopTrack {
  return {
    seq: 0,
    edits: new Map(),
    removed: new Map(),
    written: new Map(),
    lastEditSeq: 0,
    unverified: new Set(),
    failStreak: 0,
    fired: new Set(),
  }
}

export function isCodeFile(path: string): boolean {
  return CODE_FILE.test(path)
}

export function basename(path: string): string {
  return path.split('/').pop() ?? path
}

function mentionsFile(command: string, path: string): boolean {
  const name = basename(path)

  return name.length >= 4 && command.includes(name)
}

export function commandFailed(isError: boolean | undefined, text: string | undefined): boolean {
  return isError === true || FAILURE_TEXT.test(text ?? '')
}

export function admitsNoVerification(message: string): boolean {
  return NO_VERIFICATION.test(normalize(message))
}

function restoresRemoved(track: LoopTrack, path: string, change: EditChange | undefined): boolean {
  if (change === undefined) {
    return false
  }

  const removed = track.removed.get(path) ?? []
  const after = change.after.trim()
  const isRestore = after.length >= MIN_REVERT_LENGTH && removed.includes(after)
  const before = change.before.trim()

  if (before.length >= MIN_REVERT_LENGTH && before.length <= MAX_REMEMBERED && before !== after) {
    track.removed.set(path, [...removed, before].slice(-REMOVED_MEMORY))
  }

  return isRestore
}

export function writeChange(track: LoopTrack, path: string, content: string): EditChange {
  const before = track.written.get(path) ?? ''

  if (content.length <= MAX_REMEMBERED) {
    track.written.set(path, content)
  } else {
    track.written.delete(path)
  }

  return { before, after: content }
}

export function noteEdit(track: LoopTrack, path: string, change?: EditChange): EscalationSignal | undefined {
  track.seq += 1
  track.lastEditSeq = track.seq

  track.edits.set(path, (track.edits.get(path) ?? 0) + 1)

  if (isCodeFile(path)) {
    track.unverified.add(path)
  }

  const key = `circling:${path}`

  if (track.fired.has(key)) {
    return undefined
  }

  if (restoresRemoved(track, path, change)) {
    track.fired.add(key)

    return { key: 'circling', text: `da vueltas: en ${basename(path)} volvió a poner código que había quitado en este turno` }
  }

  return undefined
}

function verifies(track: LoopTrack, command: string): boolean {
  return command
    .split(/&&|\|\||;|\||\n/)
    .map(segment => segment.trim())
    .filter(segment => segment !== '' && !READ_ONLY_COMMAND.test(segment))
    .some(segment => VERIFY_COMMAND.test(segment) || [...track.edits.keys()].some(path => mentionsFile(segment, path)))
}

export function noteCommand(track: LoopTrack, command: string, hasFailed: boolean): EscalationSignal | undefined {
  if (!verifies(track, command)) {
    return undefined
  }

  track.seq += 1
  track.unverified.clear()

  if (!hasFailed) {
    track.failStreak = 0

    return undefined
  }

  track.failStreak += 1

  if (track.failStreak < FAIL_STREAK || track.lastEditSeq === 0 || track.fired.has('symptoms')) {
    return undefined
  }

  track.fired.add('symptoms')

  const shown = command.length > 48 ? `${command.slice(0, 45)}...` : command

  return { key: 'symptoms', text: `arregla síntomas: ${track.failStreak} fallos seguidos de \`${shown}\` tras editar` }
}

export function pendingVerification(track: LoopTrack): string[] {
  return [...track.unverified]
}
