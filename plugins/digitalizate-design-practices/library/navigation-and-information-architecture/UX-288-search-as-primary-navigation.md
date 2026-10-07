---
id: "UX-288"
title: "Search as Primary Navigation"
category: "Navigation & Information Architecture"
subcategory: "Search-Based Navigation"
score: 4
context: "Large complex enterprise applications with many navigational destinations or experienced power users who know what they want and prefer speed over discovery."
goals:
  - "Structure Navigation for Deep Products"
tags:
  - "search"
  - "enterprise"
  - "navigation"
wireframe: "https://files.catbox.moe/6zfws7.jpg"
notion: "https://app.notion.com/p/Search-as-Primary-Navigation-33ea9aed534483dd871a81c446d08c4c"
---

## Why
In large enterprise applications, search becomes the most efficient navigation path for experienced users — enabling navigation entirely through intent rather than memorized menu locations. A persistent global search returning results across all entities (records, pages, actions, help articles) collapses the navigation cost of a complex application down to a few keystrokes. Users who have learned the content model navigate exclusively through search; structural navigation serves users who are still learning the system.

## How to implement
- Persistent search bar in the app header with Ctrl+F or Ctrl+K keyboard shortcut displayed as a hint.
- Show real-time suggestions as the user types (debounced at 150ms).
- Group results by type (Records, Pages, Actions, Help).
- Retain recent searches as default suggestions.
- Include fuzzy matching and typo correction.
- Access-control results: only show records the user has permission to view.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Bounce rate, Pages per session
**How to measure**: Track search adoption rate and zero-result rate in analytics; run first-click and task-based usability tests comparing search-as-navigation versus menu-based navigation, measuring findability score and time-on-task.

## Sources
- [Merveilleux.design](http://merveilleux.design/)
- [— 6 Types of UX Navigation for SaaS](https://www.merveilleux.design/en/blog/article/comprehensive-guide-for-saas-products-on-ux-navigation-types)
