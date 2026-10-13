---
id: "AGP-152"
title: "ReAct"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Tasks requiring external data/tools."
avoid_when: "Simple knowledge-based questions; Tasks solvable with pure reasoning; High-latency sensitive applications; When tools are unreliable/unavailable; Static content generation"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-366.png"
notion: "https://app.notion.com/p/ReAct-015a9aed5344831ba6888170f43e7156"
---

## Why
Combines reasoning with acting through external tool use. The pattern: interleaved Reasoning and Acting through iterative Thought → Action → Observation cycles. Enables dynamic problem-solving with real-time information and tool integration.
**Key insight:** Think before acting → Execute tools → Observe results → Reason about next step

## How to implement
1. **Think** — Analyze problem & plan approach
1. **Act** — Execute tool/function call
1. **Observe** — Process action results
1. **Reason** — Evaluate & plan next step
1. **Loop** — Repeat until goal achieved
- Example flow: `Thought → search("weather NYC") → Observation: "72°F sunny" → Thought → Done`
- **Do:** Clearly separate Thought and Action phases; Use structured action formats (function calls); Process all observations before next reasoning; Implement proper tool error handling; Set maximum iteration limits to prevent loops
- **Don't:** Skip observation phase after actions; Use ambiguous or unstructured action formats; Allow infinite reasoning loops without convergence; Ignore tool failures or partial results; Mix reasoning and action in single step

## Metrics
Key metrics to track when applying this pattern:
  - Task Success Rate (Goals achieved vs attempted)
  - Tool Utilization (Effective vs unnecessary tool calls)
  - Reasoning Efficiency (Steps to solution convergence)
  - Error Recovery (Success after tool failures)
  - Information Quality (Relevance of gathered data)
  - Iteration Count (Thought-Action cycles per task)
  **Proven use cases:**
  - Web Research: Thought → search("AI trends 2024") → Observe results → search("specific trend") → Synthesize
  - Data Analysis: Thought → query_database() → Observe data → calculate_stats() → Interpret results
  - Code Debugging: Thought → run_tests() → Observe failures → examine_code() → Fix & retest
  - Travel Planning: Thought → check_flights() → Observe options → check_hotels() → Book best combo
  - Customer Support: Thought → lookup_account() → Observe history → check_policy() → Provide solution
