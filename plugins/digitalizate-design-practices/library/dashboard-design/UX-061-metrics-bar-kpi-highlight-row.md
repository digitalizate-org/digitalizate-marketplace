---
id: "UX-061"
title: "Metrics Bar — KPI Highlight Row"
category: "Dashboard Design"
subcategory: "KPI Display"
score: 5
context: "All operational and monitoring dashboards where a handful of KPIs dominate decision-making — sales dashboards, financial dashboards, operations centers."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "dashboard"
wireframe: "https://files.catbox.moe/unuw6x.jpg"
notion: "https://app.notion.com/p/Metrics-Bar-KPI-Highlight-Row-8b9a9aed534483d5a283810d87201b1c"
---

## Why
A horizontal metrics bar at the top of the dashboard displaying 3–6 key KPIs with large numerals, delta indicators (▲/▼ percentage vs. prior period), and trend sparklines provides at-a-glance status before the user engages with any chart. This is the single most high-value zone on an operational dashboard. Exceeding 6 metrics in this row creates cognitive overload — the power of the metrics bar is its scarcity and focus.

## How to implement
- Each card: metric name (small, top), value (large, bold), delta (colored directional arrow + %), and comparison period label (small, muted).
- All cards the same height for visual consistency.
- Group contextually related metrics.
- Add a tooltip on hover with the formula/definition for each metric.
- Aim for cards to be 200–240px wide so 4–5 fit in a standard 1280px wide layout without scrolling.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Time-on-task, Task success rate
- **Adoption & Retention**: Feature adoption rate, Daily active users
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Measure average time-to-insight (how quickly users identify key KPIs) via session recording analysis before and after introducing the metrics bar via A/B test.

## Sources
- [Salt Design System — Analytical Dashboard](https://www.saltdesignsystem.com/salt/patterns/analytical-dashboard)
- [DataCamp — Dashboard Design](https://www.datacamp.com/tutorial/dashboard-design-tutorial)
