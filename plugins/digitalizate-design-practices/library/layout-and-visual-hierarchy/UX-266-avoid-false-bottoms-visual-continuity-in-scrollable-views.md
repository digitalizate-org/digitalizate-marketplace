---
id: "UX-266"
title: "Avoid False Bottoms — Visual Continuity in Scrollable Views"
category: "Layout & Visual Hierarchy"
subcategory: "Scrollable page design"
score: 4
context: "Apply to long dashboard pages, infinite scroll tables, report output pages, analytics views, and documentation pages. False bottoms kill content discovery."
goals:
  - "Improve Readability & Visual Clarity"
wireframe: "https://files.catbox.moe/xege92.jpg"
notion: "https://app.notion.com/p/Avoid-False-Bottoms-Visual-Continuity-in-Scrollable-Views-650a9aed53448360ad40018de0c11c05"
---

## Why
A false bottom occurs when a visual break or whitespace gap on a scrollable page makes users think they've reached the end when they haven't. This kills content discovery below the break. Consistent visual rhythm — consistent card spacing, row heights, section breaks — teaches users a pattern that signals "content continues." Show partial content of the next section above the fold to explicitly signal "more content below."

## How to implement
- Never place a full-width visual break or large empty gap in the middle of a scrollable content area.
- Use consistent visual rhythm (card spacing, row heights, section breaks) so users learn a pattern and continue scrolling.
- Show partial content of the next section above the fold to signal continuation.
- Use "load more" triggers or pagination instead of empty-space separators between data sections.
- Test with users whether they scroll to the bottom — if they consistently stop at a visual break, eliminate the break.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Engagement & Usage**: Scroll depth, Abandonment rate
**How to measure**: Use scroll-depth analytics to identify where users stop scrolling and correlate with content truncation or visual breaks; A/B test designs with false bottoms removed versus present and measure scroll depth and content engagement rates.

## Sources
- [Good UI — Visual Continuity](https://goodui.org/#15)
