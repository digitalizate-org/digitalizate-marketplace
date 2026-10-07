---
id: "UX-194"
title: "Inline Error Messages — Proximity to Source Field"
category: "Feedback & Error Handling"
subcategory: "Error Message Placement"
score: 5
context: "Use for all form validation in all contexts."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "forms"
  - "error-handling"
wireframe: "https://files.catbox.moe/0o0pht.jpg"
notion: "https://app.notion.com/p/Inline-Error-Messages-Proximity-to-Source-Field-efda9aed5344834489548150520a9004"
---

## Why
Position error messages directly adjacent to the field that caused the error — below the input field is the standard expected position. Errors displayed only at the top or bottom of a form require users to hunt for which field needs correction. Proximity between error message and error source is the single most important factor in error comprehension. For accessibility, errors must also be identified programmatically, not just visually, so screen reader users receive the same information.

## How to implement
- Place error message text directly below the input field.
- Apply a red or error-color border to the input itself.
- Use an error icon (⚠) at the start of the message for redundancy — never rely on color alone.
- Associate the message with the field using `aria-describedby`.
- Apply `aria-invalid="true"` on erroneous input fields.
- Use `role="alert"` on error message containers for live announcement to screen readers.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Completion rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: A/B test inline error messages at field level versus top-of-form error summaries, measuring form completion rate, error-correction time, and post-submit CSAT; track the number of resubmission attempts per session as a secondary efficiency indicator.

## Sources
- [Stack Overflow UX Discussion](https://stackoverflow.com/questions/735701/long-forms-best-way-to-display-errors-usability-question)
- [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
