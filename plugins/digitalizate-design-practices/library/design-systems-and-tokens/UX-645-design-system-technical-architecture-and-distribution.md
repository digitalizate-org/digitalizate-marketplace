---
id: "UX-645"
title: "Design - System Technical Architecture & Distribution"
category: "Design Systems & Tokens"
subcategory: "Build, buy, curate, and architecture review"
score: 4
context: "Use when deciding whether to buy, build, or curate a component implementation and when selecting the technical foundation for distribution."
goals:
  - "Design a Consistent System at Scale"
  - "Design for Enterprise & B2B Scale"
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "design-system"
  - "enterprise"
  - "workflow"
notion: "https://app.notion.com/p/Design-System-Technical-Architecture-Distribution-9a8a9aed534482f9b49a81222c735271"
---

## The practice
Choose the system’s technology according to the organization’s actual products, stacks, delivery constraints, and need for acceleration. Do not let a framework decision precede the interface and interaction decisions the system must uphold.

## Compare three strategies honestly
- **Buy everything:** fast to start and useful for a narrowly scoped product, but it imports a vendor’s UX decisions, roadmap, extension limits, and documentation assumptions.
- **Build everything:** maximum control and potentially strong coherence, but slow, capacity-intensive, and likely to recreate already-solved problems.
- **Curate:** own the product-specific foundations, visual language, interaction rules, and essential components; selectively adopt reliable external tools where they fit. This is often the strongest balance for a multi-product organization.

## Technology agnosticism is a delivery trade-off
HTML/CSS guidance can serve heterogeneous platforms, but it may not provide the ready-to-use components that change day-to-day engineering behavior. A broad organization may need both portable design guidance and framework-specific implementations. State this decision explicitly rather than treating “technology-agnostic” as automatically superior.

## Use a formal architecture review before scaling the backlog
1. Define the evaluation criteria: adoption/support, component suitability, performance, developer productivity, compatibility, and tooling.
1. Build a small comparable proof in each serious contender.
1. Benchmark and test integration realities, rather than trusting feature lists.
1. Evaluate contributor experience: installation, authoring, testing, and documentation.
1. Record a recommendation and decision rationale.
Resolve this early. Once dozens of components exist, a change in implementation foundation becomes much more expensive and destabilizes confidence in the system.

## Design implication
The system architecture should preserve a single source of truth: the examples used for component development and testing should supply the documentation demonstrations too. Production code and the reference experience should not be independent artifacts.
> Source context: distilled from the user-provided 60:46 seminar *Initiating a Design System*.
