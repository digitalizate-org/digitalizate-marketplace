---
id: "UX-431"
title: "Information Scent: Make Links and Labels Predictive of Destination"
category: "Reading Psychology"
subcategory: "Information Architecture"
score: 4
context: "Critical for navigation design, search results pages, content cards, recommendation widgets, and any interface where users must decide which link to follow to accomplish their goal. Particularly important in complex information architectures like documentation sites, e-commerce catalogs, and knowledge bases."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "cognitive-load"
  - "content-design"
  - "navigation"
  - "reading-psychology"
wireframe: "https://files.catbox.moe/0nebt8.jpg"
notion: "https://app.notion.com/p/Information-Scent-Make-Links-and-Labels-Predictive-of-Destination-44da9aed534482b3859f81767ad6d596"
---

## Why
Information scent theory (from information foraging theory) describes how users evaluate links, labels, and navigation cues as a proxy for the content they will find on the destination page. Strong information scent means the link text accurately and specifically describes what the user will find; weak scent (generic labels like 'Learn more', 'Click here', 'More') forces users to guess and often leads to abandoned navigation paths. NNGroup research shows that the link label is the single most important cue, followed by context (surrounding text and images), followed by prior experience. Clickbait-style over-promising erodes long-term scent by breaking user expectations.

## How to implement
- Write link text that is specific, self-explanatory, and describes the destination content: 'View Q3 sales report' not 'View report' not 'Click here'
- Avoid generic CTA labels ('Submit', 'Learn more', 'More') in isolation; either add specificity or pair with context
- Use descriptive anchor text for internal links in body copy: the link text should be readable in isolation and still communicate the destination
- Provide summary text (1–2 sentences) beneath card titles and navigation links to add secondary scent cues
- Use representative images as scent cues for categories: a prototypical example image (a robin for 'Birds', not a penguin) communicates the category more accurately than a generic image
- Avoid context-breaking navigation labels: internal jargon and branded terminology reduce scent for new users who lack that context
- Ensure the page users land on after clicking a link fulfills the scent promise — mismatch between link text and landing page content destroys trust

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Direct success rate, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Clickthrough rate, Bounce rate
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Conduct tree testing measuring direct success rates for navigation paths where link and label clarity is varied. Track clickthrough rates and bounce rates on key navigation elements before and after improving information scent, and run first-click tests to evaluate whether users predict correct destinations.

## Sources
- [Nielsen Norman Group — Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/)
