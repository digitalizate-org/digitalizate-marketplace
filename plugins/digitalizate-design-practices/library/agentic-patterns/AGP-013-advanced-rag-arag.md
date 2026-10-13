---
id: "AGP-013"
title: "Advanced RAG (ARAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 4
context: "Production RAG systems requiring high accuracy."
avoid_when: "Simple factual Q&A with clean data; Resource-constrained environments; Real-time applications (<100ms latency); Small knowledge bases with high-quality content; Proof-of-concept or prototype systems"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-446.png"
notion: "https://app.notion.com/p/Advanced-RAG-ARAG-626a9aed5344835f9fbc81cc6725efc0"
---

## Why
Enhanced RAG with pre-retrieval and post-retrieval optimizations including query expansion, reranking, and context curation. The pattern: enhanced retrieval pipeline with query preprocessing, multi-stage retrieval, neural reranking, and context optimization. Addresses limitations of naive RAG through query understanding, relevance scoring, and context quality optimization.
**Key insight:** Pre-retrieval optimization + post-retrieval processing significantly improves accuracy and relevance

## How to implement
1. **Pre-process** — Query expansion, rewriting, routing
1. **Multi-retrieve** — Multiple retrieval strategies and sources
1. **Rerank** — Neural rerankers (BGE, Cohere, etc.)
1. **Filter** — Relevance scoring and context selection
1. **Generate** — Context-optimized generation with citations
- Example flow: `expand_query → multi_retrieve → neural_rerank → filter_context → generate_with_citations`
- **Do:** Implement query expansion (HyDE, query2doc); Use neural rerankers (BGE-reranker, Cohere rerank); Apply sentence window retrieval for context preservation; Implement relevance filtering with confidence thresholds; Use multiple embedding models for retrieval diversity
- **Don't:** Skip query preprocessing and expansion; Rely solely on semantic similarity for ranking; Ignore document quality and freshness signals; Over-retrieve without proper filtering mechanisms; Neglect context window optimization

## Metrics
Key metrics to track when applying this pattern:
  - Retrieval Precision (Relevant docs in top-k after reranking)
  - Answer Faithfulness (Generated content grounded in retrieved docs)
  - Context Relevance (Retrieved context relevance to query)
  - Reranking Effectiveness (NDCG@k improvement vs base retrieval)
  - Query Understanding (Semantic similarity after expansion/rewriting)
  - End-to-End Latency (Including pre-processing and reranking overhead)
  **Proven use cases:**
  - Enterprise Search: Complex queries over large corporate knowledge bases with reranking
  - Legal Research: Multi-hop reasoning over case law with query expansion and relevance filtering
  - Medical Q&A: Clinical queries with domain-specific rerankers and confidence scoring
  - Technical Documentation: Developer queries with code-aware retrieval and context optimization
  - Research Assistant: Academic queries with citation tracking and multi-source retrieval
