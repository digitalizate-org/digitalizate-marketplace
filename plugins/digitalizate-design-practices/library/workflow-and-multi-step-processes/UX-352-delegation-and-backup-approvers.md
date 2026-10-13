---
id: "UX-352"
title: "Delegation and Backup Approvers"
category: "Workflow & Multi-Step Processes"
subcategory: "Approval Workflows"
score: 4
context: "Any approval workflow where bottlenecks occur during approver absence — holidays, illness, travel. Without delegation, a single absent approver can halt entire business processes."
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/52ymdf.jpg"
notion: "https://app.notion.com/p/Delegation-and-Backup-Approvers-554a9aed534483678cb101cce3abfa6c"
---

## Why
Allowing approvers to delegate approval authority to a backup when unavailable prevents workflow stalling, which is one of the most operationally costly failure modes of approval systems in enterprise contexts. The delegation record must be logged and time-bounded so that the audit trail remains clear about who actually approved what and under whose authority. Requesters should be informed transparently when their request is being reviewed by a delegate.

## How to implement
- Provide a "Delegate My Approvals" setting with date range, delegate selection, and an optional reason note.
- Display "Reviewing on behalf of [Name]" in the approval UI for the delegate.
- Log the original assignee, delegate, reason, and timestamps in the audit trail.
- Automatically revert delegation on the specified return date.
- Send a reminder notification to the original approver when delegation expires.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track approval workflow cycle time before and after introducing delegation; measure the rate of approvals that stall due to unavailable approvers and monitor support tickets related to blocked workflows as key indicators.

## Sources
- [Shyft — Mastering Approval Workflows](https://www.myshyft.com/blog/approval-status-tracking/)
