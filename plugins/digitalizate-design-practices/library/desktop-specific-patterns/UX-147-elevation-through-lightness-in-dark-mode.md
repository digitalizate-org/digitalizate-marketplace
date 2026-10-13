---
id: "UX-147"
title: "Elevation Through Lightness in Dark Mode"
category: "Desktop-Specific Patterns"
subcategory: "Dark Mode Design"
score: 4
context: "Use for all dark mode surface components: base canvas, cards, dropdowns, modals, tooltips."
goals:
  - "Design for Enterprise & B2B Scale"
wireframe: "https://files.catbox.moe/hc2oma.jpg"
notion: "https://app.notion.com/p/Elevation-Through-Lightness-in-Dark-Mode-c63a9aed5344830eacff0179eb69d307"
---

## Why
In light mode, elevation is communicated through drop shadows. In dark mode, shadows are invisible against dark backgrounds. Instead, communicate elevation through progressively lighter surface colors: deeper elements use darker backgrounds, raised elements (cards, modals, dropdowns) use progressively lighter backgrounds. This is the Material Design dark mode elevation model and enables consistent z-axis communication without visible shadows. Without a clear elevation model, dark mode interfaces feel flat and undifferentiated.

## How to implement
- Define a surface scale using the dp (density-independent pixel) elevation model. dp0=`#121212` (base), dp1=`#1E1E1E`, dp2=`#222222`, dp4=`#272727`, dp8=`#2D2D2D`, dp16=`#353535`, dp24=`#383838`.
- Apply these consistently: page background=dp0, cards=dp1, hover overlay=dp2, popovers=dp8, modals=dp16.
- Use overlay opacity patterns for a simpler alternative: add white at 5%, 8%, 12%, 16%, 24% opacity over the base color for each elevation level.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Conduct contrast and visual hierarchy studies comparing dark-gray-based elevation versus pure-black or flat dark-mode designs; measure user accuracy in identifying element hierarchy and run satisfaction surveys on dark mode aesthetics and readability.
- Define a surface scale using the dp (density-independent pixel) elevation model. dp0=`#121212` (base), dp1=`#1E1E1E`, dp2=`#222222`, dp4=`#272727`, dp8=`#2D2D2D`, dp16=`#353535`, dp24=`#383838`.
- Apply these consistently: page background=dp0, cards=dp1, hover overlay=dp2, popovers=dp8, modals=dp16.
- Use overlay opacity patterns for a simpler alternative: add white at 5%, 8%, 12%, 16%, 24% opacity over the base color for each elevation level.

## Sources
- [Codener — Dark Mode Best Practices 2024](https://codener.com/the-best-practices-for-dark-mode-design-in-2024/)
