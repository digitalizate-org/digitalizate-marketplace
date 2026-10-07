---
id: "UX-067"
title: "Role-Based Dashboard Personalization"
category: "Dashboard Design"
subcategory: "Dashboard Personalization"
score: 4
context: "Any enterprise application serving 2+ distinct user roles with materially different primary metrics and tasks."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
  - "dashboard"
wireframe: "https://files.catbox.moe/gmnuyj.jpg"
notion: "https://app.notion.com/p/Role-Based-Dashboard-Personalization-e71a9aed5344831c8022016f88fe2334"
---

## Why
When the same platform serves multiple roles, providing role-specific default dashboard configurations surfaces the most relevant KPIs, data views, and quick actions for each role out of the box. An executive's dashboard (high-level KPIs, trend lines, alerts) should look fundamentally different from a frontline operator's (task queue, SLA timers, status indicators) or a financial analyst's (variance tables, drill-down charts). One-size-fits-all defaults serve no persona optimally and reduce dashboard adoption across the board.

## How to implement
- Define a default dashboard template per role.
- Allow users to customize from this starting point via drag-and-drop.
- Provide role-specific "recommended widgets" in the widget library.
- Store per-user customizations in their profile.
- Allow admins to define and push role-level defaults that apply to all new users of that role — including updating defaults when roles evolve.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Dashboard adoption rate per role, KPI monitoring coverage
- **Efficiency**: Time-to-insight, Anomaly detection speed
- **Satisfaction**: Role-specific satisfaction score, Dashboard customization usage
**How to measure**: Track dashboard adoption and daily active usage per role; measure time-to-first-decision from dashboard; survey users on dashboard relevance score by role.

## Sources
- [Koruux — Enterprise Data Visualization](https://www.koruux.com/blog/enterprise-data-visualization)
- [Smashing Magazine — Real-Time Dashboard UX](https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/)
