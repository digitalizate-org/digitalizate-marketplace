---
id: "UX-202"
title: "Confirmation Dialogs for Destructive Actions"
category: "Feedback & Error Handling"
subcategory: "Destructive Action Safety"
score: 5
context: "Any action that is difficult or impossible to reverse — permanently deleting records, bulk archiving, overwriting data, revoking permissions."
goals:
  - "Design Effective Feedback & Error States"
wireframe: "https://files.catbox.moe/f7c10t.jpg"
notion: "https://app.notion.com/p/Confirmation-Dialogs-for-Destructive-Actions-a99a9aed5344834f9d0201c7dbca8351"
---

## Why
Actions that are irreversible must require explicit user confirmation — this is one of the oldest and most important principles in interface design. The confirmation dialog must clearly describe what will be affected (item count, names) and the consequences, not just ask a generic "Are you sure?" A specific dialog ("Permanently delete 14 records? This cannot be undone. All associated comments and attachments will also be deleted.") allows users to make an informed decision rather than a reflex response.

## How to implement
- Confirmation dialog anatomy: specific title (count/names), consequence description, Cancel (secondary, left) and Delete/Confirm (danger red, right) buttons.
- Never make the destructive action the Enter key default.
- For highest-severity actions (delete account, wipe tenant data): require typing the resource name to confirm (a pattern established by AWS, GitHub, and Vercel).
- Calibrate confirmation friction to severity — soft undo toast for reversible actions, typed confirmation for permanent ones.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Error counts, Support tickets reduction
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Track accidental deletion or destructive action support tickets before and after introducing confirmation dialogs; run usability tests to measure whether the dialog is read and understood versus dismissed without reading, indicating whether friction is appropriate.

## Sources
- [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
- [Carbon Design System — Dialogs](https://carbondesignsystem.com/patterns/overview/)
