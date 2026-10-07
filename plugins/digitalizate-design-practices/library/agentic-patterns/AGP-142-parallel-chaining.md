---
id: "AGP-142"
title: "Parallel Chaining"
category: "Agentic Patterns"
subcategory: "Prompt Chaining"
score: 5
context: "Multiple independent lookups (APIs, DBs)."
avoid_when: "Sequential dependencies exist; Simple single-step tasks; Strict rate limits apply; Consistency > speed requirements"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-372.png"
notion: "https://app.notion.com/p/Parallel-Chaining-134a9aed534482268e4d0143f3747502"
---

## Why
Executes multiple independent prompts concurrently and intelligently combines their outputs, enabling faster processing and multi-perspective analysis that leverages parallel computation for complex tasks requiring diverse viewpoints or data sources. The pattern: execute multiple independent tasks concurrently to reduce latency. Drastically reduces wall-clock time for I/O-bound operations, enables multi-perspective analysis.
**Key insight:** Fan-out independent tasks → aggregate results with voting/merging/synthesis strategies

## How to implement
1. **Decompose** — Identify independent sub-tasks
1. **Design I/O** — Consistent schemas for branches
1. **Execute** — Run branches concurrently
1. **Aggregate** — Vote/merge/synthesize results
1. **Monitor** — Track latency, cost, agreement
- Example flow: `search_news AND search_social AND search_web → aggregate → synthesize`
- **Do:** Use structured outputs (JSON) for consistent aggregation; Implement timeouts and partial result handling; Use smaller models for parallel branches, stronger for merge; Batch requests and respect rate limits; Cache results from deterministic branches
- **Don't:** Parallelize dependent tasks; Ignore rate limits or burst capacity; Over-parallelize simple tasks; Skip error handling for partial failures; Use verbose unstructured data between stages

## Metrics
Key metrics to track when applying this pattern:
  - Wall-clock Speedup (Time vs sequential baseline)
  - Throughput (Tasks/minute at concurrency)
  - Agreement Score (% consensus among branches)
  - Cost Efficiency (Total tokens × model rates)
  - Success Rate (% completed branches)
  - P95 Latency (Tail completion time)
  **Proven use cases:**
  - Multi-Source Research: news + academic + social → synthesize findings
  - Content Generation: headline + body + image + CTA → complete email
  - Data Validation: format + business rules + external APIs → pass/fail
  - Creative Ideation: 3 models generate options → select best
  - Travel Planning: flights + hotels + events + restaurants → itinerary
