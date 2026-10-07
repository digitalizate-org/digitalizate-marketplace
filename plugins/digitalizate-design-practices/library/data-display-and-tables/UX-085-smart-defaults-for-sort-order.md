---
id: "UX-085"
title: "Smart Defaults for Sort Order"
category: "Data Display & Tables"
subcategory: "Default State Design"
score: 4
context: "Use when designing any sortable data table — the default sort order should reflect the primary user task, not technical defaults."
goals:
  - "Build Effective Search & Filter"
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "tables"
wireframe: "https://files.catbox.moe/jell7x.jpg"
notion: "https://app.notion.com/p/Smart-Defaults-for-Sort-Order-ff1a9aed534482a7ad94016a222759b7"
---

## Why
Choose the default sort order based on the most common user task, not arbitrary or technically convenient criteria. For most management tables, the most recently created or modified entries should appear first. For priority queues, highest-urgency items should appear first. For alphabetical reference lists, alphabetical sort is appropriate. A wrong default forces every user to re-sort on every visit, imposing unnecessary repetitive work. The default sort is one of the highest-impact low-effort improvements to any data table.

## How to implement
- Before setting a default sort, analyze the primary user task for the table through user research or analytics.
- Set the initial sort to match that task.
- Display a visible sort indicator (chevron or arrow) on the active sort column in its default state so users know the table is sorted.
- Allow multi-column sorting for power users (Shift+click column header).
- Persist user-selected sort order per session; reset to default on next login unless the user has saved the view.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track sort-change event rates in analytics — low rates suggest the default is meeting user needs; run usability tests comparing findability and time-on-task with different default sort orders to identify the most efficient setting.

## Sources
- [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
