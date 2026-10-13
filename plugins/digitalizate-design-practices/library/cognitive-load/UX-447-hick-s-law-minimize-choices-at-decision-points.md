---
id: "UX-447"
title: "Hick's Law: Minimize Choices at Decision Points"
category: "Cognitive Load"
subcategory: "Decision Architecture"
score: 5
context: "Apply when response speed or conversion rate is a priority, and wherever user testing reveals hesitation or abandonment at choice screens."
goals:
  - "Drive Conversion & Decision-Making"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "decision-making"
wireframe: "https://files.catbox.moe/dszor6.jpg"
notion: "https://app.notion.com/p/Hick-s-Law-Minimize-Choices-at-Decision-Points-42aa9aed534482478cf101cdbc0c79ca"
---

## Why
Hick's Law states that decision time increases logarithmically with the number of choices (RT = a + b × log₂(n+1)). In UI contexts, every additional option at a decision point adds processing time, increases anxiety, and raises the probability of abandonment — even when more options are objectively better for the user. The law applies most powerfully to primary screens, landing pages, CTAs, and any flow where the user's response latency is a conversion signal.

## How to implement
- Limit primary screen choices to 3–5 options; surface only the most important CTA as the visually dominant element.
- Use progressive disclosure to hide secondary and advanced options behind 'More,' 'Advanced Settings,' or expandable panels — visible only when requested.
- Pre-select smart defaults based on the most common user scenario, so the path of least resistance is also the optimal path for most users.
- In navigation, use hierarchical categories (menus and sub-menus) rather than flat lists of all destinations.
- On landing pages and pricing pages, visually distinguish a 'Recommended' or 'Most Popular' option to short-circuit analysis paralysis.
- During high-stakes moments (checkout, onboarding), strip the interface of navigation and cross-sell elements to reduce competing stimuli.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Conversion rate
- **Efficiency**: Time on task, Error rate reduction
- **Revenue**: Conversion rate improvement, Support tickets reduction
**How to measure**: Track decision time at key choice points via session recording; measure abandonment rate at choice screens; A/B test reduced-choice vs. full-choice versions to quantify conversion impact.

## Sources
- [Hick's Law — Laws of UX](https://lawsofux.com/hicks-law/)
- [Hick's Law — Interaction Design Foundation](https://www.interaction-design.org/literature/article/hick-s-law-making-the-choice-easier-for-users)
- [Hick's Law in UX — The Sigma](https://www.thesigma.co/journal/hicks-law-ux)
- [Design Principles: Hick's Law — Marvel Blog](https://marvelapp.com/blog/design-principles-hicks-law%E2%80%8A-%E2%80%8Aquick-decision-making/)
