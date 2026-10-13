---
id: "UX-522"
title: "Continuation in Multi-Step Flows and Progress Indicators"
category: "Gestalt Principles"
subcategory: "Continuation"
score: 5
context: "Multi-step forms, onboarding flows, checkout wizards, story-style UIs, horizontal carousels"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "animation"
wireframe: "https://files.catbox.moe/8p70io.jpg"
notion: "https://app.notion.com/p/Continuation-in-Multi-Step-Flows-and-Progress-Indicators-4d1a9aed53448275ab200198a09b027e"
---

## Why
The Law of Continuation predicts that the eye follows the smoothest, most unbroken path available. Applied to multi-step onboarding, checkout, and wizard flows, this means arranging steps along a continuous visual axis — horizontal for sequential progress, vertical for scrolling deep-dives. Progress indicators with connecting lines exploit continuation to communicate both current position and total length of the journey, reducing abandonment by making the endpoint visible. Bejamas research confirms that smooth carousel transitions leverage continuation so users expect more content in the direction of movement — the clipped edge technique is a direct application.

## How to implement
- Use a step indicator with connecting lines or a single progress bar with percentage for flows of 3+ steps
- Align all step elements on the same horizontal or vertical axis — never scatter steps in an irregular grid
- In carousel/slider components, clip adjacent slide edges by 20-30px to imply continuable content
- Ensure step-to-step navigation animations slide in the direction of progression (left-to-right for forward, right-to-left for back)
- Use consistent CTA placement (e.g., always bottom-right) across all steps to build directional muscle memory

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: A/B test progress indicators that use continuation cues (connected lines, arrows) versus plain step lists and measure multi-step form completion rate and abandonment rate; use post-task ease-of-use surveys to capture perceived clarity.

## Sources
- [Bejamas — Gestalt Principles](https://bejamas.com/blog/gestalt-principles-of-design)
- [Bird Marketing — Gestalt UI](https://bird.marketing/blog/digital-marketing/guide/ux-design-principles/improve-ux-gestalt-principles/)
- [Lazarev Agency — Gestalt Principles](https://www.lazarev.agency/articles/gestalt-principles-of-design)
