---
id: "UX-232"
title: "Toast Notification Best Practices"
category: "Interaction Patterns"
subcategory: "Notification Patterns"
score: 5
context: "Use for action confirmations, background process completions, and non-critical alerts that don't require immediate user action."
goals:
  - "Reduce Cognitive Load"
wireframe: "https://files.catbox.moe/8liwpc.jpg"
notion: "https://app.notion.com/p/Toast-Notification-Best-Practices-cc0a9aed53448214926d8117bb9ea874"
---

## Why
Toasts should be brief (max 2 lines), non-blocking (positioned at a screen corner), auto-dismissing for non-actionable messages, and persist until manually dismissed if they contain an action. Multiple toasts should stack vertically with the newest at top. Toast messages should explain specifically what happened ("Report exported successfully" not "Success") and contain at most one action button. Toasts positioned in the user's primary interaction zone (center of screen) are intrusive — use corner positions.

## How to implement
- Max width 400px.
- Auto-dismiss timeout: 4–6 seconds for informational; persist until dismissed for actionable.
- Include a manual dismiss "×" button on all toasts.
- Use status colors (green for success, red for error, yellow for warning) paired with semantic icons — never color alone.
- Position: bottom-left or top-right depending on where the primary user interaction occurs.
- Limit to a maximum of 3 stacked toasts before replacing the oldest with the newest.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Toast comprehension rate, Action rate on actionable toasts
- **Efficiency**: Time to acknowledge system feedback, Workflow interruption reduction
- **Accessibility**: Notification accessibility compliance (WCAG 4.1.3)
**How to measure**: Track toast dismiss rate vs. action rate; measure user awareness of background completions; run accessibility audits for screen reader toast announcement compliance.

## Sources
- [SetProduct — Notifications UI Design](https://www.setproduct.com/blog/notifications-ui-design)
