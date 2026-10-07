---
id: "UX-141"
title: "Context Menu Placement and Consistency"
category: "Desktop-Specific Patterns"
subcategory: "Context Menus"
score: 5
context: "Any UI element with secondary actions that would clutter the primary interface — table rows, list items, file nodes, canvas objects."
goals:
  - "Structure Navigation for Deep Products"
  - "Design for Enterprise & B2B Scale"
tags:
  - "desktop"
wireframe: "https://files.catbox.moe/8b4gum.jpg"
notion: "https://app.notion.com/p/Context-Menu-Placement-and-Consistency-86da9aed534482a9b92a014a8a0bb4fd"
---

## Why
Context menus (right-click menus / kebab menus) should appear near the content they affect and use consistent iconography — kebab (⋮) for element-level actions, hamburger (☰) reserved for global navigation only. Menu items should be grouped logically with dividers and ordered by frequency of use (most common at top). Consistent placement and iconography prevents users from hunting for action entry points in different parts of the application.

## How to implement
- Position: near the element, within viewport bounds.
- Maximum 7–10 items before needing a submenu (maximum 1 submenu level — never nest deeper).
- Use icons + labels, not icon-only.
- Separate destructive actions (Delete, Archive) with a divider and place at the bottom.
- Show unavailable actions as disabled with tooltips, not hidden.
- Support keyboard navigation within the menu (arrow keys, Enter, Escape).

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Test context menu placement consistency across an application using usability benchmarks: measure time-to-locate actions and error rates when menus appear in expected vs. unexpected positions. Track support tickets related to right-click or context menu confusion as a longitudinal metric.

## Sources
- [Nielsen Norman Group — Contextual Menus Guidelines](https://www.nngroup.com/articles/contextual-menus-guidelines/)
- [LogRocket — Creating Context Menus](https://blog.logrocket.com/ux-design/creating-context-menus/)
