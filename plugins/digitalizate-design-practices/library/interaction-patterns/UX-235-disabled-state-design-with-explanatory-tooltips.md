---
id: "UX-235"
title: "Disabled State Design with Explanatory Tooltips"
category: "Interaction Patterns"
subcategory: "Component States"
score: 5
context: "All interactive elements that may be conditionally disabled — buttons, form fields, menu items, navigation links, bulk actions."
goals:
  - "Design Effective Feedback & Error States"
wireframe: "https://files.catbox.moe/df8bb9.jpg"
notion: "https://app.notion.com/p/Disabled-State-Design-with-Explanatory-Tooltips-173a9aed534483d09fbc01c1475440e2"
---

## Why
Disabled states must communicate both that an element is inactive and why it is inactive. Unexplained disabled buttons are among the most frustrating enterprise UX patterns — users cannot diagnose why an action is unavailable, whether it's a permission issue, a prerequisite condition, or a bug. A tooltip on every disabled element that explains the condition required for activation transforms a frustrating dead-end into an actionable instruction.

## How to implement
- Disabled styling: 40% opacity, not-allowed cursor.
- Tooltip on hover (critical): brief explanation of the condition that prevents activation ("You need Admin permissions to delete this record" or "Select at least one item to export").
- If resolvable by the user, include a link to take that action ("Complete the required fields to enable Submit").
- Never disable elements without a tooltip explanation.
- Test disabled states with keyboard navigation to ensure focus states work correctly.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Track confusion events around disabled controls (repeated clicks, support contacts) in analytics and support logs; run usability tests comparing disabled states with and without explanatory tooltips, measuring time-on-task and user-reported confidence.

## Sources
- [Carbon Design System — Disabled States](https://carbondesignsystem.com/patterns/overview/)
