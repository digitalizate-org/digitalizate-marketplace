---
id: "UX-539"
title: "Gestalt Combination: Figure-Ground + Continuation for Contextual Sidebars"
category: "Gestalt Principles"
subcategory: "Advanced Combination: Figure-Ground + Continuation"
score: 4
context: "Document editors, code editors, design tools, CRM detail panels, e-commerce quick-view panels"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
wireframe: "https://files.catbox.moe/y632du.jpg"
notion: "https://app.notion.com/p/Gestalt-Combination-Figure-Ground-Continuation-for-Contextual-Sidebars-ca6a9aed534483f3b0c781e62116f70c"
---

## Why
Context panels, detail sidebars, and inspector drawers combine Figure-Ground (the panel is visually elevated above the main canvas) with Continuation (the main canvas content continues visually behind the panel). The combination communicates 'this panel is about something in the content behind it' without an explicit label. Google Docs' comment sidebar exemplifies this: the right panel floats above the document (Figure-Ground), while the commented text in the main document aligns horizontally with the comment in the sidebar (Continuation). Breaking either principle — e.g., a sidebar that entirely occludes its content, or one that has no positional relationship to its subject — requires explicit contextual labeling to compensate.

## How to implement
- Anchor the sidebar's top edge at the same Y position as the content element it references in the main view
- Use a connecting line or highlight on the main canvas element when the sidebar is open
- Give the sidebar a different elevation treatment (shadow + slightly higher surface lightness) to establish it as figure
- Ensure 30-40% of the main canvas remains visible behind a side panel — full occlusion breaks the continuation relationship
- On mobile, transition from a sidebar to a full-screen bottom sheet since screen width cannot support the continuation pattern

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Run first-click tests to measure findability score for contextual sidebar content with and without combined Gestalt cues; use eye-tracking or usability session observation to confirm users correctly identify figure versus ground and follow continuation cues.

## Sources
- [UX Planet — Figure/Ground](https://uxplanet.org/improving-your-designs-with-gestalt-principles-figure-ground-26429a3eccad)
- [Lazarev Agency — Gestalt Principles](https://www.lazarev.agency/articles/gestalt-principles-of-design)
