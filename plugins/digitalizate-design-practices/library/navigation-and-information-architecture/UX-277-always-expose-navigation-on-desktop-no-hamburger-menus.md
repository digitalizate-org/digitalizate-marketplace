---
id: "UX-277"
title: "Always Expose Navigation on Desktop — No Hamburger Menus"
category: "Navigation & Information Architecture"
subcategory: "Navigation visibility and discoverability"
score: 5
context: "Apply to all desktop applications. Hiding navigation in hamburger menus on desktop reduces usage, increases time-to-navigation, degrades content discoverability, and increases task difficulty."
goals:
  - "Design for Accessibility & Inclusion"
  - "Structure Navigation for Deep Products"
tags:
  - "desktop"
  - "navigation"
wireframe: "https://files.catbox.moe/o5h5ls.jpg"
notion: "https://app.notion.com/p/Always-Expose-Navigation-on-Desktop-No-Hamburger-Menus-946a9aed53448398b72e016122e54cac"
---

## Why
Hiding navigation under hamburger menus or icons on desktop reduces usage, increases time-to-navigation, degrades content discoverability, and significantly increases task difficulty. Studies show navigation usage drops markedly when hidden. Visible links are easier to discover, scan, and click than menu icons. The hamburger pattern was designed to solve screen space problems on mobile — on desktop, it solves a problem that doesn't exist while creating real ones.

## How to implement
- Use visible, exposed navigation links rather than collapsing under hamburger menus on desktop.
- Position navigation across the top or down the left side of the screen.
- Make navigation visually salient: high-contrast text, clear background separation from content.
- If a navigation toggle must exist (for very wide apps with user-controlled sidebar collapse), ensure the trigger is labeled "Menu" or "Navigation" — never rely on a hamburger icon alone.
- Never group navigation with unrelated design elements.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Pages per session, Bounce rate
- **Adoption & Retention**: Returning visitors
**How to measure**: Run a tree test or navigation task test comparing always-visible navigation against a hamburger-hidden variant, measuring direct success rate and time to destination. Monitor pages-per-session and bounce rate in analytics after removing hamburger menus from desktop layouts.

## Sources
- [Nielsen Norman Group — Navigation Discoverability on Desktop](https://www.nngroup.com/articles/find-navigation-desktop-not-hamburger/)
