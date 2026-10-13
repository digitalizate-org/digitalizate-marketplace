---
id: "UX-482"
title: "Card Sorting for User-Driven Information Architecture"
category: "Human-Centered Design"
subcategory: "Information Architecture"
score: 3
context: "Use when building or redesigning site navigation, creating a new feature menu, restructuring a knowledge base or help center, or when usability testing shows users cannot find features they know exist. Run before wireframing begins to ensure the structural foundation matches user mental models."
goals:
  - "Present & Defend Design Decisions"
  - "Structure Navigation for Deep Products"
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "human-centered-design"
wireframe: "https://files.catbox.moe/wpupou.jpg"
notion: "https://app.notion.com/p/Card-Sorting-for-User-Driven-Information-Architecture-490a9aed5344821ab2fa017f1e2d0922"
---

## Why
Card sorting is an IDEO-aligned research method where users organize labeled cards representing content, features, or navigation items into groups that make intuitive sense to them — revealing their mental models of how information should be structured. The technique surfaces the vocabulary users naturally use (rather than internal product jargon), the categories they expect, and where they would look for specific content. For web applications, card sorting directly informs navigation design, site structure, feature naming, and search taxonomy, reducing the cognitive load of navigation by aligning the IA with how users actually think.

## How to implement
- Use open card sorting (no predefined categories) when designing new navigation structures or IA from scratch — it reveals how users naturally group and name concepts
- Use closed card sorting (predefined categories) or hybrid card sorting to validate an existing structure or test whether your proposed categories match user mental models
- Create cards representing actual content types, features, or navigation labels from your product — aim for 20–40 cards per session; avoid jargon in card labels
- Recruit 15–20 participants per segment for statistically meaningful patterns; use digital tools (OptimalSort, Maze, UserZoom) for remote, unmoderated sessions
- Run moderated sessions when you need to understand the reasoning behind groupings — ask users to think aloud as they sort
- Analyze results by looking for consensus clusters, outlier cards, and labels users spontaneously created — pay close attention to naming, not just structure
- Present results as a similarity matrix or dendrogram to show which cards were consistently grouped together across participants

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Direct success rate, Task success rate
- **Efficiency**: Time on task, Tree-test score
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Validate card-sort-derived IA with a tree test before implementation, targeting at least 80% direct success rate on priority tasks. After launch, monitor search usage rates as an indicator of findability — high search volume on content that should be navigable suggests IA still needs refinement.

## Sources
- [Nielsen Norman Group — Card Sorting](https://www.nngroup.com/articles/card-sorting-definition/)
- [Interaction Design Foundation — Card Sorting Guide](https://www.interaction-design.org/literature/article/the-pros-and-cons-of-card-sorting-in-ux-research)
- [Dovetail — Card Sorting for UX Research](https://dovetail.com/ux/card-sorting/)
