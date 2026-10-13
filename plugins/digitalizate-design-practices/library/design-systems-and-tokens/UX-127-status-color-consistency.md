---
id: "UX-127"
title: "Status Color Consistency"
category: "Design Systems & Tokens"
subcategory: "Status Communication"
score: 5
context: "Use in all status indicators, alerts, banners, form validation, badges, and data visualizations."
goals:
  - "Design a Consistent System at Scale"
  - "Improve Readability & Visual Clarity"
tags:
  - "error-handling"
wireframe: "https://files.catbox.moe/6qs574.jpg"
notion: "https://app.notion.com/p/Status-Color-Consistency-137a9aed534483d2ba4581695ba38a7c"
---

## Why
Use a consistent color vocabulary for status: green for success, red for error/danger, yellow/orange for warning, blue for informational. These conventions are deeply ingrained in user mental models across most cultures. Deviating from them — using red for a positive alert, or orange for an error — causes systematic confusion and erodes trust in status communication throughout the product. All status colors must also have non-color differentiation (icon + text label) for color-blind users.

## How to implement
- Define semantic tokens: `color-status-success` (green), `color-status-error` (red), `color-status-warning` (yellow/amber), `color-status-info` (blue).
- Pair every status color with a semantic icon (checkmark for success, X or ! for error, warning triangle for warning, info circle for info).
- Apply these consistently across all components — badges, banners, form validation, toasts, and table row highlights.
- Test all status indicators against WCAG contrast requirements.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Track status-related error events (e.g., users acting on wrong-status items) in analytics before and after standardizing status colors; run quick usability tests measuring time-to-status-recognition and confidence rating.

## Sources
- [Carbon Design System — Notification Pattern](https://carbondesignsystem.com/patterns/notification-pattern/)
