---
id: "UX-211"
title: "Never Use Placeholder Text as a Substitute for Labels"
category: "Forms & Input"
subcategory: "Field Labeling Conventions"
score: 5
context: "Use when designing any form where the ratio of required to optional fields is significantly unbalanced in either direction."
goals:
  - "Design Forms That Work"
  - "Reduce Cognitive Load"
tags:
  - "forms"
  - "accessibility"
verify: "Every input has a persistent visible label (a <label> bound to it) that stays on screen after the user types, and the placeholder never carries the only description of the field."
verifiable_by: "lint"
anti_pattern: "<input placeholder=\"Email\"> with no <label>, so the field name disappears once the user starts typing (jsx-a11y/label-has-associated-control catches the missing label)."
wireframe: "https://files.catbox.moe/h9mm7d.jpg"
notion: "https://app.notion.com/p/Never-Use-Placeholder-Text-as-a-Substitute-for-Labels-a58a9aed5344826eb003019f1a2450f9"
---

## Why
If most fields in a form are required, label only the exceptions as "Optional" rather than marking every required field with an asterisk. [Gov.uk](http://gov.uk/) research shows this reduces user confusion because users don't have to infer rules from a symbol system, and the form feels less intimidating. Conversely, if most fields are optional, label only the required ones. When the split is roughly equal (40–60%), label both required and optional fields explicitly. The asterisk convention is so widely misunderstood that avoiding it for the majority case consistently improves form completion rates.

## How to implement
- Audit each form for the required/optional ratio.
- If 80%+ are required, use "(Optional)" text label next to the minority of optional fields only — remove all asterisks.
- If 80%+ are optional, mark required fields with "(Required)".
- If split is roughly equal, mark both.
- Never use asterisk alone without a visible legend explaining it.
- Place labels inline with the field label, not below the input.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate, Completion rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Run A/B tests comparing forms with placeholder-only labels vs. persistent visible labels, measuring form completion rate and error rate. Use eye-tracking or usability testing to observe whether users lose context mid-entry when labels disappear.

## Sources
- [Nielsen Norman Group /](https://www.youtube.com/watch?v=KgXSeWM50vU)
- [Gov.uk](http://gov.uk/)
- [research](https://www.youtube.com/watch?v=KgXSeWM50vU)
- [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
