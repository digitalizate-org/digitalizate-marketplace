---
id: "UX-504"
title: "Common Region: Use Enclosure to Define Semantic Containers"
category: "Gestalt Principles"
subcategory: "Common Region"
score: 5
context: "Dashboard widgets, form sections, card-based layouts, pricing tiers, navigation drawers, information panels"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "forms"
  - "navigation"
  - "dashboard"
wireframe: "https://files.catbox.moe/5juje6.jpg"
notion: "https://app.notion.com/p/Common-Region-Use-Enclosure-to-Define-Semantic-Containers-7b9a9aed53448391891a0170c5f56d9b"
---

## Why
The Law of Common Region states that elements enclosed within the same bounded area — a card, a bordered panel, a color background — are perceived as members of the same group. The NNGroup course identifies Common Region as particularly powerful because it applies enclosure — one of the strongest visual containment signals — rather than merely relative position. Common Region governs the fundamental structure of card-based UIs, dashboard widget containers, and form sections. Unlike proximity, which requires elements to be spatially close to each other, Common Region can group elements that are far apart, as long as they share an enclosure. The principle also interacts with Figure-Ground: an enclosed region becomes figure against the larger ground of the page, giving it an attention advantage over un-enclosed content.

## How to implement
- Enclose 2–5 related KPIs or data points within a single card with consistent border-radius and shadow
- Apply consistent padding (16–24px) within all containers — cramped cards feel ambiguous about their membership boundaries
- Use subtle background tinting (5–10% saturation shift) rather than explicit borders to define regions with minimal visual weight
- Reserve card enclosure for primary content groups; let secondary content exist in open layout to create implicit hierarchy
- Pair Common Region with Proximity: elements within a card should be closer to each other than to the card's border
- In forms, enclose each section in a card with a clear section header; use 32–48px gaps between section cards

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Findability score
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Conduct card sorting or usability studies to measure whether enclosed regions help users correctly group related information, reducing misclassification errors. Track time-on-task for information-retrieval tasks comparing layouts with and without common-region enclosure.

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [NNGroup — Principles of Visual Design](https://www.nngroup.com/articles/principles-visual-design/)
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
