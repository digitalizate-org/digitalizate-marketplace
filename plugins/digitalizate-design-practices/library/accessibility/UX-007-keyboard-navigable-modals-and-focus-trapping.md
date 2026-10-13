---
id: "UX-007"
title: "Keyboard-Navigable Modals and Focus Trapping"
category: "Accessibility"
subcategory: "Modal Accessibility"
score: 5
context: "All modal dialogs, drawer panels, and dropdown menus across the application."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Accessibility & Inclusion"
tags:
  - "keyboard"
  - "navigation"
  - "accessibility"
wireframe: "https://files.catbox.moe/rcpes1.jpg"
notion: "https://app.notion.com/p/Keyboard-Navigable-Modals-and-Focus-Trapping-dfba9aed534482b982fe01d35b1d2cce"
---

## Why
Modal dialogs must implement focus trapping: when a modal opens, focus moves inside it; Tab/Shift+Tab cycles only within the modal; Escape closes it; on close, focus returns to the trigger element. Without focus trapping, keyboard and screen reader users escape the modal unintentionally, interact with background content they cannot see (because the modal's visual overlay hides it), and experience a broken workflow. This is both a WCAG requirement and a fundamental modal interaction contract.

## How to implement
- On modal open: move focus to the modal's heading or first interactive element (not the container div).
- Implement focus trap: intercept Tab/Shift+Tab to cycle within modal bounds, wrapping from last to first element.
- Bind Escape to the Close handler.
- On modal close: return focus to the triggering element.
- Announce modal open/close to screen readers via `aria-modal="true"` and `role="dialog"` with an `aria-labelledby` pointing to the modal title.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, SUS score
- **Adoption & Retention**: New visitors, Account creation rate
**How to measure**: Test keyboard navigation and focus trapping with assistive technology (screen reader and keyboard) as part of accessibility audits; measure task success rate for keyboard-only users before and after implementing proper focus management.

## Sources
- [Carbon Design System — Dialogs](https://carbondesignsystem.com/patterns/overview/)
