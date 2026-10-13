---
id: "AGP-042"
title: "Context Select Patterns (CSEL)"
category: "Agentic Patterns"
subcategory: "Context Management"
score: 3
context: "Knowledge-intensive applications."
avoid_when: "Static context requirements; Simple predefined knowledge bases; High-latency sensitive applications; Limited computational resources"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-433.png"
notion: "https://app.notion.com/p/Context-Select-Patterns-CSEL-c9fa9aed53448383938481e5d15f4248"
---

## Why
Dynamic retrieval and assembly of relevant context through RAG, semantic search, and intelligent context curation. The pattern: dynamic retrieval and assembly of relevant context through RAG, semantic search, and intelligent context curation. Enables precise context selection from large knowledge bases with optimal relevance and token efficiency.
**Key insight:** Semantic similarity with intelligent ranking delivers contextually relevant information within token constraints

## How to implement
1. **Task Analysis** — Extract context requirements from task specifications
1. **Semantic Search** — Perform similarity-based context retrieval
1. **Ranking & Scoring** — Apply relevance scoring and prioritization
1. **Assembly** — Dynamically compose selected context components
1. **Optimization** — Optimize for token budget and quality balance
- Example flow: `analyze_task → semantic_search → rank_relevance → assemble_context → optimize_budget`
- **Do:** Use vector embeddings for semantic similarity matching; Implement hybrid search combining semantic + keyword; Cache frequently accessed context patterns; Use relevance scoring with multiple criteria; Implement dynamic context assembly based on task complexity
- **Don't:** Rely solely on keyword matching for context selection; Select context without considering task relevance; Ignore token budget constraints during selection; Use static context selection for dynamic tasks; Skip quality assessment of retrieved context

## Metrics
Key metrics to track when applying this pattern:
  - Relevance Precision (% selected context actually relevant)
  - Context Coverage (% task requirements covered by selection)
  - Selection Speed (Time to complete context assembly)
  - Token Efficiency (Information density per token used)
  - Cache Hit Rate (% contexts served from cache)
  - Quality Score (Human/automated quality assessment)
  **Proven use cases:**
  - Enterprise RAG: analyze_query → search_knowledge_base → rank_documents → assemble_context → optimize_tokens
  - Research Assistant: identify_topics → semantic_retrieval → source_ranking → context_fusion → knowledge_synthesis
  - Customer Support: analyze_issue → retrieve_solutions → score_relevance → compose_response → quality_check
  - Code Assistant: parse_requirements → search_codebase → rank_examples → assemble_context → generate_solution
  - Content Curation: understand_intent → multi_source_search → relevance_filtering → context_assembly → presentation_optimization
