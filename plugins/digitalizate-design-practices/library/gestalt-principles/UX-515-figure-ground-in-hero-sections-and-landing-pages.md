---
id: "UX-515"
title: "Figure-Ground in Hero Sections and Landing Pages"
category: "Gestalt Principles"
subcategory: "Figure-Ground"
score: 5
context: "Landing pages, marketing site heroes, promotional banners, splash screens"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "cognitive-load"
  - "animation"
wireframe: "https://files.catbox.moe/kdi4tn.jpg"
notion: "https://app.notion.com/p/Figure-Ground-in-Hero-Sections-and-Landing-Pages-7dba9aed5344833ca9b301ca03c6e181"
---

## Why
Hero images are among the most common Figure-Ground applications in web design. The background image (ground) must be visually subordinated — via blur, desaturation, darkening, or overlay — so that headline text, CTA buttons, and product images emerge as clear figures. UX Planet's research on beer brand websites documents three distinct techniques used in high-conversion hero sections: contrast (white oversized text on dark background), box separation (content in a card overlapping the image), and shadow (drop shadows beneath cards to suggest Z-axis layering). When all three techniques are applied simultaneously, the figure-ground relationship becomes unmistakable, reducing cognitive effort to zero.

## How to implement
- Apply a linear-gradient or solid overlay at 30-60% opacity over background photography
- Blur background images in regions where text overlaps using CSS backdrop-filter or image editing
- Use warm-toned CTAs (orange, red) against cool-toned backgrounds — warm colors perceptually advance to become figure
- Ensure hero text contrast ratio exceeds 4.5:1 measured against the blended overlay + background
- For product-focused heroes, give product shots sharp focus and slight elevation via drop shadow

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Revenue**: Conversion rate, Revenue per session
  - **Engagement & Usage**: Bounce rate, Clickthrough rate, Abandonment rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT, Brand perception
  **How to measure**: A/B test hero sections with clear figure-ground separation against visually complex alternatives, measuring bounce rate and CTA clickthrough rate. Use first-click tests to verify users immediately identify the primary call-to-action against varying background content.

## Sources
- [UX Planet — Figure/Ground Relationships](https://uxplanet.org/improving-your-designs-with-gestalt-principles-figure-ground-26429a3eccad)
- [UX Tigers — Figure-Ground](https://www.uxtigers.com/post/gestalt-principles)
