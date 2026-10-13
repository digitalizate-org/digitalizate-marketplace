---
id: "UX-057"
title: "Card Component Anatomy for Dashboard KPIs"
category: "Dashboard Design"
subcategory: "KPI card design patterns"
score: 5
context: "Apply to dashboard KPI widgets, record summary views, entity listing in grid view, and feature promotion panels."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "dashboard"
wireframe: "https://files.catbox.moe/25ur32.jpg"
notion: "https://app.notion.com/p/Card-Component-Anatomy-for-Dashboard-KPIs-d62a9aed5344825d80318193ddfc94c0"
---

## Why
Cards create Common Region grouping — each card must have a clear, singular focus (one entity, one metric, one action). Consistent card sizing within a grid prevents the fragmented layout of varying-size cards. For dashboard KPI cards, a standard anatomy improves scanning: metric label top, primary number center/large, secondary context below, trend indicator with color+icon. Making the entire card clickable (not just a small "View" link) applies Fitts's Law for navigable entity cards.

## How to implement
- Ensure each card has a single focus — one metric, one entity, one action.
- Use consistent card sizing within a grid.
- For KPI cards: metric label top (12–14px/muted), primary number center/large (24–32px/bold), secondary context below (12–14px), trend indicator with color + direction icon.
- Make the entire card clickable for navigable entities — not just a small link text.
- For action cards, include a clear primary action button within the card.
- Use consistent card background, border-radius, and shadow level across all cards in the system.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Time saved per task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct eye-tracking or first-click studies to verify KPI cards attract attention in the right order; survey dashboard users on comprehension speed and run usability sessions measuring time-to-answer key monitoring questions.

## Sources
- [Component Gallery — Card](https://component.gallery/components/card/)
- [Laws of UX — Law of Common Region](https://lawsofux.com/law-of-common-region/)
