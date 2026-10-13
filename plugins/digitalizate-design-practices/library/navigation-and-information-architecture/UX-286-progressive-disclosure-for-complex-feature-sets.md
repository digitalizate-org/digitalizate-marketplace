---
id: "UX-286"
title: "Progressive Disclosure for Complex Feature Sets"
category: "Navigation & Information Architecture"
subcategory: "Information Hierarchy"
score: 5
context: "Complex forms, configuration panels, settings pages, filter interfaces, and any feature with both simple and advanced usage modes."
goals:
  - "Reduce Learning Curve for Complex Tools"
  - "Structure Navigation for Deep Products"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/910zf5.jpg"
notion: "https://app.notion.com/p/Progressive-Disclosure-for-Complex-Feature-Sets-350a9aed53448375aea001517fd249df"
---

## Why
Progressive disclosure reveals advanced features and options only when requested, keeping the primary interface clean for new and casual users while supporting power users who need depth. The 80/20 principle applies here: show the 20% of features used 80% of the time by default, and make the remaining 80% accessible on demand. Features that are hidden by default but needed daily are a progressive disclosure failure — usage analytics should drive what is "basic" vs. "advanced."

## How to implement
- Use accordion, "Advanced options" toggle, tabs, or drill-down links for secondary content.
- Label disclosure triggers clearly ("Show advanced settings," "More options").
- Never hide features that usage data shows users access daily — revisit what's "advanced" based on analytics quarterly.
- Provide keyboard shortcuts to open advanced panels directly for power users who use them constantly.
- Maintain state — if a user opened the advanced section, keep it open on return.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Feature discoverability, Task success rate
- **Efficiency**: Time on task for primary workflows, Advanced feature adoption
- **Satisfaction**: Perceived simplicity for new users, Depth satisfaction for power users
**How to measure**: Track advanced panel expansion rates quarterly and recalibrate what's 'advanced'; measure task success rates for primary vs. advanced tasks; monitor time-to-find for features placed behind disclosure.

## Sources
- [Interaction Design Foundation — Progressive Disclosure](https://www.interaction-design.org/literature/topics/progressive-disclosure)
- [UXPin — What is Progressive Disclosure?](https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/)
