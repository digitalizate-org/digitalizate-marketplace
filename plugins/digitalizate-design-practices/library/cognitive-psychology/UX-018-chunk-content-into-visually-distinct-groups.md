---
id: "UX-018"
title: "Chunk Content Into Visually Distinct Groups"
category: "Cognitive Psychology"
subcategory: "Information Processing"
score: 5
context: "Use when designing data display, forms, reports, and help content — anywhere large amounts of information must be presented."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "forms"
wireframe: "https://files.catbox.moe/7zn8q7.jpg"
notion: "https://app.notion.com/p/Chunk-Content-Into-Visually-Distinct-Groups-977a9aed5344826cb37401b71c1430e2"
---

## Why
Users process information better in structured, bite-sized chunks than in continuous streams. This applies to text (paragraphs, bullet points), data (grouped by category rather than flat lists), and workflows (step-by-step stages rather than one long form). For data-heavy enterprise applications, chunking is the primary tool for making high-density information navigable — grouping related data, providing visual section breaks, and using progressive disclosure to reveal detail within chunks. The principle applies at every level from field groups within a form to sections within a page to modules within an application.

## How to implement
- Group all information displays into visual chunks of 3–7 items.
- Use section headers as chunk anchors.
- Provide collapsible sections for large content areas.
- Apply a "3-chunk" rule to primary navigation (3–5 high-level categories, each with sub-items if needed).
- In data tables, use column groupings with visual headers for related column clusters.
- Limit visible options in any dropdown or filter to 7–10 before providing a search.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Findability score
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure scan times and comprehension accuracy on pages before and after applying visual chunking. Use eye-tracking to confirm that grouped content reduces random scanning and improves structured reading patterns, and track time-to-find-information in search or browsing tasks.

## Sources
- [100 Things #27 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
- [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
- [Laws of UX — Law of Proximity](https://lawsofux.com/law-of-proximity/)
