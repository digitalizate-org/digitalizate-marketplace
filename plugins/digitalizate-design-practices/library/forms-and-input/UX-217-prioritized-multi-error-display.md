---
id: "UX-217"
title: "Prioritized Multi-Error Display"
category: "Forms & Input"
subcategory: "Validation Error Hierarchy"
score: 4
context: "Use when designing forms with multi-layer validation logic, especially in enterprise data entry tools where fields have format, logical, and cross-field consistency requirements."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "forms"
  - "error-handling"
verify: "A field that fails several rules shows exactly one error message at a time, the format error before range or cross-field errors."
verifiable_by: "test"
anti_pattern: "Entering \"abc\" in a numeric field shows \"Must be a number\", \"Must be between 1 and 100\" and \"Must be less than End\" at the same time."
wireframe: "https://files.catbox.moe/6kxnlx.jpg"
notion: "https://app.notion.com/p/Prioritized-Multi-Error-Display-31aa9aed53448307ba11817b61bc354d"
---

## Why
When a single field can generate multiple validation errors (format, logical, and consistency errors), show only the most actionable error first rather than stacking all errors simultaneously. A format error ("Must be numeric") makes a logical comparison error moot — displaying both creates confusion and implies the user must fix multiple independent problems when fixing the first will resolve all. Progress through the error hierarchy as the user corrects issues. This approach reduces perceived form complexity and guides users through correction efficiently.

## How to implement
- Define an error priority hierarchy per field: format errors first (wrong data type or structure) → logical errors second (value out of acceptable range) → consistency errors last (cross-field dependencies violated).
- Only surface the highest-priority unresolved error per field at any time.
- As the user fixes each error, reveal the next.
- Never show more than one error per field simultaneously.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Measure form completion rate and average time-to-resolution for multi-error states, comparing prioritized (critical errors first) versus unordered error displays. Track how many form re-submission attempts users make on average when errors are prioritized versus when they are displayed in field order.

## Sources
- [UX Stack Exchange / r/UXDesign](https://www.reddit.com/r/UXDesign/comments/1kllxg1/best_uxui_practices_for_displaying_multiple/)
