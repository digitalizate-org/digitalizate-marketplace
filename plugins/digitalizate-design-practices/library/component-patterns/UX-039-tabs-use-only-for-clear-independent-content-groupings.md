---
id: "UX-039"
title: "Tabs — Use Only for Clear Independent Content Groupings"
category: "Component Patterns"
subcategory: "Tab usage and tab design"
score: 5
context: "Apply to detail views with distinctly typed sections (Overview / Settings / History / Permissions), module organization in complex forms. Avoid when users need to compare content across tabs simultaneously."
avoid_when: "users need to compare content across tabs simultaneously."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "navigation"
  - "accessibility"
wireframe: "https://files.catbox.moe/yjacn3.jpg"
notion: "https://app.notion.com/p/Tabs-Use-Only-for-Clear-Independent-Content-Groupings-ee0a9aed53448261bce2818360d8428c"
---

## Why
Tabs are appropriate when content has clear, mutually exclusive groupings that users need to switch between and where content in each tab doesn't need simultaneous comparison. Essential/primary content must be in the first (default) tab — tabs hide content, and hidden content is missed by many users. When tab count exceeds 7, consider a sidebar navigation pattern instead. Always ensure tab keyboard accessibility: Tab key to the tab list, Arrow keys between tabs, Space/Enter to activate.

## How to implement
- Use tabs when content has clear distinct groupings and the count is ≤7.
- Avoid tabs when users need to simultaneously see information across multiple tabs.
- Default to the highest-use tab (not necessarily the first).
- Never mix in-page tabs and global navigation tabs in the same control.
- Use at least two visual indicators for the selected tab (border + bold text, or background fill + underline).
- Use one row of tabs only.
- Implement ARIA: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run tree tests or first-click tests verifying tab labels clearly correspond to independent content sections; measure task success rate and navigation error rate in usability sessions, and track tab-switching patterns via analytics to detect mismatched content groupings.
- Use tabs when content has clear distinct groupings and the count is ≤7.
- Avoid tabs when users need to simultaneously see information across multiple tabs.
- Default to the highest-use tab (not necessarily the first).
- Never mix in-page tabs and global navigation tabs in the same control.
- Use at least two visual indicators for the selected tab (border + bold text, or background fill + underline).
- Use one row of tabs only.
- Implement ARIA: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`.

## Sources
- [Nielsen Norman Group — Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right/)
- [Component Gallery — Tabs](https://component.gallery/components/tabs/)
