---
id: "UX-015"
title: "Hick's Law — Reduce Choices at Decision Points"
category: "Cognitive Psychology"
subcategory: "Decision time and choice architecture"
score: 5
context: "Apply to navigation menus, filter panels, action menus, toolbar configurations, wizard steps, onboarding flows — any place where users must choose from competing options."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
tags:
  - "navigation"
wireframe: "https://files.catbox.moe/wu8e4w.jpg"
notion: "https://app.notion.com/p/Hick-s-Law-Reduce-Choices-at-Decision-Points-adca9aed534482dab03081e19842ff85"
---

## Why
Decision time increases with the number and complexity of choices. In enterprise applications, this manifests most destructively in long menus, complex filter panels with dozens of simultaneous options, and wizard steps presenting all configuration at once. The solution is not removing features but reducing simultaneously visible choices through progressive disclosure, default selections, and hierarchical grouping. The paradox of choice effect amplifies this — excessive options can cause paralysis, not just slowness.

## How to implement
- Minimize choices at critical decision points — default the most common action and hide power options behind "Advanced" toggles or overflow menus.
- Limit primary navigation items to 5–7 entries.
- For templates or option galleries, curate a "Recommended" section featuring 3–5 options prominently before the full catalog.
- Use progressive disclosure: show 3–5 primary options and put the rest in "More..." or an overflow menu.
- For onboarding flows, expose only essential features to first-time users.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Conversion rate
- **Efficiency**: Decision time at choice points, Abandonment rate reduction
- **Satisfaction**: User confidence, Perceived simplicity
**How to measure**: Track time-to-first-click at primary decision points; measure abandonment at choice screens; A/B test reduced-option vs. full-option layouts to quantify conversion impact.

## Sources
- [Laws of UX — Hick's Law](https://lawsofux.com/hicks-law/)
