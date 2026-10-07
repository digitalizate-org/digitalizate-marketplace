---
id: "AGP-065"
title: "EU AI Act Compliance Framework (EU-AIACT)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "AI agent deployment in EU market or serving EU citizens."
avoid_when: "Non-EU deployments without EU citizen impact; Minimal risk AI systems (games, spam filters, basic applications); Internal R&D without market deployment; Academic research under specific exemptions; Legacy systems with extended transition periods (until August 2027)"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-515.png"
notion: "https://app.notion.com/p/EU-AI-Act-Compliance-Framework-EU-AIACT-c89a9aed534483ea873201fb18789498"
---

## Why
European Union regulatory framework for AI agent evaluation with risk-based classification, GPAI model requirements, and mandatory compliance for deployment in EU. The pattern: european Union regulatory framework for AI agent evaluation with risk-based classification, GPAI model requirements, and mandatory compliance for deployment in EU. Comprehensive legal framework classifying AI systems into 4 risk tiers with specific obligations for systemic risk models exceeding 10^25 FLOPs.
**Key insight:** 11 global providers exceed GPAI threshold - mandatory red teaming, cybersecurity protection, and 2-week notification required since August 2024

## How to implement
1. **Classify** — Determine AI system risk level: Prohibited, High-Risk, Limited Risk, or Minimal Risk
1. **Assess** — For GPAI models >10^25 FLOPs: notify EU Commission within 2 weeks
1. **Evaluate** — Conduct adversarial testing and red teaming per standardized protocols
1. **Secure** — Implement cybersecurity protections and systematic risk mitigation
1. **Document** — Maintain compliance records and report serious incidents to AI Office
- Example flow: `eu_compliance = EUAIAct(system=ai_agent, flops=compute_threshold, risk_level="high", red_team=True)`
- **Do:** Classify AI systems using 4-tier risk framework (Prohibited/High/Limited/Minimal); Notify EU Commission within 2 weeks if GPAI model exceeds 10^25 FLOPs threshold; Conduct mandatory adversarial testing and red teaming for systemic risk models; Implement comprehensive cybersecurity protections against data/model poisoning; Maintain technical documentation and transparency for high-risk systems
- **Don't:** Deploy prohibited AI systems (social scoring, manipulation, biometric categorization); Skip Code of Practice compliance for GPAI models (voluntary but recommended); Ignore serious incident reporting requirements to AI Office; Underestimate implementation timeline - full enforcement starts August 2026; Deploy without proper AI literacy training for users and stakeholders

## Metrics
Key metrics to track when applying this pattern:
  - Risk Classification Accuracy (Correct categorization into Prohibited/High/Limited/Minimal risk tiers)
  - GPAI Model Compliance (11 global providers currently exceed 10^25 FLOPs threshold)
  - Red Teaming Coverage (Systematic adversarial testing documenting risk identification and mitigation)
  - Cybersecurity Protection (Defense against data poisoning, model evasion, adversarial attacks)
  - Incident Response Rate (Timely reporting of serious incidents to EU AI Office)
  - Transparency Compliance (User awareness of AI interaction and technical documentation quality)
  **Proven use cases:**
  - Regulatory Compliance: Mandatory framework for AI agents serving EU market since August 2024
  - GPAI Model Evaluation: 11 global providers must comply with 10^25 FLOPs threshold requirements
  - Enterprise Risk Management: Systematic classification and mitigation for high-risk AI systems
  - Cybersecurity Assessment: Comprehensive protection against AI-specific attack vectors and vulnerabilities
  - International Standards: Reference framework influencing global AI governance and regulatory alignment
