---
id: "UX-518"
title: "Dark Mode Figure-Ground Inversion"
category: "Gestalt Principles"
subcategory: "Figure-Ground — Dark Mode"
score: 5
context: "Web apps with dark mode support, native-style web apps, developer tools, creative tools"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "desktop"
wireframe: "https://files.catbox.moe/egme1k.jpg"
notion: "https://app.notion.com/p/Dark-Mode-Figure-Ground-Inversion-f82a9aed534482208bea0144669236dd"
---

## Why
Switching from light to dark mode does not simply invert colors — it inverts the Figure-Ground polarity across the entire interface. In light mode, white is ground and dark text/elements are figure. In dark mode, dark surfaces become ground and lighter elements must now emerge as figure. If designers simply invert hex values, they get incorrect results: pure white (#FFFFFF) text on pure black (#000000) background creates excessive halation (perceived blurring) due to the Helmholtz-Kohlrausch effect. Successful dark mode design uses near-black surfaces (e.g., #121212 as Material Design's surface color) with off-white text (#E0E0E0), preserving healthy figure-ground contrast without harsh visual extremes.

## How to implement
- Never use pure #000000 as dark mode background — use #0D0D0D to #1C1C1E range
- Never use pure #FFFFFF as dark mode primary text — use #E0E0E0 to #F0F0F0 range
- Re-test all figure-ground relationships after dark mode switch: shadows invert (elevation now requires lighter surfaces, not shadows)
- Use elevation via lighter surface tokens (+5-8% lightness per elevation level in dark mode) rather than shadow depth
- Verify all images and illustrations work on dark backgrounds — often requires separate dark-optimized asset variants

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
**How to measure**: Conduct figure-ground clarity tests asking users to identify foreground versus background elements in dark mode designs; measure error rate and visual comfort ratings for extended sessions comparing true inversion versus optimized dark-mode figure-ground relationships.
- Never use pure #000000 as dark mode background — use #0D0D0D to #1C1C1E range
- Never use pure #FFFFFF as dark mode primary text — use #E0E0E0 to #F0F0F0 range
- Re-test all figure-ground relationships after dark mode switch: shadows invert (elevation now requires lighter surfaces, not shadows)
- Use elevation via lighter surface tokens (+5-8% lightness per elevation level in dark mode) rather than shadow depth
- Verify all images and illustrations work on dark backgrounds — often requires separate dark-optimized asset variants

## Sources
- [IxDF — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
- [UX Tigers — Figure-Ground](https://www.uxtigers.com/post/gestalt-principles)
