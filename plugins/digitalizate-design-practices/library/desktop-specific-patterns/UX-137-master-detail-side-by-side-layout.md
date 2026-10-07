---
id: "UX-137"
title: "Master-Detail Side-by-Side Layout"
category: "Desktop-Specific Patterns"
subcategory: "Master-Detail Pattern"
score: 5
context: "Email clients, CRM record lists, document libraries, ticket queues, order management — any context where users switch frequently between items in a list."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/l13qxu.jpg"
notion: "https://app.notion.com/p/Master-Detail-Side-by-Side-Layout-5f6a9aed5344836f9366817c20895456"
---

## Why
The master-detail pattern presents a list (master) alongside a detail view (detail) of the selected item on large screens (≥720px), allowing selection in the list to immediately update the detail view without page navigation. This eliminates the page-navigation overhead that makes list-based workflows slow, keeping users in a continuous scan-select-review loop. It is the dominant paradigm for data-intensive desktop applications across all enterprise categories.

## How to implement
- Default split: 35% master / 65% detail.
- Make the split resizable via a drag handle.
- Maintain selected state highlight in the master list even while scrolling.
- Show an "empty selection" state in the detail panel when no item is selected.
- On narrow screens (<720px), stack to full-screen navigation — master list first, then detail.
- Persist the last-selected item across page reloads if contextually appropriate.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Engagement & Usage**: Feature usage, Active users
  **How to measure**: Track task completion times for record-browsing workflows using master-detail layouts vs. full-page navigation. Use usability testing to measure context-switching errors that arise when detail and master views are separated across pages.

## Sources
- [Microsoft Windows Developer Blog — Master the Master-Detail Pattern](https://blogs.windows.com/windowsdeveloper/2017/05/01/master-master-detail-pattern/)
- [Appli — The Master-Detail Interface Pattern](https://appli.io/the-master-detail-interface-pattern/)
