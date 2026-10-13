---
id: "UX-347"
title: "Eligibility Transparency in Bulk Actions"
category: "Workflow & Multi-Step Processes"
subcategory: "Bulk Operations"
score: 4
context: "Workflows where eligibility rules exist — only \"draft\" items can be published, only unlocked records can be deleted, only items owned by the current user can be exported."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "error-handling"
wireframe: "https://files.catbox.moe/maz5p6.jpg"
notion: "https://app.notion.com/p/Eligibility-Transparency-in-Bulk-Actions-828a9aed534483c6b76781d91f1d11f4"
---

## Why
When certain selected items are ineligible for a bulk action, clearly communicating which items will and won't be affected prevents silent failures, user confusion, and compliance violations. Never silently skip ineligible items — the user's mental model of the action scope must match what the system actually processes. Transparency here also surfaces permissions issues that the user may not be aware of, enabling them to take the right corrective action.

## How to implement
- Visually differentiate ineligible items with reduced opacity or a lock badge.
- Disable the bulk action button with a tooltip: "2 of 5 selected items cannot be deleted because they are locked." After execution, show a result summary toast: "14 succeeded, 2 skipped" with an expandable details section explaining why each was skipped.
- For large operations, provide a downloadable error report.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Bulk action success rate, Task completion rate
- **Efficiency**: Time to understand action scope, Error rate reduction
- **Satisfaction**: User confidence, Support tickets for unexpected results
**How to measure**: Track support tickets related to unexpected bulk action outcomes; measure user confusion events in session recordings when bulk operations skip items; survey users on confidence levels before/after eligibility transparency.

## Sources
- [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
