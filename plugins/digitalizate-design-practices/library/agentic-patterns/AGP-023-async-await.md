---
id: "AGP-023"
title: "Async-Await"
category: "Agentic Patterns"
subcategory: "Parallelization"
score: 4
context: "I/O intensive operations."
avoid_when: "Simple synchronous operations; CPU-intensive tasks; Critical sequential execution order; Deterministic timing requirements"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-378.png"
notion: "https://app.notion.com/p/Async-Await-c94a9aed5344839b8e52814036782fa8"
---

## Why
Non-blocking asynchronous execution with promise-based coordination. The pattern: non-blocking asynchronous execution with promise-based coordination. Improves throughput and responsiveness while maintaining code readability.
**Key insight:** Promise → async/await → [concurrent_operations] → await_results

## How to implement
1. **Identify** — Find async operations (I/O, network, etc.)
1. **Wrap** — Use promises with error handling & timeouts
1. **Async/Await** — Write sequential-looking async code
1. **Concurrent** — Run multiple operations in parallel
1. **Coordinate** — Use Promise.all/race for orchestration
- Example flow: `async_ops → [Promise.all([op1, op2, op3])] → await_results → process`
- **Do:** Use Promise.all for independent concurrent operations; Apply Promise.race for timeout and first-response scenarios; Implement proper error boundaries and catch blocks; Set appropriate timeouts to prevent hanging; Use async iterators for streaming data
- **Don't:** Forget to await async operations; Create async/await cascades eliminating concurrency; Ignore error handling in promise chains; Block event loop with CPU-intensive operations; Skip timeout handling for long operations

## Metrics
Key metrics to track when applying this pattern:
  - Response Time Improvement (Latency reduction vs sequential execution)
  - Throughput Increase (Operations per unit time with parallelism)
  - Error Handling Effectiveness (Success rate of graceful recovery)
  - Resource Utilization (CPU and memory efficiency gains)
  - Promise Resolution Rate (% operations completing within timeout)
  - Concurrency Efficiency (Parallel operations vs coordination overhead)
  **Proven use cases:**
  - API Integration: Concurrent service calls → gather responses → process results
  - File Processing: Parallel file I/O → process data streams → aggregate output
  - Database Operations: Concurrent queries → merge results → return dataset
  - Microservice Coordination: Parallel service calls → orchestrate responses
  - Real-time Processing: Stream processing → concurrent analysis → live results
