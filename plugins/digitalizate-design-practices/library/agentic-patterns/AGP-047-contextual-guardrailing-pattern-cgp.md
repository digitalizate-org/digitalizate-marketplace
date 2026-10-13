---
id: "AGP-047"
title: "Contextual Guardrailing Pattern (CGP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Multi-tenant applications."
avoid_when: "Simple single-context apps; Uniform security requirements; Performance-critical paths; Limited rule management resources"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-494.png"
notion: "https://app.notion.com/p/Contextual-Guardrailing-Pattern-CGP-f21a9aed5344829394af016537fa98ef"
---

## Why
Dynamic rule enforcement based on context, data flow requirements, and conditional patterns. The pattern: dynamic guardrails that adapt based on context (user, role, data, time, location). Static rules fail in complex environments; context-aware security enables precise control.
**Key insight:** IF-THIS-THEN-THAT logic creates adaptive security without sacrificing usability

## How to implement
1. **Context Detection** — Analyze user, role, location, time, data
1. **Rule Mapping** — Match context to guardrail configurations
1. **Dynamic Rules** — Apply if-this-then-that conditional logic
1. **Enforcement** — Adjust permissions & constraints in real-time
1. **Audit** — Log decisions for compliance & optimization
- Example flow: `context_analysis → rule_selection → dynamic_enforcement → audit_logging`
- **Do:** Start simple and add complexity based on actual patterns; Design rules to be explainable and auditable; Use versioning for safe rule updates and rollbacks; Implement comprehensive context detection across dimensions; Cache context decisions for performance optimization
- **Don't:** Create overly complex rules that are hard to debug; Apply same rules uniformly across all contexts; Skip audit logging for context-based decisions; Ignore performance impact of rule evaluation; Forget to test edge cases and rule interactions

## Metrics
Key metrics to track when applying this pattern:
  - Context Accuracy (% correct context identification)
  - Rule Hit Rate (Rules triggered per context)
  - Decision Latency (ms for context + rule evaluation)
  - Compliance Rate (% requests meeting policies)
  - Rule Effectiveness (Security incidents prevented)
  - User Friction (False positive restriction rate)
  **Proven use cases:**
  - Healthcare: PHI access (role + location + time) → HIPAA-compliant restrictions
  - Finance: Trading operations (user level + time + amount) → approval workflows
  - Enterprise: Remote access (location + device + sensitivity) → tool restrictions
  - Education: Student data (role + purpose + consent) → privacy guardrails
  - Government: Classified systems (clearance + need-to-know + location) → access control
