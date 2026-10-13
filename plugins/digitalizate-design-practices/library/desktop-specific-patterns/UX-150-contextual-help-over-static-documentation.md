---
id: "UX-150"
title: "Contextual Help Over Static Documentation"
category: "Desktop-Specific Patterns"
subcategory: "In-Product Guidance"
score: 4
context: "Use when designing for specialist users who need to learn domain-specific interactions, and when evaluating the onboarding experience for complex features."
goals:
  - "Design for Enterprise & B2B Scale"
wireframe: "https://files.catbox.moe/hiefw0.jpg"
notion: "https://app.notion.com/p/Contextual-Help-Over-Static-Documentation-0fda9aed534483af87e401ffba7cb50d"
---

## Why
Provide contextual help — status bars explaining what each control does as the cursor moves over it, inline documentation appearing on focus or hover, and progressive learning prompts during usage — rather than relying on users to consult external documentation. For complex enterprise tools, contextual help dramatically reduces support burden and learning time. Ableton Live's dedicated status bar, which changes to explain every UI element as the cursor moves over it, is the gold standard: users receive a constant tutorial without ever leaving their workflow.

## How to implement
- Implement a persistent status bar at the bottom of the application that updates based on cursor position, displaying a one-sentence description of the current control's function.
- Write contextual help strings for every control and toolbar button.
- Add "What's this?" right-click options for complex controls.
- Embed inline examples in tooltips (not just labels).
- For complex domain-specific workflows, consider a "Guided mode" toggle that surfaces additional context while users learn, which can be disabled once expertise is established.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track contextual help access rates and task completion rates post-help engagement via analytics; compare support ticket volume for complex features with contextual in-product help versus those with only external documentation links.
- Implement a persistent status bar at the bottom of the application that updates based on cursor position, displaying a one-sentence description of the current control's function.
- Write contextual help strings for every control and toolbar button.
- Add "What's this?" right-click options for complex controls.
- Embed inline examples in tooltips (not just labels).
- For complex domain-specific workflows, consider a "Guided mode" toggle that surfaces additional context while users learn, which can be disabled once expertise is established.

## Sources
- [YouTube: 8 Principles for Complex Desktop Apps](https://www.youtube.com/watch?v=Dvt0Vdo_Wak)
