---
id: "AGP-088"
title: "Hierarchical Coordination (HC)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 2
context: "Complex workflows requiring approval gates and oversight."
avoid_when: "Simple single-step tasks without coordination needs; Real-time systems where review latency breaks SLAs; Creative brainstorming requiring fluid collaboration; Small teams where hierarchy creates unnecessary overhead; Highly dynamic environments requiring rapid adaptation"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-397.png"
notion: "https://app.notion.com/p/Hierarchical-Coordination-HC-f7ea9aed534483049edb01ced03394ee"
---

## Why
Multi-level agent coordination with supervisory relationships, centralized orchestration, and authority delegation. The pattern: multi-level agent coordination with supervisory relationships, centralized orchestration, and authority delegation. Enables scalable task decomposition, policy enforcement, quality control, and clear accountability chains.
**Key insight:** Hierarchical structure + task delegation + escalation protocols = enterprise-grade coordination

## How to implement
1. **Define Hierarchy** — Establish supervisor-subordinate tiers with clear authority levels
1. **Task Decomposition** — Break complex goals into hierarchical subtasks (HTN-style)
1. **Delegation Protocol** — Implement task assignment with acceptance criteria and SLAs
1. **Escalation Rules** — Define when and how issues bubble up hierarchy
1. **Monitor & Coordinate** — Track execution, aggregate results, enforce policies
- Example flow: `ExecutiveAgent → ManagerAgents → TeamLeadAgents → WorkerAgents`
- **Do:** Define explicit roles, permissions, and authority boundaries per tier; Use structured task specifications with clear success criteria; Implement bounded re-decomposition with recursion depth limits; Summarize between levels to control context growth; Use smaller models for routine tasks, larger for strategic decisions; Instrument comprehensive traces and audit logs per tier
- **Don't:** Create single points of failure at supervisor level; Allow excessive escalation that inflates latency and cost; Use ambiguous authority that blocks worker task completion; Forward full transcripts across tiers instead of summaries; Skip policy enforcement checks at higher tiers

## Metrics
Key metrics to track when applying this pattern:
  - Task Success Rate (End-to-end completion vs flat baseline)
  - Tier Latency (P50/P95 processing time per hierarchical level)
  - Escalation Rate (Percentage of tasks requiring higher-tier review)
  - Policy Compliance (Violations caught and resolved at checkpoints)
  - Resource Utilization (Cost and compute efficiency across tiers)
  - Delegation Accuracy (Successful task assignments without rework)
  **Proven use cases:**
  - Enterprise Workflows: Multi-tier approval processes for compliance, finance, procurement with policy enforcement
  - Incident Response: Command hierarchy with incident commander, team leads, and specialists for systematic resolution
  - Research Projects: Principal investigator, project managers, research teams with peer review and publication oversight
  - Manufacturing Operations: Plant managers, line supervisors, operators with quality control and safety protocols
  - Software Development: Architects, tech leads, developers with code review, testing, and deployment approval gates
