---
id: "UX-446"
title: "Chunking: Grouping Information Into Meaningful Units"
category: "Cognitive Load"
subcategory: "Working Memory"
score: 4
context: "Essential for any data-dense interface, multi-field forms, navigation menus with more than 7 items, and anywhere users must hold multiple pieces of information simultaneously."
goals:
  - "Simplify a Cluttered Interface"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "navigation"
wireframe: "https://files.catbox.moe/6z5l84.jpg"
notion: "https://app.notion.com/p/Chunking-Grouping-Information-Into-Meaningful-Units-7f1a9aed53448362aa7481436bfdc52b"
---

## Why
Miller's research (1956) established that working memory holds approximately 7±2 items, but more recent estimates (Cowan, 2001) suggest the functional limit for complex web tasks is closer to 3–4 chunks. Chunking transforms a stream of discrete data points into a smaller number of meaningful groups, drastically reducing the number of working memory slots required. The key is that chunks must be semantically coherent — grouping for visual tidiness alone does not yield cognitive benefit.

## How to implement
- Break long lists into labeled sections of 4–6 items each, using clear section headings that tell users what the group contains before they scan it.
- Split forms with more than 5 fields into logical sections with descriptive headings (e.g., 'Shipping Address,' 'Payment Details') rather than presenting one long scroll.
- Use visual containers — cards, bordered panels, background shading — to define chunk boundaries for data-dense interfaces like dashboards.
- Apply the phone-number principle to any alphanumeric strings (account IDs, confirmation codes): 'A3B-7K9-2M1' rather than 'A3B7K92M1'.
- In navigation menus, group related items under parent categories rather than exposing all destinations at once; Gestalt proximity and common-region principles reinforce the grouping.
- Limit the number of primary navigation items to 5–7; use mega-menus or second-level navigation to reveal depth on demand.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure information processing time and error rates on tasks requiring users to interpret or act on grouped vs. ungrouped content. Use cognitive load scales in usability studies to quantify whether meaningful chunking reduces perceived effort on data-heavy screens.

## Sources
- [How Chunking Helps Content Processing — Nielsen Norman Group](https://www.nngroup.com/articles/chunking/)
- [Miller's Law — Userbrain Blog](https://www.userbrain.com/blog/millers-law-important-rule-ux-design-everyone-breaks/)
- [Miller's Law: when less becomes a plus —](https://www.kern-it.be/en/blog/miller-law-less-becomes-a-plus-for-great-user-experience/)
- [kern-it.be](http://kern-it.be/)
- [Miller's Law — LogRocket Blog](https://blog.logrocket.com/ux-design/millers-law-ux-design/)
