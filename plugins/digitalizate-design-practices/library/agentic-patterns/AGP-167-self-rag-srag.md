---
id: "AGP-167"
title: "Self-RAG (SRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 3
context: "Factual accuracy and verifiability are critical requirements."
avoid_when: "Simple queries where standard RAG provides sufficient accuracy; Real-time applications with strict latency constraints; Resource-constrained environments limiting multiple generation rounds; Domains with insufficient training data for reliable self-critique; Applications where citation overhead is unnecessary"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-453.png"
notion: "https://app.notion.com/p/Self-RAG-SRAG-af7a9aed5344830f8492819516b2862f"
---

## Why
Self-reflective RAG that adaptively determines retrieval necessity and evaluates retrieval quality through reflection tokens. The pattern: rAG system with adaptive retrieval decisions and self-reflection using trained reflection tokens for quality assessment. Improves factual accuracy and reduces hallucinations through iterative self-critique and selective knowledge retrieval.
**Key insight:** Reflection tokens ([Retrieve], [IsRel], [IsSup], [IsUse]) enable models to assess retrieval necessity and response quality

## How to implement
1. **Retrieval Gate** — Assess whether external knowledge is needed for the query
1. **Retrieve & Rank** — Fetch relevant passages and apply neural reranking
1. **Generate Draft** — Create initial response using retrieved context
1. **Self-Critique** — Use reflection tokens to evaluate response quality
1. **Refine Output** — Iteratively improve based on self-assessment
- Example flow: `query → retrieval_gate → retrieve → generate → self_critique → [refine] → final_response`
- **Do:** Train models with reflection tokens ([Retrieve], [IsRel], [IsSup], [IsUse]); Implement retrieval necessity prediction to avoid unnecessary context; Use calibrated confidence thresholds for triggering refinement; Enforce citation requirements with evidence grounding; Cache reflection outputs and retrieval results for efficiency
- **Don't:** Allow unconstrained reflection tokens that become verbose; Skip validation of self-critique calibration against ground truth; Create infinite refinement loops without iteration limits; Rely solely on self-assessment without external validation; Ignore computational cost of multiple generation rounds

## Metrics
Key metrics to track when applying this pattern:
  - Answer Faithfulness (Factual accuracy and consistency with retrieved evidence)
  - Reflection Calibration (Correlation between confidence scores and actual accuracy)
  - Retrieval Precision (Proportion of retrieved passages that are genuinely useful)
  - Citation Coverage (Percentage of claims supported by retrieved evidence)
  - Refinement Effectiveness (Quality improvement through iterative self-correction)
  - Computational Efficiency (Quality gains per additional token or retrieval call)
  **Proven use cases:**
  - Medical Q&A: Clinical decision support requiring high accuracy and evidence-based responses
  - Legal Research: Case law analysis with citation requirements and confidence assessment
  - Scientific Literature Review: Research synthesis with source attribution and uncertainty quantification
  - Financial Analysis: Investment research requiring balanced parametric and real-time market data
  - Educational Content: Academic tutoring with verified information and learning confidence tracking
