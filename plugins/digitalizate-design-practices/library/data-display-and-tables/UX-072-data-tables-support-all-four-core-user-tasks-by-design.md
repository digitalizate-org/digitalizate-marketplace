---
id: "UX-072"
title: "Data Tables — Support All Four Core User Tasks by Design"
category: "Data Display & Tables"
subcategory: "Table task design"
score: 5
context: "Apply to any enterprise data table — records lists, transaction logs, user management, inventory, analytics exports. All four tasks will be performed regardless of whether the design supports them."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "search"
  - "enterprise"
  - "tables"
wireframe: "https://files.catbox.moe/yalkzy.jpg"
notion: "https://app.notion.com/p/Data-Tables-Support-All-Four-Core-User-Tasks-by-Design-af9a9aed53448358a6ba81d151145f95"
---

## Why
Data tables in enterprise applications must support four primary user tasks: (1) finding records that fit criteria, (2) comparing data across records, (3) viewing/editing/adding a single row's data, and (4) taking actions on records. Designing for only one task creates friction on the others. The Component Gallery documents data tables as present across 74 design systems including Carbon, Atlassian, Lightning, PatternFly, and Primer — it is the most critical enterprise UI component.

## How to implement
- Use human-readable record identifiers in the first column (not auto-generated system IDs).
- Default column order should reflect importance with related columns adjacent.
- Provide discoverable, powerful filters with clear visual indication when active.
- Support column hiding, reordering, and sorting as baseline.
- Support inline row editing for narrow tables and nonmodal side panels for complex record editing.
- Implement column-level sorting with clickable headers showing sort direction.
- For tables with 500+ rows, use virtual scrolling for performance.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate, Findability score
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Design a usability test covering all four core user tasks (find, compare, filter, sort); measure success rate and time on task for each. Track support ticket volume related to data table interactions as a longitudinal indicator of whether the design adequately supports user needs.

## Sources
- [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/)
- [Component Gallery — Data Table](https://component.gallery/components/table/)
