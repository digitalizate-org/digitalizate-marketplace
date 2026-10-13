---
id: "UX-142"
title: "Context-Sensitive Menu Content"
category: "Desktop-Specific Patterns"
subcategory: "Context Menus"
score: 5
context: "All context menus. The value of a context menu is its contextual relevance — a generic menu defeats its purpose."
goals:
  - "Structure Navigation for Deep Products"
  - "Design for Enterprise & B2B Scale"
tags:
  - "desktop"
wireframe: "https://files.catbox.moe/u4zyw5.jpg"
notion: "https://app.notion.com/p/Context-Sensitive-Menu-Content-7e0a9aed5344827baa1d015d7855e2b3"
---

## Why
Context menu items must be specific to the object being right-clicked: clicking a folder should show folder actions; clicking a file should show file actions; clicking a selected cell in a table should show cell-level operations. Menus that show generic application-level actions regardless of context are a form of interface debt — they exist but provide no contextual value, making users doubt whether the menu is worth checking. Well-constructed contextual menus dramatically reduce the time to execute common operations.

## How to implement
- Build context menus programmatically based on the type and state of the target element.
- For multi-selection, show only actions applicable to all selected items with count context ("Delete 5 items").
- Avoid global application actions in element-specific context menus.
- Limit to 1 submenu level.
- Consider using an action Factory or Visitor pattern to ensure menu construction logic is centralized and consistent.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Conduct usability testing to measure how often users find relevant actions in context menus when menu content is adapted to the selected object vs. when it is static. Track right-click action usage rates via analytics to confirm context-sensitive menus are used and preferred.

## Sources
- [Nielsen Norman Group — Contextual Menus Guidelines](https://www.nngroup.com/articles/contextual-menus-guidelines/)
