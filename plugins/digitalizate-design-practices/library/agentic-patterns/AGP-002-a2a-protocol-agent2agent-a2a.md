---
id: "AGP-002"
title: "A2A Protocol (Agent2Agent) (A2A)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 2
context: "Cross-platform agent collaboration."
avoid_when: "Single-platform deployments; Simple single-agent workflows; Ultra-low-latency requirements; Offline-only applications; Prototype/development phases; Tightly coupled agent systems"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-393.png"
notion: "https://app.notion.com/p/A2A-Protocol-Agent2Agent-A2A-3faa9aed534483a2840481510873d065"
---

## Why
Open standard for AI agent interoperability enabling seamless collaboration across platforms. The pattern: open standard enabling seamless interoperability between AI agents across platforms. Eliminates vendor lock-in, enables agent ecosystems, accelerates enterprise adoption with standardized communication.
**Key insight:** Universal Agent Card discovery + OAuth auth + Task ID correlation + SSE streaming = cross-platform collaboration

## How to implement
1. **Discover** — Fetch Agent Card from /.well-known/agent.json
1. **Authenticate** — OAuth 2.0 or API key exchange
1. **Initiate** — POST /tasks with unique Task ID
1. **Stream** — SSE for real-time state updates
1. **Monitor** — Track progress & handle failures
- Example flow: `discover() → auth() → initiate_task() → stream_updates() → aggregate_results()`
- **Do:** Use standard Agent Card format for capability discovery; Implement proper OAuth 2.0 or JWT authentication; Support Server-Sent Events for real-time updates; Use unique Task IDs for correlation and tracking; Handle network failures with exponential backoff; Implement message versioning for compatibility; Use schema-first contracts for messages and artifacts; Prevent circular agent loops with hop-count limits
- **Don't:** Hardcode agent endpoints or capabilities; Send sensitive data without encryption; Ignore task lifecycle state management; Block on synchronous calls to remote agents; Skip capability validation before task delegation; Use long-lived or overly broad tokens

## Metrics
Key metrics to track when applying this pattern:
  - Interoperability Rate (% successful cross-platform tasks)
  - Discovery Latency (Time to fetch & parse Agent Card)
  - Authentication Success (% successful auth handshakes)
  - Task Completion Rate (% tasks completed end-to-end)
  - Real-time Updates (SSE message delivery rate)
  - Network Resilience (% recovery from connection failures)
  - Protocol Compliance (% messages following A2A spec)
  **Proven use cases:**
  - Cross-Platform Research: Research agent (LangChain) → Analysis agent (Google ADK) → Visualization agent (Custom)
  - Enterprise Integration: Salesforce agent ↔ ServiceNow agent ↔ Slack agent for automated workflows
  - Multi-Vendor Ecosystems: Customer agent (Vendor A) delegates to specialist agents (Vendors B, C, D)
  - Distributed Computing: Load balancing across agent instances on different cloud providers
  - Real-time Collaboration: Multiple agents streaming updates while processing shared documents
