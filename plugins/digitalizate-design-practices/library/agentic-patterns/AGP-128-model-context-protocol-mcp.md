---
id: "AGP-128"
title: "Model Context Protocol (MCP)"
category: "Agentic Patterns"
subcategory: "Tool Use"
score: 4
context: "Multi-tool agent systems requiring standardized integration."
avoid_when: "Single, static tool integrations where function calling suffices; Ultra-low-latency paths that cannot afford protocol overhead; Simple applications without complex tool orchestration needs; Environments where server process deployment is infeasible"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-388.png"
notion: "https://app.notion.com/p/Model-Context-Protocol-MCP-7e7a9aed5344839a9e2f8146def8cb00"
---

## Why
Standardized protocol for sharing context and capabilities between AI models and tools. The pattern: standardize AI application context sharing and tool integration via JSON-RPC protocol. Enables seamless interoperability between AI models and external tools/data sources across platforms.
**Key insight:** Open standard solving N×M integration problem - 1000+ servers available, adopted by OpenAI/GitHub

## How to implement
1. **Choose Transport** — stdio (local) or HTTP/SSE (remote)
1. **Initialize Session** — Capability negotiation & discovery
1. **Discover Tools** — List available tools, resources, prompts
1. **Invoke Tools** — JSON-RPC calls with typed parameters
1. **Handle Resources** — Use handles vs embedding content
- Example flow: `Client connects → initialize() → list_tools() → call_tool("github_search") → get_resource(handle)`
- **Do:** Use JSON Schema for all tool parameters and response validation; Implement OAuth 2.1 with PKCE for secure authentication; Use resource handles instead of inlining large content; Implement streaming for large outputs with backpressure control; Version capabilities and maintain backward compatibility; Apply least privilege principle for server access scoping
- **Don't:** Pass tokens through servers (token passthrough anti-pattern); Skip server validation (vulnerable to spoofing attacks); Embed large documents in prompts instead of using handles; Deploy without conformance tests (schema drift risk); Ignore structured error codes for proper fallback handling

## Metrics
Key metrics to track when applying this pattern:
  - Tool-hop Latency (218ms average (Li & Xie 2025 study))
  - Integration Efficiency (25-40% improvement vs custom implementations)
  - Protocol Failure Rate (0.7% (mainly parameter mismatches))
  - Development Time Reduction (50% faster project rollout times)
  - Cost Optimization (30% reduction in integration costs)
  - Session Establishment (Sub-second capability discovery & negotiation)
  - Security Incident Rate (Token spoofing & confused deputy attacks)
  - Ecosystem Growth (1000+ community MCP servers (2025))
  **Proven use cases:**
  - Claude Desktop Integration: One-click MCP server installation via Desktop Extensions
  - GitHub Development: CI/CD, issues, PRs with 35% code review latency reduction
  - Enterprise Copilots: Unified access to CRM, HRIS, payroll, accounting systems
  - IDE Assistants: Filesystem, VCS, documentation with real-time context
  - Document Processing: 60-80% reduction in processing time with resource handles
