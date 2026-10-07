---
id: "UX-255"
title: "Von Restorff Effect — Visual Isolation for Primary Actions"
category: "Layout & Visual Hierarchy"
subcategory: "Attention and visual emphasis"
score: 5
context: "Apply to primary CTA buttons, recommended pricing plans, critical alert messages, and required field markers. The most important action in any UI should stand apart visually."
goals:
  - "Improve Readability & Visual Clarity"
wireframe: "https://files.catbox.moe/bpz66u.jpg"
notion: "https://app.notion.com/p/Von-Restorff-Effect-Visual-Isolation-for-Primary-Actions-8b6a9aed53448231bd4901b8301274e4"
---

## Why
When multiple similar objects are present, the one that differs from the rest is most likely to be remembered. This is the psychological basis for visually highlighting recommended options and primary action buttons. The critical constraint: if everything is highlighted, nothing is. Maximum 1–2 elements per visible viewport should have high-isolation treatment. Never rely on color alone to communicate distinction — add shape, size, or label changes for color vision deficiency accessibility (~8% of male users).

## How to implement
- Make the primary action button visually distinctive from all secondary actions — different color, fill vs. outline, or size — so it stands apart.
- In pricing tables, visually elevate the "recommended" plan (different background, "Most Popular" badge, slightly larger card).
- In wizard steps with multiple paths, pre-select and visually highlight the recommended option.
- Use isolation sparingly — apply high-contrast emphasis to at most 1–2 elements per viewport.
- Use shape + label changes alongside color for accessibility.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Findability score
  - **Efficiency**: Time on task, Error counts
  - **Revenue**: Conversion rate, Clickthrough rate
  - **Engagement & Usage**: Clickthrough rate
  **How to measure**: Use eye-tracking or heatmap analysis to verify that visually isolated primary actions attract the most attention. A/B test layouts with vs. without Von Restorff isolation on primary CTAs and measure clickthrough rate and conversion rate for those actions.

## Sources
- [Laws of UX — Von Restorff Effect](https://lawsofux.com/von-restorff-effect/)
