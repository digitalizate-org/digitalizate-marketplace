---
id: "UX-422"
title: "Optimal Line Length: 45–75 Characters for Maximum Readability"
category: "Reading Psychology"
subcategory: "Typography Cognition"
score: 5
context: "Apply to all body text on web applications: articles, help docs, form instructions, onboarding copy, marketing pages. Critical for responsive design systems where line length can vary dramatically across viewports."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/v1l6n4.jpg"
notion: "https://app.notion.com/p/Optimal-Line-Length-45-75-Characters-for-Maximum-Readability-feea9aed5344822db470814bbf10e137"
---

## Why
Typography research consistently identifies an optimal line length (measure) of 45–90 characters per line for body text — approximately 50–75 characters is the most cited sweet spot. Lines that are too long (90+ CPL) force the eye to travel a greater horizontal distance, making it difficult to locate the start of the next line and increasing the risk of losing one's place. Lines that are too short (under 40 CPL) create awkward hyphenation, disrupt reading rhythm, and force excessive return sweeps. Butterick's Practical Typography recommends 45–90 CPL; Google Material Design specifies 40–60 CPL for body, up to 120 CPL for wide desktop layouts with increased line height. NNGroup's chunking research recommends approximately 50–75 CPL.

## How to implement
- Set body text column width using CSS max-width to enforce line-length limits: approximately 600–750px for a 16px font yields ~65–75 CPL
- Use the 'alphabet test': the ideal column width fits roughly 2–2.5 repetitions of the lowercase alphabet
- On responsive designs, ensure that widening the viewport does not cause the content column to stretch beyond ~800px
- For wider layouts (dashboards, data-heavy interfaces), increase line-height to 1.6–1.8 when line length exceeds 75 CPL
- For mobile, ensure minimum body text of 16px and column padding of at least 16px on each side
- Do not use percentage-width for main content columns without max-width constraints: on large monitors, full-width columns can easily exceed 200 CPL
- Use the reading experience of your own product at different viewport sizes as a continuous quality check

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Average session duration
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
- **Engagement & Usage**: Scroll depth, Bounce rate
**How to measure**: A/B test pages with short (under 45 characters), optimal (45-75 characters), and long (over 75 characters) line lengths; measure scroll depth and time-on-page via analytics, and collect post-read ease-of-use ratings in usability tests.

## Sources
- [Butterick's Practical Typography — Line Length](https://practicaltypography.com/line-length.html)
- [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html)
- [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
