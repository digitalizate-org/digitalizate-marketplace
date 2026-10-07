---
id: "UX-337"
title: "Zeigarnik Effect — Persist Incomplete Tasks and Draft States"
category: "Workflow & Multi-Step Processes"
subcategory: "Draft preservation and re-engagement"
score: 5
context: "Apply for draft/autosave indicators, incomplete workflow notifications, setup checklist reminders, abandoned report configurations, and partially completed import flows."
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "workflow"
  - "enterprise"
wireframe: "https://files.catbox.moe/qsl57o.jpg"
notion: "https://app.notion.com/p/Zeigarnik-Effect-Persist-Incomplete-Tasks-and-Draft-States-25ba9aed5344838c8266817dcedd79c0"
---

## Why
People remember uncompleted or interrupted tasks better than completed ones — incomplete tasks persist in working memory, creating cognitive tension that motivates return. This makes visible incomplete states (draft indicators, in-progress notifications, partially-filled checklists) powerful engagement drivers. In enterprise contexts where complex tasks span multiple sessions, the Zeigarnik Effect is the psychological mechanism underlying "continue where you left off" patterns.

## How to implement
- Use "draft saved" indicators and persistent "Continue where you left off" prompts for multi-session tasks (report builders, complex forms).
- Show progress bars in incomplete states ("Profile is 60% complete") — visible gaps motivate closing them.
- Surface partially completed onboarding tasks prominently.
- Show notification badges for incomplete tasks ("3 pending approvals").
- Restore last-active filters, table views, and sort states when a user returns to a module.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Completion rate, Task success rate
  - **Efficiency**: Time on task, Time saved per task
  - **Engagement & Usage**: Sessions per user, Abandonment rate, Active users
  **How to measure**: Measure workflow completion rates for tasks with persisted draft states vs. those without, using product analytics funnels. Track session return rates to incomplete tasks to quantify how often draft persistence drives users back to complete work.

## Sources
- [Laws of UX — Zeigarnik Effect](https://lawsofux.com/zeigarnik-effect/)
- [Eleken — Wizard UI Pattern](https://www.eleken.co/blog-posts/wizard-ui-pattern-explained)
