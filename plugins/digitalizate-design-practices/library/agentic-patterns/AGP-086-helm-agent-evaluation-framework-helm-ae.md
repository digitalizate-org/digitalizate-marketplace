---
id: "AGP-086"
title: "HELM Agent Evaluation Framework (HELM-AE)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Comprehensive model comparison across multiple dimensions."
avoid_when: "Quick single-metric performance checks; Domain-specific benchmarks outside HELM scenarios; Real-time evaluation needs (computationally intensive); Custom evaluation scenarios without standardization needs; Budget-constrained evaluation (requires significant compute)"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-517.png"
notion: "https://app.notion.com/p/HELM-Agent-Evaluation-Framework-HELM-AE-2f7a9aed534482c4b0c401cca4da8958"
---

## Why
Stanford CRFM's Holistic Evaluation of Language Models extended for agent capabilities, measuring 7 metrics across multimodal tasks, tool use, and simulation environments. The pattern: stanford CRFM's holistic framework evaluating agents across 7 metrics and 42 scenarios. Moves beyond accuracy to comprehensive assessment including fairness, robustness, and efficiency trade-offs.
**Key insight:** Reveals critical trade-offs between metrics and ensures non-accuracy dimensions aren't second-class citizens

## How to implement
1. **Install** — pip install crfm-helm for holistic evaluation framework
1. **Configure** — Set up scenarios across 16 core domains with 7 metrics
1. **Evaluate** — Run comprehensive assessment including multimodal and tool use
1. **Analyze** — Review holistic metrics beyond accuracy (fairness, robustness, etc.)
1. **Compare** — Benchmark against 30+ models with standardized evaluation
1. **Accuracy**
1. **Calibration**
1. **Robustness**
1. **Fairness**
1. **Bias**
1. **Toxicity**
1. **Efficiency**
- Example flow: `helm-run --model gpt-4 --scenarios core --metrics all --output evaluation_report.json`
- **Do:** Evaluate across all 7 metrics, not just accuracy for holistic assessment; Use standardized scenarios (16 core + 26 targeted) for consistency; Include multimodal and tool use capabilities in evaluation; Test robustness with perturbations and fairness across groups; Leverage HELM Lite for streamlined yet comprehensive evaluation
- **Don't:** Focus solely on accuracy - other metrics reveal critical trade-offs; Skip calibration testing if model exposes probability outputs; Ignore efficiency metrics for production deployment decisions; Use custom scenarios without standardized comparison baselines; Overlook bias and toxicity assessment for responsible deployment

## Metrics
Key metrics to track when applying this pattern:
  - Holistic Score (Aggregate performance across all 7 dimensions)
  - Scenario Coverage (Performance across 16 core + 26 targeted scenarios)
  - Trade-off Analysis (Correlation patterns between different metrics)
  - Multimodal Capability (Text-to-image and vision-language performance)
  - Tool Use Proficiency (External API integration and plugin effectiveness)
  - Simulation Environment Success (End-to-end task completion in realistic settings)
  **Proven use cases:**
  - Academic Model Comparison: Standardized evaluation across 30+ models with transparent methodology
  - Enterprise AI Selection: Holistic assessment beyond accuracy for responsible deployment decisions
  - Responsible AI Development: Comprehensive bias, fairness, and toxicity evaluation frameworks
  - Multimodal Agent Testing: Vision-language and tool use capability assessment for complex applications
  - Research Benchmarking: Reproducible evaluation framework for foundation model research publications
