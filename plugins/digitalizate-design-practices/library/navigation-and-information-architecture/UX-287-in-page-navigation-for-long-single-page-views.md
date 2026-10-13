---
id: "UX-287"
title: "In-Page Navigation for Long Single-Page Views"
category: "Navigation & Information Architecture"
subcategory: "Page-level navigation"
score: 4
context: "Apply to long settings pages, comprehensive record detail views, multi-section dashboard pages, documentation articles with 4+ distinct sections."
goals:
  - "Structure Navigation for Deep Products"
tags:
  - "navigation"
wireframe: "https://files.catbox.moe/653c8u.jpg"
notion: "https://app.notion.com/p/In-Page-Navigation-for-Long-Single-Page-Views-548a9aed53448394879201e0e8d520ce"
---

## Why
On long single-page views, a sticky in-page navigation (anchor links) helps users jump directly to sections of interest rather than scrolling through all content. This is especially valuable in long enterprise settings pages, compliance documentation, and multi-section record views where users typically need one specific section rather than reading from top to bottom. A scroll-spy behavior (highlighting the active section as users scroll) maintains orientation without requiring interaction.

## How to implement
- Add a sticky left-sidebar or top-tab in-page nav for any page with 4+ distinct sections.
- Highlight the active section in the in-page nav as users scroll (scroll-spy behavior).
- Keep the in-page nav visually distinct from the app's main navigation — use a secondary-level nav style.
- Use descriptive section labels in the in-page nav (not generic "Section 1" labels).
- Ensure all anchor links work correctly with the browser's back button for deep-linked sections.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Engagement & Usage**: Scroll depth, Bounce rate
**How to measure**: Track anchor-link click rates and scroll depth on long pages in analytics; compare time-to-section and task success rate in usability tests for pages with versus without in-page navigation, particularly for content-dense documentation or settings pages.

## Sources
- [Good UI — Page-Level Navigation](https://goodui.org/)
