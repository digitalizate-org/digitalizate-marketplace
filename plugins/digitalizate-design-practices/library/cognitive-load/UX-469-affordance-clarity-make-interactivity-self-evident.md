---
id: "UX-469"
title: "Affordance Clarity: Make Interactivity Self-Evident"
category: "Cognitive Load"
subcategory: "Extraneous Load Management"
score: 5
context: "Apply as a base layer across all interactive elements before testing any higher-level cognitive load issues; affordance confusion is a prerequisite problem that masks other usability issues."
goals:
  - "Reduce Cognitive Load"
tags:
  - "accessibility"
  - "cognitive-load"
wireframe: "https://files.catbox.moe/zgy2jf.jpg"
notion: "https://app.notion.com/p/Affordance-Clarity-Make-Interactivity-Self-Evident-8eca9aed5344828d8897816ca1013cfb"
---

## Why
Don Norman's concept of affordances and signifiers describes how objects communicate their possible interactions through their appearance. When interactive elements do not look interactive — or non-interactive elements look interactive — users expend cognitive load testing and verifying affordances. Every 'Is this clickable?' moment is a small but cumulative cognitive tax. Consistent, unmistakable affordance design eliminates this uncertainty at scale.

## How to implement
- Design buttons to look like buttons through shape, shadow, fill, and border cues — avoid purely text-based CTAs that blend with body text.
- Apply consistent hover and focus states to all interactive elements; if an element does not change on hover, users will not try it again.
- Distinguish links from non-link text through color, underline, or both — do not rely solely on context.
- For drag-and-drop interactions, show a drag handle icon and provide a cursor change on hover to signal draggability.
- Avoid 'ghost buttons' (outlined-only buttons) as primary CTAs in low-contrast contexts — they reduce affordance clarity significantly.
- Ensure disabled states are visually distinct but not invisible: users should know an action is unavailable, and ideally why, rather than guessing why nothing happens when they click.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Use unmoderated usability tests to track hesitation events and mis-clicks on non-obvious interactive elements; A/B test clear versus ambiguous affordances and measure error rate and time-on-task improvements.

## Sources
- [Affordances — Interaction Design Foundation](https://www.interaction-design.org/literature/topics/affordances)
- [The Design of Everyday Things — Figr](https://figr.design/blog/the-design-of-everyday-things)
- [Don Norman's Seven Fundamental Design Principles — UX Collective](https://uxdesign.cc/ux-psychology-principles-seven-fundamental-design-principles-39c420a05f84)
