---
id: "UX-368"
title: "BJ Fogg's Behavior Model: Motivation, Ability, and Prompts"
category: "Behavioral Psychology"
subcategory: "Behavior Design"
score: 3
context: "Use as a diagnostic framework when analyzing feature adoption failures or drop-off points in user flows. Particularly valuable for onboarding design, re-engagement campaigns, and any feature where the desired behavior requires a behavior change from the user."
goals:
  - "Optimize Onboarding & First-Time Experience"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "behavioral-psychology"
  - "conversion"
  - "decision-making"
  - "engagement"
  - "onboarding"
  - "retention"
wireframe: "https://files.catbox.moe/ho5cz8.jpg"
notion: "https://app.notion.com/p/BJ-Fogg-s-Behavior-Model-Motivation-Ability-and-Prompts-7fca9aed53448392b38781648f0a8713"
---

## Why
BJ Fogg's Behavior Model (B = MAP) from Stanford's Behavior Design Lab states that a behavior occurs only when motivation, ability, and a prompt converge simultaneously. This framework is a powerful diagnostic tool for understanding why desired product behaviors fail: users may be motivated but find the task too difficult (reduce friction), capable but unmotivated (add emotional resonance or social incentive), or both capable and motivated but lacking a timely trigger (improve prompt timing and placement). Unlike simple persuasion frameworks, the MAP model recognizes that motivation and ability can trade off — a highly motivated user will push through more friction than a low-motivation user.

## How to implement
- Map every desired user behavior (first purchase, feature adoption, referral) to its MAP profile: where does motivation or ability fall short?
- For low-ability users: simplify the action path, reduce form fields, pre-fill data, and provide clear instructions at each micro-step
- For low-motivation users: strengthen emotional appeal with social proof, personalization, and hope-based messaging (what success looks like)
- Design prompts (notifications, tooltips, empty states) to appear exactly when users are most ready to act — immediately after a relevant trigger event
- Use 'facilitator' prompts for high-motivation/low-ability scenarios; 'spark' prompts for low-motivation/high-ability scenarios
- Remove environmental distractions and competing CTAs from high-conversion pages to concentrate motivation on a single action

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Engagement & Usage**: Clickthrough rate, Feature usage, Active users
- **Revenue**: Conversion rate
- **Adoption & Retention**: Signup completion rate, Returning visitors
**How to measure**: Map prompts to specific conversion events and measure CTA clickthrough rate and funnel conversion rate via A/B testing; track feature activation rates to assess whether ability-reducing design changes lower friction.

## Sources
- [Northbeam – Fogg Behavior Model](https://www.northbeam.io/blog/fogg-behavior-model-motivation-ability-and-prompts)
- [UI-Patterns – Making the Fogg Model Actionable](https://ui-patterns.com/blog/making-the-fogg-behavior-model-actionable)
- [The Decision Lab – Fogg Behavior Model](https://thedecisionlab.com/reference-guide/psychology/fogg-behavior-model)
- [Rock Health – Behavior Design with BJ Fogg](https://rockhealth.com/behavior-design-with-bj-fogg/)
