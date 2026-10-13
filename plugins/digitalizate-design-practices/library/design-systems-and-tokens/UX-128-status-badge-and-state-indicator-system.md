---
id: "UX-128"
title: "Status Badge and State Indicator System"
category: "Design Systems & Tokens"
subcategory: "Component Patterns"
score: 5
context: "All enterprise applications with entities that have workflow states, health indicators, or priority levels. Must be defined in the design system, not ad hoc per component."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "workflow"
  - "design-system"
wireframe: "https://files.catbox.moe/afpf8u.jpg"
notion: "https://app.notion.com/p/Status-Badge-and-State-Indicator-System-72da9aed5344821a8d738141c0e48476"
---

## Why
A consistent badge/chip system for all state indicators across the application — record status, priority levels, process states, health indicators — enables users to parse state across any list or table at a glance because the visual vocabulary is the same everywhere. When different parts of the application use different colors, icons, and label conventions for "Active" records, users must learn multiple systems. The cost of inconsistency compounds as the application grows.

## How to implement
- Badge anatomy: rounded rectangle with background color, short label (1–2 words), optional leading icon.
- Semantic color conventions: green = active/healthy/approved, amber = pending/warning, red = rejected/error/critical, gray = inactive/archived/draft, blue = in-progress/informational.
- Always pair color with a text label — never color alone.
- Define the complete state vocabulary (every possible state for every entity type) in the design system documentation.
- Enforce via code review and component library constraints.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate, Findability score
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Confidence rating, Ease-of-use score, CSAT
  **How to measure**: Run usability tests on workflows where status awareness is critical (e.g., order management, task tracking) and measure error rates in user status interpretation. Track support tickets related to status confusion before and after implementing a consistent badge system.

## Sources
- [Smashing Magazine — Real-Time Dashboard UX](https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/)
