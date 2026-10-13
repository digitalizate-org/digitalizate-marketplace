---
id: "AGP-089"
title: "Hierarchical Memory"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 2
context: "Large memory stores with varied access patterns."
avoid_when: "Small memory requirements (< 1GB); Uniform access patterns across all data; Real-time systems with strict latency requirements; Stateless operations without persistence needs; Resource-constrained environments"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-406.png"
notion: "https://app.notion.com/p/Hierarchical-Memory-fa2a9aed534483388f5201f5d8583c45"
---

## Why
Multi-level memory structure with different retention policies. The pattern: multi-level memory structure with different retention policies and intelligent tier management. Optimized storage costs, improved retrieval performance, adaptive resource allocation.
**Key insight:** Hot/Warm/Cold Data Tiers + Promotion Policies + Background Consolidation → Cost-efficient performance

## How to implement
1. **Design Tiers** — Create working, short-term, long-term, archival levels
1. **Set Policies** — Define promotion/demotion rules by access patterns
1. **Index Layers** — Optimize retrieval mechanisms per tier
1. **Background Ops** — Consolidation, compression, tier optimization
1. **Monitor & Adapt** — Dynamic tier sizing based on usage patterns
- Example flow: `tier_design → policy_rules → indexing_optimization → background_consolidation → adaptive_monitoring`
- **Do:** Design tier boundaries based on access patterns (hot/warm/cold data); Use intelligent promotion policies combining recency, frequency, importance; Implement efficient indexing optimized for each memory tier; Deploy background consolidation without blocking memory access; Monitor tier performance and adapt sizes dynamically
- **Don't:** Create overly complex hierarchies that slow down simple retrieval; Use fixed tier boundaries - adapt to workload characteristics; Ignore memory leaks in tier management causing unbounded growth; Let promotion policies become stale without access pattern updates; Implement hierarchy management harder to debug than flat memory

## Metrics
Key metrics to track when applying this pattern:
  - Tier Hit Rate (% requests satisfied at each tier)
  - Promotion Accuracy (% correct tier assignments)
  - Memory Utilization (Effective storage use across tiers)
  - Retrieval Latency (P50/P95 access times per tier)
  - Consolidation Efficiency (Background optimization impact)
  - Storage Cost Reduction (% savings vs flat memory)
  **Proven use cases:**
  - Conversational AI: Recent context in working memory, user preferences in long-term (40-60% token reduction)
  - Knowledge Management: Frequently accessed facts in hot tier, archives in cold storage (enterprise systems)
  - Personalization Systems: Active user profiles in memory, historical patterns in archives (recommendation engines)
  - Research Platforms: Current projects in working tier, literature database in archival (academic systems)
  - Content Platforms: Trending content in hot tier, older content in cost-efficient cold storage (media systems)
