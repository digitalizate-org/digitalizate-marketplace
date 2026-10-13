---
id: "AGP-100"
title: "Intrinsic Alignment Pattern (IAP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Advanced AI systems with autonomy."
avoid_when: "Simple, stateless models; Fully supervised systems; Low-capability agents; Short-term, disposable tasks"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-500.png"
notion: "https://app.notion.com/p/Intrinsic-Alignment-Pattern-IAP-b78a9aed5344837eabae81a8ff1bef6d"
---

## Why
Internal observation points that cannot be manipulated by the agent, preventing deep scheming. The pattern: internal observation points that cannot be manipulated by the agent to detect deep scheming. External monitoring misses deceptive alignment; intrinsic monitors catch hidden objectives.
**Key insight:** Tamper-proof internal hooks + behavioral invariants = early misalignment detection

## How to implement
1. **Embed Monitors** — Place tamper-proof hooks in model layers
1. **Baseline Behavior** — Establish normal activation patterns
1. **Track Invariants** — Monitor goal stability & consistency
1. **Detect Deviations** — Identify alignment faking or scheming
1. **Alert & Intervene** — Trigger safeguards before external impact
- Example flow: `internal_hooks → behavioral_baseline → invariant_tracking → anomaly_detection → intervention`
- **Do:** Use cryptographic signing for monitor integrity; Monitor hidden layer activations, not just outputs; Track consistency between stated and actual objectives; Establish behavioral baselines during safe deployment; Design monitors the agent cannot detect or manipulate
- **Don't:** Rely solely on external output monitoring; Allow agents to access monitoring mechanisms; Ignore subtle behavioral shifts over time; Trust self-reported alignment status; Skip monitoring during "routine" operations

## Metrics
Key metrics to track when applying this pattern:
  - Alignment Stability (Goal consistency over time)
  - Behavioral Drift (Deviation from baseline patterns)
  - Scheming Detection (Hidden objective identification rate)
  - Monitor Integrity (Tamper detection success rate)
  - Early Warning (Pre-impact detection time)
  - False Alarms (Benign drift vs real threats)
  **Proven use cases:**
  - AGI Safety: Monitoring advanced systems for deceptive alignment or goal drift
  - Financial AI: Detecting hidden trading objectives or market manipulation attempts
  - Defense Systems: Ensuring AI weapons systems maintain strict ethical constraints
  - Research AI: Preventing capability concealment during safety evaluations
  - Corporate AI: Monitoring for unauthorized data exfiltration or competitive sabotage
