---
id: "UX-279"
title: "Recently Viewed Records and Resume Incomplete Workflows"
category: "Navigation & Information Architecture"
subcategory: "Re-finding and workflow continuity"
score: 5
context: "Apply to home/dashboard screens, navigation panels, and module entry screens to support the re-finding information-seeking mode."
goals:
  - "Structure Navigation for Deep Products"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/26oaij.jpg"
notion: "https://app.notion.com/p/Recently-Viewed-Records-and-Resume-Incomplete-Workflows-dc2a9aed53448282bd588108381a90d9"
---

## Why
"Recently Viewed" and "Continue where you left off" patterns support the re-finding information-seeking mode — the dominant mode for experienced daily users. Restoring last-active filters, table views, and sort states eliminates the repetitive reconfiguration overhead that accumulates to significant time loss in daily-use enterprise tools. Combining this with the Zeigarnik Effect (visible incomplete tasks) creates a powerful re-engagement system.

## How to implement
- Surface a "Recently Viewed" section on the home/dashboard screen showing the last 5–8 records, reports, or workflows.
- For draft/in-progress items, show "You have 2 unsaved drafts" prominently.
- Restore last-active filters, table views, and sort states when a user returns to a module.
- Include recently viewed items at the top of global search results before any typing.
- Track incomplete workflows (multi-step wizards) and surface "Resume" prompts on return.
- This is documented as Pattern #26 at Good UI with positive A/B test results.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Engagement & Usage**: Sessions per user, Active users, Abandonment rate
  **How to measure**: Track how often users access recently viewed records via analytics click data, and compare task completion times for users who use resume-workflow shortcuts vs. those who navigate from scratch. Monitor abandonment rates for multi-session workflows.

## Sources
- [Good UI — Cart Reminder / Recently Viewed](https://goodui.org/)
- [Laws of UX — Zeigarnik Effect](https://lawsofux.com/zeigarnik-effect/)
