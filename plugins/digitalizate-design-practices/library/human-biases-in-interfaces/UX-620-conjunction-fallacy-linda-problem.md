---
id: "UX-620"
title: "Conjunction Fallacy (Linda Problem)"
category: "Human Biases in Interfaces"
score: 3
context: "Leverage (carefully): Use highly specific, vivid product positioning to increase perceived relevance—specific conjunctions feel more real. Specific persona descriptions and user stories resonate more deeply in team communication. Mitigate in research: Avoid scenario designs where specific conjunctions of user attributes drive insights that don't generalize. In analytics, avoid segmentation that over-specifies until sample size becomes invalid."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/hketjy.jpg"
notion: "https://app.notion.com/p/Conjunction-Fallacy-Linda-Problem-33da9aed534482028f0a81d41479de15"
---

## Why
The conjunction fallacy is the systematic error of judging a specific conjunction of events as more probable than one of its constituent events alone. Documented by Tversky and Kahneman (1983) through the famous "Linda Problem," participants given a vivid description of Linda as a politically engaged feminist consistently rated "Linda is a bank teller and active in the feminist movement" as more likely than "Linda is a bank teller" — a direct violation of probability law (a conjunction can never exceed either constituent probability). The error is driven by the representativeness heuristic: the conjunction matches the story better, makes more narrative sense, and therefore *feels* more likely.
The mechanism at work is cognitive fluency: descriptions that cohere into a vivid, story-consistent picture are processed more easily, and this ease of processing is unconsciously interpreted as increased probability. "She's a feminist — of course she's also a bank teller *and* an activist" feels right because the elements fit together coherently. This insight has direct implications for interface copy, marketing positioning, and product communication: specific, story-coherent descriptions will always feel more compelling and relevant than abstract statistical claims, regardless of their relative probability. A product described as "designed for marketing managers who run multi-channel campaigns and want to cut reporting time in half" will feel more relevant to that segment than "designed for professionals who want to save time."
The dual nature of this fallacy — exploitable in some contexts, dangerous in others — requires contextual awareness. When designing marketing copy, product personas, or user stories for team communication, the fallacy's effect on perceived relevance is a feature: specificity resonates. When designing user research methodologies, analytics segments, or documentation for feature conditions, the same effect is a bug: overly specific scenarios are perceived as representative when they are statistically rare, leading to designs built around low-frequency conjunctions.

## How to implement
- Write specific, vivid user scenario descriptions in marketing copy to increase resonance and perceived relevance — the conjunction of specific attributes creates a "that's me" recognition response that generic descriptions cannot
- In team communication, use named, specific personas ("Sarah, the marketing manager who runs three campaigns simultaneously") rather than aggregate statistical descriptions — specificity drives more empathetic and grounded design decisions
- In user research, validate specific scenario assumptions against base-rate frequency data before building features for them — ask "how often does this exact combination of circumstances occur?" before treating the scenario as representative
- Audit marketing claims for under-specificity: replace "helps professionals" with "helps marketing managers who run multi-channel campaigns" to leverage the conjunction's representativeness effect
- When building product documentation, avoid listing many simultaneous conditions: users will overweight the probability of all conditions occurring together and misapply the documentation to their actual (simpler) case
- When reporting research findings involving conjunction-defined segments, always state both the segment definition and its measured base-rate frequency to prevent stakeholders from inferring representativeness from specificity

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Test filter, search, and recommendation interfaces where conjunctive descriptions may lead users to select overly specific options over simpler, more probable alternatives; measure error rates and selection quality in controlled usability sessions. Survey users on confidence in filtered result relevance when conjunctive constraints are made visually explicit.

## Sources
- [https://en.wikipedia.org/wiki/Conjunction_fallacy](https://en.wikipedia.org/wiki/Conjunction_fallacy)
- [https://www.alignmentforum.org/w/conjunction-fallacy](https://www.alignmentforum.org/w/conjunction-fallacy)
