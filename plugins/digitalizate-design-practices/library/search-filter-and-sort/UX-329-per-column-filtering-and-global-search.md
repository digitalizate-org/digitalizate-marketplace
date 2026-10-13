---
id: "UX-329"
title: "Per-Column Filtering and Global Search"
category: "Search Filter & Sort"
subcategory: "Table Filtering"
score: 5
context: "Any table with more than 50 rows or more than one dimension users may want to filter on. Without filtering, users must manually scroll through hundreds of records to find relevant items."
goals:
  - "Build Effective Search & Filter"
  - "Structure Navigation for Deep Products"
tags:
  - "search"
  - "tables"
wireframe: "https://files.catbox.moe/qrav05.jpg"
notion: "https://app.notion.com/p/Per-Column-Filtering-and-Global-Search-535a9aed534482c7b91381d7d7b53a58"
---

## Why
Providing both a global search bar (searching across key fields) and per-column filters for precise data narrowing gives users two complementary paths to data discovery: broad search for known items, faceted filtering for exploratory narrowing. Active filters must be visually prominent — filter chips or highlighted column headers — so users always know they're viewing a subset. Invisible filters are a significant cause of enterprise data errors when users make decisions based on incomplete views.

## How to implement
- Debounce filter input at 300ms.
- Show a "Filters active" badge or banner whenever any filter is applied.
- For complex multi-field filtering, use a slide-out filter panel rather than inline dropdowns per column.
- Use client-side filtering for fewer than 1,000 rows; server-side for larger datasets to avoid performance degradation.
- Persist filter state in URL query parameters for shareability.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Findability score, Task success rate
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Track feature usage analytics on filter interactions to understand adoption rates. Conduct task-based tests where users must locate specific records, measuring time on task and success rate with per-column filters versus without, and verify that the combination of both global search and column filters covers diverse user strategies.

## Sources
- [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
- [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
