---
id: "UX-341"
title: "Approval Status Visualization"
category: "Workflow & Multi-Step Processes"
subcategory: "Approval Workflows"
score: 5
context: "Any enterprise workflow involving sequential approvals — purchase orders, expense reports, leave requests, content publishing, compliance reviews."
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "workflow"
  - "enterprise"
wireframe: "https://files.catbox.moe/bnufu4.jpg"
notion: "https://app.notion.com/p/Approval-Status-Visualization-08aa9aed534483ac877a0161d516f8a7"
---

## Why
Representing approval workflows as a visual pipeline showing the current stage, completed stages, and remaining stages eliminates the most common approval complaint in enterprise systems: "I don't know where my request is." Clear status labels (Pending, Under Review, Approved, Rejected) and approver identification give requesters the visibility to manage their work around the approval process rather than being blocked by it. This is foundational to enterprise governance tooling.

## How to implement
- Use a horizontal stage indicator with icons and timestamps for each approval step.
- Display the active approver's name and estimated SLA/due date per step.
- Color-code stages: blue for in-progress, green for approved, red for rejected/returned, gray for pending.
- Include a comments/notes field on each stage so approvers can leave contextual feedback.
- Send a notification to the requester at each stage transition.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Track approval-related support tickets ("what state is my request in?") before and after implementing status visualization; run usability tests measuring how quickly users can determine current approval state and what action is needed next.

## Sources
- [Shyft — Mastering Approval Workflows: Approval Status Tracking](https://www.myshyft.com/blog/approval-status-tracking/)
