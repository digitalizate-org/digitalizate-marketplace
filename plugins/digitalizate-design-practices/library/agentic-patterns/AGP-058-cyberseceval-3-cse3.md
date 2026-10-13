---
id: "AGP-058"
title: "CybersecEval 3 (CSE3)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Security assessment of autonomous LLM agents."
avoid_when: "General performance benchmarking (non-security focused); Models without cybersecurity risk considerations; Environments without proper security monitoring; Academic research without ethical oversight; Systems not requiring autonomous security evaluation"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-514.png"
notion: "https://app.notion.com/p/CybersecEval-3-CSE3-600a9aed5344820d8e438187cb312c77"
---

## Why
Meta's comprehensive cybersecurity benchmark for evaluating security risks of LLM agents in autonomous and multi-agent settings. The pattern: meta's comprehensive cybersecurity benchmark evaluating 8 risks across autonomous and multi-agent scenarios. Assesses offensive capabilities including social engineering, vulnerability discovery, and autonomous cyber operations.
**Key insight:** Llama 3 405B outperforms GPT-4 Turbo by 23% in vulnerability exploitation while requiring Llama Guard 3 mitigation

## How to implement
1. **Setup** — Install CybersecEval 3 framework and dependencies
1. **Configure** — Set up 8 risk assessment categories for evaluation
1. **Test** — Run autonomous and multi-agent security scenarios
1. **Guard** — Deploy Llama Guard 3 for risk mitigation
1. **Analyze** — Review offensive/defensive capability assessments
- Example flow: `cybersec_eval = CybersecEval3(model=llm, risks=all_8, guardrails=llama_guard_3)`
- **Do:** Test across all 8 risk categories for comprehensive security assessment; Deploy Llama Guard 3 to detect and block cyberattack aid requests; Evaluate both autonomous and multi-agent offensive capabilities; Monitor for social engineering and spear-phishing attack generation; Assess vulnerability discovery and exploitation capabilities
- **Don't:** Deploy models without proper guardrails and monitoring systems; Ignore third-party risks from autonomous offensive operations; Skip evaluation of manual cyber-operation scaling capabilities; Overlook application developer and end-user security risks; Assume offensive capabilities won't be misused without mitigation

## Metrics
Key metrics to track when applying this pattern:
  - Third-Party Risk Score (Assessment across 4 offensive capability categories)
  - Developer/End-User Risk (Security risks to application developers and users)
  - Autonomous Hacking Capability (Success rate in autonomous cyber operation challenges)
  - Vulnerability Discovery Rate (Effectiveness at finding and exploiting software vulnerabilities)
  - Social Engineering Success (Ability to generate persuasive spear-phishing attacks)
  - Guardrail Effectiveness (Llama Guard 3 detection and blocking success rate)
  **Proven use cases:**
  - Security Research: Evaluating Llama 3 405B vulnerability discovery capabilities (23% better than GPT-4 Turbo)
  - Risk Mitigation: Deploying Llama Guard 3 to detect and block cyberattack aid requests in production
  - Autonomous Agent Security: Testing multi-agent frameworks for offensive cyber operation capabilities
  - Social Engineering Assessment: Evaluating spear-phishing attack generation and personalized deception risks
  - Enterprise Security: Pre-deployment cybersecurity validation for LLM-based applications and services
