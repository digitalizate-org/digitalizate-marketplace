---
id: "AGP-020"
title: "Agentic RAG (AgRAG)"
category: "Agentic Patterns"
subcategory: "Knowledge Retrieval (RAG)"
score: 3
context: "Complex multi-step research requiring strategic information gathering."
avoid_when: "Simple factual queries adequately served by standard RAG approaches; Real-time applications with strict latency and cost constraints; Domains with limited tool availability or API access restrictions; Applications where deterministic retrieval behavior is required; Resource-constrained environments unable to support complex agent reasoning"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-447.png"
notion: "https://app.notion.com/p/Agentic-RAG-AgRAG-8ada9aed534483d8823101d5cba7508d"
---

## Why
Autonomous retrieval-augmented generation systems with self-directed planning, retrieval, and reasoning capabilities. The pattern: autonomous agent systems that dynamically plan, execute, and adapt multi-step retrieval strategies using tools and reasoning. Enables complex information gathering workflows that require strategic thinking, adaptation, and multi-source synthesis.
**Key insight:** ReAct-style planning with tool orchestration allows agents to reason about retrieval strategies and adapt based on results

## How to implement
1. **Agent Planning** — Decompose complex queries into multi-step retrieval plans with reasoning
1. **Tool Orchestration** — Execute retrieval actions using specialized tools (search, DB, APIs)
1. **Dynamic Adaptation** — Adapt strategy based on intermediate results and feedback
1. **Evidence Synthesis** — Integrate multi-source evidence with reasoning chains
1. **Response Generation** — Generate final answer with full citation and reasoning trace
- Example flow: `complex_query → plan_decomposition → [retrieve_1, retrieve_2, ...] → adapt_strategy → synthesize → response`
- **Do:** Implement explicit planning with ReAct or function calling for retrieval strategies; Use tool-augmented retrieval with specialized APIs, search engines, and databases; Enable adaptive query refinement based on intermediate retrieval results; Maintain detailed reasoning traces and citation provenance throughout execution; Implement error recovery and alternative retrieval strategies for failed attempts
- **Don't:** Allow uncontrolled agent loops without termination conditions or cost limits; Skip validation of retrieved information quality and source credibility; Ignore user intent drift during multi-step retrieval processes; Rely solely on single retrieval modality without exploring alternatives; Neglect privacy and security considerations for sensitive information retrieval

## Metrics
Key metrics to track when applying this pattern:
  - Plan Execution Success (Percentage of agent plans successfully completed without errors)
  - Retrieval Strategy Effectiveness (Quality improvement from adaptive vs fixed retrieval strategies)
  - Evidence Synthesis Quality (Coherence and completeness of multi-source information integration)
  - Reasoning Trace Fidelity (Accuracy and explainability of step-by-step reasoning chains)
  - Tool Utilization Efficiency (Optimal use of available retrieval tools and APIs)
  - Cost-Quality Tradeoff (Answer quality per unit computational cost and API calls)
  **Proven use cases:**
  - Research Intelligence: Scientific literature review with adaptive search strategies and cross-reference validation
  - Business Analysis: Market research combining financial data, news, and industry reports with strategic reasoning
  - Legal Discovery: Case law research with multi-jurisdictional search and precedent analysis workflows
  - Technical Investigation: Software debugging and troubleshooting with dynamic tool selection and reasoning
  - Medical Diagnosis Support: Clinical decision support with evidence gathering from multiple medical databases
