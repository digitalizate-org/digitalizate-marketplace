---
id: "UX-045"
title: "Combobox / Autocomplete for Long-List Dropdowns"
category: "Component Patterns"
subcategory: "Combobox and autocomplete design"
score: 5
context: "Apply when a dropdown list has 10+ items — filtering dramatically reduces scan time compared to standard select dropdowns."
goals:
  - "Build Effective Search & Filter"
  - "Design a Consistent System at Scale"
tags:
  - "search"
  - "ai-patterns"
  - "forms"
wireframe: "https://files.catbox.moe/hf1vsf.jpg"
notion: "https://app.notion.com/p/Combobox-Autocomplete-for-Long-List-Dropdowns-38ba9aed534482438678011e35b0ee14"
---

## Why
Comboboxes combine a text input with a filtered dropdown — appropriate whenever a list has 10+ items because the filtering dramatically reduces scan time compared to scrolling through a standard select dropdown. Multi-select comboboxes show selected values as chips/tags inside the input. Support keyboard navigation throughout: type to filter, arrow keys to highlight, Enter to select, Escape to dismiss. Used across 37 design systems.

## How to implement
- Use combobox over a plain select when the list has 10+ items.
- Support full keyboard navigation: type to filter, arrow keys to highlight, Enter to select, Escape to dismiss.
- Show "Create new" option at the bottom if the app supports adding new values.
- For multi-select, show selected values as chips/tags inside the input.
- Indicate loading remote options with a spinner.
- Trigger suggestions after 2–3 characters.
- Implement ARIA: `role="combobox"`, `aria-autocomplete`, `aria-expanded`, `aria-controls` pointing to the listbox.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Compare time-on-task and selection error rate in usability tests between standard long-list dropdowns and combobox/autocomplete implementations; A/B test on high-traffic forms and measure completion rate and time-to-field-completion.

## Sources
- [Component Gallery — Combobox / Autocomplete](https://component.gallery/components/combobox/)
