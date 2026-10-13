---
id: "UX-004"
title: "Visible Focus Indicators"
category: "Accessibility"
subcategory: "Focus Management"
score: 5
context: "Use for all interactive elements: links, buttons, inputs, custom components in all application states."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Accessibility & Inclusion"
tags:
  - "keyboard"
  - "navigation"
  - "accessibility"
wireframe: "https://files.catbox.moe/jnndxc.jpg"
notion: "https://app.notion.com/p/Visible-Focus-Indicators-56da9aed5344829c83f3811ba73570af"
---

## Why
Every focusable element must display a clearly visible focus indicator when focused via keyboard. Browsers provide default focus outlines that are frequently removed by design teams for aesthetic reasons, creating a product that is unusable for keyboard-only users. WCAG 2.1 requires focus indicators that meet minimum contrast requirements; WCAG 2.2 adds more specific size requirements. Design custom focus styles that are visually distinctive but aesthetically consistent with the product's design language.

## How to implement
- Never use `outline: none` without providing a custom equivalent of equal or greater visibility.
- Design a custom focus style: typically a 2–3px solid ring or box-shadow in the brand primary color.
- Ensure the focus indicator has 3:1 contrast against both the element and its background.
- Apply consistently across all interactive elements including custom components.
- Test all focus indicators against the WCAG 2.2 Focus Appearance criteria (minimum 2px perimeter, minimum contrast 3:1).

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, App store rating
  **How to measure**: Conduct keyboard-only navigation usability tests measuring task success rate and error rate for users who rely on focus indicators. Run automated accessibility audits (e.g., axe, Lighthouse) to identify focus indicator failures and track remediation progress over time alongside accessibility support ticket volume.

## Sources
- [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [Level Access — WCAG 2.1](https://www.levelaccess.com/blog/wcag-2-1-exploring-new-success-criteria/)
