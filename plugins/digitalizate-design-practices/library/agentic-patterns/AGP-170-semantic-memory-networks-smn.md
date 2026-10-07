---
id: "AGP-170"
title: "Semantic Memory Networks (SMN)"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 2
context: "Complex domain knowledge representation."
avoid_when: "Simple key-value data storage; Highly personal/contextual information; Rapidly changing temporal data; Privacy-sensitive knowledge; Storage-constrained environments"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-410.png"
notion: "https://app.notion.com/p/Semantic-Memory-Networks-SMN-878a9aed53448212b5d501abaf150a2f"
---

## Why
General world knowledge systems divorced from specific acquisition context, supporting factual knowledge and concept relationships for multi-agent agentic AI systems. The pattern: general world knowledge systems divorced from acquisition context, supporting factual reasoning. Context-independent knowledge access, cross-domain reasoning, consistent facts across agents.
**Key insight:** Concepts + Relationships + Embeddings → Multi-hop reasoning → Cross-agent knowledge consistency

## How to implement
1. **Build Graph** — Create knowledge graph with concepts & relationships
1. **Embed Concepts** — Generate semantic embeddings for all entities
1. **Link Relations** — Map hierarchical & associative connections
1. **Share Network** — Enable cross-agent knowledge graph access
1. **Update Graph** — Continuously refine relationships & add concepts
- Example flow: `concept_extraction → embedding_generation → relationship_mapping → cross_agent_sharing → continuous_refinement`
- **Do:** Use hierarchical concept organization (parent-child relationships); Implement semantic similarity scoring for concept retrieval; Enable multi-hop reasoning across concept relationships; Maintain consistent ontologies across all agents in the network; Version control knowledge graphs for reproducible reasoning
- **Don't:** Store time-sensitive or rapidly changing information; Create overly complex relationship hierarchies (keep interpretable); Ignore semantic consistency when merging knowledge from different sources; Let knowledge graphs grow without pruning irrelevant connections; Use for personal or context-specific information storage

## Metrics
Key metrics to track when applying this pattern:
  - Concept Coverage (% domain concepts represented)
  - Relationship Accuracy (Correct semantic connections %)
  - Query Resolution Rate (Successful knowledge retrieval %)
  - Cross-Agent Consistency (Knowledge alignment score)
  - Reasoning Path Length (Average hops to find answers)
  - Knowledge Graph Density (Connections per concept ratio)
  **Proven use cases:**
  - Scientific Research Networks: Physics, chemistry, biology concepts linked across disciplines (enables cross-domain discovery)
  - Medical Knowledge Systems: Diseases, symptoms, treatments, drug interactions in semantic network (diagnostic reasoning)
  - Legal Knowledge Graphs: Laws, precedents, regulations, jurisdiction relationships (legal research & compliance)
  - Financial Domain Models: Markets, instruments, regulations, risk factors interconnected (investment analysis)
  - Technical Documentation: Software concepts, APIs, dependencies, best practices linked (developer assistance)
