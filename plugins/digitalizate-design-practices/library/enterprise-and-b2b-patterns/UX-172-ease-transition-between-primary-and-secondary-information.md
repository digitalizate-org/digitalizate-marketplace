---
id: "UX-172"
title: "Ease Transition Between Primary and Secondary Information"
category: "Enterprise & B2B Patterns"
subcategory: "Primary/secondary information access"
score: 4
context: "Apply to data tables with linked detail records, dashboards with drill-down data, and complex forms with field-level help."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "ai-patterns"
  - "forms"
  - "tables"
wireframe: "https://files.catbox.moe/twnsla.jpg"
notion: "https://app.notion.com/p/Ease-Transition-Between-Primary-and-Secondary-Information-d1ba9aed53448296bef601b3cf722c8d"
---

## Why
When secondary information is deferred to reduce clutter, it must remain easily accessible to contextualize decisions about primary information. Users should access supplemental information without fully leaving the primary screen or losing their place. This is the core principle behind record detail side panels (keep the list visible while viewing a detail), expandable table rows (inline detail without navigation), and dashboard tooltip hover states.

## How to implement
- Use hover-tooltips to show precise quantitative data for chart data points without navigating away.
- Use a non-modal side panel adjacent to primary content for detail views.
- Implement inline expandable rows in tables for record details.
- Use popovers anchored to the triggering element to show contextual detail without full navigation.
- Always provide a clear path back to the primary context from any secondary view.
- The expandable row and detail side panel patterns are the primary implementation tools for this principle.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure task completion times for workflows requiring users to move between primary and secondary information contexts. Track context-switch errors (e.g., losing place, re-opening wrong records) as a direct measure of transition friction in complex enterprise flows.

## Sources
- [Nielsen Norman Group — 8 Guidelines for Complex Applications](https://www.nngroup.com/articles/complex-application-design/)
