---
id: "UX-140"
title: "Contextual Toolbar Actions"
category: "Desktop-Specific Patterns"
subcategory: "Toolbar Design"
score: 5
context: "Any application with a main toolbar or action bar where applicable actions change based on selection state."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Enterprise & B2B Scale"
tags:
  - "desktop"
wireframe: "https://files.catbox.moe/x92t6h.jpg"
notion: "https://app.notion.com/p/Contextual-Toolbar-Actions-812a9aed5344829e90ff016af3491f3d"
---

## Why
Toolbars should display only actions relevant to the current selection or context — global actions when nothing is selected, context-sensitive actions when items are selected. This directly reduces cognitive load by removing irrelevant options from the visual field. The principle applies at every level: the application toolbar, the row-level action menu, and the right-click context menu should all show exactly the actions available given the current state and nothing more.

## How to implement
- Define three action scopes: global (always visible), selection-based (shown when 1+ items selected), and row-specific (shown on hover).
- Animate toolbar transitions subtly when scope changes to avoid jarring layout shifts.
- Always display action names alongside icons (icon-only toolbars have poor discoverability).
- Define a consistent icon vocabulary across all toolbars in the application.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Action discoverability
- **Efficiency**: Time on task, Error rate reduction
- **Satisfaction**: User satisfaction score (CSAT/NPS), Perceived cleanliness
**How to measure**: Track toolbar action usage rates before and after contextual implementation; measure time-to-find-action; monitor error rates from users clicking wrong or unavailable actions.

## Sources
- [Sparx Systems — Enterprise Architect Ribbons](https://sparxsystems.com/resources/user-guides/16.0/basics/ribbons.pdf)
