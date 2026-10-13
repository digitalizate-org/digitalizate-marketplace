---
id: "UX-330"
title: "Saved Filters and Search Views"
category: "Search Filter & Sort"
subcategory: "Filter Management"
score: 5
context: "Any enterprise application where users repeat the same filter combinations. Baseline feature for CRM, project management, analytics, and operations tools."
goals:
  - "Build Effective Search & Filter"
  - "Structure Navigation for Deep Products"
  - "Design for Enterprise & B2B Scale"
tags:
  - "search"
wireframe: "https://files.catbox.moe/xb8pya.jpg"
notion: "https://app.notion.com/p/Saved-Filters-and-Search-Views-d37a9aed53448334bf9501643f861163"
---

## Why
Allowing users to name and save complex filter configurations as "views" or "saved searches" for reuse dramatically reduces repeat navigation effort for power users who routinely apply the same multi-facet filters (e.g., "My Open High-Priority Tickets," "Overdue Invoices This Quarter"). Without saved views, power users spend significant time daily rebuilding the same filter context — a tax on productivity that compounds across the entire organization.

## How to implement
- Provide a "Save this view" button when active filters are present.
- Allow naming the view, setting visibility (personal or shared with the team), and pinning to a sidebar or tab bar for one-click access.
- Support deleting and editing saved views.
- For team-shared views, include ownership metadata, modification history, and a "Make a copy" option for personal variations.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Time saved per task
- **Effectiveness**: Task success rate, Completion rate
- **Engagement & Usage**: Feature usage, Sessions per user, Active users
- **Adoption & Retention**: Returning visitors, Session frequency
**How to measure**: Track adoption of the saved filters feature via analytics (percentage of users who create at least one saved view) and measure average time-to-active-filter-set for users with versus without saved views. Monitor returning user rates to test whether saved views increase habitual product usage.

## Sources
- [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
