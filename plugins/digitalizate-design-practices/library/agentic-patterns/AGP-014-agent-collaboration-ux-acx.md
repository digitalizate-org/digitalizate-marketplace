---
id: "AGP-014"
title: "Agent Collaboration UX (ACX)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "Complex workflows requiring specialized agent expertise."
avoid_when: "Simple single-step tasks manageable by one agent; Real-time applications requiring immediate responses; Limited resources unable to support multi-agent infrastructure; Use cases where coordination overhead exceeds benefits; Highly regulated environments with strict single-point accountability"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-534.png"
notion: "https://app.notion.com/p/Agent-Collaboration-UX-ACX-da6a9aed53448361bc1c01f76b8190cc"
---

## Why
User experience patterns for multi-agent coordination, handoffs, and collaborative workflows with transparent orchestration. The pattern: multi-agent coordination interfaces with seamless handoffs, transparent orchestration, and specialized agent collaboration. Enables complex enterprise workflows, reduces coordination overhead, and provides scalable automation with human oversight integration.
**Key insight:** Complexity-based handoff triggers with context preservation - coordination becomes transparent and manageable at enterprise scale

## How to implement
1. **Design Agent Network** — Define specialized agent roles, capabilities, and coordination hierarchy
1. **Implement Handoff Logic** — Build context-preserving handoff mechanisms with complexity thresholds
1. **Create Coordination Dashboard** — Develop real-time status visualization and orchestration controls
1. **Build Transparency Layer** — Add visual indicators for agent activities, handoffs, and decision points
1. **Test & Optimize** — Validate coordination flows and optimize handoff timing with user feedback
- Example flow: `agent_mapping → handoff_implementation → dashboard_creation → transparency_design → flow_optimization`
- **Do:** Implement complexity-based handoff triggers to avoid rigid rule-based systems; Preserve full conversation context during agent handoffs; Use visual consistency across coordination dashboards and status indicators; Provide real-time transparency of agent activities and decision-making; Design for both centralized and decentralized coordination patterns; Include human-in-the-loop intervention points for high-stakes decisions; Implement agent specialization indicators showing expertise areas
- **Don't:** Force customers to repeat information during agent handoffs; Hide agent coordination complexity without providing transparency options; Use single-agent solutions for inherently multi-step collaborative workflows; Implement handoffs without clear reasoning or user feedback; Ignore state management across distributed multi-agent architectures

## Metrics
Key metrics to track when applying this pattern:
  - Handoff Success Rate (% of successful context-preserving agent transitions)
  - Task Completion Efficiency (Time to complete multi-agent workflows vs single-agent baseline)
  - Coordination Transparency Score (User understanding of agent activities and decision-making)
  - Agent Utilization Balance (Workload distribution across specialized agents)
  - Error Recovery Time (Time to resolve coordination failures and restore workflow)
  - User Intervention Frequency (% of workflows requiring human oversight or correction)
  - Scalability Index (Performance degradation as agent network size increases)
  **Proven use cases:**
  - Customer Support: Triage agent → specialized technical/billing/escalation agents → human handoff
  - Enterprise Automation: Task orchestrator → specialized workflow agents → quality assurance agents
  - Content Creation: Research agent → writing agent → editing agent → review agent → publication
  - Healthcare Coordination: Intake agent → diagnostic agent → treatment planning → specialist consultation
  - Financial Services: Risk assessment → compliance checking → approval workflow → execution agents
