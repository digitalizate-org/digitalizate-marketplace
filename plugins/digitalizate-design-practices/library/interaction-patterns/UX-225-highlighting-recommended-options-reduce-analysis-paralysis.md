---
id: "UX-225"
title: "Highlighting Recommended Options — Reduce Analysis Paralysis"
category: "Interaction Patterns"
subcategory: "Decision facilitation and choice guidance"
score: 5
context: "Apply to pricing tiers, plan selection, template galleries, chart type pickers, permission level selectors, export format options — wherever users face multiple equivalent-looking choices."
goals:
  - "Reduce Cognitive Load"
wireframe: "https://files.catbox.moe/tyht9z.jpg"
notion: "https://app.notion.com/p/Highlighting-Recommended-Options-Reduce-Analysis-Paralysis-5a4a9aed534482efa81a813f06d184e0"
---

## Why
When showing multiple options, highlighting a recommended choice helps users who need guidance make faster decisions. Too many visually equal choices trigger analysis paralysis. This pattern is backed by multiple A/B tests. Pre-selecting the recommended option based on known user context (role, company size, previous usage) is more effective than a generic "Most Popular" badge because it's personalized. Never leave all options visually equal when there is a clear best-practice choice.

## How to implement
- Mark one option as "Recommended" or "Most Popular" with a visual badge and elevated card treatment.
- In wizard steps with multiple paths, pre-select the most appropriate option based on user context (role, team size, previous usage).
- Never leave all options visually equal when a clear best-practice choice exists.
- Combine Von Restorff visual isolation with a text label ("Recommended") — visual distinction alone is insufficient for communicating why this option is preferred.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Completion rate
  - **Efficiency**: Time on task, Error counts
  - **Revenue**: Conversion rate, Revenue per session
  **How to measure**: A/B test pricing or selection pages with a visually highlighted recommended option against versions with no highlighted default, measuring selection completion rate, time-to-decision, and conversion rate. Track abandonment rates on choice-heavy pages to confirm that recommendation highlighting reduces analysis paralysis.

## Sources
- [Good UI — Highlighting Recommended Options](https://goodui.org/#7)
