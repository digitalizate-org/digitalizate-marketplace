---
id: "UX-244"
title: "Exposing Options vs. Hiding in Dropdowns for Primary Choices"
category: "Interaction Patterns"
subcategory: "Control selection for small option sets"
score: 4
context: "Apply to filter controls with ≤5 options, tab/segmented control vs. dropdown decisions, and dashboard period selectors where user frequently switches between 2–5 options."
goals:
  - "Reduce Learning Curve for Complex Tools"
wireframe: "https://files.catbox.moe/c69h6n.jpg"
notion: "https://app.notion.com/p/Exposing-Options-vs-Hiding-in-Dropdowns-for-Primary-Choices-1eca9aed534482d6be1081aa673252a5"
---

## Why
Pull-down menus hide options and require extra interaction to discover. For small, central option sets (2–5 options on a critical path), surfacing them directly as segmented controls or radio button groups reduces clicks and cognitive load. Reserve dropdowns for genuinely large option sets (countries, currencies, 50+ items) or rarely-accessed options. Frequent switching (Today/Week/Month on a time selector) should always be exposed.

## How to implement
- Use segmented controls or radio button groups for 2–5 mutually exclusive options instead of a select dropdown.
- Reserve dropdowns for large option sets (10+ items) or recurring/advanced options.
- For primary report filters, surface the top 3–4 most common selections as quick-select chips and put the rest in "Advanced Filters." For date range selectors, expose the most common options (Today, This Week, Last 30 Days, Custom) as visible buttons rather than a single dropdown.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: A/B test exposed option groups (radio buttons, segmented controls) versus dropdowns for 2-4 primary choices and measure time-on-task, error rate, and selection completion speed; collect ease-of-use ratings post-task.

## Sources
- [Good UI — Exposing Options vs. Hiding in Dropdowns](https://goodui.org/#14)
