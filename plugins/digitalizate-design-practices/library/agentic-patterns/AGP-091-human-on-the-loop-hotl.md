---
id: "AGP-091"
title: "Human On the Loop (HOTL)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "High-speed autonomous operations."
avoid_when: "Continuous human decision-making needed; Unreliable or unproven AI systems; Legal requirements for active human approval; High-touch customer interactions"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-544.png"
notion: "https://app.notion.com/p/Human-On-the-Loop-HOTL-24ba9aed534482e19e1c01363794ba47"
---

## Why
Human supervisory oversight of autonomous AI systems with ability to monitor, intervene, or take control when necessary. The pattern: human supervisory oversight of autonomous AI systems with monitoring and intervention capabilities. Enables high-speed autonomous operation while maintaining human control and safety oversight for edge cases.
**Key insight:** Humans supervise rather than participate, intervening only when AI encounters exceptional situations

## How to implement
1. **Monitor Setup** — Create real-time dashboards & alert systems
1. **Define Boundaries** — Set operational parameters & risk limits
1. **Exception Detection** — Configure anomaly & threshold alerts
1. **Override Controls** — Build intervention & takeover mechanisms
1. **Resume Automation** — Enable smooth return to autonomous operation
- Example flow: `autonomous_operation → monitor_dashboard → exception_alert → human_override → resume_autonomy`
- **Do:** Design comprehensive real-time monitoring dashboards; Set clear operational boundaries and risk parameters; Implement fast, intuitive override mechanisms; Provide contextual information for human decisions; Test emergency takeover procedures regularly
- **Don't:** Overwhelm operators with too many alerts; Design overly complex intervention interfaces; Allow autonomous operation without clear boundaries; Skip training operators on override procedures; Ignore human workload and attention limitations

## Metrics
Key metrics to track when applying this pattern:
  - Autonomous Operation Time (Percentage of time running without intervention)
  - Mean Time to Detection (Average time to identify anomalies)
  - Intervention Response Time (Time from alert to human action)
  - False Alert Rate (Percentage of unnecessary human alerts)
  - Successful Takeover Rate (Percentage of successful human interventions)
  - Return to Autonomy Time (Time to resume autonomous operation)
  **Proven use cases:**
  - Autonomous Vehicles: AI drives normally, human supervisor ready to take control in emergencies with 200ms response time
  - Algorithmic Trading: AI executes thousands of trades autonomously, trader monitors and intervenes during market volatility
  - Manufacturing Automation: AI controls production line, human operators monitor quality and intervene for unusual events
  - Air Traffic Control: AI manages routine flight patterns, controllers oversee and intervene for complex weather situations
  - Content Moderation: AI automatically moderates clear violations, human moderators oversee edge cases and policy updates
