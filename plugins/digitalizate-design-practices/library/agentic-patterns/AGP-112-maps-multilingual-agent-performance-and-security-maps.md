---
id: "AGP-112"
title: "MAPS: Multilingual Agent Performance & Security (MAPS)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Global AI agent deployment."
avoid_when: "English-only applications; Single-language deployments; Non-agentic AI systems; Simple translation tasks"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-519.png"
notion: "https://app.notion.com/p/MAPS-Multilingual-Agent-Performance-Security-MAPS-d9aa9aed5344825baac2011f4e7b89f7"
---

## Why
Comprehensive multilingual benchmark for agentic AI performance and security evaluation across 12 languages, addressing critical gaps in non-English agent assessment. The pattern: first standardized evaluation framework for multilingual agentic AI across 11 languages with 805 unique tasks. Identifies critical performance and security gaps in non-English deployments, enables equitable global AI systems.
**Key insight:** Performance degrades 15-40% in non-English languages with security vulnerabilities increasing significantly

## How to implement
1. **Language Select** — Choose from 11 supported languages
1. **Task Setup** — Configure GAIA, SWE-bench, MATH, ASB tasks
1. **Performance Test** — Evaluate task completion & reasoning
1. **Security Test** — ASB adversarial & jailbreak resistance
1. **Compare** — Analyze performance gap vs English baseline
- Example flow: `english_baseline → translate_tasks → multi_lang_eval → security_test → gap_analysis`
- **Do:** Test across all 11 supported languages for comprehensive coverage; Use Agent Security Benchmark (ASB) for robustness testing; Measure both performance and security degradation; Correlate results with amount of translated input; Include typologically diverse language families
- **Don't:** Rely solely on English evaluation for global deployment; Ignore cultural and linguistic bias detection; Skip adversarial testing in non-English languages; Assume uniform performance across all languages; Overlook prompt injection in multilingual contexts

## Metrics
Key metrics to track when applying this pattern:
  - Language Parity (Performance ratio vs English baseline (0-1))
  - Task Completion Rate (Success rate across multilingual tasks)
  - Security Degradation (ASB safety violation increase vs English)
  - Cultural Bias Score (Bias detection across language groups)
  - Translation Correlation (Performance vs translated input ratio)
  - Cross-lingual Robustness (Adversarial resistance across languages)
  **Proven use cases:**
  - Global Enterprise Deployment: Multi-language customer service agents with consistent performance
  - Cultural Bias Detection: Identifying and mitigating biases in AI responses across cultures
  - International Compliance: Meeting regulatory requirements across different linguistic regions
  - Multilingual Security Testing: Evaluating jailbreak resistance in non-English languages
  - Educational AI Systems: Ensuring equitable performance across diverse student populations
