---
id: "UX-282"
title: "Three-Level Navigation: Global / Contextual / Local"
category: "Navigation & Information Architecture"
subcategory: "Navigation Architecture"
score: 5
context: "Use when structuring navigation for complex enterprise applications with deeply nested content or multiple parallel workflows."
goals:
  - "Structure Navigation for Deep Products"
tags:
  - "enterprise"
  - "navigation"
wireframe: "https://files.catbox.moe/di1we3.jpg"
notion: "https://app.notion.com/p/Three-Level-Navigation-Global-Contextual-Local-685a9aed5344834595f40111f2ce7b46"
---

## Why
Structure navigation into three distinct layers to prevent confusion and disorientation: Global Navigation (always-visible sidebar or top bar for moving between major application sections), Contextual Navigation (secondary navigation relevant to the current section — horizontal tabs below the section header), and Local Navigation (in-page navigation — anchor links, sub-tabs, or segmented controls within a single page). Mixing these three layers into a single navigation component creates confusion about scope and available destinations. Each layer has distinct visual weight and behavior.

## How to implement
- Global: persistent sidebar with section-level navigation.
- Contextual: horizontal tab bar below the section header showing the subsections of the current section only.
- Local: anchor links, segmented controls, or stepper-tabs within a single page.
- Apply distinctly different visual styling to each level to communicate their scope.
- Never use the same visual component for global and contextual navigation.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Navigation success rate
- **Efficiency**: Time to navigate to target, Click depth to reach content
- **Satisfaction**: User satisfaction score (CSAT/NPS), Learnability
**How to measure**: Conduct tree tests before and after to measure findability rate; track search usage as a proxy for navigation failure; measure average click depth for top tasks.

## Sources
- [Smashing Magazine — Breadcrumbs UX Design](https://www.smashingmagazine.com/2022/04/breadcrumbs-ux-design/)
