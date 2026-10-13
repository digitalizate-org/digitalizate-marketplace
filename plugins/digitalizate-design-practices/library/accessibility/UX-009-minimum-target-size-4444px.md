---
id: "UX-009"
title: "Minimum Target Size — 44×44px"
category: "Accessibility"
subcategory: "Touch and Click Targets"
score: 4
context: "Use for all interactive controls, especially those in dense data tables, toolbars, and compact table row actions."
goals:
  - "Design for Accessibility & Inclusion"
tags:
  - "mobile"
  - "accessibility"
wireframe: "https://files.catbox.moe/j87zxg.jpg"
notion: "https://app.notion.com/p/Minimum-Target-Size-44-44px-60da9aed534483dcae5e01bbbfa85165"
---

## Why
Interactive controls should have a minimum target size of 44×44 CSS pixels to be operable by users with motor disabilities and to reduce accidental activations. Small tap targets are a leading cause of accidental activation and are particularly problematic in dense data tables and toolbars where adjacent targets are close together. This requirement applies to the clickable/tappable area, not necessarily the visual size — invisible padding can extend the hit area without changing the visual design.

## How to implement
- Ensure minimum 44×44px click target for all interactive controls.
- For visually smaller elements (icons, small buttons), increase the invisible hit area using padding or a `::after` pseudo-element with the larger area.
- Maintain adequate spacing between adjacent targets to prevent accidental activation of neighbors.
- In dense table rows, use padding to ensure row action buttons meet the minimum target size even when rows are compact.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, App store rating
  **How to measure**: Conduct usability testing on touch interfaces with tasks requiring tapping small targets, measuring miss rate and task completion time for targets at 44x44px vs. smaller sizes. Track accessibility-related app store reviews and support tickets mentioning tap or click difficulty.

## Sources
- [Level Access — WCAG 2.1 New Criteria](https://www.levelaccess.com/blog/wcag-2-1-exploring-new-success-criteria/)
