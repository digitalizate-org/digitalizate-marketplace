---
id: "UX-239"
title: "Peak-End Rule — Design Success States and Error Recovery With Care"
category: "Interaction Patterns"
subcategory: "Emotional design and experience memory"
score: 4
context: "Apply to onboarding completion, data export success states, form submission confirmations, end-of-wizard confirmations, and error recovery moments in enterprise apps."
goals:
  - "Increase User Engagement & Retention"
  - "Design Effective Feedback & Error States"
  - "Build Trust & Reduce User Anxiety"
tags:
  - "animation"
  - "onboarding"
  - "cognitive-load"
  - "error-handling"
wireframe: "https://files.catbox.moe/nthpii.jpg"
notion: "https://app.notion.com/p/Peak-End-Rule-Design-Success-States-and-Error-Recovery-With-Care-79ca9aed534483119e7c01e2fd2f25cb"
---

## Why
People judge an experience based on how they felt at its peak (most intense moment) and at its end, not by averaging all moments. In enterprise apps, the most emotionally intense moments are errors (negative peaks) and task completions (positive peaks). A bulk import completion, a report publish, or a workflow approval represents a positive peak — design it to feel satisfying. Error recovery is the most common negative peak — making it smooth, clear, and un-blaming counteracts the lasting negative impression.

## How to implement
- Design "task complete" moments with care — brief animation, clear success message, meaningful next step (not just "Success!").
- For multi-step onboarding, end with a moment showing the value unlocked (the first populated dashboard) rather than a generic "setup complete" screen.
- Make error recovery smooth and un-blaming — preserve input, suggest fixes, don't require re-entry.
- Invest in bulletproof undo, autosave, and graceful degradation, since data loss is the most vividly remembered negative peak.
- End wizard flows with a clear summary of what was accomplished.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Satisfaction & Perception**: NPS, CSAT, Satisfaction rating
- **Engagement & Usage**: Session frequency, Abandonment rate
- **Adoption & Retention**: Returning visitors, Renewed subscriptions
**How to measure**: Collect NPS or CSAT at key journey endpoints (task completion, error recovery); compare scores between flows with well-designed success/error states versus control variants using A/B testing.

## Sources
- [Laws of UX — Peak-End Rule](https://lawsofux.com/peak-end-rule/)
