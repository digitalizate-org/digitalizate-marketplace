import type { Confidence, SpawnVerdict } from '../types'

export const CONFIDENCE_LABEL: Record<Confidence, string> = { high: 'alta', medium: 'media', low: 'baja' }

export const VERDICT_LABEL: Record<SpawnVerdict, string> = { pass: 'pasa', rewrite: 'reescrito', reject: 'rechazado', warn: 'aviso' }

export const SOURCE_LABEL = { heuristic: 'heurística', classifier: 'clasificador' } as const
