---
id: "UX-230"
title: "Soft Delete / Trash Pattern for Recoverable Deletion"
category: "Interaction Patterns"
subcategory: "Reversible Deletion"
score: 5
context: "Use for document deletion, record deletion, and any content removal where the recovery cost of accidental deletion is high."
goals:
  - "Build Trust & Reduce User Anxiety"
wireframe: "https://files.catbox.moe/9ngp1b.jpg"
notion: "https://app.notion.com/p/Soft-Delete-Trash-Pattern-for-Recoverable-Deletion-b74a9aed534482b0bc4e811d5c6c7837"
---

## Why
For moderate-risk deletion actions, move deleted items to a trash or recycle bin rather than permanently deleting immediately. This gives users a grace period — typically 7–30 days — to restore accidentally deleted content. The trash pattern removes the need for destructive confirmation dialogs on first delete (reducing friction for intentional deletions) while providing a safety net for mistakes. Communicate the retention period clearly ("Deleted items are permanently removed after 30 days") so users know the window for recovery.

## How to implement
- "Delete" moves to trash with a toast confirming the action and an "Undo" option for the next 5–10 seconds. "Permanently Delete" from within trash requires explicit confirmation with count.
- Make trash accessible from navigation (sidebar or settings).
- Auto-purge after retention period.
- For critical data in enterprise contexts, send an email warning 7 days before permanent deletion.
- Log all deletion events for admin audit trails.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Error counts, Time on task
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Track trash/restore usage rates via analytics to confirm users rely on the safety net; run usability tests measuring user confidence when deleting items and compare error recovery time with soft delete versus permanent deletion patterns.

## Sources
- [LogRocket — UX for Reversible Actions](https://blog.logrocket.com/ux-design/ux-reversible-actions-framework/)
