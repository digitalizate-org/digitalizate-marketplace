---
id: "UX-026"
title: "Choice Overload — Limit Visible Options"
category: "Cognitive Psychology"
subcategory: "Decision Design"
score: 5
context: "Use when designing configuration panels, filter interfaces, feature menus, and any context where users face a large number of options."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
  - "Reduce Cognitive Load"
wireframe: "https://files.catbox.moe/ku74ta.jpg"
notion: "https://app.notion.com/p/Choice-Overload-Limit-Visible-Options-290a9aed534483c88c97011652741315"
---

## Why
When people are given too many options, decision quality deteriorates, decision satisfaction decreases, and decision avoidance ("I'll decide later") increases. Feature menus with 40 options, report builders with 200 fields, and configuration panels with 50 settings all impair the user's ability to make good decisions. The solution is not to reduce capability, but to reduce visible options while preserving full capability through progressive disclosure. Providing intelligent defaults that reduce the decision burden for users who don't want to choose is equally important.

## How to implement
- Apply a maximum of 7–10 visible options in any menu, filter list, or configuration panel.
- Use progressive disclosure to show the most common options prominently and provide "See all options" access to the full set.
- Provide intelligent defaults that represent the optimal choice for most users.
- For configuration panels, distinguish required settings (always visible) from optional settings (collapsed by default).
- For filter interfaces, show the 5–8 most-used filters by default and an "Add filter" option for additional dimensions.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Completion rate, Task success rate
- **Revenue**: Conversion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: A/B test reduced-option layouts against full-option displays on decision-heavy pages (e.g., pricing, product selection). Measure conversion rate and time-to-decision as primary metrics, and collect post-task ease-of-use scores to confirm reduced cognitive burden.

## Sources
- [100 Things #92 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
