---
id: "UX-008"
title: "Meaningful Alternative Text for Images and Data Visualizations"
category: "Accessibility"
subcategory: "Screen reader accessibility"
score: 4
context: "Apply to all images, icons, charts, and graphic elements. ALT text for data visualizations must describe the insight conveyed, not the chart type."
goals:
  - "Design for Accessibility & Inclusion"
  - "Improve Readability & Visual Clarity"
tags:
  - "data-heavy"
  - "accessibility"
wireframe: "https://files.catbox.moe/1rbgb5.jpg"
notion: "https://app.notion.com/p/Meaningful-Alternative-Text-for-Images-and-Data-Visualizations-5a3a9aed534482809ff6816218cfe342"
---

## Why
Screen reader users receive no information from images, charts, or data visualizations without meaningful alternative text. ALT text for data visualizations must describe the key meaning/insight conveyed, not just the visual appearance — "bar chart showing revenue" provides no value; "Bar chart showing Q3 revenue up 23% year-over-year, with North America leading at $4.2M" provides real information. Purely decorative images must have empty ALT attributes so screen readers skip them.

## How to implement
- Informative images: describe the key information conveyed, not visual appearance.
- Functional images (buttons/icons): describe the action they perform.
- Decorative images: use empty `alt=""` so screen readers skip them.
- Charts/data visualizations: describe the key trend or insight.
- Do not replicate image captions as ALT text — both will be read sequentially.
- For complex interactive charts, provide a tabular data alternative (a summary table).
- Never use an image as the only way to convey critical system information.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, App store rating
  - **Adoption & Retention**: Returning visitors, Account creation rate
  **How to measure**: Conduct accessibility audits to identify images and visualizations lacking meaningful alt text, and measure task success rates for screen-reader users on image-dependent workflows. Track accessibility-related support tickets and app store ratings mentioning screen reader or visual impairment issues.

## Sources
- [Nielsen Norman Group — 5 Visual Treatments That Improve Accessibility](https://www.nngroup.com/articles/visual-treatments-accessibility/)
