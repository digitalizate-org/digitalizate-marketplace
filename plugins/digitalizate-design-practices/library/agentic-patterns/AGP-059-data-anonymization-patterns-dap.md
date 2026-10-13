---
id: "AGP-059"
title: "Data Anonymization Patterns (DAP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Multi-agent federated learning."
avoid_when: "Already encrypted data at rest; Internal single-agent processing; Public domain datasets; Real-time streaming requirements"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-495.png"
notion: "https://app.notion.com/p/Data-Anonymization-Patterns-DAP-224a9aed5344826692fa015da6ce30bc"
---

## Why
Comprehensive data anonymization techniques including K-anonymity, L-diversity, T-closeness, and synthetic data generation for agentic systems. The pattern: comprehensive data anonymization techniques including K-anonymity, L-diversity, T-closeness, and synthetic data generation for agentic systems. Protects individual privacy, enables safe data sharing, supports federated learning, and ensures regulatory compliance.
**Key insight:** Multi-layered anonymization + synthetic generation + federated processing → privacy-preserving agent collaboration

## How to implement
1. **Data Classification** — Identify PII, quasi-identifiers, sensitive attributes
1. **Anonymization Method** — K-anonymity, L-diversity, T-closeness selection
1. **Synthetic Generation** — GAN-based or statistical synthetic data
1. **Federated Processing** — Distributed anonymization across agents
1. **Utility Validation** — Privacy-utility trade-off assessment
- Example flow: `data_classification → anonymization_method → synthetic_generation → federated_processing → utility_validation`
- **Do:** Implement k-anonymity with minimum k=5 for basic protection; Use synthetic data generation for high-risk PII scenarios; Apply federated anonymization for multi-agent environments; Combine multiple techniques (L-diversity + T-closeness); Regular re-identification risk assessment and testing
- **Don't:** Rely solely on data masking without anonymization models; Use simple generalization that destroys data utility; Ignore quasi-identifier combinations for re-identification; Apply anonymization after data has been widely distributed; Skip validation of synthetic data statistical properties

## Metrics
Key metrics to track when applying this pattern:
  - Re-identification Risk (Probability of individual identification)
  - Data Utility Preservation (% statistical accuracy maintained)
  - K-Anonymity Level (Minimum group size for indistinguishability)
  - L-Diversity Score (Sensitive attribute value diversity)
  - T-Closeness Threshold (Distribution similarity to population)
  - Synthetic Data Fidelity (Statistical similarity to original data)
  **Proven use cases:**
  - Healthcare AI: Patient record anonymization for multi-hospital federated learning
  - Financial Agents: Transaction pattern analysis with customer privacy protection
  - Smart City: Citizen mobility data sharing across government agencies
  - Research Collaboration: Academic dataset sharing with privacy guarantees
  - Insurance Analytics: Claims data anonymization for regulatory compliance
