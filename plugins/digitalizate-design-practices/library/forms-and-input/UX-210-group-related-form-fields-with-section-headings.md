---
id: "UX-210"
title: "Group Related Form Fields With Section Headings"
category: "Forms & Input"
subcategory: "Form section organization"
score: 5
context: "Apply to forms with more than ~6 fields, or forms covering multiple distinct topics (personal information, billing, shipping, preferences)."
goals:
  - "Design Forms That Work"
tags:
  - "cognitive-load"
  - "forms"
verify: "A form with more than ~6 fields splits them into sections with a visible heading each, with more space between sections than between fields inside one."
verifiable_by: "visual"
anti_pattern: "A 15-field form as one flat list with uniform spacing, no headings, and Save and Delete in the same block."
wireframe: "https://files.catbox.moe/en2rqo.jpg"
notion: "https://app.notion.com/p/Group-Related-Form-Fields-With-Section-Headings-56ca9aed5344823793a381ff6ca86cd4"
---

## Why
Long forms as a single undifferentiated list feel overwhelming. Grouping related fields into sections reduces the sense of scale, allows focus on one information category at a time, minimizes context switching, and creates a sense of progress as each section is completed. The Law of Common Region states that elements sharing an area with a clearly defined boundary are perceived as a group — use background fills or bordered fieldsets to create sections without excessive visual noise.

## How to implement
- Group logically related fields together with clear section headings.
- Use consistent spacing: tighter within a group, more space between sections.
- Reinforce grouping with subtle visual containers, dividers, or background color differentiation.
- Use background fill or a bordered fieldset to create visible section regions (Law of Common Region).
- Place destructive controls in a visually separate group from safe controls — never intermix Save and Delete in the same section.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: A/B test form layouts with and without section headings, tracking form completion rates, field-level error rates, and time to submit. Supplementary usability testing can capture qualitative data on whether groupings reduce confusion and improve user confidence in filling out complex forms.

## Sources
- [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
- [Laws of UX — Law of Common Region](https://lawsofux.com/law-of-common-region/)
