---
id: "UX-076"
title: "Pagination vs. Infinite Scroll — Choose by Task Type"
category: "Data Display & Tables"
subcategory: "List Navigation"
score: 5
context: "Use when deciding how users will navigate long lists — different content types and user tasks require different navigation patterns."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "search"
  - "tables"
  - "navigation"
wireframe: "https://files.catbox.moe/ssf129.jpg"
notion: "https://app.notion.com/p/Pagination-vs-Infinite-Scroll-Choose-by-Task-Type-161a9aed5344831f8ff501086b288198"
---

## Why
Use pagination (numbered pages) for data tables where users need to find specific records, share a specific view, or compare items across a dataset. Use infinite scroll for feed-type content where users browse without a specific destination. Infinite scroll in data tables makes it impossible to jump to a specific record, track position, return to the same spot after navigating away, or share a specific page state via URL. For enterprise applications, pagination is almost always the correct choice for data tables, and infinite scroll is only appropriate for activity feeds and notification streams.

## How to implement
- For enterprise data tables: implement pagination with a "Rows per page" selector (10/25/50/100 options), first/previous/next/last controls, total row count displayed, and current page indicator.
- Encode page state in the URL so users can share specific views.
- As a middle ground for moderate-length lists where scrolling feels natural, implement a "Load More" button (not automatic infinite scroll).
- For truly infinite feeds, infinite scroll is appropriate but include a "Back to top" affordance.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Page load time
- **Engagement & Usage**: Scroll depth, Abandonment rate
**How to measure**: A/B test pagination versus infinite scroll for the specific task type (e.g., goal-directed search vs. exploratory browsing); measure task success rate, time-on-task, and abandonment rate to determine which pattern fits user intent.

## Sources
- [UX Planet — Data Table Best Practices](https://uxplanet.org/best-practices-for-usable-and-efficient-data-table-in-applications-4a1d1fb29550)
- [Component Gallery — Pagination](https://component.gallery/components/pagination/)
