---
id: "UX-526"
title: "Common Fate in Drag-and-Drop Interfaces"
category: "Gestalt Principles"
subcategory: "Common Fate"
score: 4
context: "Kanban boards, file managers, playlist editors, multi-select list management"
goals:
  - "Design Effective Feedback & Error States"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "animation"
wireframe: "https://files.catbox.moe/pleaiu.jpg"
notion: "https://app.notion.com/p/Common-Fate-in-Drag-and-Drop-Interfaces-d99a9aed534482ad8aeb81aad3cb76ec"
---

## Why
When users drag multiple selected items in a drag-and-drop interface, all selected items should move as a unit with identical motion paths. This exploits Common Fate to communicate 'these items are a group with a shared fate' at the most intuitive level possible. When only the primary dragged item moves while selected companions remain stationary, users lose confidence in the multi-select action and release the drag operation prematurely. Card-based Kanban tools, file managers, and playlist editors all benefit from coordinated drag motion for grouped items. The principle also applies to multi-select deletion animations: all selected items should animate out simultaneously.

## How to implement
- In multi-select drag contexts, ghost all selected items beneath the dragged item with a 4-8px offset cascade
- Apply a count badge ('3 items') to the dragged ghost to communicate group size
- Ensure drop target highlighting appears for all valid destinations simultaneously when dragging a group
- Animate multi-select deletions/removals with identical timing and direction (e.g., all items shrink to zero simultaneously)
- For reorder animations in lists, move displaced items as a continuous wave to imply single causation

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Measure mis-drop error rate and time-to-successful-drop in usability tests with and without common-fate motion cues on draggable groups; compare task success rates across both conditions.

## Sources
- [UIUXDesigning — Gestalt Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
- [Gestalt Principles — Common Fate](https://www.gestaltprinciples.com/principles/common-fate)
