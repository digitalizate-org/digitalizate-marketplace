---
id: "UX-053"
title: "Design Dashboards Around User Goals — Not Available Data"
category: "Dashboard Design"
subcategory: "Dashboard information architecture"
score: 5
context: "Apply at the start of any dashboard design project — executive, operational, analytical, monitoring. The most common failure is starting with available data and cramming it in."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "data-heavy"
  - "dashboard"
wireframe: "https://files.catbox.moe/4al5xw.jpg"
notion: "https://app.notion.com/p/Design-Dashboards-Around-User-Goals-Not-Available-Data-5bda9aed5344828aa58581f393cf7064"
---

## Why
The most common dashboard design failure is starting with what data is available and building displays for all of it. Valuable dashboards expose the specific information users need to complete their most important tasks, in the order of decision importance. Different user roles need different views of the same data — a manager's dashboard differs from an operator's dashboard even when they're working with identical underlying data. Always define the 3–5 decisions the dashboard must support before designing any widget.

## How to implement
- Start by defining the 3–5 most important decisions users make using this dashboard.
- Design KPI displays around those decision needs — not the data model.
- Prioritize metrics that drive action; relegate contextual/supplementary data to drill-down views.
- Consider user roles: segment dashboard designs by role rather than building a universal compromise.
- Limit visible KPI cards to 5–7 before scroll (Miller's Law).
- Interview users about what they actually decide and act on — not what they think they want to see.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Time saved per task
- **Engagement & Usage**: Active users, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Survey dashboard users to determine whether they can answer their primary decision-making questions without leaving the dashboard. Track time-to-insight (time from dashboard load to documented decision or action taken) and compare active user rates before and after restructuring the dashboard around user goals rather than available data.

## Sources
- [Nielsen Norman Group — Data Visualizations for Dashboards](https://www.nngroup.com/videos/data-visualizations-dashboards/)
