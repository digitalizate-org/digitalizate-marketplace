---
id: "AGP-123"
title: "Memory Reading/Writing Operations (MRWO)"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 3
context: "Large-scale memory systems (1M+ entries)."
avoid_when: "Small memory stores (< 1000 entries); Single-agent simple retrieval; Static memory without updates; Memory privacy isolation required; Ultra-low latency requirements (< 1ms)"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-408.png"
notion: "https://app.notion.com/p/Memory-Reading-Writing-Operations-MRWO-ec0a9aed53448293852e81b7519eef1e"
---

## Why
Systematic operations for reading, writing, and managing memory access patterns based on recency, relevance, and importance for multi-agent agentic AI systems. The pattern: systematic operations for reading, writing, and managing memory access based on intelligent scoring. Optimized retrieval performance, multi-agent coordination, intelligent memory prioritization.
**Key insight:** Composite Scoring (R×0.3 + R×0.5 + I×0.2) + Caching + Concurrency Control → Intelligent memory access

## How to implement
1. **Score Memories** — Calculate recency, relevance, importance weights
1. **Optimize Retrieval** — Use composite scoring for memory selection
1. **Coordinate Access** — Multi-agent read/write synchronization
1. **Cache Frequently** — Cache high-scoring memories for performance
1. **Update Dynamically** — Real-time scoring updates based on usage
- Example flow: `memory_scoring → retrieval_optimization → access_coordination → caching_strategy → dynamic_updates`
- **Do:** Use composite scoring: (Recency × 0.3) + (Relevance × 0.5) + (Importance × 0.2); Implement read-write locks for multi-agent memory consistency; Cache frequently accessed memories with TTL expiration; Use approximate nearest neighbor search for large memory stores; Implement memory access patterns analytics for optimization
- **Don't:** Use fixed scoring weights - adapt to agent/domain needs; Ignore memory access conflicts in multi-agent environments; Cache without considering memory staleness and updates; Use linear search for large-scale memory retrieval; Forget to implement memory garbage collection strategies

## Metrics
Key metrics to track when applying this pattern:
  - Retrieval Precision (% relevant memories returned)
  - Access Latency (P50/P95/P99 memory read times)
  - Cache Hit Rate (% requests served from cache)
  - Concurrency Efficiency (Multi-agent access throughput)
  - Memory Freshness (Average age of retrieved memories)
  - Storage Efficiency (Useful memories / total storage)
  **Proven use cases:**
  - Customer Service Systems: 10M+ interaction history with 50ms retrieval (recency + customer relevance scoring)
  - Recommendation Engines: User behavior patterns with real-time preference weighting (collaborative filtering optimization)
  - Conversational AI: Context-aware dialogue history with semantic similarity ranking (coherent long conversations)
  - Knowledge Management: Corporate knowledge base with expertise-weighted retrieval (subject matter expert routing)
  - Multi-Agent Gaming: Shared world state with spatial-temporal memory access (coordinated decision making)
