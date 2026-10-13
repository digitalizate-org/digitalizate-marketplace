---
id: "AGP-113"
title: "METR RE-Bench (RE-Bench)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Evaluating frontier AI R&D automation capabilities."
avoid_when: "Standard ML benchmarking with public solutions; Classical machine learning task evaluation; Short-term capability assessment only; Environments without GPU/compute resources; Non-research engineering skill evaluation"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-520.png"
notion: "https://app.notion.com/p/METR-RE-Bench-RE-Bench-0dfa9aed5344832abde70132c40c3ecd"
---

## Why
Benchmark for measuring performance of frontier model agents on ML research engineering tasks, comparing against human expert capabilities. The pattern: mETR's benchmark comparing frontier AI agents against 71 human experts across 7 ML research engineering environments. Evaluates R&D automation capabilities highlighted as key risk in frontier AI safety policies.
**Key insight:** Agents achieve 4x human performance at 2h budget but humans outperform 2x at 32h - time scaling matters

## How to implement
1. **Setup** — Deploy 7 ML research engineering environments with GPU access
1. **Configure** — Set time budgets (2h, 8h, 32h) and scoring functions
1. **Evaluate** — Run agents on scaling laws, GPU kernels, and ML optimization tasks
1. **Compare** — Benchmark against 71 human expert attempts (61 distinct experts)
1. **Analyze** — Assess R&D automation capabilities vs human performance
- Example flow: `re_bench = REBench(environments=7, experts=71, models=[claude_3.5, o1_preview], budget="8h")`
- **Do:** Test across all 7 environments for comprehensive R&D capability assessment; Compare performance at multiple time budgets (2h, 8h, 32h); Focus on open-ended research engineering tasks, not classical ML; Provide GPU access for kernel optimization and scaling experiments; Use human expert baselines from 61 distinct researchers
- **Don't:** Expect agents to outperform humans on extended time budgets (32h); Focus only on short-term performance - humans show better scaling; Use publicly available solutions - benchmark designed to avoid this; Skip safety considerations for R&D automation capabilities; Ignore the 10x speed advantage agents have in solution generation

## Metrics
Key metrics to track when applying this pattern:
  - Expert Success Rate (82% of human experts achieved non-zero scores)
  - Strong Solution Match (24% of experts matched or exceeded reference solutions)
  - Short-term Agent Advantage (4x higher scores than humans at 2-hour budget)
  - Long-term Human Advantage (2x human scores vs top agents at 32-hour budget)
  - Solution Generation Speed (Agents generate/test solutions 10x faster than humans)
  - Cost Efficiency (Much lower cost per solution attempt for AI agents)
  **Proven use cases:**
  - AI Safety Research: Evaluating R&D automation risks as highlighted in frontier AI safety policies
  - Research Capability Assessment: Measuring agent performance on scaling laws, GPU kernel optimization
  - Human-AI Comparison: Direct benchmarking against 71 expert attempts across multiple time budgets
  - Autonomous R&D Evaluation: Testing frontier models (Claude 3.5 Sonnet, o1-preview) on research tasks
  - Policy and Governance: Supporting White House NSM and EU AI Act evaluations for R&D capabilities
