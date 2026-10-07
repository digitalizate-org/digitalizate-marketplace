---
id: "UX-082"
title: "Inline Editing with Friction Calibration"
category: "Data Display & Tables"
subcategory: "Inline Editing"
score: 5
context: "All tables where data is editable. The choice of inline vs. modal editing should be driven by the risk and frequency of the edit operation."
goals:
  - "Design Data-Heavy Screens & Dashboards"
wireframe: "https://files.catbox.moe/gdxfup.jpg"
notion: "https://app.notion.com/p/Inline-Editing-with-Friction-Calibration-e14a9aed5344830cae92810504a96c67"
---

## Why
For low-risk edits (status change, tag assignment, priority update), click-to-edit inline within a table cell provides maximum efficiency. For high-stakes or multi-field edits (financial data, legal content, records with downstream dependencies), a detail panel or modal with explicit Save/Cancel controls provides appropriate friction. Matching friction to risk level prevents both the bottleneck of over-cautious modals for trivial changes and the danger of under-cautious inline editing for consequential data.

## How to implement
- Confirm inline edits via click-outside, Enter key, or a checkmark button; Escape cancels.
- Show a brief success indicator (cell highlight flash or small checkmark) after save.
- For modal edits, disable the background table but keep it visible for context reference.
- Provide undo for both modes.
- For high-frequency inline edits (bulk data entry workflows), support Tab to advance to the next row's same field.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Error rate
  - **Engagement & Usage**: Feature usage, Active users
  **How to measure**: Track edit action frequency via analytics to confirm inline editing is used when available. Compare task completion times for table-editing workflows with inline editing vs. modal-based editing, and track accidental edit errors as a measure of friction calibration effectiveness.

## Sources
- [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
- [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
