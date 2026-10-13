---
id: "UX-610"
title: "Sunk Cost Fallacy (Sunk Cost Effect / Escalation of Commitment)"
category: "Human Biases in Interfaces"
score: 4
context: "Use ethically to encourage completion of multi-step processes (forms, onboarding, tutorials) where abandonment harms the user as much as the product. Mitigate ethically by providing clear exit paths and not trapping users in harmful subscription continuation through friction."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/slxocn.jpg"
notion: "https://app.notion.com/p/Sunk-Cost-Fallacy-Sunk-Cost-Effect-Escalation-of-Commitment-66aa9aed534482cabc0f81ce158c93a8"
---

## Why
The Sunk Cost Fallacy, formally defined by Arkes and Blumer (1985), is the irrational tendency to continue an endeavor due to previously invested resources — time, money, effort — that cannot be recovered, even when continuation is not in one's best interest. Rational decision theory prescribes that only future costs and benefits should factor into a current decision; past investment is irretrievably sunk and economically irrelevant. Humans systematically violate this principle because the psychological experience of "wasted" prior investment activates loss aversion: stopping feels like conceding that the investment was a loss, and loss aversion's asymmetric weighting makes that prospective loss feel worse than the future cost of continuing. The result is continued engagement in activities, relationships, and subscriptions that would be rationally abandoned if the prior investment were ignored.
In digital product design, the sunk cost fallacy is one of the most widely deployed retention mechanisms — deliberately or by default. Game progression systems (World of Warcraft, Clash of Clans, Duolingo) are architected around sunk cost: every hour invested in leveling a character, building a streak, or developing a skill makes quitting psychologically expensive in a way that no amount of feature improvement can replicate. Multi-step form progress bars that display "You've completed 3 of 5 steps" exploit sunk cost by making abandonment feel like discarding already-complete work. Streaming services that automatically continue to the next episode leverage the "I've already started" investment. Subscription products where users have invested significant time configuring integrations, building workflows, and customizing interfaces create genuine switching costs that are inseparable from the sunk cost mechanism.
The ethical dimension of sunk cost design is a gradient, not a binary. At the legitimate end: progress indicators in onboarding that encourage users to complete a setup that is genuinely in their interest, streak mechanics in learning apps that sustain engagement with a practice the user voluntarily chose, and reminders of cumulative value created ("You've saved 240 hours using this feature") that make the cost of switching accurately visible. At the dark pattern end: deliberately complex offboarding designed to make cancellation frustrating, artificial lock-in through proprietary data formats that make export difficult, and manufactured psychological investment in low-value activities designed to trap users in subscription continuation against their interests. The distinction lies in whether the switching cost reflects real value the user has created or artificial friction the product has constructed.

## How to implement
- Use progress bars and step completion indicators in multi-step onboarding, forms, and tutorial flows to display how much the user has already invested — completion rates for progress-indicated flows are consistently 20–30% higher than flows without indicators
- Reflect saved work, created content, configured preferences, and built integrations prominently in the product UI so users are continuously aware of the investment at stake; this is legitimate sunk cost design tied to real user value
- Remind lapsed and re-engaged users of their prior activity with specificity: "You last left off building [specific project]" or "You've built [X] with this tool" personalizes the sunk cost reminder against genuine value created
- Use streak mechanics and completion streaks in habit-formation contexts — streaks make current behavior feel continuous with past investment, and breaking a streak activates sunk cost dynamics that sustain engagement through friction points
- In cancellation flows, surface cumulative usage data — hours saved, tasks completed, files created, money tracked — to make the cost of leaving accurately visible; this is different from using friction to prevent cancellation
- Never make cancellation deliberately difficult through confusing navigation, hidden options, or mandatory phone calls; sunk-cost-based retention from genuine product value should require no friction to work — if you need friction to retain users, the product value isn't doing the job
- Build genuine switching costs through data portability value (the more users create, the more valuable their created content becomes) rather than through artificial lock-in mechanisms

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Engagement & Usage**: Abandonment rate, Sessions per user
- **Revenue**: Conversion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Identify flows where sunk cost is likely to trap users (e.g., long forms, complex checkout) and A/B test exit-permission patterns ("save and return later", clear progress saving) that reduce commitment pressure, measuring abandonment rate and completion rate. Survey users who abandon long flows to identify whether sunk cost feelings contributed to frustration.

## Sources
- [https://learningloop.io/plays/psychology/sunk-cost-bias](https://learningloop.io/plays/psychology/sunk-cost-bias)
- [https://www.linkedin.com/pulse/sunk-cost-fallacy-behavioral-product-design-milijana-komad-nglpf](https://www.linkedin.com/pulse/sunk-cost-fallacy-behavioral-product-design-milijana-komad-nglpf)
