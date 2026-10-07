---
id: "UX-435"
title: "Fitts's Law: Make Interactive Text Targets Large and Accessible"
category: "Reading Psychology"
subcategory: "Interaction Design"
score: 4
context: "Critical for all interactive elements: navigation links, form submission buttons, inline content links, icon buttons, table action columns. Especially important on mobile where touch imprecision is greater than cursor precision."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/4weks4.jpg"
notion: "https://app.notion.com/p/Fitts-s-Law-Make-Interactive-Text-Targets-Large-and-Accessible-9d0a9aed534483418b59816b76bc375b"
---

## Why
Fitts's Law states that the time required to move a pointer to a target is a logarithmic function of the distance to the target divided by its size. Applied to web text, this means that inline links, small CTA buttons, and icon-only controls that have small clickable areas cause measurably slower interaction and higher error rates. The WCAG 2.5.5 standard recommends a minimum 44×44px touch target; WCAG 2.5.8 sets a minimum of 24×24px. For text-only links, the clickable area is often just the character height (~16px) — far below safe minimums without padding.

## How to implement
- Extend the clickable area of inline text links using CSS padding (top and bottom padding of at least 8–10px) without changing the visual text size
- Ensure navigation items have a clickable area of at least 44×44px by setting padding on the anchor element, not just the container
- Place submit buttons and primary CTAs at the bottom of forms in the user's natural 'completion zone'; make them visually large and easily tappable (minimum 44px height)
- Increase target size for primary actions: a primary CTA should be noticeably larger than secondary actions, leveraging both Fitts's Law and visual hierarchy simultaneously
- Add at least 8–10px of space between adjacent clickable elements (buttons, links) to prevent fat-finger errors on touch devices
- For destructive actions (Delete, Remove), make them smaller or further away to exploit Fitts's Law in reverse — slower acquisition gives users time to reconsider
- On mobile, position frequently-used interactive elements within the natural thumb zone (the lower 60% of the screen)

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Error rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Test tap/click accuracy on text-based interactive targets of varying sizes using usability testing on both desktop and mobile, measuring error rate (missed clicks/taps) and task time. Measure whether larger text targets reduce selection errors and improve efficiency in high-frequency interaction workflows.

## Sources
- [Figma — What Is Fitts' Law?](https://www.figma.com/resource-library/fitts-law/)
- [Ahmad Shadeed — Enhancing the Clickable Area Size](https://ishadeed.com/article/clickable-area/)
- [Nielsen Norman Group — Touch Target Size](https://www.nngroup.com/articles/touch-target-size/)
- [LogRocket — Fitts' Law UI Examples](https://blog.logrocket.com/ux-design/fitts-law-ui-examples-best-practices/)
