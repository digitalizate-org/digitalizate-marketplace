---
id: "UX-189"
title: "Error Messages — Plain Language with Constructive Solutions"
category: "Feedback & Error Handling"
subcategory: "Error message writing and presentation"
score: 5
context: "Apply to all system errors, form validation messages, permission errors, empty result states, and API failures. Every error state is an opportunity to demonstrate respect for the user's time."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
  - "forms"
  - "error-handling"
wireframe: "https://files.catbox.moe/20f2u8.jpg"
notion: "https://app.notion.com/p/Error-Messages-Plain-Language-with-Constructive-Solutions-d2ca9aed53448397b7ab012952da07ee"
---

## Why
"An error occurred" is useless. Error messages must precisely describe what went wrong in the user's vocabulary and offer a constructive path to resolution. Use bold, high-contrast, red text plus an icon (never color alone — accessibility). Errors placed far from the problematic input force users to remember the error while hunting for the field. Alert components should use four semantic levels: informational (blue), success (green), warning (yellow), error (red) — each with both color AND an icon for accessibility compliance.

## How to implement
- Be specific: "Please enter a valid US phone number (e.g., 555-867-5309)" not "Invalid input." Suggest remedies where possible — offer buttons or links that directly resolve the error.
- Use non-blaming, neutral tone; avoid "illegal," "invalid," "you failed to." Position error messages adjacent to the UI element requiring correction.
- Preserve the user's original input so they correct rather than re-enter.
- For field-level errors, show inline below the field; for form-level or page-level errors, use an alert banner at the top of the affected context.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track support ticket volume for error-related help requests before and after rewriting error messages in plain language with actionable recovery steps. Run usability tests measuring recovery time (time from error state to successful task completion) to quantify how constructive error messages accelerate self-service resolution.

## Sources
- [Nielsen Norman Group — Error Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)
- [Nielsen Norman Group — 10 Design Guidelines for Errors in Forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [Component Gallery — Alert / Notification Banner](https://component.gallery/components/alert/)
- [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux)
- [About Face 4th Ed., Ch. 15 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
