---
id: "UX-586"
title: "Decoy Effect (Asymmetric Dominance Effect / Attraction Effect)"
category: "Human Biases in Interfaces"
score: 4
context: "Use whenever you have a preferred conversion target among multiple plan tiers, subscription options, or service packages. Particularly effective in e-commerce and SaaS pricing. Mitigate when the decoy would mislead users into paying more than they need for their actual use case."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/6zatlh.jpg"
notion: "https://app.notion.com/p/Decoy-Effect-Asymmetric-Dominance-Effect-Attraction-Effect-4d8a9aed53448289adc581e4a025295e"
---

## Why
The Decoy Effect, first systematically studied by Joel Huber and colleagues in 1982 and later popularized by Dan Ariely's Economist subscription experiment, describes the reliable shift in consumer preference that occurs when a third 'asymmetrically dominated' option is introduced alongside two original alternatives. An option is asymmetrically dominated when it is clearly inferior to one of the original options in all relevant attributes while being only partially inferior to the other. Rather than simplifying the decision by eliminating a clearly weak option, this decoy functions as a comparison anchor that makes the dominating option appear dramatically superior — resolving decision uncertainty in a predictable and controllable direction.
The mechanism works because humans evaluate options through comparative rather than absolute assessment. When choosing between two options, people lack a clear internal benchmark for determining which is 'good value.' The dominated decoy provides an asymmetric reference point that makes one option feel superior across all evaluative dimensions simultaneously, generating the confidence and resolution that enables a decision. Ariely's canonical demonstration — The Economist offering a $59 web-only subscription, a $125 print-only subscription, and a $125 web-plus-print subscription — found that the dominated print-only option caused 84% of participants to choose the web-plus-print option, compared to 32% when the decoy was removed. The decoy roughly tripled conversion to the premium option by making it feel like an objectively smart choice rather than an uncertain premium commitment.
The design application of the decoy effect is most direct in pricing page architecture, where a deliberate three-tier structure — with the premium tier functioning as a decoy that makes the mid-tier feel like exceptional value — is nearly universal in SaaS products. The ethical constraint is meaningful: the decoy structure should guide users toward the option that genuinely serves their needs, not toward options that serve business revenue at the user's expense. A decoy that systematically redirects users to overpay for capabilities they will not use generates short-term revenue at the cost of long-term trust and retention.

## How to implement
- Structure pricing in three tiers where the middle tier is your revenue target; make the top tier a decoy that makes the middle feel like exceptional value
- Ensure the decoy is clearly inferior to the target on price-per-value dimensions while being similar in price
- Place the decoy adjacent to the target option in visual layout to maximize comparison
- Use visual hierarchy (highlighting, borders, 'Most Popular' badges) to direct attention to the target after the decoy has primed comparison
- Avoid using the decoy to push users toward options they genuinely don't need — this erodes long-term trust
- Test with 2-option vs 3-option configurations to quantify lift from the decoy structure

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Engagement & Usage**: Clickthrough rate
- **Revenue**: Conversion rate, Average order value
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: A/B test pricing or option layouts with a strategically placed decoy option versus without, measuring conversion rate to the intended option and average order value. Conduct post-task surveys to assess whether the presence of a decoy increases or decreases decision confidence and perceived fairness.

## Sources
- [https://thinkinsights.net/strategy/decoy-effect](https://thinkinsights.net/strategy/decoy-effect)
- [https://www.paulolyslager.com/decoy-effect-price-tables/](https://www.paulolyslager.com/decoy-effect-price-tables/)
- [UI-Patterns.com](http://ui-patterns.com/)
- [https://ui-patterns.com/patterns/decoy-effect](https://ui-patterns.com/patterns/decoy-effect)
