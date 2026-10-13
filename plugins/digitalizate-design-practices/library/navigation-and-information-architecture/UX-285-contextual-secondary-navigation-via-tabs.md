---
id: "UX-285"
title: "Contextual Secondary Navigation via Tabs"
category: "Navigation & Information Architecture"
subcategory: "Secondary Navigation"
score: 5
context: "When a screen has 2–7 distinct content categories users switch between frequently. Do not use for content that should be viewed in sequence (use a wizard) or for more than 7 items (use a secondary sidebar instead)."
goals:
  - "Structure Navigation for Deep Products"
tags:
  - "ai-patterns"
  - "navigation"
wireframe: "https://files.catbox.moe/t96ugr.jpg"
notion: "https://app.notion.com/p/Contextual-Secondary-Navigation-via-Tabs-983a9aed534482d181f8014b36fe2bc3"
---

## Why
Tabs within a page or section group related content into simultaneously visible categories, allowing users to switch context without losing their place. They are the standard pattern for organizing record detail views (Overview / History / Settings / Integrations) in enterprise CRM, ticketing, and ERP applications. The power of tabs lies in making all categories visible simultaneously — users know what sections exist and can navigate without a back button.

## How to implement
- Horizontal tab bar across the top of the content area.
- Active tab: underline or filled background indicator.
- Labels: 1–3 words, no icons needed if labels are sufficiently descriptive.
- Add count badges to tabs showing pending items (e.g., "Comments (3)").
- Persist the active tab in URL state (using URL hash or query param) for shareability.
- Support keyboard navigation across tabs with arrow keys.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time to navigate to target, Click depth to reach content
- **Satisfaction**: User satisfaction score (CSAT/NPS)
**How to measure**: Track tab usage analytics to confirm all categories are being accessed; monitor time-to-content for tabbed sections; run usability tests to verify users understand the tab structure without instruction.

## Sources
- [Merveilleux.design](http://merveilleux.design/)
- [— 6 Types of UX Navigation for SaaS](https://www.merveilleux.design/en/blog/article/comprehensive-guide-for-saas-products-on-ux-navigation-types)
