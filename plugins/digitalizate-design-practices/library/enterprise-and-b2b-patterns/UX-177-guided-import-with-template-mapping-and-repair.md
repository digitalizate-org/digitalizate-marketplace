---
id: "UX-177"
title: "Guided Import with Template, Mapping, and Repair"
category: "Enterprise & B2B Patterns"
subcategory: "Export/Import"
score: 4
context: "Any import feature accepting external data files (CSV, Excel) for customer data, product catalogs, financial data, contact lists."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "tables"
  - "forms"
wireframe: "https://files.catbox.moe/qppnac.jpg"
notion: "https://app.notion.com/p/Guided-Import-with-Template-Mapping-and-Repair-9d4a9aed534482b8b0ec0194956dad87"
---

## Why
Structuring data import as a guided workflow — template download, file upload, auto column mapping, error repair, and commit — gives users the confidence to import data without fear of corrupting their system. The repair step is the critical design investment: users need to see their specific errors, correct them in context, and then commit a clean dataset. Import workflows without a repair step produce either failed imports (when errors block commit) or dirty data (when errors are silently skipped).

## How to implement
- Step 1: Show expected format, required fields, and a template download link.
- Step 2: Drag-and-drop upload with format validation.
- Step 3: Column mapping with auto-detection and confidence indicators; allow manual override.
- Step 4: Validation results table — filterable to "errors only," with inline row correction.
- Step 5: Commit with a summary count (rows imported, rows skipped) and a 24-hour rollback option for large imports.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate, Task success rate
- **Efficiency**: Time on task, Support tickets reduction
- **Adoption & Retention**: Account creation rate, Returning visitors
**How to measure**: Track import completion rate and data-validation error counts in analytics before and after adding template, mapping, and repair stages; measure support ticket volume for import-related issues as a longitudinal quality indicator.

## Sources
- [Smart Interface Design Patterns — Bulk Import UX](https://smart-interface-design-patterns.com/articles/bulk-ux/)
