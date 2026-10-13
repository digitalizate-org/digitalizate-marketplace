---
id: "UX-048"
title: "Disable, Don't Hide, Irrelevant Menu Items"
category: "Component Patterns"
subcategory: "Contextual menu state management"
score: 4
context: "Apply to role-based or context-sensitive contextual menus and toolbars in enterprise applications where item availability changes based on state or permissions."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "cognitive-load"
  - "enterprise"
wireframe: "https://files.catbox.moe/pralra.jpg"
notion: "https://app.notion.com/p/Disable-Don-t-Hide-Irrelevant-Menu-Items-584a9aed534482f38a24018fb04faff8"
---

## Why
Hiding irrelevant actions makes their position unpredictable — users who expect an action in a certain position won't find it and may doubt the menu's completeness. Disabling preserves spatial memory of the menu structure while clearly communicating unavailability in the current context. This is especially important in role-based enterprise UIs where available actions differ by permission level — users need to see what exists even if they can't execute it.

## How to implement
- Keep the full set of contextually related commands visible, with irrelevant ones disabled.
- Provide a tooltip or brief reason why a disabled action is unavailable when the reason is non-obvious ("You don't have permission to delete" or "This record is locked").
- Include the full family of related commands: if "Back" appears, include "Forward"; if "Cut" appears, include "Copy" and "Paste." Apply this to toolbars as well as contextual menus.
- Consider a permission prompt (rather than silent disabling) for role-restricted actions.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Menu discoverability, Task success rate
- **Efficiency**: Time to find available actions, Error rate reduction
- **Satisfaction**: User confidence in menu completeness, Learnability
**How to measure**: Track user frustration events from unexpected menu changes (session recordings); measure time-to-find-action when switching between states; test spatial memory retention with vs. without disabled vs. hidden menu items.

## Sources
- [Nielsen Norman Group — Contextual Menus: Delivering Relevant Tools for Tasks](https://www.nngroup.com/articles/contextual-menus/)
