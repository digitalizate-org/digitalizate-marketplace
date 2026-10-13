---
id: "UX-192"
title: "Opt-Out Confirmation for High-Consequence Actions"
category: "Feedback & Error Handling"
subcategory: "Confirmation patterns for irreversible actions"
score: 5
context: "Apply to genuinely irreversible, high-consequence actions where undo is architecturally impossible — permanent data purge, account deletion, irreversible bulk writes."
goals:
  - "Design Effective Feedback & Error States"
wireframe: "https://files.catbox.moe/vbgov9.jpg"
notion: "https://app.notion.com/p/Opt-Out-Confirmation-for-High-Consequence-Actions-d5ca9aed534483a0b0978178032f622a"
---

## Why
While undo is preferred over confirmation dialogs for reversible actions, genuine confirmations are essential for irreversible, high-consequence operations. The distinction: use undo for soft-delete and reversible actions; use confirmation dialogs only when the action is permanent and high-cost. Confirmation dialog design must be specific about the consequence ("This will permanently delete 47 records and cannot be undone") not vague ("Are you sure?").

## How to implement
- Reserve confirmation dialogs for permanent, high-consequence, architecturally irreversible operations.
- Make confirmation copy specific: "This will permanently delete 47 records and cannot be undone" not "Are you sure?" Require users to type a specific word (e.g., the entity name) to confirm for the most severe destructions.
- Make the Cancel/safe option the default focused button (not the destructive action).
- Label the destructive button unambiguously ("Delete 47 Records Forever" not "OK").
- Never use confirmation dialogs for reversible actions — use undo instead.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Task success rate
- **Efficiency**: Support tickets reduction
- **Satisfaction & Perception**: CSAT, Confidence rating
- **Adoption & Retention**: Renewed subscriptions
**How to measure**: Track accidental deletion or cancellation incidents via event logging; A/B test opt-out confirmation dialogs against direct-action flows to measure error rate reduction and downstream support ticket volume.

## Sources
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Good UI — Undo Instead of Confirmation Dialogs](https://goodui.org/#8)
