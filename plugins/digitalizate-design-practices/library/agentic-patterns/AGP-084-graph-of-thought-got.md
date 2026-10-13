---
id: "AGP-084"
title: "Graph-of-Thought (GoT)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Complex problems with interdependent sub-goals."
avoid_when: "Simple linear reasoning tasks; Strict latency/cost constraints; Domains without reliable evaluators; When Tree-of-Thought suffices; Real-time applications"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-363.png"
notion: "https://app.notion.com/p/Graph-of-Thought-GoT-2e9a9aed534482b38acc8100301be1c2"
---

## Why
Non-linear reasoning with thoughts as nodes and dependencies as edges. The pattern: non-linear reasoning network with nodes (thoughts) and edges (dependencies) enabling cross-path synthesis. Supports complex interdependent problems through backtracking, merging, and conflict resolution.
**Key insight:** Thoughts as graph nodes → Explicit dependencies → Cross-path merging → Coherent synthesis

## How to implement
1. **Graph Init** — Create nodes (thoughts) & edges (dependencies)
1. **Expand** — Generate successor thoughts from frontier
1. **Evaluate** — Score nodes/subgraphs with evaluators
1. **Merge** — Connect compatible paths, resolve conflicts
1. **Distill** — Extract coherent solution from best subgraph
- Example flow: `Problem → [Node A ← Node B → Node C] → Merge paths → Synthesize solution`
- **Do:** Use explicit dependency tracking between thoughts; Implement robust cycle detection & deduplication; Design evaluators for scoring subgraphs not just nodes; Cache intermediate results & maintain visited states; Enable cross-path synthesis & conflict resolution
- **Don't:** Allow unlimited graph expansion (combinatorial explosion); Merge incompatible branches without conflict checks; Skip thought granularity planning (too coarse/fine); Use weak evaluators that mis-rank solution paths; Ignore token costs from graph exploration overhead

## Metrics
Key metrics to track when applying this pattern:
  - Solution Quality (Accuracy vs linear/tree baselines)
  - Graph Efficiency (Useful nodes / total explored nodes)
  - Synthesis Quality (Coherence of merged solution paths)
  - Dependency Accuracy (Correctness of thought relationships)
  - Exploration Cost (Tokens per node + evaluation overhead)
  - Convergence Rate (Steps to reach stable solution)
  **Proven use cases:**
  - Research Analysis: Node[Theory A] ← Node[Evidence 1] → Node[Synthesis] ← Node[Theory B]
  - Strategic Planning: Connect market analysis → product strategy → resource allocation → risk assessment
  - System Design: Link requirements → architecture → implementation → validation with feedback loops
  - Policy Analysis: Map stakeholder interests → regulatory constraints → implementation options → outcomes
  - Creative Problem-Solving: Merge diverse solution approaches through cross-pollination nodes
