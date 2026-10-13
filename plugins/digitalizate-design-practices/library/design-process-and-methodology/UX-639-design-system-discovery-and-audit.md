---
id: "UX-639"
title: "Design - System Discovery & Audit"
category: "Design Process & Methodology"
subcategory: "Discovery & audit"
score: 5
context: "Use before creating or materially evolving a design system."
goals:
  - "Design a Consistent System at Scale"
  - "Reduce Cognitive Load"
tags:
  - "design-system"
  - "workflow"
notion: "https://app.notion.com/p/Design-System-Discovery-Audit-f36a9aed534483599837011d18dd93fe"
---

## Core practice
Begin with a design-system discovery and audit that exposes the **real inconsistency cost** across the product, brand, and implementation. The goal is not to catalogue every screen for its own sake. It is to identify what repeats, where it diverges, why teams make local workarounds, and which improvements will create the most cross-product value.
A useful audit combines four lenses: visual consistency, interaction and user-flow quality, information architecture, and implementation/reuse. Pair the artifact review with interviews; screenshots reveal what exists, but teams explain why it exists and where the process breaks.

## Recommended model
1. **Set the audit frame.** Define the products, platforms, user journeys, and teams in scope. Start with revenue-critical, high-volume, or high-risk flows rather than every page.
1. **Capture evidence.** Record screenshots and short flow videos. Include normal, loading, empty, error, and success states—not only the polished happy path.
1. **Inventory patterns.** Group repeated UI by purpose: navigation, selection, data entry, feedback, content display, and workflow. Record variants, tokens, accessibility behaviour, code locations, and ownership.
1. **Find friction.** Interview design, engineering, product, QA, and support about rework, unclear handoffs, detached components, undocumented decisions, and recurring bugs.
1. **Prioritize.** Score each finding by frequency, user/business impact, severity, and cross-product reuse. Convert the result into a sequenced foundation, component, documentation, and adoption backlog.

## Worked example
**Problem:** a product suite has three “primary” buttons. One uses 12px radius, one uses 6px, and one has no visible focus state. Two products call the same destructive action “Delete”; another says “Remove.”
**Audit record:**
- **Pattern:** Primary button / destructive action
- **Evidence:** 11 screens across 3 products; 5 different implementations
- **User risk:** focus state absent in 2 implementations; destructive-action wording varies
- **Root cause:** no semantic colour token, no shared button component, and no ownership for accessibility QA
- **Decision:** create a shared button family, semantic action-danger tokens, content guidance for destructive verbs, and keyboard/focus acceptance tests
- **Priority:** high—frequent, accessible, and reusable across products
This turns “make buttons consistent” into an actionable system slice with a measurable outcome.

## Deliverables
- Annotated audit board with evidence links
- Pattern/component inventory with duplicate and missing-state flags
- User-flow map showing divergence and dead ends
- Interview summary grouped by design, engineering, and adoption friction
- Prioritized opportunity backlog with named owners and success signals

## Quality checks
- Audit full flows and states; do not inspect only static, ideal screens.
- Include existing code and design-library evidence so that “duplicates” are not judged visually alone.
- Separate a reusable component from a product-specific composition.
- Record the reason for each inconsistency before standardizing it; some variations are intentional domain rules.
- Validate top priorities with the teams who will adopt them before committing to the roadmap.

## Sources
- [Build a Design System](https://thedesignsystem.guide/start-here)
- [Design Audit](https://thedesignsystem.guide/design-audit)
- [Design System Research Interview Questions](https://thedesignsystem.guide/design-system-research-interview-questions)
