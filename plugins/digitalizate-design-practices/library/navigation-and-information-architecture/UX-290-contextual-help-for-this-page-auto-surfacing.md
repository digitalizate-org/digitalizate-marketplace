---
id: "UX-290"
title: "Contextual \"Help for This Page\" Auto-Surfacing"
category: "Navigation & Information Architecture"
subcategory: "Help Systems"
score: 4
context: "All enterprise applications. Contextual help significantly reduces support ticket volume for common workflows by surfacing the right answer at the right moment."
goals:
  - "Structure Navigation for Deep Products"
wireframe: "https://files.catbox.moe/gug4ra.jpg"
notion: "https://app.notion.com/p/Contextual-Help-for-This-Page-Auto-Surfacing-928a9aed534482ffa462015eb6b753e4"
---

## Why
When a user opens the help panel, automatically surfacing articles relevant to their current page — rather than a generic help home screen — eliminates search friction for the most common help-seeking moments. If the user is on the "Billing Settings" page, showing "How to update payment details" and "Understanding invoice terms" immediately serves them; showing a generic help home screen requires an additional search step that many users skip by submitting a ticket instead.

## How to implement
- Map page URLs or route names to relevant help article IDs.
- When the help panel opens, retrieve and display the top 3–5 contextual articles based on the current route.
- Update the article list as the user navigates.
- Fall back to a search prompt if no contextual mapping exists.
- Measure support deflection rate (% of users who found the help article instead of submitting a ticket) as the primary success metric.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Support tickets reduction
- **Adoption & Retention**: Signup completion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track contextual help panel open rates and help-to-action conversion (users who view help and then complete the related task) via analytics; compare support ticket volume for pages with auto-surfaced help versus those without.
- Map page URLs or route names to relevant help article IDs.
- When the help panel opens, retrieve and display the top 3–5 contextual articles based on the current route.
- Update the article list as the user navigates.
- Fall back to a search prompt if no contextual mapping exists.
- Measure support deflection rate (% of users who found the help article instead of submitting a ticket) as the primary success metric.

## Sources
- [Document360 — Contextual In-App Documentation](https://document360.com/blog/contextual-in-app-documentation/)
- [Docsie — Context-Sensitive Help](https://www.docsie.io/solutions/context-sensitive-help-in-app-guidance/)
