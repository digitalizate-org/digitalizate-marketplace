---
id: "UX-583"
title: "Base Rate Neglect (Base Rate Fallacy)"
category: "Human Biases in Interfaces"
score: 4
context: "Mitigate: Always weight qualitative insights by the quantitative base rate of the segment they represent. Before acting on a finding, ask: 'What percentage of our users are in this situation?' Conduct sample size calculations before running tests. Leverage: Design features to serve the base-rate majority of user behaviors rather than edge cases, unless edge-case user value or revenue is disproportionate."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/q1lxbu.jpg"
notion: "https://app.notion.com/p/Base-Rate-Neglect-Base-Rate-Fallacy-c3aa9aed53448271916c81c64546e08b"
---

## Why
Base rate neglect, identified by Kahneman and Tversky in their 1973 research on probability judgment, is the systematic tendency to underweight or ignore prior probability information — statistical base rates — when evaluating specific cases, instead over-relying on vivid, case-specific evidence. The finding is robust across domains: when specific, compelling case information is available, it overshadows statistically more powerful population-level data in determining judgment. The mechanism is representativeness — how well a specific case matches a prototype pattern matters more to System 1 judgment than how frequently that pattern actually occurs in the population.
In product design and UX research, base rate neglect creates a distinctive failure mode: decisions that are emotionally anchored to specific, vivid user stories rather than statistically weighted across the actual frequency distribution of user types and behaviors. A single vocal power user whose detailed feedback is presented in a team meeting will exert more influence on roadmap priorities than a quantitative finding about the 80% of users who encounter a different friction point weekly. This is not irrationality — it is the availability heuristic and base rate neglect operating together, making vivid single cases more cognitively accessible and persuasive than abstract statistics about user segment frequencies.
The organizational consequence is a systematic misallocation of design investment toward edge cases and away from the high-frequency base-rate experiences that determine the aggregate product quality for most users most of the time. Features built for the top 2% of power users consume engineering and design resources that could improve the core experience for the 80% majority. A/B tests run without proper sample size calculations produce noisy results that lead to false conclusions. Error monitoring sorted by raw occurrence count rather than frequency times impact deprioritizes the common failures that affect the most users. The corrective discipline is quantification: every design decision should be anchored to its frequency-weighted impact, not to the vividness of the case evidence that surfaced it.

## How to implement
- Always segment user research findings by user tier frequency: 'This issue affects 80% of new users who represent 60% of all sessions'
- Use sample-size calculators before any A/B test or survey to ensure you're detecting real population effects, not noise
- Weight qualitative feedback by user frequency: a complaint from your top 10 users about a niche feature must be balanced against the base rate of that user type
- Build dashboards that show frequency distributions, not just existence: not 'users report this problem' but '34% of users encounter this problem weekly'
- Create user segmentation matrices that document the size, revenue contribution, and growth rate of each segment before prioritization decisions
- In error/exception monitoring, sort by frequency × impact, not raw occurrence count

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Conduct usability tests on interfaces that present individual anecdotes or case results without base-rate context, measuring decision error rates compared to interfaces that surface statistical context alongside examples. Survey users on decision confidence before and after adding population-level data to information-heavy interfaces.

## Sources
- [https://www.patent355.com/behavioral-design-glossary/base-rate-fallacy](https://www.patent355.com/behavioral-design-glossary/base-rate-fallacy)
- [https://trevorcalabro.substack.com/p/cognitive-biases-in-ux-research](https://trevorcalabro.substack.com/p/cognitive-biases-in-ux-research)
