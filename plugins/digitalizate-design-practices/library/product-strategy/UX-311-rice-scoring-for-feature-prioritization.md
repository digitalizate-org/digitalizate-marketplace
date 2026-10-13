---
id: "UX-311"
title: "RICE Scoring for Feature Prioritization"
category: "Product Strategy"
subcategory: "Prioritization Frameworks"
score: 5
context: "Use when prioritizing competing feature investments and when stakeholder pressure is distorting prioritization toward high-visibility but low-impact work."
goals:
  - "Present & Defend Design Decisions"
wireframe: "https://files.catbox.moe/sam14h.jpg"
notion: "https://app.notion.com/p/RICE-Scoring-for-Feature-Prioritization-b63a9aed5344834f8d2981abf5486a1a"
---

## Why
Score feature candidates using RICE: Reach (how many users affected per period), Impact (how significantly per user, on a 0.25–3× multiplier scale), Confidence (how certain is the estimate, as a percentage), and Effort (person-weeks). Divide (Reach × Impact × Confidence) by Effort to get a RICE score. RICE provides a structured, defensible method for comparing disparate initiatives and reduces the influence of stakeholder opinion on prioritization decisions. It makes implicit trade-offs explicit and creates a common language for prioritization discussions.

## How to implement
- Create a RICE scoring spreadsheet for all candidate features.
- Define scales consistently: Impact multipliers 0.25 (minimal), 0.5 (low), 1 (medium), 2 (high), 3 (massive).
- Confidence percentages: 100% (known), 80% (confident), 50% (uncertain), 20% (speculative).
- Sort by RICE score.
- Use as the primary prioritization input, documenting explicit overrides for strategic reasons (market timing, partnership requirements) so all exceptions are transparent and auditable.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time saved per task
- **Adoption & Retention**: Returning visitors, Account creation rate
- **Satisfaction & Perception**: CSAT, NPS
**How to measure**: After prioritizing features with RICE scoring, compare the usability and adoption benchmarks of highly-scored features versus lower-scored ones to validate scoring criteria. Track overall product satisfaction (NPS, CSAT) across release cycles to assess whether RICE-prioritized roadmaps deliver higher user value per unit of development effort.

## Sources
- [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
