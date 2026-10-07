---
id: "UX-088"
title: "Pagination vs. Virtual Scrolling Decision Framework"
category: "Data Display & Tables"
subcategory: "Data Navigation"
score: 4
context: "Any enterprise data table. The choice between pagination and scrolling has downstream effects on performance, shareability, and user orientation within the dataset."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "tables"
  - "navigation"
wireframe: "https://files.catbox.moe/nhu9cf.jpg"
notion: "https://app.notion.com/p/Pagination-vs-Virtual-Scrolling-Decision-Framework-9baa9aed534483e2a34c014e0a671f58"
---

## Why
Pagination is appropriate when users need to navigate to a specific page, reference a specific record set, or share a view with a defined position; 67% of users prefer pagination over infinite scroll for data tables. Infinite/virtual scrolling is appropriate for timeline-like data, activity feeds, or real-time streams where sequential browsing is the primary behavior. Choosing scrolling for enterprise data tables forces users to scroll through hundreds of records to reach a known page, destroying efficiency.

## How to implement
- Default to pagination for enterprise data tables.
- Default page size: 25 rows, with user-selectable options for 10, 25, 50, 100.
- Show current position ("26–50 of 3,247 records").
- Maintain filter/sort state when paginating — page changes should not reset the user's filter context.
- Allow typing a page number directly for large datasets.
- Use server-side pagination for datasets over 1,000 rows.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Page load time
- **Engagement & Usage**: Abandonment rate, Bounce rate
**How to measure**: Compare task success rates and time-on-task in usability tests for find/retrieve tasks using pagination versus virtual scrolling; monitor page load performance metrics and abandonment rates to confirm the chosen pattern matches the task type.

## Sources
- [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
