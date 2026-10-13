---
id: "UX-176"
title: "Activity Log UI with Filterable Timeline"
category: "Enterprise & B2B Patterns"
subcategory: "Audit Trails"
score: 4
context: "Anywhere an audit log is presented to end users — record history, compliance view, admin audit dashboard."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "search"
  - "enterprise"
wireframe: "https://files.catbox.moe/qxtaen.jpg"
notion: "https://app.notion.com/p/Activity-Log-UI-with-Filterable-Timeline-b4ea9aed5344834b8bba814e81290602"
---

## Why
Presenting audit log data as a chronological, human-readable activity feed with filter controls makes compliance review and incident investigation tractable. Each entry written in plain language ("Alex archived 3 invoices," "Maria updated the project status from 'In Review' to 'Approved'") communicates events without requiring users to decode system codes or database field names. The filterable timeline transforms a compliance obligation into an operationally useful tool.

## How to implement
- Render each entry as: [Actor Avatar] [Name] [Action in bold] [Resource name as link] [Timestamp (relative + absolute on hover)].
- Group entries by day with a day separator.
- Filter panel: date range, user picker, action type multiselect, resource type.
- Support CSV export of filtered results.
- Default retention display: 90 days; link to full audit archive for compliance users.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Feature usage, Active users
**How to measure**: Track activity log filter usage rates and time-to-find-event in analytics; run usability tests measuring findability score and time-on-task for audit and investigation scenarios with filterable versus chronological-only timelines.

## Sources
- [Workato — Activity Audit Log](https://docs.workato.com/features/activity-audit-log.html)
- [Aspirity — Admin Panel Design Best Practices](https://aspirity.com/blog/good-admin-panel-design)
