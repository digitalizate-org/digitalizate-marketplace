---
id: "UX-106"
title: "Card Sorting for User-Centric Information Architecture"
category: "Design Process & Methodology"
subcategory: "Information Architecture Methods"
score: 4
context: "Use when designing navigation, menus, or IA for a new product, when consolidating legacy systems, and when users report difficulty finding things."
goals:
  - "Present & Defend Design Decisions"
tags:
  - "tables"
  - "navigation"
  - "cognitive-load"
  - "search"
  - "forms"
wireframe: "https://files.catbox.moe/pmx1rv.jpg"
notion: "https://app.notion.com/p/Card-Sorting-for-User-Centric-Information-Architecture-385a9aed53448229a5d001c5f9ccce35"
---

## Why
Ask users to organize cards representing features, functions, or content items into groups that make sense to them, and label those groups. Card sorting reveals users' mental models and vocabulary for organizing information, exposing mismatches between designer-imposed taxonomies and users' natural conceptual groupings. For data-heavy enterprise applications, card sorting is particularly valuable for designing navigation hierarchies, filter categories, and report taxonomies. Open card sort (users create their own categories) is for discovery; closed card sort (predefined categories) is for validation.

## How to implement
- Create cards for each major feature, report type, entity, or concept.
- Run open card sort (users create their own categories) for discovery — 15–20 participants.
- Analyze with cluster analysis to find consensus groupings.
- Run closed card sort to validate proposed navigation structures — test with 5–10 participants.
- Note terminology users apply to their groups — these become your navigation labels.
- Pay special attention to items that users consistently place inconsistently — they signal genuine conceptual ambiguity.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate, Direct success rate
- **Efficiency**: Time on task, Tree-test score
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run a tree test on the proposed IA derived from card sorting results, measuring overall success rate, direct success rate, and time per task. Compare results against a baseline tree test on the existing IA to quantify the findability improvement attributable to the card-sort-derived structure.

## Sources
- [IDEO Method Cards](http://designblog.uniandes.edu.co/blogs/dise1107/files/2013/01/IDEO_cards.pdf)
- [Nielsen Norman Group — IA vs. Navigation](https://www.nngroup.com/articles/ia-vs-navigation/)
- [Boxes and Arrows — Information Architecture: Blueprints for the Web](https://boxesandarrows.com/information-architecture-blueprints-for-the-web/)
