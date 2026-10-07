---
id: "UX-521"
title: "Prägnanz in Progressive Disclosure"
category: "Gestalt Principles"
subcategory: "Prägnanz"
score: 5
context: "Settings pages, complex forms, professional tool UIs, admin panels"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
wireframe: "https://files.catbox.moe/zjq004.jpg"
notion: "https://app.notion.com/p/Pr-gnanz-in-Progressive-Disclosure-0c2a9aed53448266852d81857a53df74"
---

## Why
Progressive disclosure is the UI pattern most closely aligned with Prägnanz: surface only what the user needs to perceive right now and hide complexity until it is requested. When an interface exposes all controls and options simultaneously, it violates Prägnanz by forcing users to visually parse complexity they do not yet need. Google's search homepage is the canonical Prägnanz success case: a single text input and two buttons represent the simplest form of a system that is capable of enormously complex operations. The IxDF notes that Prägnanz-compliant interfaces must, however, avoid over-simplification that removes access to functionality users do need — the art is calibrating the minimum perceptual complexity that still serves all use cases.

## How to implement
- Default to showing only the top 3-5 most-used options; reveal advanced settings behind an 'Advanced' toggle
- Use disclosure triangles, accordions, or 'More options' expansion patterns rather than tabs that show all content simultaneously
- Audit each screen: identify any element visible to 100% of users that is only needed by <20% — consider hiding it
- Apply the 'newspaper front page' test: the most important element should be visually unmistakable; secondary items should recede

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Cognitive load reduction
- **Satisfaction**: Perceived simplicity, Learnability
**How to measure**: Track advanced settings usage rate to validate disclosure thresholds; measure time-to-first-action on pages before and after progressive disclosure; run usability tests counting confusion events from interface complexity.

## Sources
- [IxDF — Law of Prägnanz](https://www.interaction-design.org/literature/topics/law-of-praegnanz)
- [Gestalt Principles — Prägnanz](https://www.gestaltprinciples.com/principles/pragnanz)
