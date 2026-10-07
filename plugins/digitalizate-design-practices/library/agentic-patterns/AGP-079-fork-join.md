---
id: "AGP-079"
title: "Fork-Join"
category: "Agentic Patterns"
subcategory: "Parallelization"
score: 3
context: "Recursive problems with natural decomposition."
avoid_when: "Strong sequential dependencies; Small problem sizes; Memory-constrained environments; Strict deterministic timing requirements"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-379.png"
notion: "https://app.notion.com/p/Fork-Join-511a9aed5344829ea97381f57e4786fe"
---

## Why
Forks tasks into parallel subtasks and joins results when complete. The pattern: recursively decompose tasks, execute in parallel, then combine results. Optimal parallelism through divide-and-conquer with dynamic load balancing.
**Key insight:** Task → [Subtask1, Subtask2, ...] → Parallel_Execute → Join → Result

## How to implement
1. **Decompose** — Break task into independent subtasks
1. **Fork** — Create parallel workers for each subtask
1. **Execute** — Process subtasks concurrently with recursion
1. **Join** — Wait for all subtasks to complete
1. **Combine** — Aggregate results using synthesis logic
- Example flow: `large_task → [subtask_A, subtask_B, subtask_C] → parallel_process → combine → result`
- **Do:** Set appropriate base case thresholds; Balance subtask granularity for optimal parallelism; Implement work-stealing for load balancing; Use thread pools to avoid creation overhead; Cache intermediate results to avoid redundancy
- **Don't:** Create excessive decomposition overhead; Ignore load balancing across workers; Allow resource contention and deadlocks; Define inadequate base cases; Miss error handling in parallel branches

## Metrics
Key metrics to track when applying this pattern:
  - Parallel Efficiency (Speedup vs theoretical maximum)
  - Load Balance Quality (Variance in worker execution times)
  - Resource Utilization (CPU, memory, thread efficiency)
  - Task Granularity Ratio (Parallelism vs coordination overhead)
  - Recursive Depth (Decomposition pattern analysis)
  - Fault Recovery Rate (Success rate of subtask failure handling)
  **Proven use cases:**
  - Tree Traversal: Recursive parallel processing → explore branches → combine results
  - Sorting Algorithms: Divide data → parallel sort → merge sorted segments
  - Matrix Operations: Split matrices → parallel compute → aggregate results
  - Search Problems: Decompose search space → parallel exploration → combine findings
  - Data Processing: Partition dataset → parallel analysis → synthesize insights
