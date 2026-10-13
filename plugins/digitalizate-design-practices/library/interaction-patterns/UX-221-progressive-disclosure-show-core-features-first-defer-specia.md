---
id: "UX-221"
title: "Progressive Disclosure — Show Core Features First, Defer Specialized Options"
category: "Interaction Patterns"
subcategory: "Information Layering"
score: 5
context: "Use when designing feature-rich interfaces, when users complain about visual complexity, and when building dashboards, data tables, or configuration interfaces."
goals:
  - "Simplify a Cluttered Interface"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/prsc2u.jpg"
notion: "https://app.notion.com/p/Progressive-Disclosure-Show-Core-Features-First-Defer-Specialized-Options-be5a9aed534483bcb15b01582dc62a21"
---

## Why
Present only the information and controls necessary for the most common use cases in the default view, providing access to additional options and details through secondary views, expandable sections, and contextual panels. Progressive disclosure prevents information overload for intermediate users while preserving full capability for advanced users. For data-heavy enterprise applications, this means showing summary-level data by default with drill-down access to detail. In forms, it means revealing conditional fields only when they become relevant based on prior inputs, dramatically reducing the perceived length of complex forms.

## How to implement
- For each screen, identify the 20% of actions and data that serve 80% of use cases.
- Surface these prominently in the default view.
- Provide access to the remaining capabilities through expandable sections, secondary panels, contextual right-click menus, and advanced-mode toggles.
- For forms, use conditional logic to show/hide fields; keep optional fields collapsed until needed; group related fields under collapsible sections.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Error counts
- **Effectiveness**: Completion rate, Task success rate
- **Engagement & Usage**: Feature usage, Abandonment rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: A/B test a progressively disclosed interface against a fully expanded one, measuring task completion rate and time on task for both novice and expert users. Track abandonment rate on complex workflows to confirm that deferring advanced options reduces drop-offs.

## Sources
- [About Face 4th Ed., Ch. 10 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
- [Interaction Design Foundation](https://www.interaction-design.org/literature/topics/progressive-disclosure)
- [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
