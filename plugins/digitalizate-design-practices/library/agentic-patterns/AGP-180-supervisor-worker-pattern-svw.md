---
id: "AGP-180"
title: "Supervisor-Worker Pattern (SVW)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 2
context: "Complex, multi-domain research queries."
avoid_when: "Simple, single-domain questions; Cost-sensitive applications (15x token usage); Real-time/low-latency requirements; Well-defined procedural tasks; Limited API quota scenarios; Sequential dependency workflows"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-401.png"
notion: "https://app.notion.com/p/Supervisor-Worker-Pattern-SVW-444a9aed534482bbb40f017dcb1b386c"
---

## Why
Orchestrator-worker architecture where a lead agent coordinates specialized subagents for parallel task execution. The pattern: orchestrator-worker architecture where a lead agent coordinates specialized subagents for parallel task execution. Achieves 90% performance improvement through parallel exploration and specialized expertise while maintaining centralized quality control.
**Key insight:** Dynamic task decomposition + separate worker contexts + real-time coordination = superior research quality at 15x token cost

## How to implement
1. **Decompose** — Break query into 3-5 parallel subtasks
1. **Spawn** — Create specialized worker agents dynamically
1. **Coordinate** — Monitor progress across separate contexts
1. **Adapt** — Spawn additional workers if needed
1. **Synthesize** — Aggregate all findings into final result
- Example flow: `query → decompose(4_tasks) → spawn_workers() → monitor_parallel() → synthesize_results()`
- **Do:** Use separate context windows for each worker agent; Implement dynamic worker spawning based on complexity; Monitor worker progress and adjust strategies in real-time; Set clear objectives and success criteria for each worker; Use interleaved thinking for worker self-evaluation; Implement timeout and failure handling for workers; Cache expensive operations and intermediate results; Use structured output formats for worker communication
- **Don't:** Create too many workers (diminishing returns after 5-7); Share context between workers (reduces parallel benefits); Ignore token consumption explosion (15x normal usage); Skip quality control in final synthesis step; Use for simple queries that don't need decomposition; Forget to implement worker error propagation handling

## Metrics
Key metrics to track when applying this pattern:
  - Research Quality (90% improvement over single-agent)
  - Token Consumption (15x baseline usage (cost planning))
  - Parallel Efficiency (% workers completing successfully)
  - Task Decomposition (Optimal subtask count (3-5 workers))
  - Synthesis Quality (Coherence of final aggregated result)
  - Worker Utilization (% workers contributing unique value)
  - Error Recovery (% failed workers handled gracefully)
  **Proven use cases:**
  - Research Analysis: "Impact of AI on healthcare" → Medical, Regulatory, Economic, Ethics workers → Comprehensive report
  - Market Intelligence: "Competitor analysis" → Product, Financial, Strategy, Technology workers → Strategic insights
  - Scientific Literature: "Climate change solutions" → Physics, Policy, Engineering, Economics workers → Multi-disciplinary review
  - Investment Due Diligence: "Company evaluation" → Financial, Market, Risk, Technical workers → Investment recommendation
  - Policy Research: "Education reform" → Academic, Economic, Social, Implementation workers → Policy framework
