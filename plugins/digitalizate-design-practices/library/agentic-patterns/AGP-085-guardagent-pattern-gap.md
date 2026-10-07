---
id: "AGP-085"
title: "GuardAgent Pattern (GAP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Autonomous agent deployments."
avoid_when: "Simple, low-risk tasks; Extreme latency requirements; Stateless operations only; Resource-constrained environments"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-497.png"
notion: "https://app.notion.com/p/GuardAgent-Pattern-GAP-166a9aed534483788bc201b8153b8d22"
---

## Why
Dedicated guardrail agent monitoring and protecting target agents through dynamic safety checks. The pattern: dedicated guard agent monitors target agents through dynamic safety check generation. Self-monitoring fails; external validation with deterministic code ensures 98%+ accuracy.
**Key insight:** Safety requirements → Task plan → Executable code → Real-time enforcement

## How to implement
1. **Analyze Request** — Parse safety guard requirements & constraints
1. **Generate Plan** — Create task plan from safety requirements
1. **Map to Code** — Convert plan into executable guardrail code
1. **Execute & Monitor** — Run code to validate agent actions
1. **Block/Allow** — Deterministic decision based on validation
- Example flow: `safety_analysis → task_planning → code_generation → execution → enforcement`
- **Do:** Use dedicated monitoring agents separate from target agents; Generate deterministic code for consistent enforcement; Implement comprehensive action logging and audit trails; Define clear safety requirements in natural language; Test guardrails independently before deployment
- **Don't:** Let target agents self-monitor without external validation; Rely on probabilistic checks for critical safety; Skip validation of generated guardrail code; Allow guardrail bypass for "trusted" operations; Ignore performance impact on target agent latency

## Metrics
Key metrics to track when applying this pattern:
  - Guardrail Accuracy (% correct safety decisions (98%+))
  - False Positives (Valid actions blocked incorrectly)
  - Response Time (ms to validate each action)
  - Code Generation (Time to create guardrail logic)
  - Coverage (% of agent actions monitored)
  - Violation Rate (Safety violations per 1000 actions)
  **Proven use cases:**
  - Financial Trading: Monitor trades for limits, restricted securities, risk thresholds
  - Healthcare AI: Validate medical recommendations against safety protocols & regulations
  - Autonomous Systems: Ensure robots/vehicles operate within physical & ethical bounds
  - Content Generation: Block harmful, biased, or policy-violating outputs in real-time
  - Data Processing: Prevent unauthorized access, ensure privacy compliance in pipelines
