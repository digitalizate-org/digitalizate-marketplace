---
id: "UX-125"
title: "Semantic Color Tokens for Dark Mode Theme Switching"
category: "Design Systems & Tokens"
subcategory: "Theme Architecture"
score: 5
context: "Use when implementing dark mode for the first time, or when the current theming implementation requires component-level changes to switch themes."
goals:
  - "Design a Consistent System at Scale"
  - "Improve Readability & Visual Clarity"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/0q32hl.jpg"
notion: "https://app.notion.com/p/Semantic-Color-Tokens-for-Dark-Mode-Theme-Switching-58aa9aed53448253a3bd8141e30aeff4"
---

## Why
Build theme switching into the design token system from the start using semantic color tokens. Each semantic token (`color-background-primary`, `color-text-danger`) maps to different base palette values in light vs. dark mode. This makes implementing and maintaining dark mode a token-mapping exercise rather than a wholesale redesign of components. Without semantic tokens, every component requires individual dark mode style overrides — a maintenance nightmare that grows with every new component.

## How to implement
- Define a two-layer token system.
- Layer 1 (Option Tokens): the full color palette with all possible values (`color-blue-500`, `color-gray-100`).
- Layer 2 (Semantic Tokens): role-based usage tokens that point to option tokens (`color-background-primary: color-white` in light, `color-background-primary: color-gray-900` in dark).
- Theme switching swaps only the semantic token mappings.
- Use CSS custom properties for web; JSON token files consumed by Style Dictionary for cross-platform.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Engagement & Usage**: Feature usage, Sessions per user, Active users
- **Satisfaction & Perception**: Ease-of-use score, CSAT, Brand perception
- **Adoption & Retention**: Returning visitors, Renewed subscriptions
**How to measure**: Track dark mode adoption rates after launch and compare session frequency and duration between users who switch to dark mode versus those who stay in light mode. Survey dark mode users on satisfaction to confirm the feature meets expectations, and monitor visual consistency bug counts across themes to verify semantic token correctness.

## Sources
- [YNAB — Semantic Color System](https://dev.to/ynab/a-semantic-color-system-the-theory-hk7)
