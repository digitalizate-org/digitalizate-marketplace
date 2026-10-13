---
id: "UX-566"
title: "Framing Effect (Prospect Theory Framing / Decision Framing)"
category: "Human Biases in Interfaces"
score: 5
context: "Use framing analysis on all persuasive copy, error messages, upgrade prompts, onboarding flows, and consent dialogs. Choose gain frames for low-stakes invitations; loss frames for high-urgency conversion points. Always validate framing choices with A/B testing as effects vary by user segment."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
wireframe: "https://files.catbox.moe/kf4n0h.jpg"
notion: "https://app.notion.com/p/Framing-Effect-Prospect-Theory-Framing-Decision-Framing-31aa9aed5344839ea4798130231891ec"
---

## Why
The Framing Effect, foundational to Kahneman and Tversky's Prospect Theory (1979), demonstrates that people respond differently to the same objective information depending on how it is presented. The same medical treatment described as having a "90% survival rate" versus a "10% mortality rate" produces meaningfully different consent decisions — not because the information differs, but because the reference point differs. Choices framed around gains elicit risk-averse behavior; choices framed around losses elicit risk-seeking behavior. The effect arises because the human value function is reference-dependent: utility is assessed relative to a reference point, the gain function is concave (diminishing returns), and the loss function is steeper and convex — meaning losses are weighted approximately twice as heavily as equivalent gains.
For interface designers, this translates directly into copy strategy. "Save $30" and "Costs $70 instead of $100" describe identical transactions but activate different cognitive evaluations. "Your data is at risk" (loss frame) outperforms "Protect your data" (gain frame) for security software conversion because the loss frame activates the steeper loss-aversion function. "Start your free trial — cancel anytime" (gain frame) outperforms loss-framed alternatives for trial signups because users evaluating a low-stakes, reversible action respond better to a gain frame that minimizes psychological stakes. The optimal frame is not universal — it depends on the decision type, the user segment, and the stakes involved.
Nielsen Norman Group research demonstrates that framing affects UX practitioners too: presenting identical usability data as a "35% failure rate" versus a "65% success rate" changes redesign recommendations by 31%. This means confirmation bias and framing effects can operate simultaneously within research and analysis processes, distorting internal decision-making as well as user-facing persuasion. Practitioners who understand framing must monitor both their outward-facing copy and their inward-facing analytical framing.

## How to implement
- Default to gain framing for trial offers, feature discovery, low-stakes invitations, and positive onboarding steps — gain frames reduce psychological risk and invite exploration
- Use loss framing strategically at high-intent conversion moments: plan expiration warnings, trial end reminders, and inactivity re-engagement messages, where the cost of inaction is genuine and relevant
- Test "You'll miss X" versus "Get X today" for your specific user context — gain/loss frame preference varies significantly by segment and is worth empirically validating rather than assuming
- Avoid mixing frames in adjacent copy within the same UI surface — inconsistent framing creates cognitive friction and reduces the persuasive impact of both frames
- For error messages, default to recovery-oriented gain framing: "Here's how to fix this" outperforms "You failed to complete this" because it presents a path toward a positive state rather than emphasizing the loss
- For feature comparison tables, consider running both frames for different elements: "Plan includes X" establishes what users gain; "Without this plan, you lose access to Y" activates loss aversion for the most valued features
- Present usability and performance data internally using consistent framing: frame as success rates when building confidence, as failure rates when justifying investment in redesign — and be transparent about which frame you're using

## Metrics
Understanding and designing for this bias can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Engagement & Usage**: Clickthrough rate, Abandonment rate
- **Revenue**: Conversion rate
- **Satisfaction & Perception**: Confidence rating, CSAT
**How to measure**: A/B test different message framings for the same content (e.g., "save $20" versus "avoid losing $20") and measure clickthrough rate, conversion rate, and decision confidence. Use post-task surveys to compare satisfaction and confidence between framing variants.

## Sources
- [https://www.nngroup.com/articles/decision-framing-cognitive-bias-ux-pros/](https://www.nngroup.com/articles/decision-framing-cognitive-bias-ux-pros/)
- [https://uxdesign.cc/the-framing-effect-in-ux-d77df34369ec](https://uxdesign.cc/the-framing-effect-in-ux-d77df34369ec)
