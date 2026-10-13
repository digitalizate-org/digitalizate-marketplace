---
id: "AGP-015"
title: "Agent Communication Fault Tolerance (ACF)"
category: "Agentic Patterns"
subcategory: "Fault Tolerance & Infrastructure"
score: 2
context: "Multi-agent collaborative systems."
avoid_when: "Single-agent applications; Local-only agent systems; Simple request-response patterns; Latency-critical real-time systems"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-528.png"
notion: "https://app.notion.com/p/Agent-Communication-Fault-Tolerance-ACF-49aa9aed534482b1886f01da3f73a51b"
---

## Why
Comprehensive fault tolerance mechanisms for agent-to-agent communication failures, message routing recovery, and protocol-agnostic resilience. The pattern: comprehensive fault tolerance mechanisms for agent-to-agent communication using modern protocols. Prevents cascading failures, enables network partition tolerance, achieves 99.94% message delivery reliability.
**Key insight:** Protocol-agnostic resilience (MCP/A2A/ACP/ANP) + circuit breakers + dynamic routing = robust agent communication

## How to implement
1. **Protocol Setup** — Implement MCP/A2A/ACP with message delivery guarantees
1. **Circuit Breakers** — Deploy per-agent-pair circuit breakers with thresholds
1. **Retry Logic** — Configure exponential backoff with jitter and dead letter queues
1. **Route Discovery** — Enable dynamic topology adaptation and alternative routing
1. **Monitor Health** — Implement real-time communication health monitoring
- Example flow: `agent_message → protocol_send → failure_detection → circuit_breaker → retry_backoff → alternative_route → success`
- **Do:** Use protocol-agnostic fault tolerance (MCP/A2A/ACP/ANP); Implement circuit breakers with 3-5 failure threshold per minute; Use exponential backoff with jitter to prevent thundering herd; Enable message persistence with dead letter queues; Support both synchronous and asynchronous communication patterns
- **Don't:** Rely on single communication path without redundancy; Ignore message ordering guarantees in distributed scenarios; Skip authentication and encryption for agent communication; Use static routing without dynamic topology adaptation; Forget to implement timeout and rate limiting mechanisms

## Metrics
Key metrics to track when applying this pattern:
  - Message Delivery Rate (% successful message delivery (target: 99.94%))
  - Circuit Breaker Efficiency (% failures prevented from cascading)
  - Recovery Time (Seconds to restore communication after failure)
  - Alternative Route Success (% messages delivered via backup paths)
  - Protocol Overhead (% additional latency for fault tolerance)
  - Network Partition Tolerance (Time to detect and adapt to partitions)
  **Proven use cases:**
  - Enterprise AI Orchestration: Coordinate 100+ agents across departments with 99.94% delivery rate
  - Distributed Research Systems: Route analysis tasks between specialized agents with fallback paths
  - Manufacturing Control: Maintain factory agent coordination during network instability
  - Financial Trading Networks: Ensure market data flow between trading agents with sub-second recovery
  - Healthcare AI Networks: Coordinate diagnostic agents with strict reliability requirements
