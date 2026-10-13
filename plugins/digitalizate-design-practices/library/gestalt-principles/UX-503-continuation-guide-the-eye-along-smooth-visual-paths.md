---
id: "UX-503"
title: "Continuation: Guide the Eye Along Smooth Visual Paths"
category: "Gestalt Principles"
subcategory: "Continuation"
score: 5
context: "Carousels, infinite scroll feeds, multi-step forms, onboarding flows, landing page layouts, data tables"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "tables"
  - "design-system"
  - "animation"
wireframe: "https://files.catbox.moe/5zffna.jpg"
notion: "https://app.notion.com/p/Continuation-Guide-the-Eye-Along-Smooth-Visual-Paths-070a9aed534483ff9f3b8102a4e42f1b"
---

## Why
The Law of Continuation holds that the eye naturally follows the smoothest, most continuous path available, and actively anticipates the extension of that path beyond visible boundaries. The NNGroup course outlines three key subfacets: (1) reading path continuation — the implicit Z or F reading trajectory across page content; (2) content edge clipping — partially visible content at scroll boundaries implies continuation of the sequence; and (3) connecting elements — lines, arrows, and guides create explicit continuation paths that direct eye movement to specific targets. Continuation is why carousel components clip the adjacent slide edge (signaling 'there is more in this direction'), why progress bars extend toward a target state, and why connected step indicators communicate both position and endpoint.

## How to implement
- In carousels and horizontal scrollable areas, clip adjacent item edges by 20–30px to imply continued content
- Clip the last visible card at the bottom fold by 20–35% to signal more content below in infinite scroll
- Use step indicators with connecting lines for multi-step flows; align all steps on a single horizontal or vertical axis
- Apply directional micro-animations that match navigation direction: forward = right-to-left entry; back = left-to-right entry
- Use arrows, pointer elements, or diagonal layout vectors to guide eye movement toward key CTAs on landing pages
- In data tables, maintain column alignment across all rows to create vertical continuation paths that make scanning effortless

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Findability score
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Use eye-tracking studies to verify that smooth visual paths guide user gaze through content in the intended sequence. Measure time-to-target for key CTA or information elements and compare layouts using continuation-based visual flow against unguided layouts.

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [Bejamas — Gestalt Principles](https://bejamas.com/blog/gestalt-principles-of-design)
- [IxDF — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
