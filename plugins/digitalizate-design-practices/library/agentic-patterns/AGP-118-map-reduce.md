---
id: "AGP-118"
title: "Map-Reduce"
category: "Agentic Patterns"
subcategory: "Parallelization"
score: 3
context: "Large datasets to process."
avoid_when: "Small datasets (overhead exceeds benefit); Sequential dependencies; Memory-intensive aggregation; Real-time streaming needs"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-380.png"
notion: "https://app.notion.com/p/Map-Reduce-7e1a9aed534482efa75d819dbefe6b8b"
---

## Why
Distributes computation across multiple nodes using map and reduce operations. The pattern: split data into chunks, process in parallel, then aggregate results. Maximizes throughput, utilizes multiple cores/services, scales horizontally.
**Key insight:** Chunk[1..N] → Map(f) → [Result1..N] → Reduce → Final_Output

## How to implement
1. **Chunk** — Split data into parallel-processable units
1. **Map** — Apply same operation to each chunk
1. **Execute** — Process chunks in parallel
1. **Reduce** — Aggregate results into final output
1. **Validate** — Check completeness & consistency
- Example flow: `documents → [analyze, analyze, analyze] → combine insights → final_report`
- **Do:** Ensure chunks are independent and balanced; Use deterministic reduce functions for consistency; Handle partial failures gracefully; Size chunks based on processing complexity; Cache map results for repeated reduce operations
- **Don't:** Create chunks with interdependencies; Use non-commutative reduce operations; Ignore memory constraints with large datasets; Make chunks too small (overhead) or too large (imbalance); Forget to handle empty or malformed chunks

## Metrics
Key metrics to track when applying this pattern:
  - Throughput (Items processed per second)
  - Parallelization Efficiency (% of ideal speedup achieved)
  - Resource Utilization (CPU/memory usage across workers)
  - Fault Tolerance (% of partial failures handled)
  - Load Balance (Variance in chunk processing times)
  - Cost Efficiency (Cost per processed item vs sequential)
  **Proven use cases:**
  - Document Analysis: Split large documents → analyze sections → combine insights
  - Content Moderation: Batch posts → classify each → aggregate violation reports
  - Data Validation: Chunk records → validate each → compile error summary
  - Sentiment Analysis: Split reviews → analyze sentiment → generate overall score
  - Code Analysis: Split codebase → analyze files → generate quality report
