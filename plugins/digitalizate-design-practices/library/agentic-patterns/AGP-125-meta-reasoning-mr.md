---
id: "AGP-125"
title: "Meta-Reasoning (MR)"
category: "Agentic Patterns"
subcategory: "Planning & Execution"
score: 3
context: "Complex multi-domain problems."
avoid_when: "Simple, well-defined tasks; Real-time low-latency requirements; Single optimal strategy exists; Limited computational resources; Deterministic environments; Basic query-response systems"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-391.png"
notion: "https://app.notion.com/p/Meta-Reasoning-MR-080a9aed534482d9bc39815a0c7656f9"
---

## Why
Higher-order reasoning about reasoning processes, including strategy selection and monitoring. The pattern: aI system that monitors and optimizes its own reasoning processes. Enables adaptive intelligence, strategy selection, and self-improvement in complex domains.
**Key insight:** Three-layer architecture: Object-level execution → Monitor layer → Meta-reasoning layer for optimal strategy selection

## How to implement
1. **Monitor Layer** — Track performance, resources, decision quality
1. **Evaluate Strategy** — Assess current reasoning approach effectiveness
1. **Select Method** — Choose optimal reasoning strategy for task
1. **Execute & Monitor** — Apply strategy while tracking progress
1. **Adapt & Learn** — Switch strategies if needed, update preferences
- Example flow: `detect_problem → assess_confidence → select_strategy → execute → monitor → adapt`
- **Do:** Implement three-layer architecture: Object → Monitor → Meta; Track confidence scores and decision quality metrics; Use strategy selection based on task characteristics; Monitor resource usage and computational efficiency; Build strategy performance history for learning; Implement graceful failure handling and recovery
- **Don't:** Add meta-reasoning to every simple task (overhead); Ignore computational cost of meta-reasoning layer; Use generic confidence without domain calibration; Skip strategy switching when clearly underperforming; Implement without clear meta-cognitive questions

## Metrics
Key metrics to track when applying this pattern:
  - Strategy Selection Accuracy (% optimal strategy chosen)
  - Task Completion Rate (% tasks completed successfully)
  - Decision Quality Score (Weighted outcome quality (0-1))
  - Adaptation Speed (Time to switch strategies)
  - Resource Efficiency (Performance/computational_cost)
  - Confidence Calibration (Predicted vs actual success rate)
  - Learning Rate (Strategy improvement over time)
  - Meta-Reasoning Overhead (% additional computation vs direct)
  **Proven use cases:**
  - Autonomous Systems: Self-driving cars adapting to weather/traffic conditions
  - Medical Diagnosis: Switching between diagnostic approaches based on symptoms
  - Financial Trading: Adapting strategies based on market volatility
  - Multi-Modal AI: Choosing between vision, text, audio processing strategies
  - Research Assistance: Selecting search/analysis methods based on query type
