---
id: "UX-546"
title: "Proximity Anti-Pattern: USPS-Style Form Field Misalignment"
category: "Gestalt Principles"
subcategory: "Proximity — Anti-Pattern"
score: 5
context: "Government forms, registration forms, complex data-entry UIs, multi-column form layouts"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "tables"
  - "accessibility"
wireframe: "https://files.catbox.moe/7vh4f9.jpg"
notion: "https://app.notion.com/p/Proximity-Anti-Pattern-USPS-Style-Form-Field-Misalignment-4eaa9aed534482cf907401a131ba0cdc"
---

## Why
The proximity principle creates an assumption of relationship between adjacent elements that designers must carefully control in form design. The USPS form failure case — documented by Chameleon's UX research and widely cited in accessibility design literature — shows fields c and d positioned closer to the wrong input boxes than to the correct ones, causing users to enter data in incorrect fields. This is a pure proximity anti-pattern: the spatial relationship overrides the field numbering as a grouping cue. The fundamental rule violated is that the label-to-field distance must always be smaller than the field-to-next-label distance, or ambiguity about which label governs which field is inevitable.

## How to implement
- Maintain a minimum 2:1 ratio between label-to-next-field gap and label-to-its-own-field gap
- Always position field labels directly above (4-8px gap) or to the left (16px gap) of their input
- Never let a label's vertical center align closer to the field above it than to its own field
- Run a proximity audit by temporarily hiding all label text — the spatial layout alone should imply which labels belong to which fields
- For multi-column forms, use explicit section headers or card enclosure to prevent cross-column proximity confusion

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Completion rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Audit existing forms for proximity anti-patterns (labels visually closer to the wrong field) and measure the error rate on those specific fields in usability testing. Before-and-after comparison of field error rates after fixing misaligned label-field proximity provides a direct, quantifiable impact measurement.

## Sources
- [Chameleon — Bad UX Examples](https://www.chameleon.io/blog/bad-ux-examples)
- [Nielsen Norman Group — Proximity Principle](https://www.nngroup.com/articles/gestalt-proximity/)
