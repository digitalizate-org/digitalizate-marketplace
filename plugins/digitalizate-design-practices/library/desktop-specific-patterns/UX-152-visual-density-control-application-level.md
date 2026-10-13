---
id: "UX-152"
title: "Visual Density Control (Application-Level)"
category: "Desktop-Specific Patterns"
subcategory: "Density & Spacing"
score: 4
context: "All enterprise data-heavy applications where power users (data entry, operations) and occasional users (executives, reviewers) coexist in the same team."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
wireframe: "https://files.catbox.moe/0lbjc6.jpg"
notion: "https://app.notion.com/p/Visual-Density-Control-Application-Level-44fa9aed53448244899e81879fc5679e"
---

## Why
An application-level density toggle switching between comfortable and compact display affects spacing, font size, and row height throughout the interface. Dense views pack more information per screen area (valued during bulk work); comfortable views are easier to read during careful review. The same worker may want compact in the morning during bulk processing and comfortable in the afternoon during careful review — making this a per-session toggle rather than only a one-time setting.

## How to implement
- Provide a density toggle (compact / default / comfortable) accessible from a global app preference and/or per-table toolbar.
- Apply density via a CSS class or token system changing spacing, font size, and row height together (not independently).
- Default to "default" for new users.
- Remember per-user preference.
- Minimum touch target: 24px in compact mode for desktop, 44×44px for any touch-capable device.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Adoption & Retention**: Returning visitors, Renewed subscriptions
- **Satisfaction & Perception**: Ease-of-use score, CSAT, NPS
**How to measure**: Survey users with ease-of-use and satisfaction ratings after exposing them to different density presets; track whether users who access density controls have higher retention and session frequency. A/B test default density settings to assess impact on task completion rates and abandonment.

## Sources
- [Envylabs — Interface Information Density](https://envylabs.com/insights/interface-information-density-best-practices)
