---
id: "UX-133"
title: "High Information Density for Expert Enterprise Users"
category: "Desktop-Specific Patterns"
subcategory: "Information Density"
score: 5
context: "Use when designing for professional desktop users who spend the majority of their workday in the application, particularly analysts, operators, and clinicians."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
  - "forms"
wireframe: "https://files.catbox.moe/pwe14u.jpg"
notion: "https://app.notion.com/p/High-Information-Density-for-Expert-Enterprise-Users-053a9aed534482e08ef20160a5f8e5af"
---

## Why
Desktop enterprise applications for specialist users should use higher information density than consumer applications — narrower margins, smaller default text, tighter spacing — to enable users to see more context without scrolling. Enterprise power users working daily in data-heavy tools need to see more data simultaneously, not less. The "lots of whitespace" principle of consumer design is actively counterproductive in analyst, operator, and clinician tools where maximizing visible rows in a table is a productivity requirement. Provide multiple density options so the same product serves both power and occasional users.

## How to implement
- Provide a "compact" density option as the default for power-user personas.
- Use 12–13px font size for data-dense areas.
- Use 24–28px row heights in compact table mode.
- Reduce padding in standard containers to 8–12px.
- Provide an optional "comfortable" mode with 40–56px row heights for accessibility-focused users or larger display setups.
- Persist density preference per user account.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Direct success rate
- **Efficiency**: Time on task, Time saved per task, Training time
- **Engagement & Usage**: Feature usage, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Benchmark task completion times and error rates for expert users before and after increasing information density; survey users with SUS or ease-of-use ratings. Track training time and support ticket volume to confirm that density improvements accelerate expert workflows without increasing errors.

## Sources
- [About Face 4th Ed., Ch. 9 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
- [YouTube: 8 Principles for Complex Desktop Apps](https://www.youtube.com/watch?v=Dvt0Vdo_Wak)
