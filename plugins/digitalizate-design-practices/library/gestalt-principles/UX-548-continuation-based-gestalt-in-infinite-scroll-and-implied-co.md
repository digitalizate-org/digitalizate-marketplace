---
id: "UX-548"
title: "Continuation-Based Gestalt in Infinite Scroll and Implied Content"
category: "Gestalt Principles"
subcategory: "Continuation"
score: 5
context: "Infinite scroll feeds, horizontal carousels, product grids, gallery views"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
wireframe: "https://files.catbox.moe/x0ciwt.jpg"
notion: "https://app.notion.com/p/Continuation-Based-Gestalt-in-Infinite-Scroll-and-Implied-Content-b39a9aed534483e589d401212b28fefc"
---

## Why
Continuation predicts that the eye follows the smoothest available path and seeks its extension even when interrupted. In infinite scroll patterns, designers exploit continuation by ensuring content items extend to — but not past — the viewport bottom edge, implying there is more content following the same trajectory. Cutting items partially at the fold is a continuation signal that communicates 'this sequence continues'. The IxDF and Aela research document that carousels that clip adjacent items by 20-30px on their leading and trailing edges use the same mechanism. Without this continuation cue, users in user testing frequently believed they had seen all available content, even when more was available below.

## How to implement
- Clip the last visible card or list item by 25-35% at the bottom edge to imply more content below
- For horizontal carousels, ensure the last visible item is clipped by at least 20px on the right edge
- Do not show a final item that fully fits without clipping unless content is actually exhausted
- Pair continuation clip with a subtle scroll affordance indicator (fade-to-background-color gradient) for users who don't visually notice the clip
- On mobile, ensure the clip is visible above the thumb zone — items clipped only in the top 20% of screen are often invisible to users focused on the interaction zone

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score
- **Satisfaction & Perception**: Ease-of-use score
- **Engagement & Usage**: Scroll depth, Pages per session, Session frequency
**How to measure**: Track scroll depth and session duration in analytics for pages using continuation-based Gestalt cues versus static pagination; monitor content engagement rates (clicks, reads) at deeper scroll positions to confirm users are continuing rather than stopping.

## Sources
- [Aela — Gestalt Principles in UI Design](https://www.aela.io/en/blog/all/gestalt-principles-apply-them-uxui-design-projects)
- [Full Clarity — Gestalt in UI](https://fullclarity.co.uk/insights/gestalt-principles-in-ui/)
