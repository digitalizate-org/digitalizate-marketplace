---
id: "AGP-006"
title: "AISI Evaluation Framework (AISI-Eval)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Frontier AI model deployment."
avoid_when: "Low-risk AI applications; Non-frontier model evaluation; Simple automation tasks; Resource-constrained environments"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-512.png"
notion: "https://app.notion.com/p/AISI-Evaluation-Framework-AISI-Eval-f76a9aed5344837fad1f016e9ee6845d"
---

## Why
AI Safety Institute's comprehensive evaluation framework for frontier AI systems, integrating with NIST ARIA program for government-standard safety assessment. The pattern: government-standard evaluation framework for frontier AI systems with three-tier progressive testing. Ensures systematic safety assessment before deployment, enables international coordination, prevents high-risk AI misuse.
**Key insight:** Capability thresholds + Expert red-teaming + Preregistered evaluation = Safe frontier AI deployment

## How to implement
1. **Risk Model** — Define threat scenarios & capability thresholds
1. **Tier Testing** — Automated → Manual → Expert red-teaming
1. **Evaluate** — Capability, misuse, societal impact assessment
1. **Threshold** — Compare results against safety thresholds
1. **Decision** — Deploy, mitigate, or restrict based on assessment
- Example flow: `preregister → tier_1_auto → tier_2_manual → tier_3_expert → safety_decision`
- **Do:** Preregister evaluation design before testing; Use three-tier progressive evaluation system; Combine automated and expert red-teaming; Test for capability thresholds indicating severe risks; Implement rigorous information security protocols
- **Don't:** Rely solely on automated evaluations for high-risk models; Skip expert red-teaming for frontier systems; Ignore societal impact and misuse potential; Deploy without meeting safety threshold requirements; Overlook international coordination standards

## Metrics
Key metrics to track when applying this pattern:
  - Capability Score (Autonomous capability assessment (0-100%))
  - Misuse Potential (Risk of malicious use exploitation)
  - Safety Threshold (Pass/fail against predefined limits)
  - Expert Assessment (Red-team evaluation outcomes)
  - Societal Impact (Broad societal risk evaluation)
  - Compliance Rate (International standard adherence)
  **Proven use cases:**
  - Frontier AI Safety Assessment: GPT-5/Claude-4 level models requiring government approval
  - International Coordination: Multi-country safety evaluation protocols (UK-US-EU)
  - Regulatory Compliance: Meeting AI Safety Institute requirements for deployment
  - Capability Threshold Testing: Identifying dangerous autonomous capabilities
  - Red-team Security Assessment: Expert-led adversarial testing for misuse prevention
