---
id: "UX-350"
title: "Wizard vs. Inline Bulk Workflow Selection"
category: "Workflow & Multi-Step Processes"
subcategory: "Bulk Operations"
score: 4
context: "Use when deciding how to implement a bulk operation — calibrate to the complexity and risk of the action, not a single default approach."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/n1q9hx.jpg"
notion: "https://app.notion.com/p/Wizard-vs-Inline-Bulk-Workflow-Selection-7fea9aed5344828a98b1814712f1a43c"
---

## Why
Matching the complexity of a bulk operation to its interaction mode reduces both cognitive overhead for simple tasks and error risk for complex ones. Inline/floating toolbar mode handles routine low-risk edits in one step; wizard-style guided flows handle multi-step, branching, or high-stakes bulk changes where the user needs to review each decision. Defaulting to the wrong mode — a wizard for a one-click status change, or an inline dropdown for a 5-step migration — creates unnecessary friction in the first case and dangerous brevity in the second.

## How to implement
- Inline mode: floating toolbar above the selection with 3–5 immediate action buttons — appropriate for single-decision operations like status change or tagging.
- Wizard mode: multi-step dialog with progress indicator, preview of changes, and conflict resolution step — appropriate for operations with 3+ decisions or downstream dependencies.
- Always show the affected item count in both modes.
- Allow users to escalate from inline to a full wizard mode if needed.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: A/B test wizard-based versus inline bulk workflow patterns for specific task types; measure task completion rate, time-on-task, and error rate to determine which approach best matches the complexity and frequency of the bulk operation.

## Sources
- [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
