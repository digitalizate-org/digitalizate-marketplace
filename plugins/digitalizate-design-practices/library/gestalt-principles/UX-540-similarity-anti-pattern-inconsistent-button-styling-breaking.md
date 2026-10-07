---
id: "UX-540"
title: "Similarity Anti-Pattern: Inconsistent Button Styling Breaking Affordance Expectations"
category: "Gestalt Principles"
subcategory: "Similarity — Anti-Pattern"
score: 5
context: "Design systems, component audits, cross-team products with inconsistent design patterns"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "navigation"
  - "cognitive-load"
  - "responsive"
  - "design-system"
wireframe: "https://files.catbox.moe/x3e3mt.jpg"
notion: "https://app.notion.com/p/Similarity-Anti-Pattern-Inconsistent-Button-Styling-Breaking-Affordance-Expectations-baca9aed5344822f928681142d78e05c"
---

## Why
When interactive buttons are styled inconsistently across a product — some filled, some outlined, some text-only, with no consistent tier system — users cannot build reliable affordance expectations through Similarity. The IxDF analysis of ZARA's mobile site documents this failure: non-standard navigation menus, hidden primary actions, and inconsistently styled CTAs all force users into cognitive re-evaluation on every screen interaction, doubling scanning time. The NYU website example, where similar-shade purple sections blend together due to insufficient similarity contrast between interactive and non-interactive elements, represents the same principle from the opposite direction: over-similarity making interactive items invisible.

## How to implement
- Define exactly 3-4 button tiers with non-overlapping visual signatures (Primary, Secondary, Tertiary, Destructive)
- Audit every button in your product against the tier definition — any deviation must be intentional and documented
- Ensure the Primary button style is used exclusively for primary actions — never repurpose it for secondary functions
- Test: can a new user identify which buttons are clickable within 3 seconds of seeing a new screen?
- Add to design system documentation: a visual regression test that flags any new button style not matching a defined tier

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run a first-click test presenting screens with inconsistent button styles, measuring the rate at which users click non-primary buttons by mistake. Compare error rates and time on task against a corrected version with consistent button hierarchy to quantify the cost of the anti-pattern.

## Sources
- [IxDF — Bad UX Examples](https://www.interaction-design.org/literature/article/bad-ux-examples)
- [IxDF — Law of Similarity](https://www.interaction-design.org/literature/topics/law-of-similarity)
- [Inkbot Design — Gestalt Principles](https://inkbotdesign.com/gestalt-principles/)
