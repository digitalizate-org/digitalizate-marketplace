---
id: "UX-037"
title: "Modals — Reserve for Critical Focus-Required Interactions"
category: "Component Patterns"
subcategory: "Modal dialog usage"
score: 5
context: "Apply when deciding whether to use a modal. The cost is always an interruption to the user's current task — justify it with the severity of the consequence."
goals:
  - "Simplify a Cluttered Interface"
  - "Design a Consistent System at Scale"
tags:
  - "keyboard"
wireframe: "https://files.catbox.moe/8b1zsx.jpg"
notion: "https://app.notion.com/p/Modals-Reserve-for-Critical-Focus-Required-Interactions-bf0a9aed534482e786df019b6ce07512"
---

## Why
Modal dialogs interrupt the user's current task and add an extra goal to their workflow. This cost is justified only when (1) action could result in data loss or is irreversible, (2) missing information would block a user-initiated process, or (3) the decision significantly lessens subsequent user effort. Modals are routinely overused for non-critical purposes in enterprise software — this erodes trust in modal importance and causes users to dismiss critical modals reflexively. Never stack modals; if a second action is needed, use a drawer or queue it.

## How to implement
- Use modals for: confirmations before irreversible actions (delete, overwrite), required information critical to continuing a process, and occasionally for progressive profiling that streamlines immediate workflow.
- Never use for non-essential information, promotional content, or announcements.
- Always provide dismiss mechanisms: Escape key, X button (top-right), and backdrop click for non-critical modals.
- Size modals to their content — never full-screen for a 2-field confirmation.
- Trap keyboard focus inside while open (WCAG 2.4.3); return focus to trigger element on close.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track modal dismissal and completion rates in analytics to identify modals that are frequently abandoned; A/B test appropriate versus overused modal patterns to measure task success rate and CSAT changes.

## Sources
- [Nielsen Norman Group — Modal & Nonmodal Dialogs](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
- [Component Gallery — Modal / Dialog](https://component.gallery/components/modal/)
- [About Face 4th Ed., Ch. 21 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
- [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux)
