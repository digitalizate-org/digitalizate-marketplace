---
id: "AGP-067"
title: "Embedding-based Routing (EBR)"
category: "Agentic Patterns"
subcategory: "Routing"
score: 4
context: "Semantic understanding is crucial."
avoid_when: "Exact keyword matching suffices; Embedding computation is costly; Routes require strict boundaries; Low-latency requirements (<10ms)"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-374.png"
notion: "https://app.notion.com/p/Embedding-based-Routing-EBR-2d1a9aed534483fabc3d812e2bd9c40d"
---

## Why
A semantic routing system that converts queries and route definitions into high-dimensional vector embeddings, using cosine similarity or other distance metrics to match incoming requests to the most semantically similar handler, enabling fuzzy matching, multi-lingual support, and context-aware routing beyond simple keyword matching. The pattern: route requests by comparing vector embeddings in semantic space. Captures meaning beyond keywords, enabling fuzzy matching and cross-lingual routing.
**Key insight:** Same embedding model + cosine similarity + smart thresholds = semantic routing

## How to implement
1. **Embed** — Convert query to vector representation
1. **Compare** — Calculate similarity to route embeddings
1. **Select** — Choose route with highest similarity
1. **Threshold** — Verify similarity meets minimum
1. **Route** — Direct to matched handler/agent
- Example flow: `query_embedding = encode(query) → similarities = cosine_sim(query_embedding, route_embeddings) → if max(similarities) > 0.85: route()`
- **Do:** Use same embedding model for queries and routes; Normalize embeddings for consistent cosine similarity; Set appropriate similarity thresholds through testing; Cache embeddings for frequently used routes; Monitor embedding drift and update periodically
- **Don't:** Mix different embedding models without retraining; Use cosine similarity blindly without validation; Ignore magnitude when it carries meaning; Skip normalization if model expects it; Use fixed thresholds across all route types

## Metrics
Key metrics to track when applying this pattern:
  - Similarity Score (Distribution of route matches)
  - Embedding Latency (Time to generate vectors)
  - Route Precision (% correctly routed queries)
  - Route Recall (% of queries finding a route)
  - Cache Hit Rate (% embeddings served from cache)
  - Threshold Effectiveness (False positive/negative rates)
  **Proven use cases:**
  - Semantic Search: query → embed → find most similar documents/FAQs
  - Intent Classification: user input → embed → match to intent clusters
  - Multi-lingual Support: translate meaning, not words → unified routing
  - Knowledge Base Navigation: question → embed → relevant article section
  - Dynamic Tool Selection: task description → embed → appropriate tool match
