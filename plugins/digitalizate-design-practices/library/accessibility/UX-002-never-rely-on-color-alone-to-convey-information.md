---
id: "UX-002"
title: "Never Rely on Color Alone to Convey Information"
category: "Accessibility"
subcategory: "Color Accessibility"
score: 5
context: "Use when designing status indicators, data visualizations, charts, and any color-coded system."
goals:
  - "Design for Accessibility & Inclusion"
  - "Improve Readability & Visual Clarity"
tags:
  - "data-heavy"
  - "dashboard"
  - "accessibility"
wireframe: "https://files.catbox.moe/gyhd15.jpg"
notion: "https://app.notion.com/p/Never-Rely-on-Color-Alone-to-Convey-Information-568a9aed5344837a91ab8182d7f0848b"
---

## Why
Approximately 9% of men and 0.5% of women have color vision deficiencies, most commonly affecting red-green discrimination. Data visualizations, status indicators, and navigation elements that rely solely on color — red for error, green for success — are inaccessible to a significant portion of enterprise users. This is not a niche edge case: in a team of 50 engineers, approximately 4–5 will have red-green color blindness. Designing for color-blind accessibility by default improves the design for everyone by adding visual redundancy that clarifies status even in unfavorable display conditions.

## How to implement
- Test all color-coded systems using a color-blindness simulator (Coblis, Color Oracle, Figma plugins).
- Ensure every status communicated by color is also communicated by: shape (different icon shapes), pattern (different chart fills), text label, or position.
- Never use red/green alone as the primary status distinction.
- In status badges, add icons (✓ for success, ✗ for error) alongside color.
- In charts, use different shapes for data series in addition to colors.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, SUS score
- **Adoption & Retention**: New visitors, Account creation rate
**How to measure**: Conduct accessibility audits using color-blindness simulation tools to identify color-only information; test with color-blind users in usability sessions measuring task success rate and error rate before and after adding secondary indicators (icons, labels, patterns).

## Sources
- [100 Things #11 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
- [Nielsen Norman Group — 5 Visual Treatments That Improve Accessibility](https://www.nngroup.com/articles/visual-treatments-accessibility/)
