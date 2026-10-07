---
id: "AGP-193"
title: "Working Memory Patterns (WMP)"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 3
context: "Complex multi-step reasoning requiring active information maintenance."
avoid_when: "Simple lookup operations without manipulation; Batch processing without real-time interaction; Unlimited computational resource scenarios; Stateless operations without temporal persistence; Single-step tasks without cognitive complexity"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-412.png"
notion: "https://app.notion.com/p/Working-Memory-Patterns-WMP-882a9aed53448322a9f481d7716cbd64"
---

## Why
Short-term context management for active cognitive processing. The pattern: capacity-limited active memory for cognitive processing with attention control and interference suppression. Enables complex reasoning, multi-step tasks, real-time cognitive processing within bounded resource constraints.
**Key insight:** Central Executive + Limited Capacity (4±1 chunks) + Attention Control + Temporal Maintenance → Human-like cognitive processing

## How to implement
1. **Set Capacity** — Define working memory limits (4±1 chunks for complex tasks)
1. **Control Attention** — Implement central executive for selective information filtering
1. **Manage Content** — Load, maintain, update, clear information dynamically
1. **Suppress Interference** — Block irrelevant information and manage conflicts
1. **Coordinate Agents** — Synchronize working memory across multi-agent system
- Example flow: `capacity_limits → attention_control → content_management → interference_suppression → agent_coordination`
- **Do:** Use 4±1 item capacity for complex tasks (Cowan, 2001) vs 7±2 for simple items; Implement central executive for attention control and task switching; Use chunking strategies to group related information effectively; Apply rehearsal mechanisms to prevent 15-30 second decay; Monitor cognitive load and implement offloading when approaching limits
- **Don't:** Ignore individual differences in working memory capacity across agents; Let irrelevant information consume working memory without filtering; Assume unlimited capacity - working memory constraints are crucial; Forget to implement interference suppression for competing information; Overlook the temporal dynamics - information decays without maintenance

## Metrics
Key metrics to track when applying this pattern:
  - Capacity Utilization (Effective chunks maintained vs theoretical limit)
  - Information Persistence (% information retained during task processing)
  - Interference Resistance (Success rate suppressing irrelevant information)
  - Chunking Efficiency (Information compression through organization)
  - Attention Control Quality (Precision of selective filtering mechanisms)
  - Multi-Agent Synchronization (Consistency of shared working memory states)
  **Proven use cases:**
  - Multi-Step Problem Solving: Mathematical reasoning, code debugging, scientific analysis (maintain intermediate results across reasoning steps)
  - Interactive Dialogue Systems: Conversation context management, user intent tracking (dynamic information updates within cognitive limits)
  - Multi-Agent Coordination: Shared task state, distributed problem solving (synchronized working memory across agent network)
  - Planning & Decision Making: Goal management, constraint satisfaction, resource allocation (juggle multiple factors within capacity limits)
  - Learning & Adaptation: Knowledge integration, skill acquisition, concept formation (active manipulation of new information with existing knowledge)
