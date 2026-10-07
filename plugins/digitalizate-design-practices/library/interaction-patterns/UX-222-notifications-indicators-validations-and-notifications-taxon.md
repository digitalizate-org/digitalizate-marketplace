---
id: "UX-222"
title: "Notifications — Indicators, Validations, and Notifications Taxonomy"
category: "Interaction Patterns"
subcategory: "Notification Patterns"
score: 5
context: "Use when designing any application with multiple types of system messages and events."
goals:
  - "Reduce Cognitive Load"
tags:
  - "forms"
wireframe: "https://files.catbox.moe/s90oi4.jpg"
notion: "https://app.notion.com/p/Notifications-Indicators-Validations-and-Notifications-Taxonomy-4e9a9aed534483fc8a208118edada70e"
---

## Why
Different notification types serve different purposes and have different persistence models. Toast: short, transient messages for non-critical system feedback (auto-dismiss after 4–8 seconds). Banner: persistent system-wide messages requiring acknowledgment. Badge: numeric indicator on a nav item showing unread count. Notification Center/Inbox: persistent, searchable history of all notifications. Mismatching severity and notification type — using modals for trivial events, or toasts for system outages — either desensitizes users or causes them to miss critical events.

## How to implement
- Define a priority matrix: P0 (system down, data loss) → full-screen overlay or persistent banner; P1 (error requiring immediate action) → inline error or blocking dialog; P2 (success or warning) → toast; P3 (background update) → badge increment.
- Implement a notification center (bell icon with badge count) for all P3 events.
- Never replace a functional notification pattern with a more intrusive one.
- Audit all existing notifications and reclassify each against the matrix.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Notification comprehension rate, Appropriate action rate per notification type
- **Efficiency**: User response time to critical vs. non-critical events
- **Satisfaction**: Notification fatigue reduction, System trust
**How to measure**: Audit notification type mismatches against the priority matrix; measure dismiss rate vs. action rate per notification type; track user opt-out rates from notification categories.

## Sources
- [Carbon Design System — Notification Pattern](https://carbondesignsystem.com/patterns/notification-pattern/)
- [Nielsen Norman Group — Indicators, Validations, and Notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
