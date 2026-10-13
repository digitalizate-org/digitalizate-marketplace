---
id: "UX-511"
title: "Buried CTA Anti-Pattern: Proximity Violation"
category: "Gestalt Principles"
subcategory: "Proximity — Anti-Pattern"
score: 5
context: "Checkout flows, modal dialogs, onboarding wizards, forms with opt-outs"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
wireframe: "https://files.catbox.moe/dtapse.jpg"
notion: "https://app.notion.com/p/Buried-CTA-Anti-Pattern-Proximity-Violation-5c4a9aed53448274bfc4815144f81487"
---

## Why
A critical misapplication of proximity occurs when secondary actions (e.g., 'Skip account creation', 'Decline insurance') are placed far from the primary flow, forcing users who seek alternatives to hunt. NNGroup research identifies this as a 'tunnel-vision' trigger: users focused on the primary CTA cluster genuinely miss opt-out options. The same principle applies to inline validation errors placed far from their triggering field, and to instructional copy anchored at the top of the screen above a scrollable form. In Ryanair's documented case, the opt-out from travel insurance was buried in a country dropdown, a textbook proximity violation that intentionally obscures alternatives.

## How to implement
- Place 'Skip', 'Decline', or destructive alternatives within 16-24px of the primary CTA they contrast with
- Never put inline validation errors more than 8px from the field edge they reference
- Conduct a 5-second test: can users locate the secondary option without scanning the full page?
- Audit each screen for any informational/instructional text separated from its subject by more than two viewport heights

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Engagement & Usage**: Clickthrough rate, Abandonment rate
- **Revenue**: Conversion rate
**How to measure**: A/B test layouts that fix CTA proximity violations against control versions, measuring CTA clickthrough rate and funnel conversion rate; track task completion rate for flows where the buried CTA was the next step.

## Sources
- [Nielsen Norman Group — Proximity Principle in UI](https://www.nngroup.com/articles/gestalt-proximity/)
- [Chameleon — 10 Bad UX Examples](https://www.chameleon.io/blog/bad-ux-examples)
- [IxDF — Bad UX Examples](https://www.interaction-design.org/literature/article/bad-ux-examples)
