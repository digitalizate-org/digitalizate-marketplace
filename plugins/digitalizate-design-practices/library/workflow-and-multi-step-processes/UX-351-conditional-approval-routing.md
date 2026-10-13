---
id: "UX-351"
title: "Conditional Approval Routing"
category: "Workflow & Multi-Step Processes"
subcategory: "Approval Workflows"
score: 4
context: "Any approval workflow with varying levels of risk or value — expenses, POs, leave requests, IT changes. Most relevant in finance, HR, and IT change management."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/t5tfak.jpg"
notion: "https://app.notion.com/p/Conditional-Approval-Routing-6c1a9aed5344831fa67d014830946d74"
---

## Why
Dynamic approval routing that adjusts based on request type, value, requester role, or business rules eliminates bottlenecks for routine requests while maintaining governance for high-impact decisions. For example: expenses under $500 auto-approve with logging; those above $5,000 require VP sign-off. Without conditional routing, every request — trivial and significant alike — goes through the same heavyweight approval chain, creating a bottleneck that erodes confidence in the system.

## How to implement
- Define configurable threshold rules (amount, category, requestor level) in an admin-accessible rule builder.
- Auto-approve low-risk rules with full audit logging.
- Notify the requester of the full approval path when their submission is created.
- Allow administrators to modify routing rules via a visual rule builder with a test mode that simulates routing without executing.
- Log all auto-approvals separately for audit review.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track approval cycle times and exception routing volumes in analytics; survey approvers and submitters on workflow clarity and measure reduction in manual escalations or support requests after conditional routing rules are in place.

## Sources
- [Shyft — Mastering Approval Workflows](https://www.myshyft.com/blog/approval-status-tracking/)
