---
id: "UX-077"
title: "Three-Level Density System for Tables and Lists"
category: "Data Display & Tables"
subcategory: "Density Controls"
score: 5
context: "Use for any enterprise data table used in multiple contexts or by users with varying display needs and accessibility requirements."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "enterprise"
  - "tables"
wireframe: "https://files.catbox.moe/fdzk4t.jpg"
notion: "https://app.notion.com/p/Three-Level-Density-System-for-Tables-and-Lists-055a9aed53448301891701c4ecd6bc9c"
---

## Why
Enterprise interfaces should support three density levels: Comfortable (spacious, larger touch targets, more whitespace — suitable for accessibility and casual use), Default (balanced for standard desktop use), and Compact (reduced row heights and padding, maximizing data visibility — for power users comparing many rows). Many enterprise products offer only one density and fail both accessibility needs and power-user productivity simultaneously. A single density toggle in the table toolbar gives users control with minimal UI cost.

## How to implement
- Define density as a set of spacing tokens that cascade from a single density variable.
- Comfortable: row-height 56px, cell-padding 12px 16px.
- Default: 40px row-height, 8px 16px cell-padding.
- Compact: 24–28px row-height, 4px 8px cell-padding.
- Include a 3-icon density toggle in the table toolbar.
- Persist the setting per user in account preferences.
- Apply density tokens consistently across all table instances in the application.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Completion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Survey users about their preferred density setting and track which density mode is most frequently selected in production. Run task-based tests at each density level with different user personas (power user vs. occasional user) to confirm that the appropriate density optimizes their time on task.

## Sources
- [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
