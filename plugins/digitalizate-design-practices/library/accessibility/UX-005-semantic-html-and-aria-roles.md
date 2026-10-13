---
id: "UX-005"
title: "Semantic HTML and ARIA Roles"
category: "Accessibility"
subcategory: "Semantic Markup"
score: 5
context: "Use for all UI component development — the foundation of accessible interface implementation."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Accessibility & Inclusion"
tags:
  - "accessibility"
wireframe: "https://files.catbox.moe/23bna0.jpg"
notion: "https://app.notion.com/p/Semantic-HTML-and-ARIA-Roles-03ba9aed534483f3a97481289e3132f3"
---

## Why
Use native HTML elements for their intended purposes — buttons for actions, links for navigation, headings for hierarchy, lists for groups of items. When custom components must be built, use ARIA roles, states, and properties to communicate their semantics to assistive technologies. The first rule of ARIA is: don't use ARIA if a native HTML element can do the job. Native HTML elements have keyboard interaction and accessibility semantics built in; ARIA requires manual implementation of all these behaviors.

## How to implement
- Use `<button>` for all actions, `<a href>` for all navigation.
- Use `role="dialog"` + `aria-modal="true"` for custom modals.
- Use `aria-expanded` for expandable components (accordions, dropdowns).
- Use `aria-label` for icon-only buttons.
- Use `aria-live="polite"` for dynamically updated regions (search results, notifications).
- Use `aria-describedby` to associate help text and error messages with their form fields.
- Test with at least one screen reader (NVDA, VoiceOver, JAWS) before launch.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, App store rating
  **How to measure**: Run automated accessibility audits (axe, Lighthouse) to measure ARIA role coverage and semantic HTML compliance, tracking issue count over time. Conduct screen reader usability tests measuring task success rates for keyboard and AT users before and after semantic HTML improvements.

## Sources
- [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
