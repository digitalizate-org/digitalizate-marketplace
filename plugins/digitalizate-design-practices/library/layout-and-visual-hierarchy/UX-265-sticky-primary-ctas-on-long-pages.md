---
id: "UX-265"
title: "Sticky Primary CTAs on Long Pages"
category: "Layout & Visual Hierarchy"
subcategory: "Persistent action accessibility"
score: 4
context: "Apply to long configuration pages, multi-section forms, and detailed record views with a primary action (Save, Submit, Approve) that must remain accessible at all times."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/r2spla.jpg"
notion: "https://app.notion.com/p/Sticky-Primary-CTAs-on-Long-Pages-033a9aed53448267aaa101e54b1fbcaa"
---

## Why
Keeping a primary CTA visible as users scroll ensures the action remains accessible throughout their journey without requiring scroll-back. This is critical for long enterprise forms and record detail pages where users may spend minutes reading/editing before committing. The CTA repetition principle also applies to long pages: a soft CTA early and a specific CTA at the bottom after the user has consumed supporting information.

## How to implement
- Use a sticky action bar at the bottom of long forms — always visible, shows Save/Cancel without scrolling.
- In record detail pages, keep the primary action button (Approve, Assign, Send) in the sticky header or a fixed right-rail panel.
- Place a soft CTA near the top of a long page and a stronger, more specific CTA at the bottom.
- Ensure the sticky element doesn't occlude content — use only for the primary action, not a full nav bar.
- On dashboard pages with long data views, keep a sticky action bar so primary actions stay accessible.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task
- **Revenue**: Conversion rate
- **Engagement & Usage**: Abandonment rate
**How to measure**: A/B test pages with sticky CTAs versus non-sticky CTAs; measure CTA click rate, conversion rate, and scroll-to-click distance to quantify the accessibility benefit of persistent primary actions on long-form pages.

## Sources
- [Good UI — Sticky / Persistent CTA](https://goodui.org/)
- [Good UI — CTA Repetition](https://goodui.org/#5)
