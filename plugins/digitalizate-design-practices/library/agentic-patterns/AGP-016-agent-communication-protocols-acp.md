---
id: "AGP-016"
title: "Agent Communication Protocols (ACP)"
category: "Agentic Patterns"
subcategory: "Multi-Agent"
score: 3
context: "Multi-protocol agent networks requiring flexible communication patterns."
avoid_when: "Simple single-protocol systems where complexity is unnecessary; Environments with strict network restrictions blocking multiple ports; Legacy systems unable to support modern protocol implementations; Ultra-constrained devices with minimal processing capabilities; Applications with extremely simple point-to-point communication needs"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-394.png"
notion: "https://app.notion.com/p/Agent-Communication-Protocols-ACP-950a9aed5344826bb820017bb5965033"
---

## Why
Standardized communication mechanisms for agent interaction including message passing, publish-subscribe, and event-driven patterns. The pattern: comprehensive communication protocols for agent interaction including REST APIs, gRPC, GraphQL, WebSocket, SSE, and message queuing. Enables flexible synchronous/asynchronous communication, real-time updates, efficient data transfer, and scalable multi-protocol coordination.
**Key insight:** Multi-protocol support + standardized interfaces + real-time capabilities = robust agent communication

## How to implement
1. **Choose Protocol Type** — Select REST, gRPC, GraphQL, WebSocket, SSE, or Message Queue based on needs
1. **Define Interface Schema** — Design API contracts, message schemas, or event structures with versioning
1. **Setup Infrastructure** — Deploy API gateways, message brokers, load balancers, and monitoring
1. **Implement Communication** — Add protocol handlers, error handling, authentication, and rate limiting
1. **Monitor & Optimize** — Track latency, throughput, error rates, and connection health
- Example flow: `REST API ↔ gRPC ↔ GraphQL ↔ WebSocket ↔ Message Queue → Multi-Protocol Agent Network`
- **Do:** Choose appropriate protocol: REST for CRUD, gRPC for performance, GraphQL for flexibility; Use WebSocket for real-time bidirectional communication and SSE for server-push updates; Implement proper API versioning, schema evolution, and backward compatibility; Add comprehensive error handling, timeouts, circuit breakers, and retry logic; Use Protocol Buffers for gRPC efficiency and OpenAPI specs for REST documentation; Implement authentication (OAuth2, JWT) and rate limiting across all protocols
- **Don't:** Use only one protocol - different use cases require different communication patterns; Ignore connection management for WebSocket and proper cleanup for SSE streams; Skip load balancing and service discovery for distributed agent networks; Use REST for real-time communication or gRPC for simple CRUD operations; Allow unbounded GraphQL queries or missing depth limiting protections

## Metrics
Key metrics to track when applying this pattern:
  - Message Throughput (Messages per second processed by the communication system)
  - Delivery Latency (P50/P95 time from message send to agent processing)
  - Delivery Success Rate (Percentage of messages successfully delivered and acknowledged)
  - Queue Depth (Average and maximum message backlog per topic/queue)
  - Processing Concurrency (Number of parallel message handlers per agent)
  - Network Utilization (Bandwidth usage and connection efficiency across agents)
  **Proven use cases:**
  - Enterprise Agent Ecosystem: Multi-protocol communication with REST APIs for management, gRPC for performance-critical calls, and WebSocket for real-time coordination
  - Real-Time Trading Platforms: WebSocket for live market data, REST for order management, GraphQL for complex portfolio queries, and message queues for settlement
  - Interactive AI Assistants: SSE for streaming responses, WebSocket for conversational flow, REST for session management, and GraphQL for context retrieval
  - Autonomous Vehicle Networks: gRPC for low-latency sensor data, MQTT for telemetry, REST for fleet management APIs, and WebSocket for real-time coordination
  - Multi-Agent Research Systems: GraphQL for flexible data queries, gRPC for compute-intensive tasks, REST for resource management, and SSE for progress streaming
