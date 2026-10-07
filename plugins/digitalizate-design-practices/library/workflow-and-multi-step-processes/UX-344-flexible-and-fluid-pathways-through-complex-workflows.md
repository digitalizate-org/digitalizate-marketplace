---
id: "UX-344"
title: "Flexible and Fluid Pathways Through Complex Workflows"
category: "Workflow & Multi-Step Processes"
subcategory: "Wizard Design"
score: 4
context: "Use for wizards with 5+ steps serving experienced users who may need to complete steps out of order, or configuration flows where some steps are optional."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "navigation"
wireframe: "https://files.catbox.moe/z5jtl2.jpg"
notion: "https://app.notion.com/p/Flexible-and-Fluid-Pathways-Through-Complex-Workflows-35ba9aed53448250b1de81ea14d179be"
---

## Why
For longer wizards, allowing users to see an overview of all steps and jump to any completed step prevents the rigid "locked tunnel" feel common in over-engineered enterprise forms. Some steps may be optional and should be clearly labeled as skippable. Non-linear navigation acknowledges that expert users understand their goals and should not be forced to re-traverse steps already completed. This is especially valuable in enterprise configuration where the user is an IT admin who has done this before.

## How to implement
- Show a sidebar or top-row of all steps as clickable links once each step is unlocked.
- Mark optional steps with a label or badge (e.g., "Optional").
- Dynamically add or remove steps from the list when conditional branching applies — recalculate step totals smoothly (never jump from "Step 3 of 7" to "Step 5 of 6" without explanation).
- Always include a Review/Summary step at the end.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Error counts
- **Engagement & Usage**: Abandonment rate
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Run usability tests on complex workflows measuring completion rates and the number of path deviations or errors; compare flexible workflow designs against strictly linear ones. Track abandonment rates at each workflow step in analytics to identify where rigid pathing causes drop-off and whether flexibility reduces those exits.

## Sources
- [Eleken — Wizard UI Pattern](https://www.eleken.co/blog-posts/wizard-ui-pattern-explained)
- [Nielsen Norman Group — 8 Guidelines for Complex Applications](https://www.nngroup.com/articles/complex-application-design/)
