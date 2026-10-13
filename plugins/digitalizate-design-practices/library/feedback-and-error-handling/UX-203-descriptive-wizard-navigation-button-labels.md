---
id: "UX-203"
title: "Descriptive Wizard Navigation Button Labels"
category: "Feedback & Error Handling"
subcategory: "Dialog Design"
score: 4
context: "Use in all modal dialogs with primary and secondary actions, especially for destructive or consequential operations."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "workflow"
  - "forms"
  - "navigation"
wireframe: "https://files.catbox.moe/z7srb8.jpg"
notion: "https://app.notion.com/p/Descriptive-Wizard-Navigation-Button-Labels-18ca9aed53448318919281e63ac7971b"
---

## Why
Modal action buttons should describe the specific action that will occur rather than using generic labels like "OK," "Yes," or "Confirm." Descriptive labels reduce cognitive load and eliminate ambiguity, particularly for destructive actions where the cost of a mistake is high. "Delete Project" is unambiguous; "OK" requires the user to hold the full context of the dialog in mind to understand what they're confirming. This principle also applies to cancel buttons — "Cancel" is standard, but "Keep Editing" can be more informative in context.

## How to implement
- Primary action: verb + noun describing what happens ("Save Changes," "Delete Account," "Export Report," "Archive Order").
- Secondary action: "Cancel" or "Go Back." For destructive actions, use a danger/red color on the primary button in addition to the descriptive label.
- Avoid "Yes" / "No" button pairs — they force users to read the dialog body to understand what each button does, which creates errors when dialogs are dismissed quickly.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: A/B test descriptive labels (e.g., 'Save and continue to Billing') versus generic labels ('Next') in multi-step wizards, measuring completion rate, back-navigation rate, and post-task confidence rating.

## Sources
- [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux)
- [Nielsen Norman Group — Wizards: Definition and Design Recommendations](https://www.nngroup.com/articles/wizards/)
