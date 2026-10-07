---
id: "AGP-035"
title: "Constitutional AI Evaluation Framework (CAI-Eval)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Production AI safety requirements."
avoid_when: "Internal development tools only; Non-safety-critical applications; Resource-constrained environments; Research-only systems"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-513.png"
notion: "https://app.notion.com/p/Constitutional-AI-Evaluation-Framework-CAI-Eval-d06a9aed5344831dbe3301ec710c20dd"
---

## Why
Anthropic's framework for evaluating AI safety through constitutional principles, including jailbreak resistance testing and harmlessness assessment. The pattern: anthropic's framework for evaluating AI safety through constitutional principles with jailbreak resistance testing. Provides robust defense against adversarial attacks while maintaining transparent, principle-based AI alignment.
**Key insight:** Constitutional Classifiers achieve 95.6% jailbreak blocking vs 14% baseline with only 0.38% over-refusal

## How to implement
1. **Constitution** — Define principles & rules for AI behavior
1. **Classifiers** — Train input/output constitutional classifiers
1. **Red Team** — Conduct extensive adversarial testing
1. **Evaluate** — Measure jailbreak resistance & harmlessness
1. **Deploy** — Guard production systems with classifiers
- Example flow: `constitution → classifier_training → red_team_testing → jailbreak_eval → production_deploy`
- **Do:** Use both input and output classifiers for comprehensive protection; Conduct extensive red team testing (3000+ hours); Test against synthetic and human-generated jailbreaks; Balance safety with usability (monitor over-refusal rates); Use constitutional principles for transparent AI alignment
- **Don't:** Rely solely on base model safety without additional protection; Skip evaluation of computational overhead costs; Ignore edge cases and creative jailbreak attempts; Deploy without measuring over-refusal impact on users; Assume classifiers prevent all universal jailbreaks

## Metrics
Key metrics to track when applying this pattern:
  - Jailbreak Success Rate (Percentage of successful attacks (target <5%))
  - Over-refusal Rate (False positive safety blocks (target <1%))
  - Constitutional Adherence (Compliance with defined principles (0-10))
  - Red Team Resistance (Performance against human adversaries)
  - Computational Overhead (Additional processing cost (+20-30%))
  - Universal Jailbreak Detection (Cross-query attack prevention)
  **Proven use cases:**
  - Enterprise AI Safety: Production chatbots with 95%+ jailbreak resistance for customer service
  - Educational AI Platforms: Safe AI tutors preventing harmful content generation for students
  - Healthcare AI Systems: Constitutional compliance for medical advice and patient interaction
  - Content Moderation: AI moderators with robust adversarial attack resistance
  - Government AI Services: Public-facing AI with transparency and constitutional alignment
