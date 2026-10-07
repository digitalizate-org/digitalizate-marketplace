---
id: "UX-529"
title: "Closure to Eliminate Redundant Chart Borders"
category: "Gestalt Principles"
subcategory: "Closure — Data Visualization"
score: 4
context: "Data visualization, BI dashboards, analytics reports, data-dense tables"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
  - "dashboard"
  - "tables"
  - "cognitive-load"
  - "data-heavy"
wireframe: "https://files.catbox.moe/w55ppk.jpg"
notion: "https://app.notion.com/p/Closure-to-Eliminate-Redundant-Chart-Borders-6eea9aed534483afb587019d53f96c0d"
---

## Why
Axes define the boundary of a chart through implied closure: the human brain perceives a rectangular chart area from just two perpendicular axes without any explicit border box needed. Playfair Data's research shows that adding box borders around charts violates Prägnanz and provides no grouping information that closure doesn't already supply through the axes themselves. The same principle applies to data tables: column content aligned on a common baseline implies column membership through closure, eliminating the need for full cell borders. Reducing visual chrome through closure creates dashboards with lower perceived complexity and faster cognitive processing.

## How to implement
- Remove chart border boxes — X and Y axes provide sufficient structural closure
- In data tables, use only horizontal rules (not full cell grids) — vertical column alignment creates implicit closure
- Rely on axis tick marks + labels rather than full grid lines wherever possible
- Use subtle background shading for alternate rows instead of cell borders in dense tables
- Test the 'axis-only' version of charts with users — if comprehension drops, add minimal guidelines rather than full borders

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Conduct comprehension tests where users interpret charts with redundant borders versus clean implied boundaries; measure accuracy and time-to-insight to confirm that removing unnecessary borders improves data readability.

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
- [Data Organisation — Gestalt in Dashboards](https://data-organisation.com/how-to-apply-the-6-gestalt-principles-in-a-dashboard/?lang=en)
