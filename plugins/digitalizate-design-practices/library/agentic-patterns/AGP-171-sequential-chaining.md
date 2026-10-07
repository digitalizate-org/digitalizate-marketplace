---
id: "AGP-171"
title: "Sequential Chaining"
category: "Agentic Patterns"
subcategory: "Prompt Chaining"
score: 5
context: "Multi-step workflows (3+ stages)."
avoid_when: "Simple single-step tasks; Real-time/low-latency needs; Tightly coupled logic; Limited API budget"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-373.png"
notion: "https://app.notion.com/p/Sequential-Chaining-7b8a9aed5344825b9ee801b31a1de952"
---

## Why
A fundamental prompt engineering technique that breaks complex tasks into smaller, interconnected prompts where each output serves as input for the next step, creating a structured reasoning pipeline that significantly improves LLM performance on multi-step problems. The pattern: break complex tasks into linear pipeline of focused steps. Reduces model cognitive load, isolates errors, enables tool integration & step caching.
**Key insight:** Output[N] → Input[N+1] with structured data (JSON) - each step cacheable

## How to implement
1. **Decompose** — Break task into focused stages
1. **Define I/O** — JSON schemas for each stage
1. **Chain** — Output[N] → Input[N+1]
1. **Validate** — Assert & retry at each step
1. **Monitor** — Log latency, cost, errors
- Example flow: `analyze_doc → extract_data → validate → transform → summarize`
- **Do:** Use JSON/structured outputs between stages; Cache deterministic stage outputs (huge cost savings); Use cache keys based on input hash + prompt version; Implement circuit breakers & retries; Set TTL for cached steps based on data freshness needs
- **Don't:** Pass verbose prose between stages; Cache non-deterministic or time-sensitive steps; Skip cache invalidation on prompt changes; Ignore partial outputs/refusals; Let errors cascade unchecked

## Metrics
Key metrics to track when applying this pattern:
  - Success Rate (Per-stage & E2E completion)
  - Latency (P50/P95 per stage)
  - Cost (Σ(tokens × model_rate))
  - Error Recovery (% failures handled)
  - Cache Hit Rate (% reused computations)
  - Cost Savings ($ saved via caching)
  **Proven use cases:**
  - Document Analysis: parse → extract → analyze → summarize (cache parsing)
  - Content Creation: research → outline → draft → edit (cache research)
  - Data Pipeline: validate → transform → enrich → aggregate (cache transforms)
  - Decision Flow: gather → evaluate → score → recommend (cache gathering)
  - Report Generation: fetch → process → format → deliver (cache all but delivery)
