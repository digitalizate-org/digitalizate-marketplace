---
id: "UX-304"
title: "Tesler's Law — Absorb Complexity Into the System"
category: "Product Strategy"
subcategory: "Complexity management and simplification"
score: 5
context: "Apply when simplifying a feature — data import/export flows, report configuration, permission systems, workflow builders, formula editors. Complexity can be shifted but not eliminated."
goals:
  - "Present & Defend Design Decisions"
  - "Simplify a Cluttered Interface"
  - "Design for Enterprise & B2B Scale"
wireframe: "https://files.catbox.moe/ct8tb1.jpg"
notion: "https://app.notion.com/p/Tesler-s-Law-Absorb-Complexity-Into-the-System-922a9aed534482fc9ca801baafe16755"
---

## Why
For any system, there is a certain amount of complexity that cannot be reduced — it can only be shifted between the user and the system. The designer's job is to absorb as much complexity as possible into the system so users don't have to deal with it. Auto-detecting date formats, auto-mapping CSV columns, and providing intelligent defaults are all examples of the system absorbing complexity. However, trying to simplify beyond the essential complexity of a domain will confuse advanced users or break edge cases — accept irreducible complexity and expose it gracefully.

## How to implement
- Absorb complexity into the system: auto-detect date formats, auto-map CSV columns, provide smart defaults based on context.
- Provide two modes: "Simple" with sensible defaults for most users, and "Advanced" exposing full complexity for power users.
- Use contextual tooltips and inline help to navigate unavoidable complexity rather than hiding it.
- Don't over-simplify complex permission models or workflow builders — advanced users need the full model exposed cleanly.
- Document irreducible complexity clearly rather than apologizing for it.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Training time
- **Adoption & Retention**: Signup completion rate, Renewed subscriptions
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Compare task completion time and error rate before and after absorbing complexity into the system (e.g., smart defaults, automatic formatting); track support ticket volume and onboarding completion rates as indicators of reduced user-side complexity burden.

## Sources
- [Laws of UX — Tesler's Law](https://lawsofux.com/teslers-law/)
