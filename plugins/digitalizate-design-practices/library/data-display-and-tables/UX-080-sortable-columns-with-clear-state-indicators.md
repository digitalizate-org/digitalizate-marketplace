---
id: "UX-080"
title: "Sortable Columns with Clear State Indicators"
category: "Data Display & Tables"
subcategory: "Table Interaction"
score: 5
context: "Any table with data that users need to prioritize or compare — dates, values, statuses, names. Absent sorting, users must scan the entire table to find relevant records."
goals:
  - "Build Effective Search & Filter"
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "tables"
wireframe: "https://files.catbox.moe/yh9swl.jpg"
notion: "https://app.notion.com/p/Sortable-Columns-with-Clear-State-Indicators-a45a9aed534483fc9e0a813d569f0a8d"
---

## Why
All relevant table columns should be sortable via column header click, with the current sort column and direction clearly indicated by an arrow icon (▲ ascending, ▼ descending). The default sort order should reflect the primary use case — typically most recent first or highest priority first. Unsorted columns that look sortable (same header style) break user expectations and create frustration when clicks have no effect.

## How to implement
- Make only logically sortable columns sortable — not image columns, multi-value fields, or richly formatted cells.
- Align the sort indicator with the column header text, not always right-aligned.
- Support multi-column sort via Shift+click for power users, with a visual indicator of sort priority (1st sort, 2nd sort).
- Preserve sort state across pagination and filter changes.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Task users with finding records in a large table using sort, measuring time on task and error rate when sort state indicators are present versus ambiguous. Survey users on their confidence in understanding the current sort state to capture the perceived clarity benefit.

## Sources
- [UX Patterns for Developers — Data Table](https://uxpatterns.dev/patterns/data-display/table)
- [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
