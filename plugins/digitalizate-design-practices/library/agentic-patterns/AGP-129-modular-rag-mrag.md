---
id: "AGP-129"
title: "Modular RAG (MRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 3
context: "Large-scale RAG systems requiring flexibility and maintainability."
avoid_when: "Simple single-purpose RAG applications; Resource-constrained environments with tight latency budgets; Small teams without modular architecture experience; Prototypes and proof-of-concept implementations; Systems with stable, unchanging requirements"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-450.png"
notion: "https://app.notion.com/p/Modular-RAG-MRAG-8b1a9aed53448312b04e01415b51284c"
---

## Why
Flexible RAG architecture with interchangeable modules supporting iterative, adaptive, and non-sequential retrieval patterns. The pattern: decomposed RAG architecture with independent, interchangeable modules connected through standardized interfaces. Enables flexibility, maintainability, and team scalability by separating concerns into distinct, testable components.
**Key insight:** Module boundaries defined by function (retrieval, ranking, fusion, generation) with standardized APIs enabling hot-swapping

## How to implement
1. **Module Design** — Create independent retrieval, generation, and augmentation modules
1. **Interface Definition** — Define standardized APIs between modules
1. **Pipeline Assembly** — Compose modules into flexible processing pipelines
1. **Dynamic Routing** — Route queries to appropriate module combinations
1. **Module Orchestration** — Coordinate execution and data flow between modules
- Example flow: `query → module_router → [retrieval_module, rerank_module, fusion_module] → generation_module → response`
- **Do:** Design modules with clear input/output interfaces and standardized APIs; Implement hot-swappable modules for A/B testing and gradual rollouts; Use dependency injection for flexible module composition; Cache module outputs at appropriate granularity levels; Implement module health checks and fallback mechanisms
- **Don't:** Create tight coupling between modules or shared mutable state; Skip module versioning and backward compatibility considerations; Ignore module-level monitoring and observability; Over-engineer module boundaries for simple use cases; Neglect module performance isolation and resource limits

## Metrics
Key metrics to track when applying this pattern:
  - Module Isolation (Independence and replaceability of individual modules)
  - Pipeline Flexibility (Number of supported module combinations and configurations)
  - Development Velocity (Time to implement new modules or modify existing ones)
  - System Reliability (Fault isolation and graceful degradation capabilities)
  - Performance Scalability (Independent scaling of bottleneck modules)
  - Configuration Complexity (Ease of pipeline composition and module orchestration)
  **Proven use cases:**
  - Enterprise RAG Platforms: Modular architecture supporting multiple business units with different requirements
  - Research Infrastructure: Academic platforms allowing researchers to experiment with different RAG components
  - Multi-Domain Systems: E-commerce platforms with specialized modules for products, reviews, and support content
  - SaaS RAG Services: Cloud platforms offering configurable RAG pipelines to customers
  - Hybrid AI Systems: Complex architectures combining RAG with other AI capabilities like code generation and analysis
