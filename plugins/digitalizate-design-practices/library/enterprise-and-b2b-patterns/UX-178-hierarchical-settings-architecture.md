---
id: "UX-178"
title: "Hierarchical Settings Architecture"
category: "Enterprise & B2B Patterns"
subcategory: "Settings Design"
score: 4
context: "Any enterprise application with settings that affect different audiences — system-wide, organization-level, and personal preferences."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
wireframe: "https://files.catbox.moe/0139n5.jpg"
notion: "https://app.notion.com/p/Hierarchical-Settings-Architecture-c0fa9aed5344822fbfc80179f7229164"
---

## Why
Organizing settings into a clear hierarchy — Global/System → Organization → Personal/User preferences — prevents confusion about the blast radius of a setting change and separates concerns appropriately. When system, org, and personal settings are intermingled, users making a personal preference change may accidentally alter organization-wide behavior. This hierarchy also enables proper access control: system settings are admin-only, personal settings are user-controlled.

## How to implement
- System settings: accessible only to system admins, clearly labeled "affects all users." Organization settings: accessible to org admins.
- User settings: personal preferences.
- Within each level, use a left-nav sidebar grouped by category (Account, Security, Notifications, Integrations).
- Show the current value and last-modified-by metadata for critical settings.
- Log all setting changes in the audit trail with the scope affected.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Training time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run usability tests on common settings configuration tasks measuring time-to-find and error rate; track support tickets related to settings confusion before and after implementing a clear hierarchy and compare resolution times.

## Sources
- [Aspirity — Admin Panel Design Best Practices](https://aspirity.com/blog/good-admin-panel-design)
