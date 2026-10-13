---
id: "UX-543"
title: "Gestalt Multistability: Avoiding Ambiguous UI Elements"
category: "Gestalt Principles"
subcategory: "Multistability — Anti-Pattern"
score: 4
context: "Icon-heavy toolbars, toggle controls, navigation icons, status indicators"
goals:
  - "Structure Navigation for Deep Products"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
  - "navigation"
  - "tables"
  - "cognitive-load"
wireframe: "https://files.catbox.moe/64tjgo.jpg"
notion: "https://app.notion.com/p/Gestalt-Multistability-Avoiding-Ambiguous-UI-Elements-997a9aed5344834199fd016efe6a61ef"
---

## Why
Gestalt Multistability describes visual figures that can be perceived in two conflicting ways simultaneously — the classic example being Rubin's Vase (faces or vase). In UI design, multistability is almost always an anti-pattern: ambiguous icons that read as two different functions, toggle states that are unclear about on/off, or icons with multiple valid interpretations cause users to pause and resolve the ambiguity cognitively. The IxDF documents that we first perceive the foreground (stable figure) and only then can consciously seek the alternative interpretation. Any interactive UI element that requires users to perform this two-stage resolution is failing basic clarity. Exceptions exist in creative/artistic contexts.

## How to implement
- Test every icon with a 5-second recognition study: if >15% of users misidentify the icon's function, redesign it
- Avoid toggle icons that use the same imagery for both on and off states — use distinct icons or state labels
- For ambiguous shapes, add text labels rather than relying on icons alone
- Review icons that have emerged as locally ambiguous within your domain (e.g., 'star' = favorite OR rating) and add labels in those contexts
- Never rely on user familiarity with a specific cultural symbol in a global product without testing with target markets

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Use unmoderated usability tests to identify ambiguous elements by tracking hesitation time and error clicks; A/B test resolved versus ambiguous UI elements and measure error rate and task success rate changes.

## Sources
- [IxDF — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
- [Lazarev Agency — Gestalt Principles](https://www.lazarev.agency/articles/gestalt-principles-of-design)
- [HeyMarvin — Gestalt Principles](https://heymarvin.com/resources/gestalt-principles-examples-in-real-life)
