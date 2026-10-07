---
id: "AGP-160"
title: "Rule-based Routing (RBR)"
category: "Agentic Patterns"
subcategory: "Routing"
score: 4
context: "Deterministic routing is required."
avoid_when: "Complex semantic understanding needed; Patterns frequently change; Handling ambiguous queries; Natural language nuance matters"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-377.png"
notion: "https://app.notion.com/p/Rule-based-Routing-RBR-325a9aed5344826e9bc7017a7ac8b886"
---

## Why
A deterministic routing system that uses predefined rules, conditions, and decision trees to direct queries to appropriate handlers, providing fast, predictable, and auditable routing decisions through if-else statements, switch cases, and pattern matching ideal for compliance-critical and latency-sensitive agentic AI systems. The pattern: deterministic routing using predefined rules, conditions, and decision trees. Provides traceable, auditable, ultra-fast routing decisions with guaranteed outcomes.
**Key insight:** If-else chains + pattern matching + config management = predictable agent orchestration

## How to implement
1. **Define** — Create routing rules and conditions
1. **Extract** — Parse keywords/patterns from input
1. **Match** — Apply if-else/switch logic
1. **Validate** — Check rule precedence and conflicts
1. **Execute** — Route to deterministic handler
- Example flow: `if (query.contains("refund")) route("billing_agent") else if (priority == "urgent") route("escalation_handler")`
- **Do:** Order rules from most specific to general; Implement fallback/default routes; Version control your rule definitions; Log routing decisions for debugging; Combine with AI for hybrid workflows
- **Don't:** Create overlapping or conflicting rules; Hardcode rules without config management; Ignore edge cases and exceptions; Over-complicate with too many conditions; Skip validation and testing of rules

## Metrics
Key metrics to track when applying this pattern:
  - Rule Coverage (% queries matched by rules)
  - Decision Latency (Time to route (usually <5ms))
  - Rule Conflicts (Number of overlapping rules)
  - Fallback Rate (% routed to default handler)
  - Rule Maintenance (Changes per month)
  - Accuracy (% correctly routed vs manual)
  **Proven use cases:**
  - Priority Escalation: if urgency="critical" AND type="security" → security_team
  - Department Routing: switch(category) { case "billing": finance_agent; case "tech": it_support }
  - Compliance Workflows: regulated industries requiring deterministic, auditable paths
  - Load Distribution: round-robin or weighted routing based on agent availability
  - Hybrid Orchestration: rules for known patterns + AI fallback for complex cases
