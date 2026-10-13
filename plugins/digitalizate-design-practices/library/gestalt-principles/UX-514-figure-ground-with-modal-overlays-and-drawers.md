---
id: "UX-514"
title: "Figure-Ground with Modal Overlays and Drawers"
category: "Gestalt Principles"
subcategory: "Figure-Ground"
score: 5
context: "Modals, dialogs, bottom sheets, drawers, tooltips, popovers, right-panel overlays"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
wireframe: "https://files.catbox.moe/34s1s8.jpg"
notion: "https://app.notion.com/p/Figure-Ground-with-Modal-Overlays-and-Drawers-154a9aed534483378f380191acdf65eb"
---

## Why
Every time a modal, sheet, drawer, or tooltip is displayed, Figure-Ground is explicitly invoked: the UI must clearly communicate which layer is the actionable figure and which is the dimmed/disabled ground. Material Design uses semi-transparent dark overlays (scrim); iOS Human Interface Guidelines recommend backdrop blur instead. Both strategies leverage the same perceptual mechanism — reducing contrast and detail on the ground layer so the figure layer captures attention. Ambiguous figure-ground relationships (e.g., a modal that matches the page background in lightness) cause users to mis-click on elements in the ground layer, generating support issues. UX Planet research documents that contrast, blur, shadow depth, and size each independently strengthen figure perception.

## How to implement
- Apply 40-60% opacity dark scrim (or backdrop-filter: blur(8px)) behind any modal to demote ground
- Give the modal a drop shadow of at least 24px spread to reinforce Z-axis separation
- Use the 'smaller = figure' heuristic: modals should occupy at most 80% of viewport width
- Trap keyboard focus inside the modal so assistive technologies treat the modal as the exclusive figure
- On iOS, prefer blur over scrim to match platform convention; on Android/web, prefer dark scrim

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Measure error rate (mis-clicks on background vs. intended modal content) and task success rate in usability tests; A/B test strong versus weak figure-ground contrast in overlays to quantify the error reduction from clearer separation.

## Sources
- [UX Tigers — Figure-Ground Principle](https://www.uxtigers.com/post/gestalt-principles)
- [UX Planet — Figure/Ground Relationships](https://uxplanet.org/improving-your-designs-with-gestalt-principles-figure-ground-26429a3eccad)
- [UXMISFIT — Figure-Ground in UI Design](https://uxmisfit.com/2019/04/23/ui-design-in-practice-gestalt-principles/)
