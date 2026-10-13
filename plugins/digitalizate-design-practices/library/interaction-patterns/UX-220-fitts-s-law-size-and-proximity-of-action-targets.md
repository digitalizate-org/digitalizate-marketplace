---
id: "UX-220"
title: "Fitts's Law — Size and Proximity of Action Targets"
category: "Interaction Patterns"
subcategory: "Target size and placement"
score: 5
context: "Apply to all interactive element sizing and placement decisions — buttons, form fields, menu items, table row actions, toolbar icons. Critical in dense data-heavy enterprise UIs where users spend hours with mouse precision."
goals:
  - "Reduce Cognitive Load"
tags:
  - "mobile"
wireframe: "https://files.catbox.moe/4q749x.jpg"
notion: "https://app.notion.com/p/Fitts-s-Law-Size-and-Proximity-of-Action-Targets-0eba9aed5344828c810781730e0117ca"
---

## Why
The time to acquire a target is a function of its distance and inversely of its size. Fast movements to small targets produce higher error rates. Primary action buttons must be the largest button in any context. Place action controls close to the content they affect — inline edit controls appear next to the cell, Submit appears adjacent to the last form field. Screen edges act as infinite targets in mouse-driven desktop UIs, making them ideal for global persistent actions. In data tables, making the entire row clickable rather than a small link text applies this law directly.

## How to implement
- Make primary action buttons (Save, Submit, Confirm) large enough for confident clicking — minimum 44×44px even on desktop.
- Place destructive actions (Delete) and non-destructive actions (Save) with sufficient spacing to prevent mis-clicks.
- Use icons with text labels — the larger combined target reduces acquisition time and eliminates ambiguity.
- In data tables, make the full row clickable for navigation actions.
- Use edge/corner placement for persistent floating actions.
- Avoid small targets crowded together.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Mis-click rate reduction
- **Efficiency**: Time to acquire target, Error rate reduction
- **Accessibility**: Touch target compliance (WCAG 2.5.5), Motor accessibility
**How to measure**: Track click accuracy rates on primary vs. secondary buttons; measure mis-click events on destructive actions; run A/B tests on button sizes to quantify task completion time improvements.

## Sources
- [Nielsen Norman Group — Fitts's Law and Its Applications in UX](https://www.nngroup.com/articles/fitts-law/)
- [Laws of UX — Fitts's Law](https://lawsofux.com/fittss-law/)
