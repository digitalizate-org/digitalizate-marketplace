import type { Confidence, Effort, Tier } from '../types'
import { CATEGORIES, type Category, NEUTRAL_LABEL, TIER_RANK } from './matrix'

export type Scored = {
  category: Category
  score: number
  matched: string[]
  hasStrong: boolean
}

export type TaskClassification = {
  kind: 'task'
  category: Category
  tier: Tier
  effort: Effort
  confidence: Confidence
  isStrong: boolean
  signals: string[]
  risk?: Category
  ranked: Scored[]
}

export type Classification =
  | { kind: 'trivial' }
  | { kind: 'neutral'; reason: NeutralReason }
  | TaskClassification

export type NeutralReason = 'no-signals' | 'question' | 'classifier-neutral'

export const NEUTRAL_REASON_LABEL: Record<NeutralReason, string> = {
  'no-signals': 'sin señales de la matriz',
  question: 'pregunta sin tarea',
  'classifier-neutral': 'el clasificador lo leyó como pregunta o conversación',
}

export type ClassifyContext = {
  images?: number
}

const MAX_TEXT = 6000
const SCORE_CAP = 9
const STRONG = 3

const TRIVIAL = /^((hola|hey|buenas( noches| tardes)?|buenos dias|gracias|muchas gracias|thanks|thank you|ok|okay|vale|dale|listo|perfecto|genial|excelente|bien|claro|entendido|si|no|sigue|continua|continue|go on|yes|sure|de una|hagale|hazlo|procede)[\s,!.?¿¡]*)+$/
const QUESTION = /^(¿|que |como |por que|cual|cuando|donde|explica|explain|what|how|why|which|when|where|is |are |does |do |can )/
const TASK_VERB = /\b(crea|haz|hazme|implementa|agrega|anade|arregla|corrige|refactoriza|migra|escribe|genera|construye|disena|revisa|actualiza|elimina|borra|mueve|renombra|configura|instala|despliega|add|create|implement|fix|refactor|write|build|update|remove|delete|deploy|install|configure|review|migrate)\w*\b/

const SMALL_TASK = /\b(typo|errata|una (sola )?linea|one[- ]liner|one line|rapidit\w*|quick fix|small fix|cambio (chico|pequeno|menor)|minor (change|fix|tweak))\b/
const LARGE_TASK = /\b(en todos los archivos|en todo el (repo|proyecto|codigo)|across the (codebase|repo|project)|masiv\w*|bulk|en lote|todos los (archivos|modulos))\b/

const TIE_ORDER: Record<Tier, number> = { sonnet: 0, opus: 1, fable: 2 }

export const LABELS: readonly string[] = [...CATEGORIES.map(category => category.label), NEUTRAL_LABEL]

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function scoreAll(norm: string, context: ClassifyContext = {}): Scored[] {
  return CATEGORIES.map(category => {
    const matched: string[] = []
    let score = 0
    let hasStrong = false

    for (const [pattern, weight, name] of category.signals) {
      if (!pattern.test(norm)) {
        continue
      }

      score += weight
      hasStrong ||= weight >= STRONG

      if (!matched.includes(name)) {
        matched.push(name)
      }
    }

    if (category.id === 'vision' && (context.images ?? 0) > 0) {
      score += 4
      hasStrong = true

      if (!matched.includes('imagen adjunta')) {
        matched.push('imagen adjunta')
      }
    }

    return { category, score: Math.min(score, SCORE_CAP), matched, hasStrong }
  })
}

function byStrength(a: Scored, b: Scored): number {
  return (
    b.score - a.score ||
    Number(b.category.isRisk === true) - Number(a.category.isRisk === true) ||
    TIE_ORDER[a.category.tier] - TIE_ORDER[b.category.tier]
  )
}

function confidenceOf(top: Scored, rival: Scored | undefined): Confidence {
  const margin = top.score - (rival?.score ?? 0)

  if (top.score >= 4 && margin >= 2) {
    return 'high'
  }

  return top.score >= 2 && margin >= 1 ? 'medium' : 'low'
}

export function classify(text: string, context: ClassifyContext = {}): Classification {
  const norm = normalize(text).slice(0, MAX_TEXT)
  const hasImages = (context.images ?? 0) > 0

  if (!hasImages && (norm.length < 12 || TRIVIAL.test(norm) || norm.startsWith('/'))) {
    return { kind: 'trivial' }
  }

  const ranked = scoreAll(norm, context)
    .filter(scored => scored.score > 0)
    .sort(byStrength)
  const top = ranked[0]

  if (top === undefined) {
    return { kind: 'neutral', reason: 'no-signals' }
  }

  if (QUESTION.test(norm) && !TASK_VERB.test(norm) && top.score < STRONG) {
    return { kind: 'neutral', reason: 'question' }
  }

  const rival = ranked.find(scored => scored.category.tier !== top.category.tier)
  const risk =
    top.category.isRisk === true
      ? undefined
      : ranked.find(
          scored =>
            scored.category.isRisk === true &&
            scored.hasStrong &&
            scored.score >= STRONG &&
            scored.score >= top.score - 1 &&
            TIER_RANK[scored.category.tier] > TIER_RANK[top.category.tier],
        )

  return {
    kind: 'task',
    category: top.category,
    tier: risk?.category.tier ?? top.category.tier,
    effort: risk?.category.effort ?? top.category.effort,
    confidence: confidenceOf(top, rival),
    isStrong: top.hasStrong || risk !== undefined,
    signals: top.matched,
    ...(risk === undefined ? {} : { risk: risk.category }),
    ranked: ranked.slice(0, 3),
  }
}

export function needsSecondOpinion(classification: Classification, text: string): boolean {
  if (classification.kind === 'task') {
    return classification.confidence === 'low'
  }

  return classification.kind === 'neutral' && classification.reason === 'no-signals' && text.trim().length >= 40
}

export function withSecondOpinion(base: Classification, label: string): Classification {
  if (label === NEUTRAL_LABEL) {
    return { kind: 'neutral', reason: 'classifier-neutral' }
  }

  const category = CATEGORIES.find(candidate => candidate.label === label)

  if (category === undefined) {
    return base
  }

  if (base.kind === 'task' && base.category.id === category.id) {
    return { ...base, confidence: 'medium', signals: [...base.signals, 'clasificador coincide'] }
  }

  return {
    kind: 'task',
    category,
    tier: category.tier,
    effort: category.effort,
    confidence: 'medium',
    isStrong: false,
    signals: ['clasificador'],
    ranked: base.kind === 'task' ? base.ranked : [],
  }
}

export function isSmallTask(text: string): boolean {
  const norm = normalize(text)

  return SMALL_TASK.test(norm) && !LARGE_TASK.test(norm)
}

export function describeTask(classification: TaskClassification): string {
  return classification.risk === undefined
    ? classification.category.label
    : `${classification.category.label} (riesgo: ${classification.risk.label})`
}
