---
id: "UX-186"
title: "Mobile-Aware Layouts for Field Workers"
category: "Enterprise & B2B Patterns"
subcategory: "Responsive Design"
score: 3
context: "Enterprise applications with user personas who access the system away from their desk — field sales, operations, healthcare, logistics."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "mobile"
  - "enterprise"
  - "forms"
  - "responsive"
wireframe: "https://files.catbox.moe/t3arh3.jpg"
notion: "https://app.notion.com/p/Mobile-Aware-Layouts-for-Field-Workers-f57a9aed534482d2954981ba9173baff"
---

## Why
While enterprise applications are primarily desktop-focused, field workers (sales reps on tablets, warehouse workers on mobile) increasingly need access to core workflows on smaller screens. Full mobile parity is often impractical for dense enterprise tools, but approval workflows, task queues, and record viewing must function reliably on touch devices. The design challenge is prioritizing the subset of workflows that mobile users actually need, not trying to replicate the full desktop experience.

## How to implement
- Prioritize for mobile: approval actions, notification reading, record lookup, status updates.
- At mobile breakpoints (<768px): collapse sidebar to bottom tab navigation (maximum 5 items), stack master-detail to full-screen navigation, enlarge all touch targets to 44×44px minimum, show only the most critical table columns.
- Provide a simplified "mobile mode" toggle for feature-complete views that are too dense for small screens.
- Test on actual devices, not just browser simulations.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run usability tests with field workers on mobile devices measuring task completion rate, error rate, and time-on-task; survey field users on ease of use and track mobile-specific support tickets as indicators of layout suitability for field contexts.

## Sources
- [UXpilot — Enterprise UX Best Practices](https://uxpilot.ai/blogs/enterprise-ux-design)
