---
id: "UX-637"
title: "Design - Foundations & Component Scope"
category: "Design Systems & Tokens"
subcategory: "Foundations & components"
score: 5
context: "Use when establishing or resetting a system's baseline."
goals:
  - "Design a Consistent System at Scale"
  - "Improve Readability & Visual Clarity"
tags:
  - "design-system"
notion: "https://app.notion.com/p/Design-Foundations-Component-Scope-68da9aed53448258989f01ac49cdf0e8"
---

## Core practice
Build a design system from explicit foundations before attempting a large component catalog. Foundations express the product’s visual and behavioural language: principles, colour, type, spacing, elevation, icons, motion, layout, accessibility expectations, and content conventions. Components then apply those decisions consistently in a reusable interface contract.
The system should be small enough to learn from and structured enough to scale. Treat it as an adaptable operating system, not a component dump.

## Recommended model
Use three layers:
- **Foundations:** primitive decisions and rules—type scale, colour scales, spacing, grid, density, radii, elevation, motion, and accessibility baselines.
- **Components:** reusable, bounded interface objects with anatomy, variants, states, behaviours, and implementation guidance.
- **Patterns:** purposeful arrangements of components that solve a recurring user job, such as bulk selection, filtering a table, or confirming a risky action.
A reliable rule: create a **component** when the same object and behaviour recur; create a **variant** when the intent is the same but a controlled property changes; create a **pattern** when several components must work together to complete a task.

## Worked examples
**Example 1 — variant, not a new component**
A team requests a “marketing button” because their landing page needs a large green CTA. Do not create a second Button component if the interaction and semantics are unchanged. Use the existing Button with a size and emphasis variant:
- Button / size=large / emphasis=primary
- The semantic token maps to the approved action colour for that theme
- The component retains the same focus, disabled, loading, and keyboard behaviour
**Example 2 — pattern, not a component**
A product team requests a “patient search component.” The UI contains a text input, search button, loading state, empty result state, result list, pagination, keyboard navigation, and an error/retry state. This is a **search pattern** composed from existing inputs, buttons, list rows, feedback, and pagination; documenting it as a single opaque component would hide important variation.

## How to implement
1. Write 3–5 product-specific design principles that clarify trade-offs.
1. Establish the smallest viable scale for core visual decisions; avoid creating dozens of values without evidence.
1. Define the component anatomy and state model before styling variants.
1. Add a “use / do not use” rule and accessibility requirements to every released component.
1. Start with the recurring elements that unblock a priority flow; expand only when real reuse demonstrates a need.

## Quality checks
- Every component has a repeatable job, not merely a similar appearance.
- Every variant preserves semantic intent and required behaviour.
- Foundations are available in design and code, rather than being manually recreated.
- Components cover disabled, hover, focus, selected, loading, empty, error, and responsive states where relevant.
- The initial library supports a real end-to-end flow, not just a collection of isolated atoms.
