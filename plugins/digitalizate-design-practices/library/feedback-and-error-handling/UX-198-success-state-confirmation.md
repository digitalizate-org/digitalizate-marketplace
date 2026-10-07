---
id: "UX-198"
title: "Success State Confirmation"
category: "Feedback & Error Handling"
subcategory: "Feedback Delivery"
score: 5
context: "Use after all form submissions, save operations, exports, and any consequential user action."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/7b9k57.jpg"
notion: "https://app.notion.com/p/Success-State-Confirmation-623a9aed53448234bee3816957f4d05e"
---

## Why
After a user completes an action, provide a brief, clear success confirmation. Without feedback, users are uncertain whether their action was registered and may repeat it — causing duplicate records, duplicate submissions, or duplicate exports. The feedback should be proportional to the action's significance: a toast notification for small actions, an inline success message for form completions, and a dedicated success screen for high-stakes actions like onboarding completion or order placement. Tell users not just that something succeeded but what was affected.

## How to implement
- Small actions: toast notification with success icon, auto-dismiss after 4–6 seconds, max 2 lines of text.
- Form-level success: inline success message replacing or augmenting the form.
- Destructive action confirmations: show what was affected ("3 items deleted").
- If the user can take a useful next action, include it in the success state ("View report" or "Back to list").
- For high-stakes actions, the success state should remain visible until the user navigates away.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Action completion confidence, Duplicate submission rate reduction
- **Efficiency**: Support tickets for 'did it work?' questions
- **Satisfaction**: User trust, Post-action satisfaction
**How to measure**: Track duplicate submission rates before and after success confirmation; measure support tickets where users repeated actions due to uncertain state; run usability tests counting user uncertainty after completing key actions.

## Sources
- [AlterSquare — Microinteractions](https://altersquare.io/micro-interactions-that-actually-improve-user-experience-with-examples/)
