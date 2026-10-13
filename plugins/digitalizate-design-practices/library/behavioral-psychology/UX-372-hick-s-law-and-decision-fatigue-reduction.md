---
id: "UX-372"
title: "Hick's Law and Decision Fatigue Reduction"
category: "Behavioral Psychology"
subcategory: "Decision Fatigue"
score: 3
context: "Critical for onboarding flows, settings screens, and any UI with a large feature set or product catalogue. Also applies to checkout flows, navigation architecture, and dashboard design for enterprise tools."
goals:
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "behavioral-psychology"
  - "cognitive-bias"
  - "decision-making"
  - "engagement"
  - "onboarding"
wireframe: "https://files.catbox.moe/m74xmp.jpg"
notion: "https://app.notion.com/p/Hick-s-Law-and-Decision-Fatigue-Reduction-d8da9aed534483b387148145b02bcc2a"
---

## Why
Hick's Law states that the time required to make a decision increases logarithmically with the number of options available. Decision fatigue — the progressive impairment of decision quality as the number of sequential choices increases — compounds this: users who have made many decisions earlier in a session make worse or more avoidant decisions later. In complex web applications, excessive navigation depth, over-featured dashboards, and multi-option CTAs are primary sources of decision fatigue. The corrective design principle is deliberate choice reduction: present only what is necessary for the current task, and use smart defaults, recommendations, and progressive disclosure to eliminate redundant decisions.

## How to implement
- Limit options presented at any single decision point to 3–5 choices maximum; exceeding 5 options triggers analysis paralysis
- Apply progressive disclosure: show core functionality prominently, reveal advanced features on demand through expandable sections or 'advanced' toggles
- Reduce navigation depth and flatten information architecture to minimize the decisions needed to reach any key destination
- Use recommendation engines and 'Best for you' labels to pre-make choices on behalf of users in catalogue-heavy contexts
- Sequence high-effort decisions (detailed preferences, payment information) after low-effort ones to preserve cognitive resources
- Monitor session analytics for high-abandonment points — decision fatigue often manifests as drop-offs at complex choice screens

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Conversion rate
- **Efficiency**: Decision time, Abandonment rate reduction
- **Revenue**: Checkout conversion, Onboarding activation rate
**How to measure**: Monitor session analytics for drop-offs at complex choice screens; A/B test choice-reduced vs. full-option flows; track completion rates at high-abandonment decision points before and after intervention.

## Sources
- [Heurilens – Decision Fatigue in Interfaces](https://heurilens.com/blog/decision-fatigue-in-interfaces)
- [Vrunik Design – Designing for Decision Fatigue](https://vrunik.com/designing-for-decision-fatigue-how-ux-can-reduce-cognitive-overload/)
- [Laws of UX – Hick's Law](https://lawsofux.com/)
- [mm-software – Decision Processes and Interface Design](https://www.mm-software.com/en/more-the-newsroom/detail/make-a-choice-part-2-how-human-decision-making-processes-guide-your-interface-design/)
