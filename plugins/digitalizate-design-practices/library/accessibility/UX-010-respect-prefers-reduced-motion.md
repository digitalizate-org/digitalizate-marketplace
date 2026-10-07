---
id: "UX-010"
title: "Respect prefers-reduced-motion"
category: "Accessibility"
subcategory: "Motion Accessibility"
score: 4
context: "Use for all CSS and JavaScript animations, transitions, and scroll-triggered effects in the application."
goals:
  - "Design for Accessibility & Inclusion"
tags:
  - "animation"
  - "accessibility"
wireframe: "https://files.catbox.moe/lbjomn.jpg"
notion: "https://app.notion.com/p/Respect-prefers-reduced-motion-b37a9aed53448313bd73814996d5bfd8"
---

## Why
Users with vestibular disorders — motion sickness, vertigo — can experience physical discomfort from animations in interfaces. The CSS media query `prefers-reduced-motion` indicates the user has requested reduced animation from their operating system settings. All non-essential animations should be disabled or minimized when this preference is set. Essential motion (loading spinners, progress bars) can be preserved; decorative transitions, parallax effects, and entrance animations should be disabled.

## How to implement
- Apply `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; } }` as a base reset in the global stylesheet.
- Then selectively restore essential motion (loading spinners) with specific rules.
- Use the media query in JavaScript animations too: `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
- Test the application with reduced-motion enabled to verify all essential UI state changes remain comprehensible without animation.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
- **Adoption & Retention**: New visitors, Visitors from organic search
**How to measure**: Use automated accessibility testing tools to verify prefers-reduced-motion compliance across UI components; conduct usability sessions with motion-sensitive users to measure task success rate and collect CSAT scores before and after implementing reduced-motion alternatives.

## Sources
- [AlterSquare — Microinteractions](https://altersquare.io/micro-interactions-that-actually-improve-user-experience-with-examples/)
