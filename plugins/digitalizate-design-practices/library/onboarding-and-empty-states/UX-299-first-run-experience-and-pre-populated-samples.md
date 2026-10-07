---
id: "UX-299"
title: "First-Run Experience and Pre-Populated Samples"
category: "Onboarding & Empty States"
subcategory: "First-Run Experience"
score: 4
context: "Complex enterprise applications where the value proposition is not immediately obvious with an empty interface — project management tools, CRMs, BI platforms."
goals:
  - "Optimize Onboarding & First-Time Experience"
tags:
  - "onboarding"
wireframe: "https://files.catbox.moe/keyzpg.jpg"
notion: "https://app.notion.com/p/First-Run-Experience-and-Pre-Populated-Samples-0f0a9aed53448228be7d81e17d0236e0"
---

## Why
Pre-populating sample data or demo projects for new users makes the interface feel functional and illustrates how it should be used — transforming an intimidating blank canvas into a legible example of the product's value. "Getting started" checklists gamify onboarding and guide users toward their first meaningful action. The goal is to reduce the time between first login and first value experience ("Aha moment") from days to minutes.

## How to implement
- On first login: show a "Getting Started" checklist modal or sidebar widget with 3–5 key setup tasks, each with a one-click shortcut.
- Offer "Import sample data" and "Create from template" as alternatives to starting from scratch.
- Show a progress indicator for checklist completion (e.g., "2 of 5 steps complete").
- Hide the checklist automatically after all items are completed or after 30 days, whichever comes first.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Adoption & Retention**: Account creation rate, Signup completion rate, Returning visitors
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, NPS
  **How to measure**: Compare activation rates (users who complete a meaningful first action) for new users who receive pre-populated sample content vs. those who face blank states. Track time-to-first-value as a measure of how quickly first-run experience improvements translate to engagement.

## Sources
- [Eleken — Empty State UX](https://www.eleken.co/blog-posts/empty-state-ux)
