---
id: "AGP-082"
title: "Graph RAG (GRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 3
context: "Complex multi-hop reasoning requiring entity relationship understanding."
avoid_when: "Simple factual queries adequately served by document-based RAG; Domains with poor entity extraction and relation modeling quality; Real-time applications with strict latency requirements; Small datasets where graph complexity exceeds retrieval benefits; Applications lacking well-defined entity schemas or ontologies"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-449.png"
notion: "https://app.notion.com/p/Graph-RAG-GRAG-61da9aed5344835e993a0102e653be45"
---

## Why
Knowledge graph-enhanced RAG using entity relationships and community detection for global sensemaking queries. The pattern: knowledge graph-based RAG with community detection and hierarchical summarization for large-scale reasoning. Enables complex multi-hop reasoning and relationship understanding through structured graph traversal.
**Key insight:** Microsoft's approach uses community detection algorithms to create hierarchical summaries for global and local reasoning

## How to implement
1. **Extract & Build** — NER/RE to extract entities and relations, build knowledge graph
1. **Index & Store** — Create graph indexes and hybrid text-vector search capabilities
1. **Query & Map** — Parse query entities and map to graph nodes
1. **Traverse & Retrieve** — Multi-hop graph traversal with bounded expansion
1. **Assemble & Generate** — Serialize graph context and generate response
- Example flow: `query → entity_linking → graph_traversal → subgraph_assembly → llm_generation → response`
- **Do:** Implement community detection algorithms for large-scale graph summarization; Use hierarchical indexing with global and local community summaries; Apply entity resolution and deduplication to maintain graph quality; Combine vector search with graph traversal for hybrid retrieval; Implement bounded traversal with explicit hop limits (1-3 hops)
- **Don't:** Allow uncontrolled graph traversal that leads to context explosion; Skip entity linking validation and confidence scoring; Neglect graph maintenance and consistency validation; Create overly complex schemas that hinder query performance; Ignore provenance tracking for graph edges and entity sources

## Metrics
Key metrics to track when applying this pattern:
  - Graph Construction Quality (Precision/recall of extracted entities and relations)
  - Community Detection Accuracy (Coherence and relevance of detected communities)
  - Retrieval Relevance (Proportion of relevant subgraphs in query results)
  - Multi-hop Reasoning (Accuracy of complex relationship inference)
  - Context Completeness (Coverage of relevant graph neighborhoods)
  - Query Response Time (End-to-end latency including graph operations)
  **Proven use cases:**
  - Biomedical Research: Drug-disease-gene relationship exploration with scientific literature integration
  - Financial Analysis: Company-industry-market relationship modeling for investment research
  - Legal Research: Case law relationship mapping with precedent and citation analysis
  - Enterprise Knowledge: Organizational relationship modeling with department and project connections
  - Academic Research: Citation networks and research collaboration graph analysis
