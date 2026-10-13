---
id: "UX-062"
title: "Dashboard Type and Audience Matching"
category: "Dashboard Design"
subcategory: "Dashboard Strategy"
score: 5
context: "At the start of every dashboard design project. Mismatching dashboard type to use case is a primary cause of poor adoption in enterprise analytics."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "dashboard"
wireframe: "https://files.catbox.moe/9uj0mr.jpg"
notion: "https://app.notion.com/p/Dashboard-Type-and-Audience-Matching-684a9aed5344827396ea8169f3358ced"
---

## Why
Different dashboards serve fundamentally different purposes: (1) Reporting — data stories and exports; (2) Monitoring — real-time alerts and anomaly detection; (3) Exploration/Discovery — flexible querying and drill-down; (4) Functional/Integrated — task-focused with embedded actions; (5) Product Homepage — navigation with context overview. Each type requires a different layout, interaction model, refresh rate, and export capability. Mixing types produces dashboards that excel at nothing.

## How to implement
- For Monitoring: high refresh rate, alert-driven layout, binary status indicators.
- For Exploration: open filter panels, drill-through navigation, variable time ranges.
- For Reporting: PDF/CSV export, date picker, shareable URL, print layout.
- For Functional: embedded action buttons, task completion tracking.
- Never mix all types into a single view.
- Identify the primary type at project kick-off and design the layout to serve that type exclusively.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Active users, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Survey end users on whether the dashboard presents the information they need to make decisions, and track task success rate on role-appropriate tasks (e.g., executive summary tasks vs. analyst drill-down tasks). Monitor active user rates across audience segments to confirm dashboard relevance by role.

## Sources
- [Pencil & Paper — Dashboard UX](https://www.pencilandpaper.io/articles/ux-pattern-analysis-data-dashboards)
