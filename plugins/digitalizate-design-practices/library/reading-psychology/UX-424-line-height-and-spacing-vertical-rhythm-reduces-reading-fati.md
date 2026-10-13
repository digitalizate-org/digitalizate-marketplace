---
id: "UX-424"
title: "Line Height and Spacing: Vertical Rhythm Reduces Reading Fatigue"
category: "Reading Psychology"
subcategory: "Typography Cognition"
score: 4
context: "Applies across all text-containing interfaces. Critical for accessibility — WCAG 1.4.12 requires no loss of content when users override to 1.5× line height. Most impactful for interfaces with dense information such as dashboards, data tables, or long-form content."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "reading-psychology"
  - "typography"
wireframe: "https://files.catbox.moe/7okcfd.jpg"
notion: "https://app.notion.com/p/Line-Height-and-Spacing-Vertical-Rhythm-Reduces-Reading-Fatigue-4c2a9aed534483d3bfcc01f688edc931"
---

## Why
Line height (leading) is the vertical distance between lines of text. Too little leading causes lines to visually merge, forcing readers to re-read lines and increasing eye fatigue. Too much leading breaks the visual cohesion of paragraphs, making the reader work harder to track from line end to next line start. Research and industry standards converge on 1.4–1.6× the font size as optimal for body text. For example, 16px body text should use 22–26px line height. Letter-spacing (tracking) also affects readability: slightly increased tracking improves legibility for smaller text; tighter tracking works for large display headings.

## How to implement
- Set body text line-height to 1.5–1.6× the font size as a baseline: line-height: 1.5 for 16px body text yields 24px leading
- Increase line-height toward 1.7–1.8 when line lengths are longer (above 70 CPL) to preserve visual return-sweep tracking
- Set paragraph spacing to at least 0.75× the font size (e.g., 12px gap between paragraphs for 16px text); prefer 1.0–1.5× for more generous breathing room
- Do not allow CSS to set line-height below 1.2 for any multi-line body text; this creates text blocks that are physically difficult to parse
- For headings, reduce line-height to 1.1–1.2 (since single-line headings do not require as much vertical space)
- Add letter-spacing of 0.01–0.02em to body text rendered below 14px to compensate for reduced inter-character visual separation
- Use a baseline grid (multiples of 4px or 8px) to ensure consistent vertical rhythm across the entire interface

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Average session duration
- **Satisfaction & Perception**: Ease-of-use score, Satisfaction rating
- **Engagement & Usage**: Scroll depth, Bounce rate
**How to measure**: A/B test tight versus properly spaced line-height variants on documentation or article pages; measure scroll depth and time-on-page via analytics, and capture reading fatigue scores via a post-task questionnaire in usability sessions.

## Sources
- [WebAIM — Fonts and Readability](https://webaim.org/techniques/fonts/)
- [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html)
- [Crazy Egg — Font Psychology](https://www.crazyegg.com/blog/font-psychology/)
