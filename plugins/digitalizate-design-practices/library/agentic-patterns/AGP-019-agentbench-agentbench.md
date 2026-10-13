---
id: "AGP-019"
title: "AgentBench (AgentBench)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Comprehensive LLM agent capability assessment."
avoid_when: "Quick single-domain performance checks; Resource-constrained environments (requires 4k-13k generations); Real-time evaluation needs; Domain-specific benchmarking only; Models without multi-turn conversation support"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-511.png"
notion: "https://app.notion.com/p/AgentBench-AgentBench-839a9aed5344827281ab814c902534d5"
---

## Why
The first comprehensive benchmark to evaluate LLMs as agents across 8 diverse environments, assessing reasoning and decision-making in multi-turn open-ended settings. The pattern: first comprehensive benchmark evaluating LLMs as agents across 8 diverse environments. Systematic assessment of reasoning, decision-making, and multi-turn interaction capabilities in realistic settings.
**Key insight:** Reveals significant performance gaps between commercial and open-source models in complex agent tasks

## How to implement
1. **Install** — git clone [https://github.com/THUDM/AgentBench](https://github.com/THUDM/AgentBench)
1. **Setup** — Configure API keys and environment dependencies
1. **Select** — Choose evaluation environments (1-8)
1. **Run** — Execute benchmark against your LLM agent
1. **Analyze** — Review performance across environments
- Example flow: `python run.py --model gpt-4 --environments all --output results.json`
- **Do:** Test across all 8 environments for comprehensive evaluation; Allow sufficient time for multi-turn interactions (4k-13k generations); Compare results against established baselines (GPT-4, Claude); Focus on long-term reasoning and decision-making capabilities; Analyze failure modes in complex multi-step tasks
- **Don't:** Rely on single environment results for overall capability assessment; Skip proper environment setup and dependency configuration; Ignore instruction following quality in favor of task completion; Compare models without controlling for prompt engineering; Assume good performance in one domain transfers to others

## Metrics
Key metrics to track when applying this pattern:
  - Overall Success Rate (Aggregate performance across all 8 environments)
  - Per-Environment Score (Domain-specific capability assessment)
  - Multi-turn Coherence (Consistency across conversation turns)
  - Instruction Following (Adherence to task specifications)
  - Long-term Reasoning (Performance on extended reasoning tasks)
  - API vs OSS Gap (Commercial vs open-source model comparison)
  **Proven use cases:**
  - LLM Agent Research: Comprehensive evaluation of reasoning and decision-making across diverse domains
  - Model Comparison: Systematic benchmarking of API-based vs open-source models (up to 70B parameters)
  - Capability Assessment: Identifying specific strengths/weaknesses in SQL, gaming, web, and OS environments
  - Academic Research: Supporting publications on agent capabilities and multi-turn interaction quality
  - Agent Development: Guiding improvements in long-term reasoning and instruction following
