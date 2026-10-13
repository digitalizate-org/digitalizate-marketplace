---
id: "AGP-105"
title: "LLM-based Routing (LBR)"
category: "Agentic Patterns"
subcategory: "Routing"
score: 4
context: "Complex intent classification needed."
avoid_when: "Simple keyword-based routing suffices; Ultra-low latency requirements (<100ms); Deterministic routing is mandatory; Cost constraints are tight"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-375.png"
notion: "https://app.notion.com/p/LLM-based-Routing-LBR-f36a9aed534483c1a61981a0885d2b71"
---

## Why
An intelligent query distribution system that uses a specialized LLM router to analyze incoming requests and dynamically route them to the most appropriate model, API endpoint, or processing pipeline based on query characteristics, ensuring optimal resource utilization and response quality through intent classification and capability matching. The pattern: use LLM to analyze input and determine routing path dynamically. Handles complex, nuanced routing decisions that simple rules can't capture.
**Key insight:** Prompt engineering + structured outputs = reliable intent classification

## How to implement
1. **Analyze** — Prompt LLM to classify intent/category
1. **Extract** — Parse structured output (JSON/enum)
1. **Map** — Route decision → handler/agent
1. **Execute** — Invoke selected workflow
1. **Monitor** — Track routing accuracy & latency
- Example flow: `analyze_query → "category: booking" → booking_agent.invoke(query)`
- **Do:** Use structured outputs (JSON mode) for deterministic parsing; Provide clear examples in routing prompt; Implement fallback routes for unclear classifications; Cache routing decisions for identical queries; Use temperature=0 for consistent routing
- **Don't:** Rely on free-form text parsing for routing; Skip validation of LLM routing output; Use high temperature for routing decisions; Ignore edge cases and ambiguous inputs; Route without confidence thresholds

## Metrics
Key metrics to track when applying this pattern:
  - Routing Accuracy (% correctly routed queries)
  - Classification Time (P50/P95 routing latency)
  - Ambiguity Rate (% queries needing clarification)
  - Cost per Route (LLM tokens × price)
  - Fallback Rate (% routed to default handler)
  - Cache Hit Rate (% reused routing decisions)
  **Proven use cases:**
  - Customer Support: analyze intent → route to sales/tech/billing specialist
  - Multi-Tool Agents: parse request → select appropriate tool/API
  - Document Processing: classify type → apply correct parser/workflow
  - Query Routing: understand complexity → route to fast/powerful model
  - Workflow Selection: analyze task → choose sequential/parallel execution
