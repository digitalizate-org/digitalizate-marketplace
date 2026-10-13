---
id: "UX-044"
title: "Badge / Tag / Chip — Semantic Color and Label Consistency"
category: "Component Patterns"
subcategory: "Status badge design"
score: 5
context: "Apply to status indicators on records (Active, Pending, Closed), category labels, count indicators, user role labels, and filter chips."
goals:
  - "Design a Consistent System at Scale"
  - "Design Effective Feedback & Error States"
tags:
  - "search"
  - "accessibility"
wireframe: "https://files.catbox.moe/l05ejq.jpg"
notion: "https://app.notion.com/p/Badge-Tag-Chip-Semantic-Color-and-Label-Consistency-75ca9aed534482bc8ea9810114a32d7a"
---

## Why
Badges are among the most widely implemented components (122 design systems in Component Gallery) and serve multiple purposes: status indicators, category labels, count badges on navigation items, and dismissible filter chips. The critical requirement: always include a text label alongside color — never color alone (accessibility). Semantic colors must be consistent across all badge usages throughout the application — this is a core design system governance requirement.

## How to implement
- Use semantic colors consistently: green for positive/active, red for error/critical, yellow for warning/pending, gray for neutral/inactive.
- Always include a text label alongside color — never color alone.
- Use count badges on navigation items for pending items — show "9+" for counts above 9.
- In filter systems, use dismissible chips with an X to remove individual filters.
- Include badges in the design system with documented semantic meanings so all teams apply them consistently.
- Ensure badge text meets 4.5:1 contrast against the badge background.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run first-click and usability tests measuring time-to-correct-action and error rate when users must interpret badge and tag status; compare findability scores before and after introducing consistent semantic labeling and color standards.

## Sources
- [Component Gallery — Badge / Tag / Chip](https://component.gallery/components/badge/)
