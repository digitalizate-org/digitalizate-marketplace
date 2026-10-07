---
id: "UX-206"
title: "Inline Validation — Validate on Field Blur, Not on Keystroke"
category: "Forms & Input"
subcategory: "Real-Time Feedback"
score: 5
context: "Use when designing any data entry form, especially multi-field enterprise forms with complex validation rules."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "forms"
  - "data-heavy"
  - "error-handling"
verify: "Typing a partial valid value (e.g. the first characters of an email) in a standard field shows no error until the field loses focus or the form is submitted."
verifiable_by: "test"
anti_pattern: "An onChange handler that sets the error state, so \"Invalid email\" appears after the first typed character."
wireframe: "https://files.catbox.moe/5mv9fc.jpg"
notion: "https://app.notion.com/p/Inline-Validation-Validate-on-Field-Blur-Not-on-Keystroke-3ffa9aed5344827ba27f813349fcc467"
---

## Why
Validate form input when the field loses focus (on blur) rather than on every keystroke. This allows users to finish typing before seeing an error, preventing false-positive errors and the frustration of being flagged as wrong mid-input. Validate on keystroke only for fields where partial state is always valid (e.g., a counter) or where positive reinforcement is valuable (e.g., password strength meter). Deferred validation that only shows errors after full form submission forces users to search for problems across the entire form and interrupts flow; inline validation reduces errors, reduces submission failures, and creates a sense of forward momentum.

## How to implement
- Bind validation to the `blur` event for standard fields.
- Show success states (green checkmark) immediately when a field becomes valid.
- Delay error state until blur or first failed submission attempt.
- For complex formats (phone, dates, IDs), provide format hints as placeholder text.
- For fields where positive feedback is meaningful, add progress indicators (password strength) that respond on keystroke without triggering error states prematurely.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Error rate, Task success rate, Completion rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: A/B test keystroke vs. blur validation timing on forms and measure error rate per submission and form abandonment rate. Run usability tests to capture subjective frustration ratings when validation fires at different timings.

## Sources
- [About Face 4th Ed., Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
- [UX Stack Exchange](https://www.reddit.com/r/UXDesign/comments/1kllxg1/best_uxui_practices_for_displaying_multiple/)
- [Nielsen Norman Group — 10 Design Guidelines for Errors in Forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [Good UI — Inline Validation](https://goodui.org/#33)
