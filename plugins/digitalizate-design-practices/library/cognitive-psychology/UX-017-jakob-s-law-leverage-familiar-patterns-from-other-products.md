---
id: "UX-017"
title: "Jakob's Law — Leverage Familiar Patterns From Other Products"
category: "Cognitive Psychology"
subcategory: "Mental models and platform conventions"
score: 5
context: "Apply when designing navigation, keyboard shortcuts, toolbar placement, form layouts, modal patterns, and data table conventions — especially when users migrate from known competing tools."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "cognitive-load"
  - "forms"
wireframe: "https://files.catbox.moe/67yx0e.jpg"
notion: "https://app.notion.com/p/Jakob-s-Law-Leverage-Familiar-Patterns-From-Other-Products-fada9aed53448336820281f20f31501c"
---

## Why
Users spend most of their time on other products, so they prefer yours to work the same way as tools they already know. Their mental models from prior applications set expectations for yours. Violating conventions without clear benefit forces re-learning. When building enterprise apps where users come from specific ecosystems (Salesforce, SAP, Excel, Jira), explicitly matching their interaction patterns dramatically reduces adoption friction. When a redesign is necessary, provide a transitional period where users can preview or revert.

## How to implement
- Follow OS-native conventions: Cmd/Ctrl+S to save, Escape to dismiss, breadcrumbs top-left, search top-right.
- Replicate familiar patterns from users' primary existing tools (Salesforce-style record pages, Excel-style column sorting, Gmail-style bulk action toolbars).
- Use familiar icon metaphors: magnifying glass = search, gear = settings, bell = notifications, grid/list = view toggle.
- When breaking a convention, do so intentionally and A/B test the change — never deviate accidentally.
- Conduct think-aloud testing to surface mental model mismatches early.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Task success rate, Error rate
- **Adoption & Retention**: Account creation rate, Returning visitors
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Compare time on task and error rate for new users performing tasks that follow familiar conventions (e.g., top-right profile menu, search at the top) versus novel patterns. Measure onboarding completion rates as an indicator of how quickly users transfer existing mental models to the new product.

## Sources
- [Laws of UX — Jakob's Law](https://lawsofux.com/jakobs-law/)
- [Nielsen Norman Group — Mental Model Inertia](https://www.nngroup.com/articles/mental-models/)
