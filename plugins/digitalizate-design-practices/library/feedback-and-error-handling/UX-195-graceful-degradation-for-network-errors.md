---
id: "UX-195"
title: "Graceful Degradation for Network Errors"
category: "Feedback & Error Handling"
subcategory: "Network Error Handling"
score: 5
context: "Use in all web and mobile applications that make network requests, especially enterprise apps used in variable connectivity environments."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "error-handling"
wireframe: "https://files.catbox.moe/t5al8k.jpg"
notion: "https://app.notion.com/p/Graceful-Degradation-for-Network-Errors-8fca9aed534482b1bb9c01e7b9152c8f"
---

## Why
Network and server errors should never leave users stranded on a blank screen, broken state, or lost data. Provide a clear error message explaining what happened, retain any unsaved user input, and offer a clear recovery path (retry, save draft, contact support). Where possible, implement offline-first patterns that queue operations for when connectivity is restored. Enterprise users who lose work due to unexpected network failures lose trust in the application rapidly and permanently.

## How to implement
- Implement a global error boundary component that intercepts all unhandled network errors.
- Add offline detection with a user-friendly persistent banner ("You're offline — changes will sync when you reconnect").
- Provide a retry button with exponential backoff on transient errors.
- Auto-save form state to localStorage as a safety net against data loss.
- Surface a "Reconnected — syncing your changes" confirmation when connectivity is restored.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Satisfaction & Perception**: CSAT, Ease-of-use score
- **Engagement & Usage**: Abandonment rate, Bounce rate
**How to measure**: Monitor task abandonment and retry rates during network-error events in analytics; compare CSAT scores collected after error encounters between interfaces with graceful degradation messages versus raw error states.

## Sources
- [Carbon Design System — Notification Pattern](https://carbondesignsystem.com/patterns/notification-pattern/)
