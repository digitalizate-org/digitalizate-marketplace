---
id: "UX-389"
title: "Progress Visualization with the Zeigarnik Effect"
category: "Gamification"
subcategory: "Progression Systems"
score: 5
context: "Apply to any multi-step process where completion rate is a key metric: onboarding flows, profile setup, course completion, feature adoption, goal-setting tools."
goals:
  - "Increase User Engagement & Retention"
tags:
  - "engagement"
  - "gamification"
  - "onboarding"
wireframe: "https://files.catbox.moe/bqmh5z.jpg"
notion: "https://app.notion.com/p/Progress-Visualization-with-the-Zeigarnik-Effect-09ba9aed53448368a346814b4d88441d"
---

## Why
The Zeigarnik Effect states that people remember and are more motivated by incomplete tasks than completed ones — a progress bar that shows 60% completion creates psychological tension that drives users to finish. LinkedIn's profile completion bar, HubSpot's onboarding checklist, and Trello's task indicators all exploit this effect. Progress visualization is one of the highest-ROI, lowest-complexity gamification mechanics available to product teams.

## How to implement
- Add a persistent, visible progress indicator to every multi-step flow: onboarding, profile setup, feature adoption, goal tracking
- Start users slightly above 0% — the 'Endowed Progress Effect' shows users who feel they've already started are 82% more likely to complete a task (e.g., 'You're 20% done — just 4 steps to go')
- Use specific milestone labels on progress bars, not just percentage numbers ('Setup Complete → Import Data → First Win')
- Show progress toward meaningful goals, not just task completion (e.g., 'Profile strength: Expert' not just '80%')
- Animate progress increments — micro-animations on progress bar fills create a satisfying dopamine response
- Display cumulative progress metrics (e.g., GitHub contribution graphs, total lessons completed, days active) to show investment over time
- Never use a progress bar that reverses or resets unexpectedly — this creates a bait-and-switch effect that destroys trust

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Engagement & Usage**: Active users, Sessions per user, Feature usage
- **Adoption & Retention**: Returning visitors, Renewed subscriptions
- **Effectiveness**: Completion rate
**How to measure**: Track task or goal completion rates for flows where progress is visualized versus hidden; run cohort analysis comparing retention and session frequency for users who see progress indicators against those who don't; measure completion rate uplift with A/B testing.

## Sources
- [UX Gamification for SaaS – Userpilot](https://userpilot.com/blog/gamification-ux/)
- [Gamification in UX design – Standard Beagle](https://standardbeagle.com/ux-in-the-gaming-industry/)
- [Onboarding Gamification – LearnExperts](https://learnexperts.ai/blog/onboarding-gamification-how-to-build-better-first-days/)
