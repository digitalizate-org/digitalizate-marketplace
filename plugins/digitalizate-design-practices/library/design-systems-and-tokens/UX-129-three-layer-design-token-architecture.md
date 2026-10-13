---
id: "UX-129"
title: "Three-Layer Design Token Architecture"
category: "Design Systems & Tokens"
subcategory: "Token Structure"
score: 4
context: "Use when establishing a design system serving multiple products, platforms, or teams."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/3nh98h.jpg"
notion: "https://app.notion.com/p/Three-Layer-Design-Token-Architecture-53ea9aed53448313a109813e5ca023f5"
---

## Why
Organize design tokens in three layers: Option Tokens (the full palette — every available color, spacing value, font size with descriptive names like `color-blue-500`), Decision Tokens (semantic usage mappings — `color-background-primary`, `spacing-form-field-gap`), and Component Tokens (component-specific tokens — `button-primary-background`). Each layer builds on the one below, providing the right level of abstraction at each point of use. Option tokens are the raw materials; Decision tokens are the design language; Component tokens are implementation specifics.

## How to implement
- Store tokens as JSON in version control.
- Use Style Dictionary or Theo for token transformation into platform-specific formats (CSS custom properties, Android XML, iOS Swift).
- Keep Option tokens private/internal — only expose Decision tokens to product teams to prevent raw palette misuse.
- Automate token publishing via CI/CD pipeline with semantic versioning for breaking vs. non-breaking changes.
- Document Decision token usage in the design system with explicit examples of correct and incorrect usage.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Error rate, Task success rate
- **Satisfaction & Perception**: Ease-of-use score, Brand perception
**How to measure**: Measure the time required to implement a global brand change (e.g., primary color update) before and after adopting a three-layer token architecture. Track the number of visual inconsistency bugs per release as a quality indicator that directly affects user perception of polish and trustworthiness.

## Sources
- [Martin Fowler — Design Token Architecture](https://martinfowler.com/articles/design-token-based-ui-architecture.html)
