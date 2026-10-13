---
id: "UX-155"
title: "Quick Access Toolbar (QAT)"
category: "Desktop-Specific Patterns"
subcategory: "Toolbar Design"
score: 3
context: "Applications with ribbon/tab-based navigation or deep hierarchical menus where frequently used actions are buried several levels deep."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Design for Enterprise & B2B Scale"
tags:
  - "desktop"
wireframe: "https://files.catbox.moe/gh2eil.jpg"
notion: "https://app.notion.com/p/Quick-Access-Toolbar-QAT-bc9a9aed53448247900781bc06897d9a"
---

## Why
A Quick Access Toolbar — a small configurable row of frequently used commands pinned above or beside the main toolbar — gives expert users one-click access to their most common actions regardless of which application section they're in. Popularized by Microsoft Office, it acknowledges that different users have different most-used commands and that no static toolbar arrangement will optimize for all of them. It is the toolbar equivalent of keyboard shortcuts: a power-user feature that compounds daily productivity gains.

## How to implement
- Allow right-click on any command to "Add to Quick Access Toolbar." Persist QAT configuration per user.
- Display above the ribbon or in the title bar area.
- Limit to 5–10 items maximum to avoid clutter.
- Show keyboard shortcut tooltips on QAT buttons.
- Provide a "Manage Quick Access Toolbar" settings panel for bulk configuration.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Time saved per task
- **Effectiveness**: Task success rate, Completion rate
- **Engagement & Usage**: Feature usage, Active users, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track which toolbar actions users add or use most frequently via analytics, and measure time on task for frequent workflows before and after QAT adoption. Survey power users on perceived efficiency gains using a post-session ease-of-use item.

## Sources
- [DevExpress — WPF Ribbon & Toolbars](https://www.devexpress.com/products/net/controls/wpf/bars/)
