---
id: "AGP-054"
title: "Corrective RAG (CRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 3
context: "High-stakes applications requiring verified accuracy and provenance."
avoid_when: "Real-time applications with strict latency requirements; Closed-book tasks where parametric knowledge suffices; High-quality homogeneous corpora with consistent recall; Environments prohibiting external web access for supplementation; Simple factual queries with reliable standard RAG performance"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-448.png"
notion: "https://app.notion.com/p/Corrective-RAG-CRAG-60ea9aed534482e292fc81d81faa28e2"
---

## Why
RAG system that automatically detects and corrects poor retrieval results through quality assessment and re-retrieval. The pattern: enhanced RAG with explicit retrieval quality evaluation and corrective actions based on confidence scoring. Reduces hallucinations and improves accuracy through quality assessment and adaptive correction strategies.
**Key insight:** Three-tier correction strategy: refine high-confidence, supplement medium-confidence, re-retrieve low-confidence results

## How to implement
1. **Initial Retrieval** — Retrieve candidate documents using dense/sparse/hybrid search
1. **Quality Assessment** — Evaluate retrieval quality with confidence scoring (high/medium/low)
1. **Corrective Action** — Refine, supplement, or re-retrieve based on confidence band
1. **Knowledge Refinement** — Decompose and recompose evidence for optimal context
1. **Generate & Verify** — Generate response with citations and optional verification
- Example flow: `query → retrieve → evaluate_quality → [correct/supplement/re-retrieve] → refine → generate`
- **Do:** Implement explicit retrieval quality evaluator with calibrated confidence thresholds; Use knowledge refinement with decompose-then-recompose for evidence processing; Apply web search supplementation for medium confidence retrieval results; Enforce strict citation requirements with provenance tracking; Cache evaluator outputs and refined knowledge for efficiency
- **Don't:** Allow evaluator miscalibration without regular confidence score validation; Skip query drift prevention during corrective re-retrieval; Create unbounded correction loops without cost and latency controls; Mix outdated and fresh sources without temporal reconciliation; Neglect abstention mechanisms when confidence remains persistently low

## Metrics
Key metrics to track when applying this pattern:
  - Answer Faithfulness (Factual correctness and groundedness in retrieved evidence)
  - Evaluator Calibration (Accuracy of quality confidence predictions (ROC-AUC, ECE))
  - Correction Effectiveness (Quality improvement from corrective actions)
  - Retrieval Precision (Relevance of documents after correction)
  - Citation Coverage (Percentage of claims supported by evidence)
  - Action Distribution (Balance of use/supplement/re-retrieve decisions)
  **Proven use cases:**
  - Legal Research: Case law analysis requiring verified sources and temporal accuracy
  - Medical Q&A: Clinical decision support with evidence-based recommendations and safety checks
  - Financial Analysis: Market research combining real-time data with historical knowledge
  - Policy Research: Government and regulatory information requiring up-to-date accuracy
  - Technical Documentation: Software and API documentation with version-specific corrections
