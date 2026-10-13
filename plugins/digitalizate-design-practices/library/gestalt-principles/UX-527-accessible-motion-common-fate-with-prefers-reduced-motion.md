---
id: "UX-527"
title: "Accessible Motion: Common Fate with prefers-reduced-motion"
category: "Gestalt Principles"
subcategory: "Common Fate — Accessibility"
score: 5
context: "Any web app using CSS or JavaScript animations, particularly motion-heavy landing pages and data dashboards"
goals:
  - "Design Effective Feedback & Error States"
  - "Design for Accessibility & Inclusion"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
  - "dashboard"
  - "cognitive-load"
  - "accessibility"
  - "animation"
  - "desktop"
wireframe: "https://files.catbox.moe/v0q8zr.jpg"
notion: "https://app.notion.com/p/Accessible-Motion-Common-Fate-with-prefers-reduced-motion-752a9aed53448202bfc30129df55d6aa"
---

## Why
Users with vestibular disorders, motion sensitivity, epilepsy, or certain cognitive disabilities can experience nausea, disorientation, or seizures from UI animation. The WCAG 2.3.3 (Animation from Interactions) guideline requires that motion-triggered animation can be disabled. The CSS prefers-reduced-motion media query provides the mechanism. However, completely removing Common Fate animation removes the perceptual grouping benefit it provides. [UIUXDesigning.com](http://uiuxdesigning.com/) research recommends that reduced-motion alternatives should preserve the informational purpose of the animation using static alternatives: opacity fades (less vestibular risk than translation) or instant state transitions with visible state indicators.

## How to implement
- Wrap all transform-based animations in @media (prefers-reduced-motion: no-preference) blocks
- In the reduced-motion fallback, substitute translation animations with opacity fade (0 to 1) which is perceptually safer
- Replace GSAP timeline animations with instantaneous state changes plus a final visual highlight pulse for reduced-motion users
- Keep animation durations under 300ms even for standard users — longer durations increase vestibular risk
- Avoid parallax, large-scale viewport animations, and carousel auto-play for all users

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Adoption & Retention**: New visitors from organic search, Returning visitors
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Check the percentage of users who have prefers-reduced-motion enabled in your analytics to understand the affected audience size. Run usability sessions with vestibular-sensitive participants or those with motion preferences enabled to measure task success rate with and without the accessible motion fallback.

## Sources
- [UIUXDesigning — Gestalt Common Fate Accessibility](https://uiuxdesigning.com/gestalt-common-fate/)
- [Harvard Accessibility — Data Visualizations](https://accessibility.huit.harvard.edu/data-viz-charts-graphs)
