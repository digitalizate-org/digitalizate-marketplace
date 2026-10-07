# Agentic Patterns / Prompt Chaining (2)

## AGP-142 — Parallel Chaining
- Score 5 · Agentic Patterns / Prompt Chaining
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Multiple independent lookups (APIs, DBs).
- Avoid when: Sequential dependencies exist; Simple single-step tasks; Strict rate limits apply; Consistency > speed requirements

**Why.** Executes multiple independent prompts concurrently and intelligently combines their outputs, enabling faster processing and multi-perspective analysis that leverages parallel computation for complex tasks requiring diverse viewpoints or data sources. The pattern: execute multiple independent tasks concurrently to reduce latency. Drastically reduces wall-clock time for I/O-bound operations, enables multi-perspective analysis. **Key insight:** Fan-out independent tasks → aggregate results with voting/merging/synthesis strategies

**Do.**
1. **Decompose** — Identify independent sub-tasks
2. **Design I/O** — Consistent schemas for branches
3. **Execute** — Run branches concurrently
4. **Aggregate** — Vote/merge/synthesize results
5. **Monitor** — Track latency, cost, agreement
- Example flow: `search_news AND search_social AND search_web → aggregate → synthesize`
- **Do:** Use structured outputs (JSON) for consistent aggregation; Implement timeouts and partial result handling; Use smaller models for parallel branches, stronger for merge; Batch requests and respect rate limits; Cache results from deterministic branches
- **Don't:** Parallelize dependent tasks; Ignore rate limits or burst capacity; Over-parallelize simple tasks; Skip error handling for partial failures; Use verbose unstructured data between stages

**Measure.** Wall-clock Speedup (Time vs sequential baseline); Throughput (Tasks/minute at concurrency); Agreement Score (% consensus among branches); Cost Efficiency (Total tokens × model rates); Success Rate (% completed branches); P95 Latency (Tail completion time); Multi-Source Research: news + academic + social → synthesize findings; Content Generation: headline + body + image + CTA → complete email; Data Validation: format + business rules + external APIs → pass/fail; Creative Ideation: 3 models…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-372.png
Notion: https://app.notion.com/p/Parallel-Chaining-134a9aed534482268e4d0143f3747502

## AGP-171 — Sequential Chaining
- Score 5 · Agentic Patterns / Prompt Chaining
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Multi-step workflows (3+ stages).
- Avoid when: Simple single-step tasks; Real-time/low-latency needs; Tightly coupled logic; Limited API budget

**Why.** A fundamental prompt engineering technique that breaks complex tasks into smaller, interconnected prompts where each output serves as input for the next step, creating a structured reasoning pipeline that significantly improves LLM performance on multi-step problems. The pattern: break complex tasks into linear pipeline of focused steps. Reduces model cognitive load, isolates errors, enables tool integration & step caching. **Key insight:** Output[N] → Input[N+1] with structured data (JSON) - each step cacheable

**Do.**
1. **Decompose** — Break task into focused stages
2. **Define I/O** — JSON schemas for each stage
3. **Chain** — Output[N] → Input[N+1]
4. **Validate** — Assert & retry at each step
5. **Monitor** — Log latency, cost, errors
- Example flow: `analyze_doc → extract_data → validate → transform → summarize`
- **Do:** Use JSON/structured outputs between stages; Cache deterministic stage outputs (huge cost savings); Use cache keys based on input hash + prompt version; Implement circuit breakers & retries; Set TTL for cached steps based on data freshness needs
- **Don't:** Pass verbose prose between stages; Cache non-deterministic or time-sensitive steps; Skip cache invalidation on prompt changes; Ignore partial outputs/refusals; Let errors cascade unchecked

**Measure.** Success Rate (Per-stage & E2E completion); Latency (P50/P95 per stage); Cost (Σ(tokens × model_rate)); Error Recovery (% failures handled); Cache Hit Rate (% reused computations); Cost Savings ($ saved via caching); Document Analysis: parse → extract → analyze → summarize (cache parsing); Content Creation: research → outline → draft → edit (cache research); Data Pipeline: validate → transform → enrich → aggregate (cache transforms); Decision Flow: gather → evaluate → score → recommend (cache…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-373.png
Notion: https://app.notion.com/p/Sequential-Chaining-7b8a9aed5344825b9ee801b31a1de952
