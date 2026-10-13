---
id: "UX-041"
title: "Distinct Visual States for Clickable, Selected, and Plain Elements"
category: "Component Patterns"
subcategory: "Visual affordance and state encoding"
score: 5
context: "Apply to navigation systems, data table rows, button sets, filter chips, and any interactive component in a design system."
goals:
  - "Design Forms That Work"
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/f9dnd7.jpg"
notion: "https://app.notion.com/p/Distinct-Visual-States-for-Clickable-Selected-and-Plain-Elements-de2a9aed534482b7a31501527383ae44"
---

## Why
Interactive elements (clickable), selected elements (chosen), and plain text must have clearly distinct visual styles applied consistently. Blurring these three states creates navigation confusion — users don't know what they can interact with or what their current selection is. A system-wide three-state visual language is fundamental to every enterprise design system. Inconsistency between modules (one team uses blue links, another uses gray underlines) is a common sign of missing design system governance.

## How to implement
- Establish a system-wide three-state visual language: default/interactive (e.g., blue underline or hover cue), selected/active (e.g., filled background, stronger weight), and non-interactive plain text.
- Apply these consistently across all components in the design system.
- In data tables, selected rows must have an unambiguous highlight distinct from hover state.
- Ensure links are visually differentiated from plain text independent of hover state.
- Enforce these states through a design system component library with documented state variants.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Confidence rating, Ease-of-use score, CSAT
  **How to measure**: Run usability tests with tasks requiring users to distinguish interactive from non-interactive elements, measuring error rate and hesitation time. Track misclick rates in production analytics on pages where visual state distinctions are weak vs. strong.

## Sources
- [Good UI — Distinct Clickable/Selected Styles](https://goodui.org/#6)
