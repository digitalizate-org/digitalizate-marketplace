---
id: "UX-551"
title: "Anchoring Bias (Focalism)"
category: "Human Biases in Interfaces"
score: 5
context: "Use strategically on pricing pages, negotiation tools, plan-selection screens, and any interface where relative value perception matters. Mitigate it during user research and A/B test design to avoid artificially anchored evaluations."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/0bndlq.jpg"
notion: "https://app.notion.com/p/Anchoring-Bias-Focalism-c89a9aed53448383b471011c243099c9"
---

## Why
Anchoring bias, first systematically documented by Tversky and Kahneman (1974), describes the tendency to rely disproportionately on the first piece of information encountered — the "anchor" — when making subsequent estimates or decisions. The mind uses the anchor as a reference point, and all adjustments from that anchor are demonstrably insufficient to overcome its gravitational pull. The effect operates even when the anchor is entirely arbitrary or irrelevant: in Tversky and Kahneman's classic experiment, subjects given different random numbers from a wheel-spin estimated African UN membership as substantially higher or lower based solely on those numbers. Anchoring is a System 1 process that activates associative networks around the anchor value and biases all downstream cognition.
In interface design, this translates directly to how users perceive value, price, time, and quality. The sequence and prominence of information are not neutral design choices — they actively set reference points that shape every subsequent judgment on that page. Pricing interfaces that display a premium plan ($199/month) before a standard plan ($59/month) make the lower price feel like a bargain, even if it objectively is not, because the anchor has been set at $199. Struck-through "original prices" work through the same mechanism. Time estimations in onboarding ("Takes ~5 minutes") anchor user expectations and produce satisfaction or frustration based entirely on deviation from that anchor, not from the absolute duration.
Designers who understand anchoring can guide users toward optimal decisions, fair comparisons, and accurate time expectations. Designers who ignore it inadvertently set unhelpful anchors — pricing pages that lead with the cheapest option anchor users to the low end of the value scale, making upsell nearly impossible regardless of how well the premium tier's features are described.

## How to implement
- On pricing pages, display the highest-priced tier first to set the anchor; mid-tier options will appear more affordable in contrast, dramatically increasing their selection rate
- Use struck-through "original price" display to establish an anchor before revealing the discounted price — "Was $120, Now $79" is structurally more persuasive than simply "$79"
- In onboarding time estimates, anchor conservatively ("Takes 3–5 minutes") so users are pleasantly surprised by an equal or shorter actual duration, rather than frustrated by overrun
- Pre-populate estimation fields, configuration defaults, and bid starting points with your recommended value — the pre-filled number becomes the anchor around which users adjust
- Avoid leading with extremely low prices if your conversion goal is higher-tier adoption; this anchor is exceedingly difficult to overcome later in the flow
- In bid, salary, or negotiation flows, allow users to set the first anchor to increase their sense of ownership and control over the outcome
- During A/B tests and usability studies, eliminate numeric anchors from research instruments to prevent artificially anchored self-report data from corrupting findings

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Engagement & Usage**: Clickthrough rate
- **Revenue**: Conversion rate, Average order value
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: A/B test pricing page layouts that vary anchor placement and prominence, measuring average order value and conversion rate. In usability testing, ask participants to think aloud when evaluating price tiers to surface how anchor points influence perceived value and choice.

## Sources
- [https://www.nngroup.com/](https://www.nngroup.com/)
- [https://www.nelson.edu/thoughthub/education/the-affects-of-anchoring-bias-on-human-behavior/](https://www.nelson.edu/thoughthub/education/the-affects-of-anchoring-bias-on-human-behavior/)
