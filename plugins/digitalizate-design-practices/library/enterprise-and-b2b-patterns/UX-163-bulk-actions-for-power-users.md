---
id: "UX-163"
title: "Bulk Actions for Power Users"
category: "Enterprise & B2B Patterns"
subcategory: "Batch Operations"
score: 5
context: "Use in any data table or list where users regularly need to manage multiple items — CRMs, order management, content management systems."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "enterprise"
wireframe: "https://files.catbox.moe/9s7t3j.jpg"
notion: "https://app.notion.com/p/Bulk-Actions-for-Power-Users-e49a9aed5344828eaf5981b348b1c4cd"
---

## Why
Provide the ability to select multiple rows and apply an action (delete, export, change status, assign) to all selected items simultaneously. Power users managing large datasets need batch operations to be productive; performing the same action one row at a time for 50 rows is unacceptably slow. Bulk actions should appear only after selection is made, keeping the default UI clean and preventing accidental bulk operations. Include a count in destructive confirmations ("Delete 47 items?") so users know the scope of their action.

## How to implement
- Show checkbox on row hover (or always for accessibility).
- A contextual action bar appears at the top or bottom of the table when any rows are selected.
- Include a "Select all on this page" option and a separate "Select all [N] matching records" for filtering contexts.
- Confirm destructive bulk actions with a count.
- Provide a "Deselect all" action in the action bar.
- Ensure the action bar is keyboard accessible and visually distinct from the table header.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Time saved per task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track bulk action usage rates among power users via analytics; run usability tests measuring time-on-task for high-volume operations with and without bulk actions; survey power users on time savings and workflow efficiency improvement.

## Sources
- [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
