---
id: "UX-212"
title: "Smart Defaults in Forms and Configuration"
category: "Forms & Input"
subcategory: "Intelligent defaults and pre-filling"
score: 5
context: "Apply to new record creation, report configuration, filter defaults, notification preferences, and user profile completion wherever context enables educated defaults."
goals:
  - "Design Forms That Work"
tags:
  - "onboarding"
verify: "On a new record form, fields that can be inferred (owner = current user, date range = last full period, country/timezone/currency from the account) arrive pre-filled."
verifiable_by: "test"
anti_pattern: "\"Assigned to\" left blank, date range defaulting to \"All time\", and timezone showing \"Select...\" even though the account already has one."
wireframe: "https://files.catbox.moe/63oxco.jpg"
notion: "https://app.notion.com/p/Smart-Defaults-in-Forms-and-Configuration-110a9aed534482d48d8d8187908970b8"
---

## Why
Pre-filling form fields with context-based educated guesses removes friction and demonstrates the system understands the user. Smart defaults should be the most likely value for the current user segment, not a blank slate requiring active configuration. Defaulting new records to the logged-in user, defaulting date ranges to the most recent full period, and defaulting currency and timezone from account settings all significantly reduce form completion time and errors.

## How to implement
- Default new records to the most likely values based on user role, team, or previous entries ("Assigned To" defaults to logged-in user).
- Default date ranges to the most recent full period (last 30 days, last quarter) rather than "all time." Use geolocation or account data to pre-select country, timezone, currency.
- Remember and re-apply user's last-used filter configuration on return.
- Pre-complete wizard steps that can be inferred from account context.
- Use opt-out defaults for settings that benefit most users — make the recommended state the starting point.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Error counts
- **Adoption & Retention**: Signup completion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: A/B test forms with smart defaults versus blank forms; measure completion rate, time-to-submit, and error rate; track onboarding completion rates as an indicator of whether smart defaults reduce friction for new users.
- Default date ranges to the most recent full period (last 30 days, last quarter) rather than "all time." Use geolocation or account data to pre-select country, timezone, currency.
- Remember and re-apply user's last-used filter configuration on return.
- Pre-complete wizard steps that can be inferred from account context.
- Use opt-out defaults for settings that benefit most users — make the recommended state the starting point.

## Sources
- [Good UI — Smart Defaults](https://goodui.org/#28)
- [Nielsen Norman Group — Minimize Cognitive Load](https://www.nngroup.com/articles/minimize-cognitive-load/)
