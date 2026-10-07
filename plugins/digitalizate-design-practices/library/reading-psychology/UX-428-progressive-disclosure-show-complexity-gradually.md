---
id: "UX-428"
title: "Progressive Disclosure: Show Complexity Gradually"
category: "Reading Psychology"
subcategory: "Information Architecture"
score: 5
context: "Essential for any feature-rich web application, complex settings screens, multi-step forms, and developer tools. Particularly valuable in B2B SaaS where power users and novice users share the same interface."
goals:
  - "Improve Readability & Visual Clarity"
tags:
  - "cognitive-load"
  - "content-design"
  - "navigation"
  - "reading-psychology"
wireframe: "https://files.catbox.moe/1exk88.jpg"
notion: "https://app.notion.com/p/Progressive-Disclosure-Show-Complexity-Gradually-40aa9aed5344838bada40179adf613d3"
---

## Why
Progressive disclosure is a UX principle that defers advanced, rare, or complex features to secondary screens or states, showing users only what they need for their current task. NNGroup research shows that progressive disclosure improves learnability, reduces error rates, and improves task efficiency — users spend less cognitive effort scanning irrelevant options and build better mental models by starting with the essentials. The principle exploits the working memory constraint: users can only hold ~4 chunks of information in active working memory, so reducing the number of visible options directly reduces cognitive overload.

## How to implement
- Identify the 20% of features used by 80% of users (via analytics or task analysis) and promote those to primary visibility
- Use collapsible sections, 'Advanced options' toggles, or expandable accordions to hide rarely-used settings behind a clear disclosure control
- Limit progressive disclosure to 2 levels maximum: primary view and one secondary view; 3+ levels causes disorientation
- Label disclosure controls with strong information scent: 'Advanced settings (7 options)' is better than 'More'
- In forms, show conditional fields only when they become relevant (triggered by a prior answer), not all at once
- In onboarding, reveal features progressively as users demonstrate readiness — don't show a feature's full power until users have successfully used the basic version
- Validate the split with user research: if users frequently search for features hidden in 'Advanced', the split needs recalibration

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Learnability
- **Efficiency**: Time on task, Error rate reduction
- **Satisfaction**: Perceived simplicity, First-use satisfaction
**How to measure**: Track search/help usage for features hidden in 'Advanced' — high rates signal miscalibrated disclosure thresholds; measure time-to-complete primary tasks; run A/B tests comparing progressive vs. full-disclosure layouts.

## Sources
- [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/)
