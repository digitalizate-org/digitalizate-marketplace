---
id: "UX-089"
title: "Expandable Row Detail (Inline Master-Detail)"
category: "Data Display & Tables"
subcategory: "Row Expansion"
score: 4
context: "When detail content is compact (3–10 fields or a small nested table) and users need to compare detail across multiple records simultaneously — order lines, BOM views, financial statement detail."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "ai-patterns"
  - "tables"
wireframe: "https://files.catbox.moe/v50a0j.jpg"
notion: "https://app.notion.com/p/Expandable-Row-Detail-Inline-Master-Detail-3d8a9aed534482a4b95f815764e5a5f4"
---

## Why
Expanding detail inline within a table row on click — pushing down subsequent rows and showing supplementary content within the expanded space — preserves table context while providing record-level detail access. This is preferable to a sidebar panel when users need to compare detail across multiple open records simultaneously, as multiple rows can be expanded at once. The inline expansion pattern is particularly powerful for financial statement drill-down and order line detail.

## How to implement
- Use a right-aligned chevron (▶ collapsed, ▼ expanded) at the row level.
- Animate expansion with smooth slide-down (150–200ms).
- Allow multiple rows to be expanded simultaneously.
- Lazy-load detail content on first expand if it requires an API call, showing a skeleton while loading.
- Provide a "Collapse all" control when multiple rows are expanded.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Compare task completion times when users access record details via expandable rows vs. navigating to a separate detail page. Track page navigation depth as a proxy for context switching, and survey users on preference and perceived efficiency.

## Sources
- [Infragistics — Master-Detail Layout](https://www.infragistics.com/blogs/master-detail-layout/)
