---
id: "UX-231"
title: "Command Palette"
category: "Interaction Patterns"
subcategory: "Keyboard-First Interfaces"
score: 5
context: "Use in complex applications with many features where power users perform repeated actions, especially developer tools, productivity apps, and analytics platforms with 10+ distinct workflows."
goals:
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "search"
  - "keyboard"
wireframe: "https://files.catbox.moe/5c6g03.jpg"
notion: "https://app.notion.com/p/Command-Palette-225a9aed5344820ca7d5811101859419"
---

## Why
A command palette is a keyboard-driven modal search interface (Cmd/Ctrl+K) that gives users instant access to any action, navigation target, or content in the application. It bridges the gap between GUI discoverability and CLI efficiency — users can find any command by typing a few characters without memorizing keyboard shortcuts or navigating through menus. The most powerful command palettes are context-aware, offering different commands depending on what the user is currently viewing or doing.

## How to implement
- Single keyboard shortcut (Cmd/Ctrl+K) to open from anywhere.
- Implement fuzzy matching for search.
- Show recent items and frequently used commands when the palette is empty.
- Make the results list keyboard-navigable (arrow keys + Enter to execute).
- Show keyboard shortcut hints for each command in the results list.
- Surface context-specific commands at the top when the user is in a relevant context.
- Provide a "Preview" of the action on selection for potentially destructive or navigational commands.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Time saved per task
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Log command palette invocation and command execution rates via event tracking; compare task completion time for power users who adopt the palette versus those who navigate menus, using A/B testing or longitudinal cohort analysis.

## Sources
- [HashBuilds — Command Palette Pattern](https://www.hashbuilds.com/patterns/what-is-command-palette)
- [Retool — Designing the Command Palette](https://retool.com/blog/designing-the-command-palette)
- [Sam Solomon — Designing Command Palettes](https://solomon.io/designing-command-palettes/)
