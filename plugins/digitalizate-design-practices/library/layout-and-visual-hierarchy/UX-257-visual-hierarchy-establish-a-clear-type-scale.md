---
id: "UX-257"
title: "Visual Hierarchy — Establish a Clear Type Scale"
category: "Layout & Visual Hierarchy"
subcategory: "Typography and information hierarchy"
score: 5
context: "Apply to dashboard layouts, data tables, report output, settings pages, detail panels — any screen with multiple levels of information density."
goals:
  - "Simplify a Cluttered Interface"
  - "Improve Readability & Visual Clarity"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/m46t94.jpg"
notion: "https://app.notion.com/p/Visual-Hierarchy-Establish-a-Clear-Type-Scale-284a9aed534483b89459810118e30886"
---

## Why
Visual hierarchy guides the eye through content using size, weight, color, spacing, and indentation to differentiate important elements from supporting ones. Without explicit hierarchy, all elements compete equally for attention. In enterprise apps with high information density, establishing a clear 4-level type scale — primary headings, secondary labels, body data, meta/helper text — is foundational to readability and scanning efficiency.

## How to implement
- Establish a clear type scale: primary headings (18–24px/bold), secondary labels (14px/medium), body data (14px/regular), meta/helper text (12px/regular/muted).
- Use weight (bold) for primary data points, color for status/state, size for heading levels — don't apply all three simultaneously to the same element.
- Give the most important number on a dashboard card the largest font size; supporting context text should be 30–50% smaller.
- Use intentional whitespace as a hierarchy signal — dense sections read as secondary, airy sections as primary.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Findability score
- **Satisfaction & Perception**: Ease-of-use score, Brand perception
**How to measure**: Run a first-click test or information-finding task on pages with a defined type scale versus pages with inconsistent sizing, measuring time to locate key headings and sections. Use post-session ratings to capture perceived clarity and professionalism.

## Sources
- [Good UI — Visual Hierarchy](https://goodui.org/#31)
