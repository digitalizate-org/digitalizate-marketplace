---
id: "AGP-147"
title: "Privilege Compromise Mitigation Pattern (PCM)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Enterprise AI deployments."
avoid_when: "Single-user local systems; Read-only applications; Isolated environments; Non-privileged operations only"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-505.png"
notion: "https://app.notion.com/p/Privilege-Compromise-Mitigation-Pattern-PCM-f17a9aed534482c794548192297d2c8b"
---

## Why
Prevents privilege escalation and unauthorized operations through strict access control. The pattern: prevents privilege escalation through RBAC, identity separation, and dynamic de-escalation. Agent privilege inheritance enables lateral movement; strict boundaries prevent compromise.
**Key insight:** Separate identity + least privilege + time limits + zero trust = secure operations

## How to implement
1. **Separate Identity** — Agent identity ≠ user identity
1. **Apply RBAC** — Role-based permissions, not user-based
1. **Least Privilege** — Minimal permissions for each operation
1. **Dynamic De-escalation** — Reduce privileges based on context
1. **Zero Trust** — Verify every action, trust nothing
- Example flow: `identity_separation → role_assignment → permission_check → context_evaluation → access_decision`
- **Do:** Implement strict identity separation between agents and users; Use time-based privilege expiration and renewal; Apply context-aware permission boundaries; Monitor privilege usage patterns for anomalies; Require multi-factor approval for high-value operations
- **Don't:** Let agents inherit full user privileges automatically; Grant permanent elevated permissions; Skip privilege checks for "trusted" operations; Allow privilege accumulation over time; Ignore unusual privilege escalation patterns

## Metrics
Key metrics to track when applying this pattern:
  - Escalation Attempts (Unauthorized privilege requests/day)
  - Privilege Lifetime (Average minutes before de-escalation)
  - Approval Rate (% high-risk operations approved)
  - Identity Violations (Agent impersonation attempts)
  - Compliance Score (% operations within policy)
  - Audit Trail (Complete privilege history coverage)
  **Proven use cases:**
  - Financial Systems: Prevent unauthorized trades, transfers, or account access
  - Healthcare AI: Ensure PHI access follows minimum necessary principle
  - Enterprise Automation: Control system administration without full admin rights
  - Government AI: Maintain clearance levels and need-to-know restrictions
  - Cloud Platforms: Prevent lateral movement and resource abuse in multi-tenant systems
