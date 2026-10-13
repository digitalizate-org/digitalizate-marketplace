---
id: "UX-234"
title: "Affordances — Make Interaction Cues Visible"
category: "Interaction Patterns"
subcategory: "Discoverability"
score: 5
context: "Use when designing interactive data tables, forms, and dashboards, and when users report being unaware of features or interactions."
goals:
  - "Reduce Cognitive Load"
tags:
  - "tables"
wireframe: "https://files.catbox.moe/sgayi0.jpg"
notion: "https://app.notion.com/p/Affordances-Make-Interaction-Cues-Visible-522a9aed5344824895ba81a838bf80ae"
---

## Why
Design visual cues (affordances) that communicate what users can do with each element: buttons should look pressable, text fields should look fillable, draggable elements should show drag handles, sortable columns should show sort indicators on hover. Users should be able to perceive possible interactions from the visual design alone, without trial and error. In data-heavy enterprise interfaces where almost everything might be clickable, sortable, or editable, clear affordances are the primary discovery mechanism.

## How to implement
- Audit every interactive element: does it visually communicate its interactivity in its default state? Apply systematically: hover states (background change, underline, or cursor change) for all clickable elements, drag handles for draggable items, directional arrows for sortable columns in their default or hover state, edit icon (pencil) for inline-editable fields, resize cursor for resizable boundaries.
- For complex tables, consider a persistent "Edit mode" toggle that makes all affordances visible simultaneously rather than relying solely on hover.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Track mis-click and error event rates in analytics for interaction-heavy interfaces; run usability tests comparing visible versus subtle affordance designs and measure task success rate and time-on-task.

## Sources
- [About Face Ch. 17 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
