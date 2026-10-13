---
id: "UX-084"
title: "Tables Over Cards for Dense Multi-Variate Data"
category: "Data Display & Tables"
subcategory: "Layout pattern selection"
score: 4
context: "Apply when users need to compare attributes across many records simultaneously, detect outliers, or perform bulk actions. Cards are better for visual browsing with fewer comparison needs."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "workflow"
  - "tables"
  - "data-heavy"
wireframe: "https://files.catbox.moe/c91mvb.jpg"
notion: "https://app.notion.com/p/Tables-Over-Cards-for-Dense-Multi-Variate-Data-b6ca9aed5344828598a2010bffb281de"
---

## Why
Card-based layouts are visually appealing but sacrifice the spatial comparison advantages of tables. Tables are space-efficient and ideal for comparing records and detecting patterns across many variables. Cards are better for visual browsing with fewer comparison needs, media libraries, or when visual identity per item matters. The default for enterprise record management should be table view, with card/grid as an optional toggle for relevant use cases.

## How to implement
- Default to table view for record management, analytics, transaction history, and data entry contexts.
- Offer a toggle between table and card/grid views when both browsing and comparison tasks are present.
- Use tables with appropriate density settings (compact, default, spacious) matching user needs.
- Reserve card layouts for catalog browsing, media libraries, or when visual identity per item matters.
- For dashboard KPI items, use cards; for record lists, use tables.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run head-to-head usability tests with comparison tasks (e.g., "Find the item with the lowest price and highest rating") using both a card layout and a table layout, measuring time on task and error rate for multi-variate decision tasks.

## Sources
- [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/)
