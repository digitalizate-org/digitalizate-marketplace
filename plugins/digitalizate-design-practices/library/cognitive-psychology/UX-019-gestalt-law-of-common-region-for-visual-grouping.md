---
id: "UX-019"
title: "Gestalt — Law of Common Region for Visual Grouping"
category: "Cognitive Psychology"
subcategory: "Gestalt visual perception principles"
score: 5
context: "Apply to dashboard card layouts, form section groupings, filter panels, sidebar modules, split-panel interfaces, property inspector panels — any UI where grouping must be communicated spatially."
goals:
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "ai-patterns"
  - "forms"
  - "dashboard"
wireframe: "https://files.catbox.moe/jugemr.jpg"
notion: "https://app.notion.com/p/Gestalt-Law-of-Common-Region-for-Visual-Grouping-5a9a9aed5344834d837301c4aea35b2a"
---

## Why
Elements perceived as grouped if they share an area with a clearly defined boundary. A border or background region creates strong perceptual grouping even when elements are not in close proximity. Card containers (background fill + optional border) create immediate perceptual regions on dashboards. In split-panel layouts, distinct background colors delineate list panel, detail panel, and action panel regions. Using highlighted row backgrounds in tables shows a selected item belongs to the same group as its expanded detail panel.

## How to implement
- Use card containers (background fill + optional border) to group related metrics on dashboards.
- In form design, use section-level background fills or bordered fieldsets to visually separate functional groups.
- Use highlighted row backgrounds in data tables to link a selected row to its expanded detail panel.
- In split-panel layouts, use distinct background colors to delineate regions.
- Apply the Law of Common Region to differentiate destructive action groups from safe action groups in settings panels.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run first-click and card-sorting tests to verify users perceive grouped elements as related; measure task completion time and error rate in usability tests comparing layouts with and without common region boundaries.

## Sources
- [Laws of UX — Law of Common Region](https://lawsofux.com/law-of-common-region/)
