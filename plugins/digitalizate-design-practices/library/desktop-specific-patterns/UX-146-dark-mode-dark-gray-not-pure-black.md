---
id: "UX-146"
title: "Dark Mode — Dark Gray, Not Pure Black"
category: "Desktop-Specific Patterns"
subcategory: "Dark Mode Design"
score: 4
context: "Use in all dark mode implementations."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/up56s3.jpg"
notion: "https://app.notion.com/p/Dark-Mode-Dark-Gray-Not-Pure-Black-dbfa9aed53448362a8b381376c7b77e7"
---

## Why
Use dark gray (#121212 to #1E1E1E) rather than pure black (#000000) as the primary background color in dark mode. Pure black creates excessive contrast with white text (21:1 ratio, well above the recommended 4.5:1–7:1 range), causing eye strain known as "halation" where bright text appears to bleed into the dark background. Dark gray also better represents elevation and depth since lighter surfaces can be used for raised elements. The Material Design dark mode specification and Apple's Human Interface Guidelines both specify dark gray, not pure black, as the base surface.

## How to implement
- Background base: `#121212` or `#1A1A1A`.
- Elevated surfaces progressively lighter: `#1E1E1E`, `#242424`, `#2C2C2C`.
- Text at 87% opacity white (`rgba(255,255,255,0.87)`) rather than pure white.
- Secondary text at 60% opacity white.
- Disabled text at 38% opacity white.
- Each elevation step should increase the lightness by approximately 6–8 units to create clear visual hierarchy between surface levels.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Conduct preference and comprehension studies comparing pure black versus dark gray background implementations; measure text legibility accuracy and user satisfaction ratings for extended-use sessions in dark mode.
- Background base: `#121212` or `#1A1A1A`.
- Elevated surfaces progressively lighter: `#1E1E1E`, `#242424`, `#2C2C2C`.
- Text at 87% opacity white (`rgba(255,255,255,0.87)`) rather than pure white.
- Secondary text at 60% opacity white.
- Disabled text at 38% opacity white.
- Each elevation step should increase the lightness by approximately 6–8 units to create clear visual hierarchy between surface levels.

## Sources
- [Codener — Dark Mode Best Practices 2024](https://codener.com/the-best-practices-for-dark-mode-design-in-2024/)
