---
id: "UX-011"
title: "Keyboard-Accessible Drag and Drop"
category: "Accessibility"
subcategory: "Drag and Drop"
score: 4
context: "All drag-and-drop interactions. WCAG 2.1 SC 2.1.1 requires all functionality to be operable via keyboard — drag-and-drop without keyboard equivalents is a compliance failure."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Accessibility & Inclusion"
tags:
  - "keyboard"
  - "accessibility"
wireframe: "https://files.catbox.moe/tv3110.jpg"
notion: "https://app.notion.com/p/Keyboard-Accessible-Drag-and-Drop-149a9aed53448319aa8f01813c6b7f08"
---

## Why
Drag-and-drop interactions must have keyboard equivalents for accessibility compliance and power-user usage. Without keyboard support, users with motor disabilities, keyboard-focused workflows, or remote desktop sessions cannot access reordering functionality at all. The keyboard pattern must be intentionally designed — it does not emerge automatically from implementing mouse drag-and-drop.

## How to implement
- Implement the Salesforce accessibility pattern: Tab to focus item → Space to enter move mode → Arrow keys to navigate positions → Space/Enter to drop → Escape to cancel.
- Add aria-live region announcements: "Item [Name] grabbed. Use arrow keys to move. Press Space to drop." Provide visible up/down arrow buttons as permanent fallbacks beside each reorderable item.
- Test with NVDA and VoiceOver screen readers.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Adoption & Retention**: New visitors from organic search, Returning visitors
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run keyboard-only usability tests on drag-and-drop workflows, measuring task success rate and time on task for users who rely on keyboard navigation. Compare against a mouse-only baseline to confirm that keyboard equivalency achieves comparable success rates.

## Sources
- [Smart Interface Design Patterns — Drag and Drop UX](https://smart-interface-design-patterns.com/articles/drag-and-drop-ux/)
- [Eleken — Drag and Drop UI](https://www.eleken.co/blog-posts/drag-and-drop-ui)
