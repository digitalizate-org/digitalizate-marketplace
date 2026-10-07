---
id: "UX-050"
title: "Accordion — Collapsible Sections for Occasionally Needed Content"
category: "Component Patterns"
subcategory: "Accordion usage and design"
score: 4
context: "Apply to settings panels with many sections, FAQ sections, filtering panels with collapsible filter groups, and long detail pages where not all sections are always relevant."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "search"
wireframe: "https://files.catbox.moe/r6a8ab.jpg"
notion: "https://app.notion.com/p/Accordion-Collapsible-Sections-for-Occasionally-Needed-Content-d57a9aed5344835cb4118173472476f0"
---

## Why
Accordions allow vertical stacks of interactive headings to toggle display of further information. Used across 101 design systems, they are the most widely implemented content-organization component. They are appropriate when information is occasionally needed but not always — hiding it by default reduces perceived complexity without reducing availability. Do not use accordions for essential information that users must see — hidden content is missed by users who don't expand it.

## How to implement
- Allow multiple sections to be open simultaneously unless there is a specific reason to enforce single-open mode.
- Use clear expand/collapse icons (chevron or +/-) that rotate/change state to signal current state visually.
- Don't use accordions for essential first-view information.
- Use `aria-expanded` on the trigger button and `aria-controls` linking to the content panel.
- Accordions work particularly well in narrow right-rail panels and filter sidebars.
- For filter panels: allow individual filter category accordions to be collapsed to save vertical space.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Engagement & Usage**: Scroll depth, Abandonment rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track accordion expand rates via analytics to confirm users engage with optional content; run usability tests measuring time-to-find information in accordion versus fully expanded layouts and survey users on perceived information density.
- Allow multiple sections to be open simultaneously unless there is a specific reason to enforce single-open mode.
- Use clear expand/collapse icons (chevron or +/-) that rotate/change state to signal current state visually.
- Don't use accordions for essential first-view information.
- Use `aria-expanded` on the trigger button and `aria-controls` linking to the content panel.
- Accordions work particularly well in narrow right-rail panels and filter sidebars.
- For filter panels: allow individual filter category accordions to be collapsed to save vertical space.

## Sources
- [Component Gallery — Accordion](https://component.gallery/components/accordion/)
