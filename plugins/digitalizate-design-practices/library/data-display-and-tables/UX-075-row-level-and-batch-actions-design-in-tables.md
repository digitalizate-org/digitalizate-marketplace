---
id: "UX-075"
title: "Row-Level and Batch Actions Design in Tables"
category: "Data Display & Tables"
subcategory: "Table action patterns"
score: 5
context: "Apply to all enterprise data tables where users manage records — delete, archive, export, assign, approve, reject. Both single-record and batch workflows are essential."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "workflow"
  - "tables"
wireframe: "https://files.catbox.moe/pq5c7i.jpg"
notion: "https://app.notion.com/p/Row-Level-and-Batch-Actions-Design-in-Tables-8aaa9aed53448336b1c9815fabaa42c8"
---

## Why
Single-record and batch actions are essential in enterprise tables but easily become unusable when poorly placed. Row-level actions crowded without labels become indistinguishable; batch actions hidden from sight prevent efficient multi-record operations. Never use hover-only reveals for critical row actions — this creates accessibility failures and discoverability problems for unfamiliar users. The rule: if the action is important enough to include, it must be discoverable without hover.

## How to implement
- For 1–2 single-record actions: place inline in the row as labeled icon-buttons.
- For 3+ single-record actions: use a contextual overflow menu per row (ellipsis icon).
- For batch actions: use per-row checkboxes with an action bar appearing above the table on selection.
- Provide a "Select All" shortcut for applying actions to the full dataset (and a "Select All on this page" vs "Select All matching records" distinction for paginated tables).
- Never use hover-only reveals for critical actions.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Time saved per task
- **Engagement & Usage**: Feature usage
**How to measure**: Track batch-action feature usage rates in analytics; run task-based usability tests to measure time savings and error rates when users perform multi-item operations with well-designed batch controls versus row-by-row repetition.

## Sources
- [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/)
- [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
