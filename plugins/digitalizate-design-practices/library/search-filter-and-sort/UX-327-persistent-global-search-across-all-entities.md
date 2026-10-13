---
id: "UX-327"
title: "Persistent Global Search Across All Entities"
category: "Search Filter & Sort"
subcategory: "Global Search"
score: 5
context: "Use in any enterprise application with 3+ entity types and significant data volume, especially where users cannot always predict where data is stored."
goals:
  - "Build Effective Search & Filter"
  - "Design for Enterprise & B2B Scale"
tags:
  - "search"
  - "enterprise"
  - "navigation"
wireframe: "https://files.catbox.moe/ozfkvo.jpg"
notion: "https://app.notion.com/p/Persistent-Global-Search-Across-All-Entities-5c9a9aed534483669ae6813396b48c6a"
---

## Why
Provide a persistent, fast search experience that lets users find any entity — record, document, setting, action — from anywhere in the application without navigating to a specific section first. Enterprise applications with thousands of records and multiple entity types make navigation-first finding deeply frustrating. Global search with entity-type indicators, fuzzy matching, and recent-items history provides the fastest possible path from intent to content and serves as the universal fallback when navigation fails.

## How to implement
- Always-visible search bar in the top navigation, or a keyboard shortcut (Cmd/Ctrl+K) to open a command palette-style search.
- Include entity-type indicators in results (e.g., icon or label showing "Customer," "Order," "Report").
- Support fuzzy/partial matching.
- Show recent items before any query is entered.
- Group results by entity type in the results dropdown.
- Ensure search latency stays below 200ms for the first visible results.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Track global search usage rate, zero-result rate, and click-through rate on search results in analytics; run findability usability tests comparing global search against per-section search, measuring time-to-result and task success rate.

## Sources
- [HashBuilds — Command Palette Pattern](https://www.hashbuilds.com/patterns/what-is-command-palette)
- [About Face Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
