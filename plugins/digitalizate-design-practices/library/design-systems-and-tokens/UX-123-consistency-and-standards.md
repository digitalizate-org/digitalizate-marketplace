---
id: "UX-123"
title: "Consistency and Standards"
category: "Design Systems & Tokens"
subcategory: "Internal and external consistency"
score: 5
context: "Apply in every design decision — users spend most of their time in other products, so their prior experiences set expectations for yours. Critical when building multi-module enterprise products."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "cognitive-load"
  - "design-system"
wireframe: "https://files.catbox.moe/bwhdad.jpg"
notion: "https://app.notion.com/p/Consistency-and-Standards-e8ba9aed5344822ba943816f25e234e9"
---

## Why
Users should not have to wonder whether different words, situations, or actions mean the same thing. Per Jakob's Law, users bring mental models from every tool they've previously used; interfaces that violate these conventions create re-learning burden. There are two types: internal consistency (same action always looks and behaves identically within your product) and external consistency (your product follows established industry conventions). Both are essential — but violating external conventions without clear benefit is always costly. Inconsistency is only useful when deliberate, to draw attention to something novel.

## How to implement
- Build and enforce a design system with documented component variants, interaction states, voice/tone guidelines, and a pattern library.
- Follow OS-native conventions: Cmd/Ctrl+S to save, Escape to dismiss, magnifying glass = search, gear = settings.
- When building for users migrating from known tools (Salesforce, SAP, Excel), replicate familiar interaction patterns explicitly.
- Audit for consistency across interaction patterns (how modals close, how errors appear), language (same verb for same action), and visual style (button hierarchy).

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT, Brand perception
- **Adoption & Retention**: Returning visitors
**How to measure**: Audit the product for heuristic violations of consistency (terminology, interaction patterns, visual language) and track resolution over time. Measure time on task and error rate for new users navigating between sections with high versus low consistency, and monitor support ticket volume for interactions that were previously inconsistent.

## Sources
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Good UI — Consistency](https://goodui.org/#27)
- [Good UI — Conventions](https://goodui.org/#29)
- [Laws of UX — Jakob's Law](https://lawsofux.com/jakobs-law/)
