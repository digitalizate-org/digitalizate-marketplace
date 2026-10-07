# Agentic Patterns / Parallelization (4)

## AGP-023 — Async-Await
- Score 4 · Agentic Patterns / Parallelization
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: I/O intensive operations.
- Avoid when: Simple synchronous operations; CPU-intensive tasks; Critical sequential execution order; Deterministic timing requirements

**Why.** Non-blocking asynchronous execution with promise-based coordination. The pattern: non-blocking asynchronous execution with promise-based coordination. Improves throughput and responsiveness while maintaining code readability. **Key insight:** Promise → async/await → [concurrent_operations] → await_results

**Do.**
1. **Identify** — Find async operations (I/O, network, etc.)
2. **Wrap** — Use promises with error handling & timeouts
3. **Async/Await** — Write sequential-looking async code
4. **Concurrent** — Run multiple operations in parallel
5. **Coordinate** — Use Promise.all/race for orchestration
- Example flow: `async_ops → [Promise.all([op1, op2, op3])] → await_results → process`
- **Do:** Use Promise.all for independent concurrent operations; Apply Promise.race for timeout and first-response scenarios; Implement proper error boundaries and catch blocks; Set appropriate timeouts to prevent hanging; Use async iterators for streaming data
- **Don't:** Forget to await async operations; Create async/await cascades eliminating concurrency; Ignore error handling in promise chains; Block event loop with CPU-intensive operations; Skip timeout handling for long operations

**Measure.** Response Time Improvement (Latency reduction vs sequential execution); Throughput Increase (Operations per unit time with parallelism); Error Handling Effectiveness (Success rate of graceful recovery); Resource Utilization (CPU and memory efficiency gains); Promise Resolution Rate (% operations completing within timeout); Concurrency Efficiency (Parallel operations vs coordination overhead); API Integration: Concurrent service calls → gather responses → process results; File Processing…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-378.png
Notion: https://app.notion.com/p/Async-Await-c94a9aed5344839b8e52814036782fa8

## AGP-163 — Scatter-Gather
- Score 4 · Agentic Patterns / Parallelization
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Multiple independent information sources.
- Avoid when: Services have dependencies; Single service is sufficient; Real-time latency requirements; Resource-constrained environments

**Why.** Distributes requests to multiple services and collects responses. The pattern: broadcast requests to multiple services, then aggregate responses. Maximizes information coverage, improves resilience, leverages diverse capabilities. **Key insight:** Request → [Service1, Service2, ServiceN] → Gather → Aggregate → Result

**Do.**
1. **Identify** — Find independent services/resources
2. **Scatter** — Send concurrent requests to all services
3. **Timeout** — Set realistic response deadlines
4. **Gather** — Collect responses as they arrive
5. **Aggregate** — Merge using voting/scoring strategies
- Example flow: `query → [service_A, service_B, service_C] → gather_responses → merge_results`
- **Do:** Design consistent interfaces across all services; Implement circuit breakers for unreliable services; Use partial result aggregation for resilience; Cache responses to reduce redundant calls; Monitor service performance and adapt strategies
- **Don't:** Create dependencies between services; Rely on all services succeeding; Use inconsistent request formats; Ignore slow or failing service patterns; Skip result validation from individual services

**Measure.** Service Response Rate (% services responding within timeout); Aggregation Completeness (% expected information gathered); Overall Latency (End-to-end response time); Service Reliability (Individual service uptime); Result Quality (Accuracy vs single-service baseline); Resource Efficiency (Cost vs sequential calls); Multi-Source Research: Query knowledge bases → gather insights → synthesize report; Price Comparison: Check providers → collect quotes → recommend best option; Service Health Check…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-381.png
Notion: https://app.notion.com/p/Scatter-Gather-425a9aed534483aeaf8801a3538a885b

## AGP-079 — Fork-Join
- Score 3 · Agentic Patterns / Parallelization
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Recursive problems with natural decomposition.
- Avoid when: Strong sequential dependencies; Small problem sizes; Memory-constrained environments; Strict deterministic timing requirements

**Why.** Forks tasks into parallel subtasks and joins results when complete. The pattern: recursively decompose tasks, execute in parallel, then combine results. Optimal parallelism through divide-and-conquer with dynamic load balancing. **Key insight:** Task → [Subtask1, Subtask2, ...] → Parallel_Execute → Join → Result

**Do.**
1. **Decompose** — Break task into independent subtasks
2. **Fork** — Create parallel workers for each subtask
3. **Execute** — Process subtasks concurrently with recursion
4. **Join** — Wait for all subtasks to complete
5. **Combine** — Aggregate results using synthesis logic
- Example flow: `large_task → [subtask_A, subtask_B, subtask_C] → parallel_process → combine → result`
- **Do:** Set appropriate base case thresholds; Balance subtask granularity for optimal parallelism; Implement work-stealing for load balancing; Use thread pools to avoid creation overhead; Cache intermediate results to avoid redundancy
- **Don't:** Create excessive decomposition overhead; Ignore load balancing across workers; Allow resource contention and deadlocks; Define inadequate base cases; Miss error handling in parallel branches

**Measure.** Parallel Efficiency (Speedup vs theoretical maximum); Load Balance Quality (Variance in worker execution times); Resource Utilization (CPU, memory, thread efficiency); Task Granularity Ratio (Parallelism vs coordination overhead); Recursive Depth (Decomposition pattern analysis); Fault Recovery Rate (Success rate of subtask failure handling); Tree Traversal: Recursive parallel processing → explore branches → combine results; Sorting Algorithms: Divide data → parallel sort → merge sorted…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-379.png
Notion: https://app.notion.com/p/Fork-Join-511a9aed5344829ea97381f57e4786fe

## AGP-118 — Map-Reduce
- Score 3 · Agentic Patterns / Parallelization
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Large datasets to process.
- Avoid when: Small datasets (overhead exceeds benefit); Sequential dependencies; Memory-intensive aggregation; Real-time streaming needs

**Why.** Distributes computation across multiple nodes using map and reduce operations. The pattern: split data into chunks, process in parallel, then aggregate results. Maximizes throughput, utilizes multiple cores/services, scales horizontally. **Key insight:** Chunk[1..N] → Map(f) → [Result1..N] → Reduce → Final_Output

**Do.**
1. **Chunk** — Split data into parallel-processable units
2. **Map** — Apply same operation to each chunk
3. **Execute** — Process chunks in parallel
4. **Reduce** — Aggregate results into final output
5. **Validate** — Check completeness & consistency
- Example flow: `documents → [analyze, analyze, analyze] → combine insights → final_report`
- **Do:** Ensure chunks are independent and balanced; Use deterministic reduce functions for consistency; Handle partial failures gracefully; Size chunks based on processing complexity; Cache map results for repeated reduce operations
- **Don't:** Create chunks with interdependencies; Use non-commutative reduce operations; Ignore memory constraints with large datasets; Make chunks too small (overhead) or too large (imbalance); Forget to handle empty or malformed chunks

**Measure.** Throughput (Items processed per second); Parallelization Efficiency (% of ideal speedup achieved); Resource Utilization (CPU/memory usage across workers); Fault Tolerance (% of partial failures handled); Load Balance (Variance in chunk processing times); Cost Efficiency (Cost per processed item vs sequential); Document Analysis: Split large documents → analyze sections → combine insights; Content Moderation: Batch posts → classify each → aggregate violation reports; Data Validation: Chunk…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-380.png
Notion: https://app.notion.com/p/Map-Reduce-7e1a9aed534482efa75d819dbefe6b8b
