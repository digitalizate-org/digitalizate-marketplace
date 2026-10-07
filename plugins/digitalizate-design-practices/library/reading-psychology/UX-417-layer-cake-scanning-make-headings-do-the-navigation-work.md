---
id: "UX-417"
title: "Layer-Cake Scanning: Make Headings Do the Navigation Work"
category: "Reading Psychology"
subcategory: "Scanning Patterns"
score: 5
context: "Essential for documentation pages, help centers, long-form articles, settings pages, and any content exceeding three paragraphs. Most impactful when users arrive with a specific question or task in mind."
goals:
  - "Reduce Cognitive Load"
  - "Improve Readability & Visual Clarity"
tags:
  - "content-design"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/sw9kky.jpg"
notion: "https://app.notion.com/p/Layer-Cake-Scanning-Make-Headings-Do-the-Navigation-Work-48da9aed534483eca62481de8c219a35"
---

## Why
When pages are broken into well-labeled sections, users engage in 'layer-cake' scanning: fixations land primarily on headings, with brief dips into body text only when a heading signals relevant content. Eye-tracking heatmaps show horizontal stripes of attention on headings with white space between — resembling layers of a cake. This is the most effective scanning pattern for long-form content, far superior to F-pattern scanning, because it enables users to self-direct toward what they need. The pattern only activates when headings are visually distinct and content-rich.

## How to implement
- Make subheadings visually unmistakable: use consistent size increase (18–24px for H2), weight contrast (bold vs. regular), and optionally color or spacing above the heading
- Write headings that describe the section content precisely — avoid clever, vague, or question-based headings that don't reveal what follows
- Lead headings with the most information-rich word (e.g., 'Error handling strategies' not 'Strategies for handling errors')
- Chunk body content into logical sections of 3–5 paragraphs each, each governed by exactly one heading
- Apply the layer-cake pattern beyond articles: use labeled card groups, section titles on dashboards, and category headers in lists
- Test heading scannability: if a user can get the gist of the page by reading only headings, the structure is working

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Completion time
  - **Engagement & Usage**: Scroll depth, Bounce rate, Pages per session
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure heading-click rates and scroll depth on documentation and article pages to confirm users are navigating via the heading layer. Compare time-to-information on pages with strong heading hierarchies vs. those with weak or missing headings using task-based usability testing.

## Sources
- [Nielsen Norman Group — Layer-Cake Pattern: Heading-Dominant Scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/)
- [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
