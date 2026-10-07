---
id: "UX-439"
title: "Text Alignment: Left-Align Body Text, Avoid Justified and Centered for Long Copy"
category: "Reading Psychology"
subcategory: "Typography Cognition"
score: 4
context: "Applies to all textual content in web interfaces. Most commonly violated in marketing-designed product pages and feature sections where centered text blocks are used for aesthetic effect, creating readability problems at scale."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/h85w2z.jpg"
notion: "https://app.notion.com/p/Text-Alignment-Left-Align-Body-Text-Avoid-Justified-and-Centered-for-Long-Copy-77ea9aed53448202967e81f6cfa67dc9"
---

## Why
Left-aligned text (for left-to-right languages) produces consistent word spacing and predictable line endings, enabling readers to locate the start of the next line without searching. Justified text creates variable word spacing that disrupts reading rhythm and creates 'rivers' — diagonal white channels through text blocks that the eye follows instead of the intended horizontal reading path. Centered text should never be used for more than 2–3 lines; the irregular left edge of centered text forces the eye to search for each line start, significantly slowing reading and increasing fatigue. [GOV.UK](http://gov.uk/) explicitly prohibits right-aligned or justified text in their design system.

## How to implement
- Default all body text (paragraphs, help text, instructions) to left-aligned (text-align: left)
- Use centered text only for short display copy: page titles (1 line), pull quotes (2–3 lines), button labels, or success/error headings
- Never justify body text in web interfaces — CSS text-align: justify without hyphenation support creates severely uneven word spacing on responsive layouts
- Right-align only numeric data in table cells (to align decimal points) and RTL-language text
- Verify alignment at all responsive breakpoints: short lines (mobile) with centered or justified text create especially poor readability
- For mixed-language interfaces, default to the alignment direction of the dominant language; use CSS logical properties (text-align: start) for auto-adaptation in RTL languages

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Average session duration
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
- **Engagement & Usage**: Scroll depth, Bounce rate
**How to measure**: A/B test left-aligned versus justified body text on content-heavy pages, measuring time-on-page and scroll depth via analytics; collect post-reading ease-of-use and fatigue ratings in a short usability survey.

## Sources
- [GOV.UK](http://gov.uk/)
- [— Typography Guidelines](https://design-system.service.gov.uk/styles/typography/)
- [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html)
- [Butterick's Practical Typography — Line Length](https://practicaltypography.com/line-length.html)
