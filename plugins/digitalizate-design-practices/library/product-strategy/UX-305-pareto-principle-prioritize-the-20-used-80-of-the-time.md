---
id: "UX-305"
title: "Pareto Principle — Prioritize the 20% Used 80% of the Time"
category: "Product Strategy"
subcategory: "Feature prioritization and surface hierarchy"
score: 5
context: "Apply to feature prioritization, UX audit triage, navigation design, performance optimization, and test coverage planning for any enterprise application."
goals:
  - "Present & Defend Design Decisions"
tags:
  - "dashboard"
wireframe: "https://files.catbox.moe/13ahjk.jpg"
notion: "https://app.notion.com/p/Pareto-Principle-Prioritize-the-20-Used-80-of-the-Time-309a9aed53448385ace5814117f55981"
---

## Why
Roughly 80% of usage comes from 20% of features. In enterprise tools, this means a small fraction of features drive the vast majority of daily interactions — those features must be ruthlessly optimized and prominently surfaced. Treating all features equally in the navigation hierarchy, the toolbar, and the design review backlog is a waste of design investment. Usage telemetry should drive the identification of this critical 20%, not assumptions.

## How to implement
- Analyze usage telemetry to identify the 20% of features used 80% of the time — optimize these paths relentlessly.
- Surface the most-used 20% in the primary UI (toolbar, top nav, quick actions) and move the rest to secondary menus.
- Prioritize usability testing on the top 20% of flows — these affect the most users.
- In performance optimization, profile to find the 20% of operations causing 80% of latency.
- For design debt: fix the most-used 20% of broken patterns first regardless of their visual prominence.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Training time
  - **Effectiveness**: Task success rate, Completion rate
  - **Adoption & Retention**: Feature usage, Returning visitors
  **How to measure**: Analyze feature usage data to identify the top 20% of most-used features, then measure task completion time and error rate for those tasks after they are elevated in the UI. Track support ticket volume for deprioritized features to confirm that reducing their prominence does not create new issues.

## Sources
- [Laws of UX — Pareto Principle](https://lawsofux.com/pareto-principle/)
