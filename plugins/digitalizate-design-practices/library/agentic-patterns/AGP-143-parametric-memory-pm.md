---
id: "AGP-143"
title: "Parametric Memory (PM)"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 3
context: "Stable domain knowledge required."
avoid_when: "Rapidly changing information; Regulatory compliance updates; Real-time data integration; User-specific customization; Frequent knowledge updates"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-409.png"
notion: "https://app.notion.com/p/Parametric-Memory-PM-616a9aed5344836a8f16810080f3396a"
---

## Why
Knowledge implicitly stored within model parameters, enabling fast context-free knowledge retrieval for multi-agent agentic AI systems. The pattern: knowledge implicitly stored within model parameters, enabling fast context-free access. Sub-millisecond retrieval, no external dependencies, consistent across agents, scales to 1000+ agents.
**Key insight:** Pre-trained knowledge → PEFT specialization → shared base parameters across agent network

## How to implement
1. **Pre-train** — Embed domain knowledge in model weights
1. **Fine-tune** — Use PEFT methods (LoRA, QLoRA) for efficiency
1. **Specialize** — Create agent-specific parameter branches
1. **Share Base** — Common foundation across agent network
1. **Monitor** — Track knowledge access & parameter usage
- Example flow: `base_llm → domain_finetune → agent_specialization → shared_deployment`
- **Do:** Use parameter-efficient fine-tuning (LoRA, QLoRA, MoRA); Share base parameters across agent network for consistency; Monitor parameter specialization patterns for knowledge storage; Implement knowledge consolidation to prevent parameter bloat; Version control model parameters for rollback capability
- **Don't:** Full parameter retraining for new knowledge (expensive & risky); Store time-sensitive information in parametric memory; Ignore knowledge cutoff dates and factual accuracy degradation; Deploy without parameter redundancy for fault tolerance; Mix incompatible parameter versions across agent instances

## Metrics
Key metrics to track when applying this pattern:
  - Knowledge Accuracy (% correct factual responses)
  - Inference Speed (Tokens/second generation rate)
  - Parameter Efficiency (Knowledge/parameter ratio)
  - Consistency Score (Cross-agent response similarity)
  - Memory Footprint (GB required per agent)
  - Update Cost ($ per knowledge refresh cycle)
  **Proven use cases:**
  - Scientific Research Agents: Physics, chemistry, biology knowledge embedded (consistent across 100+ agents)
  - Legal Document Analysis: Case law, statutes, procedures in parameters (instant access, no external DB)
  - Medical Diagnosis Support: Medical knowledge, drug interactions, symptoms (HIPAA-compliant, offline)
  - Financial Analysis: Market fundamentals, accounting principles, regulations (real-time inference)
  - Code Generation: Programming languages, frameworks, best practices (multi-language consistency)
