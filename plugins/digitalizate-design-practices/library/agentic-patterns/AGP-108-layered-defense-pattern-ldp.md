---
id: "AGP-108"
title: "Layered Defense Pattern (LDP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "High-stakes AI applications."
avoid_when: "Low-risk internal tools; Extreme latency constraints; Simple single-purpose bots; Resource-constrained edge devices"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-501.png"
notion: "https://app.notion.com/p/Layered-Defense-Pattern-LDP-c6fa9aed534482edbb298135d1d6f62c"
---

## Why
Multi-layered security architecture implementing the Swiss Cheese Model for AI safety. The pattern: multiple independent security layers (External → Application → Model) creating defense-in-depth. Single layer failures don't compromise system; each layer catches different threat types.
**Key insight:** Swiss Cheese Model - holes in different layers don't align, preventing complete breach

## How to implement
1. **External Layer** — API gateway with rate limiting & auth
1. **Application Layer** — Content filtering & PII detection
1. **Model Layer** — Constitutional AI & refusal mechanisms
1. **Monitor** — Log decisions at each layer
1. **Coordinate** — Ensure layers complement, not conflict
- Example flow: `request → auth_check → content_filter → model_safety → response_validation`
- **Do:** Implement fail-safe defaults at each layer; Use defense-in-depth with independent failure modes; Log security events for audit and improvement; Test layers both independently and integrated; Document what each layer protects against
- **Don't:** Rely on a single layer for critical security; Create overlapping rules that conflict; Skip monitoring of bypass attempts; Ignore performance impact of multiple layers; Forget to update all layers when threats evolve

## Metrics
Key metrics to track when applying this pattern:
  - Block Rate (Threats stopped per layer)
  - False Positives (% legitimate requests blocked)
  - Latency Impact (ms added per layer)
  - Bypass Attempts (Attacks reaching deeper layers)
  - Coverage (% of OWASP Top 10 addressed)
  - MTTR (Time to update defenses)
  **Proven use cases:**
  - Financial AI: External (DDoS) → App (fraud detection) → Model (compliance)
  - Healthcare Bot: External (HIPAA auth) → App (PHI filtering) → Model (medical safety)
  - Legal Assistant: External (client auth) → App (privilege checks) → Model (ethical bounds)
  - HR Platform: External (employee verification) → App (PII protection) → Model (bias prevention)
  - Educational AI: External (age verification) → App (content filtering) → Model (safety guidelines)
