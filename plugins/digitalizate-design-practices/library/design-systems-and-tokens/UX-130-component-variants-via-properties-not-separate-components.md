---
id: "UX-130"
title: "Component Variants via Properties (Not Separate Components)"
category: "Design Systems & Tokens"
subcategory: "Component Architecture"
score: 4
context: "Use when building design system components with multiple visual variations in size, style, and state."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/16w0mo.jpg"
notion: "https://app.notion.com/p/Component-Variants-via-Properties-Not-Separate-Components-8fea9aed534482b5bfd80171c9486bc7"
---

## Why
Organize component variations — size, style, state — as properties within a single component rather than as separate components. A button should have `size` (sm/md/lg), `variant` (primary/secondary/ghost/danger), and `state` (default/hover/active/disabled/loading) as composition axes rather than being 30 separate components. This reduces design system library size, makes consistent usage easier, enables systematic documentation, and allows all variants to inherit from a single base component.

## How to implement
- Define a variant matrix for each component covering all legitimate combinations.
- Use consistent property naming across all components (`size`, `variant`, `state`, `disabled`, `loading`).
- Document which property combinations are valid and which produce unsupported states.
- Test all critical variants in Storybook or equivalent.
- In code, implement using compound variants or `cva` (class-variance-authority) for CSS-in-JS implementations.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Error rate, Task success rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track design team efficiency metrics such as time-to-first-prototype and the number of inconsistency bugs filed in QA after implementing component variants via properties. Monitor user-facing error rates tied to inconsistent component behavior across product surfaces.

## Sources
- [Penpot — Component Variants](https://penpot.app/blog/how-to-use-component-variants-to-scale-your-design-system/)
