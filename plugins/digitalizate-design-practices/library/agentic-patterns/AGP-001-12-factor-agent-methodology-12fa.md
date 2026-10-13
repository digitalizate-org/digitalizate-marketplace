---
id: "AGP-001"
title: "12-Factor Agent Methodology (12FA)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Building production-ready AI agents for enterprise."
avoid_when: "Simple demos or proof-of-concept projects; Single-use or throwaway agent tasks; Research experiments without production requirements; Cases where 70-80% reliability is sufficient; Purely automated workflows without human oversight needs"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-526.png"
notion: "https://app.notion.com/p/12-Factor-Agent-Methodology-12FA-1cea9aed5344834eb63801ae39625fc9"
---

## Why
Production-ready methodology adapting 12-factor app principles for scalable, maintainable agent systems with comprehensive monitoring and evaluation. The pattern: production-ready methodology adapting 12-factor app principles for scalable, maintainable agent systems. Moves agents beyond 70-80% prototype reliability to production-grade systems with human-in-the-loop workflows.
**Key insight:** Most successful agents aren't the most 'agentic' — they're well-engineered software systems leveraging LLMs for controlled transformations

## How to implement
1. **Design** — Start with JSON extraction as foundation
1. **Structure** — Own prompts, context windows, and control flow
1. **Architect** — Build stateless, focused agents with explicit error handling
1. **Integrate** — Add human-in-the-loop and multi-channel support
1. **Deploy** — Monitor observability and iterate at the bleeding edge
1. **JSON Extraction as Foundation**
1. **Own Your Prompts**
1. **Manage Context Windows Explicitly**
1. **Tools Are Just JSON and Code**
1. **Own Your Control Flow**
1. **Stateless Agent Design**
1. **Separate Business from Execution State**
1. **Contact Humans as First-Class Operations**
1. **Meet Users Where They Are**
1. **Small, Focused Agents Beat Monoliths**
1. **Explicit Error Handling**
1. **Find the Bleeding Edge**
- Example flow: `agent = Agent(prompt=owned, context=managed, flow=explicit, state=stateless, humans=first_class)`
- **Do:** Hand-craft prompts for production quality, avoid prompt abstractions; Actively manage context windows with traces and error summaries; Build stateless agents that enable pause/resume functionality; Route high-stakes operations to humans as first-class tool calls; Keep agents small and focused (3-10 steps max)
- **Don't:** Blindly append to context windows without management; Build chatty monolithic agents instead of focused ones; Nest prompts - use explicit control flow in code instead; Ignore error handling - compact errors into next prompt; Treat human interaction as edge case rather than core feature

## Metrics
Key metrics to track when applying this pattern:
  - Production Reliability (>90% success rate in production environments)
  - Agent Response Time (P95 latency for agent task completion)
  - Human Escalation Rate (% of tasks requiring human intervention)
  - Context Window Utilization (Efficiency of context management)
  - Error Recovery Success (% of errors resolved through self-healing)
  - Multi-Channel Adoption (Usage across different user interfaces)
  **Proven use cases:**
  - Enterprise Customer Support: Human-escalated agent handling complex support tickets across multiple channels
  - Financial Operations: Stateless agents processing transactions with explicit error handling and audit trails
  - Content Management: Small, focused agents for content creation, review, and publication workflows
  - DevOps Automation: Agents managing deployment pipelines with human approval gates for production releases
  - Sales Enablement: Multi-channel agents supporting sales teams through CRM, Slack, and email integrations
