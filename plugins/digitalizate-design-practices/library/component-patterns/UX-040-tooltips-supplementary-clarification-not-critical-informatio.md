---
id: "UX-040"
title: "Tooltips — Supplementary Clarification, Not Critical Information"
category: "Component Patterns"
subcategory: "Tooltip usage and design"
score: 5
context: "Apply to all unlabeled icon buttons, abbreviated labels, technical terms, and form fields with non-obvious requirements. Never put task-critical information in a tooltip."
goals:
  - "Design Forms That Work"
  - "Design a Consistent System at Scale"
  - "Design Effective Feedback & Error States"
tags:
  - "keyboard"
wireframe: "https://files.catbox.moe/97dyjx.jpg"
notion: "https://app.notion.com/p/Tooltips-Supplementary-Clarification-Not-Critical-Information-7f3a9aed534483ddaa6b0161fc373f40"
---

## Why
Tooltips are hover-triggered microcontent — they disappear as soon as the user moves away. Any information required to complete a task must be persistently visible, not hidden behind a hover. Tooltips are best for additional explanation of elements whose purpose isn't immediately obvious: icon button labels, keyboard shortcut hints, abbreviated column headers. Showing keyboard shortcuts in tooltips passively teaches power users without forcing a tutorial. Tooltips must be accessible via keyboard focus (Tab key), not just mouse hover.

## How to implement
- Do not put field requirements (password rules) solely in a tooltip — users must commit them to memory.
- Use tooltips for: explaining what an icon does, defining a technical term, showing keyboard shortcuts ("Delete (⌫)" or "Save (Ctrl+S)").
- Keep tooltip text to 1–2 sentences maximum.
- Ensure accessibility via `role="tooltip"` and `aria-describedby`.
- Never put essential information only in tooltips.
- Use tooltip arrows when multiple nearby elements could be the target.
- Add tooltips to every icon-only button without a visible text label as a minimum — better yet, add text labels.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Track tooltip hover rates in analytics to identify which elements need clarification; run usability tests to confirm that critical information in tooltips causes task failures, and measure error rate before and after moving critical content to always-visible positions.

## Sources
- [Nielsen Norman Group — Tooltip Guidelines](https://www.nngroup.com/articles/tooltip-guidelines/)
- [Component Gallery — Tooltip](https://component.gallery/components/tooltip/)
