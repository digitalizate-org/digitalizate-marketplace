---
id: "AGP-126"
title: "Metacognitive Monitoring (MCM)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "High-stakes decisions requiring reliability."
avoid_when: "Simple, well-defined problems; Highly time-sensitive applications; When reasoning patterns are stable; Resource-constrained environments; Routine/repetitive tasks"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-365.png"
notion: "https://app.notion.com/p/Metacognitive-Monitoring-MCM-c54a9aed53448370b34b01d1727b2ba0"
---

## Why
Self-awareness and monitoring of reasoning quality and confidence. The pattern: continuous self-awareness and strategy adjustment during reasoning processes. Enables adaptive problem-solving through confidence tracking, error detection, and method switching.
**Key insight:** Monitor reasoning quality → Detect low confidence/errors → Adapt strategy → Validate improvements

## How to implement
1. **Self-Awareness** — Monitor reasoning process & confidence levels
1. **Strategy Check** — Evaluate current approach effectiveness
1. **Error Detection** — Identify potential mistakes or gaps
1. **Adapt Method** — Switch strategies when needed
1. **Validate Result** — Cross-check solution quality
- Example flow: `Problem → Monitor confidence → "Low confidence, switch strategy" → New approach → Validate`
- **Do:** Continuously assess reasoning confidence levels; Implement explicit strategy evaluation checkpoints; Use calibrated confidence scoring (0-100%); Build error detection patterns for common mistakes; Create strategy switching triggers and fallbacks
- **Don't:** Monitor without acting on low confidence signals; Use vague confidence assessments ("maybe", "probably"); Skip validation when switching reasoning strategies; Ignore consistent pattern of reasoning failures; Over-monitor simple tasks (cognitive overhead)

## Metrics
Key metrics to track when applying this pattern:
  - Confidence Calibration (Alignment between confidence and actual accuracy)
  - Error Detection Rate (Percentage of mistakes caught before final answer)
  - Strategy Switch Success (Improvement after method adaptation)
  - Monitoring Overhead (Additional computational cost vs benefit)
  - Self-Correction Accuracy (Quality of reasoning adjustments)
  - Adaptation Speed (Time to recognize and change ineffective strategies)
  **Proven use cases:**
  - Medical Diagnosis: Monitor confidence → "Low confidence on rare disease" → Switch to specialist consultation mode
  - Financial Analysis: Track reasoning quality → Detect overconfidence in predictions → Apply conservative adjustments
  - Code Review: Monitor understanding → "Complex logic, low confidence" → Request additional validation steps
  - Research Synthesis: Assess source integration → Identify knowledge gaps → Adapt search strategy
  - Strategic Planning: Monitor assumption validity → Detect weak reasoning → Strengthen analysis foundation
