---
id: "UX-363"
title: "Price Anchoring and Decoy Pricing Architecture"
category: "Behavioral Psychology"
subcategory: "Anchoring Bias"
score: 3
context: "Essential for pricing page design, subscription tier architecture, and any scenario where multiple options with price differences are presented. Also applies to feature comparison tables where presenting high-value features first anchors perceived product value."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
tags:
  - "behavioral-psychology"
  - "cognitive-bias"
  - "conversion"
  - "decision-making"
  - "persuasion"
wireframe: "https://files.catbox.moe/dl7ju7.jpg"
notion: "https://app.notion.com/p/Price-Anchoring-and-Decoy-Pricing-Architecture-826a9aed5344826f8c4e8176a8b838e5"
---

## Why
Anchoring is the cognitive bias where people rely disproportionately on the first piece of information they see when making subsequent judgments. In pricing design, the first price a user encounters establishes a mental reference point against which all other prices are evaluated. Research shows that the initial anchor price affects willingness to pay by 30–50%. The classic application is the 'Rule of Three' pricing structure: a high-priced anchor tier makes the middle tier feel like exceptional value, while the low tier provides an accessible entry point. The decoy effect further exploits this: adding an intentionally less attractive option at a similar price to the target tier makes the target look superior.

## How to implement
- Lead pricing pages with the highest tier first (left-to-right: Premium → Pro → Basic) to anchor high
- Use a 'Most Popular' visual highlight on the middle tier to combine anchoring with social proof
- Include an 'Enterprise' or custom tier that most users won't buy — its primary job is making other tiers feel affordable
- Use strikethrough 'was/now' pricing for promotions: the crossed-out price anchors perceived value
- For annual vs. monthly billing, show the monthly equivalent of annual pricing to anchor to the lower number
- A/B test anchor placement: high-to-low price ordering consistently outperforms low-to-high for average contract value

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Revenue**: Conversion rate, Average order value, Revenue per session
- **Engagement & Usage**: Clickthrough rate, Pages per session
- **Satisfaction & Perception**: Confidence rating, Satisfaction rating
**How to measure**: A/B test pricing page layouts with and without anchor or decoy options; measure tier selection distribution, average order value, and conversion rate to determine whether the pricing architecture shifts users toward target plans.

## Sources
- [Interaction Design Foundation – Anchoring](https://www.interaction-design.org/literature/topics/anchoring)
- [PayPro Global – Price Anchoring for SaaS](https://payproglobal.com/how-to/use-price-anchoring/)
- [SBI Growth – Price Anchoring Strategy](https://sbigrowth.com/insights/price-anchoring-to-optimize-your-pricing-strategy)
- [Krotov Studio – Pricing Pages That Convert](https://krotovstudio.com/blog/web-design/pricing-pages-that-convert-layouts-anchors-and-risk-reducers/)
