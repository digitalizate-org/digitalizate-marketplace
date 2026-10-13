---
id: "UX-139"
title: "Resizable Split-Pane Layout"
category: "Desktop-Specific Patterns"
subcategory: "Split-Pane Layout"
score: 5
context: "Master-detail, editor+preview, tree+detail, list+form — any layout where two related content areas benefit from simultaneous visibility."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "desktop"
  - "ai-patterns"
wireframe: "https://files.catbox.moe/q4rez1.jpg"
notion: "https://app.notion.com/p/Resizable-Split-Pane-Layout-a5ca9aed5344827688310160bedb1d51"
---

## Why
Split-pane layouts divide the screen into two or more independently scrollable regions connected by a draggable divider, allowing users to adjust the information density balance to their preference. The ability to resize is crucial because different tasks and users require different proportions — a developer reviewing code and output may want a 70/30 split; a CRM user viewing a contact list and detail may want 30/70. Locking the split to a fixed ratio serves neither.

## How to implement
- Divider: 4–8px clickable/draggable zone with col-resize cursor on hover.
- Enforce minimum pane widths (typically 200px) to prevent content from collapsing.
- Persist the pane ratio in user preferences via localStorage or user profile.
- Provide a "reset split" option.
- Support collapsing one pane entirely via a collapse button or double-click on the divider.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT, Satisfaction rating
  **How to measure**: Observe user-initiated resize behaviors via analytics to confirm the feature is used and preferred. Compare task completion times for users with resizable panes vs. fixed layouts in usability testing on information-dense workflows.

## Sources
- [Microsoft Docs — Split View](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls/split-view)
- [OnePageCRM — Split Pane Design Challenges](https://developer.onepagecrm.com/blog/split-pane-and-conquering-design-challenges/)
