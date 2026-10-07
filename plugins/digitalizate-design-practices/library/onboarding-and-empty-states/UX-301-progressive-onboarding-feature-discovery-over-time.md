---
id: "UX-301"
title: "Progressive Onboarding (Feature Discovery Over Time)"
category: "Onboarding & Empty States"
subcategory: "Onboarding"
score: 4
context: "Complex enterprise applications with many features where a complete upfront tour would be overwhelming or take more than 5 minutes to cover all features."
goals:
  - "Optimize Onboarding & First-Time Experience"
tags:
  - "onboarding"
wireframe: "https://files.catbox.moe/ovub6i.jpg"
notion: "https://app.notion.com/p/Progressive-Onboarding-Feature-Discovery-Over-Time-902a9aed534483fe917401d0f35285ff"
---

## Why
Rather than a single upfront product tour that users forget within 24 hours, introducing features progressively as they become relevant creates durable knowledge. A user who has just created their first record is ready to learn filtering; only after they're comfortable should bulk operations and reporting be surfaced. This mirrors how skilled trainers teach enterprise software — in context, just-in-time, not via a comprehensive lecture before any hands-on use.

## How to implement
- Build a trigger system: after the user creates their first record → show "Now try filtering your list." After 5 records → show "Try bulk select for quick updates." After regular basic use → introduce reporting features.
- Gate advanced onboarding behind usage milestones (not just time).
- Never re-show a tip the user has already acknowledged.
- Log which users have seen which tips and use this for product adoption analytics.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Adoption & Retention**: Feature usage, Returning visitors, Renewed subscriptions
  - **Engagement & Usage**: Active users, Sessions per user, Session frequency
  - **Satisfaction & Perception**: CSAT, NPS, Ease-of-use score
  **How to measure**: Track feature adoption curves over 30/60/90 days and compare discovery rates for features surfaced through progressive onboarding nudges vs. those not promoted. Use cohort analysis to determine whether progressive feature exposure correlates with higher long-term retention and NPS.

## Sources
- [Formbricks — User Onboarding Best Practices](https://formbricks.com/blog/user-onboarding-best-practices)
