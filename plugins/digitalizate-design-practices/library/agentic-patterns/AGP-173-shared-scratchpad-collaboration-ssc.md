---
id: "AGP-173"
title: "Shared Scratchpad Collaboration (SSC)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 3
context: "Collaborative content creation workflows."
avoid_when: "Independent parallel processing needs; High-security compartmentalized tasks; Simple linear workflow requirements; Resource-constrained environments; Real-time performance critical systems; Single-agent sufficient scenarios"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-400.png"
notion: "https://app.notion.com/p/Shared-Scratchpad-Collaboration-SSC-a68a9aed53448284950381a415d06c78"
---

## Why
Multiple agents collaborate transparently on a common workspace with shared visibility of all work. The pattern: multiple agents collaborate transparently on a common workspace with shared visibility of all work. Eliminates information silos, enables natural collaboration flow, and provides transparent decision-making through real-time visibility.
**Key insight:** Shared state + real-time visibility + progressive building + transparent process = natural collaborative intelligence

## How to implement
1. **Initialize** — Create shared state/workspace accessible to all agents
1. **Define** — Establish collaboration protocols and update formats
1. **Coordinate** — Agents read, contribute, and build upon shared work
1. **Synchronize** — Real-time visibility of all agent contributions
1. **Converge** — Collaborative refinement toward final outcome
- Example flow: `shared_workspace.init() → agents.collaborate() → real_time_updates() → iterative_refinement()`
- **Do:** Design clear shared state schema with structured sections; Implement real-time visibility of all agent contributions; Use version control and conflict resolution mechanisms; Establish clear protocols for agent contribution formats; Enable progressive building and iterative refinement; Implement proper access control and edit permissions; Maintain clear audit trails of all contributions; Design for transparent decision-making processes
- **Don't:** Allow unstructured or conflicting update formats; Create information silos between agents; Skip conflict resolution for simultaneous edits; Ignore the computational overhead of shared state; Allow agents to overwrite each other without coordination; Forget to implement rollback mechanisms for errors

## Metrics
Key metrics to track when applying this pattern:
  - Collaboration Efficiency (% time agents building vs duplicating work)
  - Transparency Score (Visibility of decision-making process)
  - Convergence Rate (Time to reach collaborative consensus)
  - Cross-Agent Learning (% insights shared between agents)
  - State Synchronization (Real-time update propagation speed)
  - Conflict Resolution (% edit conflicts resolved automatically)
  - Progressive Quality (Output improvement over iterations)
  **Proven use cases:**
  - Collaborative Document Creation: Multiple writing agents (research, content, editing, review) working on shared document with real-time visibility
  - Software Architecture Design: Architecture, security, performance, and UX agents collaboratively designing system with shared blueprint
  - Strategic Planning: Market, financial, operational, and risk agents building comprehensive business strategy in shared workspace
  - Scientific Research: Literature, methodology, analysis, and peer review agents collaborating on research paper with transparent process
  - Product Development: User research, design, engineering, and QA agents iteratively building product requirements in shared specification
