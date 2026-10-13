---
id: "AGP-137"
title: "Naive RAG (NRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 4
context: "Simple Q&A over documents."
avoid_when: "Complex multi-hop reasoning required; High-accuracy critical applications; Large-scale production systems; Noisy or contradictory knowledge bases; Real-time performance requirements"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-452.png"
notion: "https://app.notion.com/p/Naive-RAG-NRAG-f08a9aed5344826c82c80165c0b9cd3e"
---

## Why
Foundational "Retrieve-Read" framework following traditional indexing, retrieval, and generation process. The pattern: simple retrieve-then-read pipeline: query → retrieve documents → concatenate → generate. Provides external knowledge access with minimal complexity - foundational approach established by Lewis et al. (2020).
**Key insight:** Direct concatenation of top-k retrieved documents to query prompt - no optimization or post-processing

## How to implement
1. **Index** — Create vector embeddings of knowledge base
1. **Retrieve** — Find top-k relevant documents via similarity
1. **Concatenate** — Append retrieved docs to query prompt
1. **Generate** — Submit combined prompt to LLM
1. **Return** — Output generated response directly
- Example flow: `query → vector_search → concat_context → llm_generate → response`
- **Do:** Use semantic embeddings (e.g., sentence-transformers); Implement basic chunking strategy (fixed size 512-1024 tokens); Set clear top-k retrieval limits (typically 3-5 documents); Include document metadata and source attribution; Use FAISS or similar for efficient vector search
- **Don't:** Skip query preprocessing or normalization; Retrieve too many documents (causes context pollution); Ignore relevance scoring thresholds; Concatenate without clear document boundaries; Expect sophisticated reasoning from basic approach

## Metrics
Key metrics to track when applying this pattern:
  - Retrieval Accuracy (Relevant docs in top-k (Recall@k))
  - Answer Quality (BLEU/ROUGE scores vs ground truth)
  - Response Time (End-to-end latency (retrieval + generation))
  - Context Utilization (% of retrieved context used in response)
  - Hallucination Rate (% responses with unsupported claims)
  - Source Attribution (% responses with correct source citations)
  **Proven use cases:**
  - Document Q&A: Simple factual questions over company documents or knowledge bases
  - FAQ Systems: Automated responses to frequently asked questions using existing documentation
  - Research Assistance: Basic information retrieval from academic papers or research collections
  - Customer Support: Level 1 support queries answerable from documentation and manuals
  - Educational Tools: Simple question-answering over textbooks and educational materials
