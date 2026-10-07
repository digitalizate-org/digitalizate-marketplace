---
id: "UX-326"
title: "Autocomplete and Autosuggestion in Search"
category: "Search Filter & Sort"
subcategory: "Search input assistance"
score: 5
context: "Apply to global search, record lookup fields, tag/label inputs, user assignment fields, and filter value inputs in enterprise applications."
goals:
  - "Build Effective Search & Filter"
tags:
  - "search"
  - "ai-patterns"
  - "forms"
wireframe: "https://files.catbox.moe/fs14ff.jpg"
notion: "https://app.notion.com/p/Autocomplete-and-Autosuggestion-in-Search-559a9aed5344829db231810bc970a455"
---

## Why
Typed search requires users to recall the exact terminology the system recognizes — a difficult task when users are unfamiliar with the domain or data vocabulary. Autocomplete and autosuggestion shift this to recognition-over-recall by presenting options as users type. Show up to 5–7 suggestions in the dropdown, grouped by entity type if the search spans multiple types. Use a combobox over a plain select for any list with 10+ items — filtering dramatically reduces scan time.

## How to implement
- Trigger suggestions after 2–3 characters — not after 1 (too broad) and not requiring the full term.
- Show 5–7 suggestions grouped by type (Users, Reports, Records) if multi-entity.
- Include recent searches at the top before the user has typed anything.
- Keyboard-navigate suggestions with arrow keys, confirm with Enter, dismiss with Escape.
- Handle typos, partial matches, and case variations gracefully.
- Debounce live search queries 300–500ms to avoid excessive API calls.
- Show a spinner inside the input when loading remote options.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Search success rate
- **Efficiency**: Time to find information, Keystrokes to complete search
- **Satisfaction**: User satisfaction score (CSAT/NPS)
**How to measure**: Monitor search completion rate and time-to-first-result; track how often users refine searches (indicating poor autocomplete); A/B test with and without suggestions to quantify conversion lift.

## Sources
- [Good UI — Auto-Suggest / Autocomplete](https://goodui.org/)
- [Component Gallery — Combobox / Autocomplete](https://component.gallery/components/combobox/)
- [Nielsen Norman Group — Search Is Not Enough](https://www.nngroup.com/articles/search-not-enough/)
