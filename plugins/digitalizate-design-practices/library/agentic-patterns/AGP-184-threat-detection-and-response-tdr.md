---
id: "AGP-184"
title: "Threat Detection & Response (TDR)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Enterprise security operations."
avoid_when: "Low-risk development environments; Resource-constrained systems; Single-user applications; Offline-only deployments"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-508.png"
notion: "https://app.notion.com/p/Threat-Detection-Response-TDR-e49a9aed5344828c865901f68d8a4397"
---

## Why
Real-time security monitoring and automated threat response. The pattern: real-time security monitoring and automated threat response for AI agent environments. Enables rapid threat detection, reduces security incidents, automates response, and maintains forensic evidence.
**Key insight:** Multi-source telemetry + ML anomaly detection + automated response → proactive security posture

## How to implement
1. **Data Collection** — Multi-source telemetry & behavioral logs
1. **Anomaly Detection** — ML models for behavioral analysis
1. **Threat Classification** — Severity & impact assessment
1. **Automated Response** — Containment & mitigation actions
1. **Intelligence Update** — IOC database & pattern learning
- Example flow: `telemetry_collection → anomaly_detection → threat_classification → automated_response → intelligence_update`
- **Do:** Implement multi-layered detection (behavioral, network, access); Use ML models trained on agent-specific behaviors; Automate immediate response for critical threats; Maintain comprehensive forensic capabilities; Integrate external threat intelligence feeds
- **Don't:** Rely on signature-based detection alone; Ignore false positive rate optimization; Skip incident response playbook automation; Delay threat containment pending manual review; Forget to update detection models regularly

## Metrics
Key metrics to track when applying this pattern:
  - Mean Time to Detection (MTTD) (Time to identify threats)
  - Mean Time to Response (MTTR) (Time to begin containment)
  - False Positive Rate (% benign activities flagged as threats)
  - Threat Coverage (% known attack vectors detected)
  - Incident Containment Rate (% threats successfully isolated)
  - Alert Fatigue Index (Security team alert overload metric)
  **Proven use cases:**
  - SOC Operations: 24/7 monitoring, automated triage, incident orchestration
  - Cloud AI Security: Container threats, API anomalies, data exfiltration detection
  - Enterprise Agents: Insider threat detection, privilege escalation, lateral movement
  - Financial AI: Fraud detection, market manipulation, compliance violations
  - Healthcare AI: HIPAA breaches, unauthorized access, data integrity attacks
