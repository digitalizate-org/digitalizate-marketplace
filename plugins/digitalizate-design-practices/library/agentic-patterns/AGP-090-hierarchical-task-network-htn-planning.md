---
id: "AGP-090"
title: "Hierarchical Task Network (HTN) Planning"
category: "Agentic Patterns"
subcategory: "Planning & Execution"
score: 3
context: "Complex multi-step workflows."
avoid_when: "Simple linear task sequences; Unknown or rapidly changing domains; Real-time reactive behaviors; No clear task hierarchy; Purely data-driven approaches needed; Single-shot optimization problems"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-390.png"
notion: "https://app.notion.com/p/Hierarchical-Task-Network-HTN-Planning-5a0a9aed534482d89be281321ba1a4e9"
---

## Why
Automated planning approach that decomposes complex tasks into hierarchically structured networks of simpler tasks using domain knowledge. The pattern: hierarchical decomposition of complex tasks into manageable sub-tasks using domain knowledge. Enables efficient planning through abstraction, reusable expertise, and human-interpretable solutions.
**Key insight:** Tasks (compound→primitive) + Methods (how to decompose) + Conditions (when to apply) = Hierarchical Plans

## How to implement
1. **Define Domain** — Tasks (compound/primitive), methods, conditions
1. **Create Methods** — Decomposition rules: when & how to break tasks
1. **Build Network** — Hierarchical task structure with constraints
1. **Plan & Execute** — Decompose top-level goal → primitive actions
1. **Monitor & Adapt** — Replan if conditions change or methods fail
- Example flow: `analyze_market → [gather_data, process_info, generate_report] → primitive_actions`
- **Do:** Encode domain expertise in methods and conditions; Use clear task hierarchies with proper abstraction levels; Define preconditions and effects for each method; Implement backtracking when decomposition fails; Cache successful decomposition patterns; Design reusable method libraries for domains
- **Don't:** Create overly deep hierarchies (>5-6 levels); Ignore method ordering constraints and dependencies; Use HTN for simple linear task sequences; Hard-code solutions without conditional methods; Skip validation of method preconditions

## Metrics
Key metrics to track when applying this pattern:
  - Plan Success Rate (% plans that execute successfully)
  - Decomposition Depth (Average levels in task hierarchy)
  - Planning Time (Time to generate executable plan)
  - Method Reuse Rate (% methods reused across plans)
  - Backtrack Frequency (% plans requiring backtracking)
  - Domain Coverage (% domain tasks plannable)
  - Plan Optimality (Quality vs optimal solution)
  - Execution Efficiency (Primitive actions per goal achieved)
  **Proven use cases:**
  - Autonomous Research Agents: Literature review → data extraction → analysis → synthesis
  - Software Development: Requirements → design → implementation → testing → deployment
  - Manufacturing: Product planning → resource allocation → production → quality control
  - Game AI: Strategic goals → tactical objectives → unit actions → movement primitives
  - Robotics: Navigate → path planning → motion control → actuator commands
