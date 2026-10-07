---
id: "AGP-172"
title: "Sequential Pipeline Agents (SPA)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 3
context: "Multi-step workflows with distinct phases."
avoid_when: "Simple single-step tasks; Highly interactive or conversational flows; Real-time systems requiring low latency; Tasks requiring dynamic branching or loops; When stage dependencies are unclear"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-399.png"
notion: "https://app.notion.com/p/Sequential-Pipeline-Agents-SPA-66ca9aed53448219984b81b18589a873"
---

## Why
Specialized agents process tasks in a linear pipeline where each agent's output becomes the next agent's input. The pattern: specialized agents process tasks sequentially where each agent's output feeds the next agent's input. Enables expertise specialization, quality control gates, independent optimization, and clear error isolation per stage.
**Key insight:** Linear agent pipeline with validation checkpoints - each stage optimized for specific capabilities

## How to implement
1. **Design Stages** — Define specialized agent roles & capabilities
1. **Define Interfaces** — Standardize input/output schemas between agents
1. **Implement Pipeline** — Chain agents with validation & error handling
1. **Add Checkpoints** — Quality gates & fallback mechanisms
1. **Monitor Flow** — Track performance & bottlenecks per stage
- Example flow: `ResearchAgent → ContentAgent → EditorAgent → ReviewAgent → PublishAgent`
- **Do:** Design agents for single, specialized responsibilities; Use structured data formats between agents (JSON/schemas); Implement quality checkpoints at each stage transition; Add circuit breakers for failed stages; Log detailed execution traces for debugging; Cache intermediate results for expensive stages
- **Don't:** Create monolithic agents handling multiple concerns; Allow unstructured data to flow between stages; Skip validation between pipeline stages; Let pipeline failures cascade without recovery; Ignore stage-specific performance bottlenecks

## Metrics
Key metrics to track when applying this pattern:
  - Pipeline Success Rate (End-to-end completion percentage)
  - Stage Performance (Latency & throughput per agent)
  - Quality Gates (Validation success rate at checkpoints)
  - Error Recovery (Failed stage recovery percentage)
  - Resource Utilization (Compute/API costs per stage)
  - Bottleneck Analysis (Slowest stage identification)
  **Proven use cases:**
  - Content Production: Research → Draft → Edit → Review → Publish (journalism, marketing)
  - Data Processing: Extract → Transform → Validate → Enrich → Load (ETL pipelines)
  - Code Review: Parse → Analyze → Test → Review → Merge (software development)
  - Document Analysis: OCR → Extract → Classify → Summarize → Archive (legal, finance)
  - Scientific Analysis: Data Collection → Processing → Analysis → Validation → Reporting
