---
id: "UX-103"
title: "Show Don't Tell — Living Documentation"
category: "Design Process & Methodology"
subcategory: "Design Communication"
score: 5
context: "Use at every design-to-engineering handoff, when presenting design decisions to stakeholders, and when documenting design rationale."
goals:
  - "Present & Defend Design Decisions"
wireframe: "https://files.catbox.moe/ocmk0h.jpg"
notion: "https://app.notion.com/p/Show-Don-t-Tell-Living-Documentation-f23a9aed534482f9a0b401d9b62a2121"
---

## Why
Make design intent visible through prototypes, annotated mocks, and behavioral specifications rather than relying on verbal or text descriptions. Prototypes communicate more accurately than prose and prevent misinterpretation at the design-to-engineering handoff. For enterprise software, annotated wireframes and interactive prototypes are specifications, not illustrations — they are the primary source of truth for what gets built. Verbal agreements about design intent are forgotten or misremembered; annotated prototypes are precise and persistent.

## How to implement
- Annotate all wireframes with interaction notes, state variations (empty, loading, error, disabled, hover), and edge case behaviors.
- Build interactive prototypes for all flows that are difficult to describe in static screens.
- Treat the prototype as the primary specification artifact — if it's not in the prototype, it's not specified.
- For complex components, create a state matrix document alongside the prototype showing all possible combinations.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Training time, Support tickets reduction
- **Adoption & Retention**: Signup completion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Compare feature activation rates and time-to-first-use for features documented with living examples versus static text documentation; track support tickets for features with and without interactive documentation to measure comprehension improvement.
- Annotate all wireframes with interaction notes, state variations (empty, loading, error, disabled, hover), and edge case behaviors.
- Build interactive prototypes for all flows that are difficult to describe in static screens.
- Treat the prototype as the primary specification artifact — if it's not in the prototype, it's not specified.
- For complex components, create a state matrix document alongside the prototype showing all possible combinations.

## Sources
- [IDEO / Cantina](https://cantina.co/applying-ideo-design-thinking-principles-to-software-engineering/)
