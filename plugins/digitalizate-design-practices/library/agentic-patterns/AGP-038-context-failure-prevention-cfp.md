---
id: "AGP-038"
title: "Context Failure Prevention (CFP)"
category: "Agentic Patterns"
subcategory: "Context Management"
score: 3
context: "Production systems with security requirements."
avoid_when: "Trusted single-user environments; Development and testing phases; Simple proof-of-concept applications; Resource-extremely-constrained systems"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-429.png"
notion: "https://app.notion.com/p/Context-Failure-Prevention-CFP-075a9aed534483b2913481588a029d07"
---

## Why
Protection against context poisoning, distraction, and degradation through monitoring and recovery mechanisms. The pattern: protection against context poisoning, distraction, and degradation through monitoring and recovery mechanisms. Ensures context reliability and security in production systems by preventing and mitigating context-based attacks and failures.
**Key insight:** Proactive threat detection with automatic recovery enables robust context protection against sophisticated attacks

## How to implement
1. **Threat Detection** — Identify context poisoning and adversarial inputs
1. **Input Validation** — Sanitize and validate all context inputs
1. **Integrity Monitoring** — Continuously monitor context health and quality
1. **Recovery Systems** — Implement automatic context restoration mechanisms
1. **Access Control** — Enforce strict context access and modification controls
- Example flow: `detect_threats → validate_inputs → monitor_integrity → recover_automatically → control_access`
- **Do:** Implement comprehensive input validation and sanitization; Monitor context health with real-time anomaly detection; Use backup context states for rapid recovery; Apply strict access controls and permission systems; Log all context modifications for audit trails
- **Don't:** Accept untrusted context without validation; Ignore subtle context degradation signals; Skip backup creation before context modifications; Allow unrestricted context access across components; Disable security measures for performance gains

## Metrics
Key metrics to track when applying this pattern:
  - Threat Detection Rate (% malicious context attempts detected)
  - Recovery Success Rate (% successful automatic context recovery)
  - False Positive Rate (% legitimate context incorrectly flagged)
  - Response Time (Time from threat detection to mitigation)
  - Context Integrity Score (Overall context health assessment)
  - Security Coverage (% context operations under protection)
  **Proven use cases:**
  - Production AI Security: threat_detection → input_validation → integrity_monitoring → automatic_recovery → access_control
  - Enterprise Context Protection: security_scanning → anomaly_detection → backup_restoration → audit_logging → compliance_reporting
  - Multi-Tenant Safety: tenant_isolation → context_validation → threat_monitoring → recovery_systems → access_governance
  - Public AI Services: input_sanitization → poisoning_detection → degradation_prevention → state_recovery → security_enforcement
  - Critical Decision Systems: context_verification → integrity_assurance → backup_maintenance → recovery_procedures → audit_compliance
