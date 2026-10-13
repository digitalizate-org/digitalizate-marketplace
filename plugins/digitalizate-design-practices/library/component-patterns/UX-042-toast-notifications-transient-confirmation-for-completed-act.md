---
id: "UX-042"
title: "Toast Notifications — Transient Confirmation for Completed Actions"
category: "Component Patterns"
subcategory: "Toast design and usage"
score: 5
context: "Apply to post-action confirmation (record saved, email sent, export complete), undo prompts after soft deletions, and brief system status updates that don't require user action."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "error-handling"
wireframe: "https://files.catbox.moe/0azyqz.jpg"
notion: "https://app.notion.com/p/Toast-Notifications-Transient-Confirmation-for-Completed-Actions-f37a9aed5344834aa97e011b9fcc8f3f"
---

## Why
Toasts are transient alerts appearing in a layer above other content — appropriate for non-critical, informational feedback that doesn't require user action. Auto-dismiss after 4–6 seconds for informational toasts. Critical errors requiring action must use inline alerts or persistent banners — not toasts that auto-dismiss. The undo-in-toast pattern for soft-delete operations is particularly effective: include the undo action in the toast for 5–8 seconds before committing.

## How to implement
- Use toasts for non-critical, transient information only.
- Auto-dismiss after 4–6 seconds for informational toasts; provide a manual dismiss option.
- Limit to one toast visible at a time (queue additional toasts).
- Include undo action in the toast for reversible operations (5–8 seconds).
- Position consistently: enterprise apps most commonly use bottom-left or bottom-right.
- Never use toasts for critical errors requiring action — use inline alerts or persistent banners.
- Use `role="status"` for informational toasts and `role="alert"` for error toasts for screen reader accessibility.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Undo utilization rate, Accidental deletion recovery rate
- **Efficiency**: Workflow confidence, Task completion rate
- **Accessibility**: Screen reader notification compliance (WCAG 4.1.3)
**How to measure**: Track undo action usage rate from toasts; measure accidental deletion support tickets; run accessibility audits for ARIA role compliance on toast notifications.

## Sources
- [Component Gallery — Toast / Snackbar](https://component.gallery/components/toast/)
