---
id: "UX-348"
title: "Cross-Page Bulk Selection"
category: "Workflow & Multi-Step Processes"
subcategory: "Bulk Operations"
score: 4
context: "Any paginated data set where bulk operations are supported. Especially important in tables with more than 100 records or server-side pagination where \"Select All\" may mean vastly different things."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "tables"
wireframe: "https://files.catbox.moe/372hfy.jpg"
notion: "https://app.notion.com/p/Cross-Page-Bulk-Selection-ebca9aed534482ad9130815a3c226d9d"
---

## Why
When a user clicks "Select All" on a paginated table, offering two distinct options — select items on the current page vs. select all matching items across all pages — prevents catastrophic accidental operations (deleting 10,000 records when intending to delete 25). This distinction is invisible to users who don't think about pagination, which is exactly why it must be made explicit. The interface must make the scope of the action unambiguous before it is executed.

## How to implement
- Show two distinct confirmation labels: "Select 25 on this page" and "Select all 3,200 matching items." Add a confirmation dialog for cross-page bulk destructive actions that states the exact count and consequence.
- Display a progress indicator with cancellation support for large batches.
- Send a completion notification (in-app + email option) when the batch job finishes.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Time saved per task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track bulk action usage rates across paginated datasets via analytics; run usability tests measuring time-on-task for cross-page selection workflows and comparing completion rates when cross-page selection is available versus when users must repeat selection per page.

## Sources
- [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
- [Smart Interface Design Patterns — Bulk UX](https://smart-interface-design-patterns.com/articles/bulk-ux/)
