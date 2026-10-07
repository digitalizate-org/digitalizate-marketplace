---
id: "UX-524"
title: "Common Fate in Dropdown and Accordion Animation"
category: "Gestalt Principles"
subcategory: "Common Fate"
score: 5
context: "Dropdown menus, accordions, list animations, multi-panel dashboards, filter-driven data views"
goals:
  - "Design Effective Feedback & Error States"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "navigation"
  - "dashboard"
  - "cognitive-load"
  - "animation"
wireframe: "https://files.catbox.moe/1gnhct.jpg"
notion: "https://app.notion.com/p/Common-Fate-in-Dropdown-and-Accordion-Animation-d82a9aed53448269bfed8151d59baa1e"
---

## Why
Common Fate is the most actionable Gestalt principle for motion design: elements that move together are perceived as belonging together. In dropdown menus, when multiple menu items expand simultaneously in the same direction, they are instantly grouped as a set by the shared motion alone — even before the user reads a single label. [UIUXDesigning.com](http://uiuxdesigning.com/)'s analysis of working memory research found that synchronized animation can override independent-element parsing in 68% of initial perception trials, making Common Fate one of the most powerful grouping cues available in animated interfaces. The principle applies to entrance animations, exit animations, and state transitions equally.

## How to implement
- Animate all items in an expanding group with identical duration, easing, and direction
- For list items entering a screen, use staggered delays (20-30ms apart) rather than simultaneous entry to create the perception of a single flowing group
- Match exit animations to entrance animations in reverse to reinforce group identity
- Apply synchronized transition for multi-panel dashboards: when a filter changes, all affected charts should update simultaneously rather than sequentially
- Keep UI animation durations under 300ms to avoid user-perceived waiting

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Compare error rates and time-on-task for dropdown and accordion interactions with common-fate animation versus abrupt state changes in usability tests; collect ease-of-use ratings to confirm the animation reduces confusion about component behavior.

## Sources
- [UIUXDesigning — Gestalt Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
- [Gestalt Principles — Common Fate](https://www.gestaltprinciples.com/principles/common-fate)
- [UX360 — Common Fate in Design](https://ux360.design/common-fate-design/)
