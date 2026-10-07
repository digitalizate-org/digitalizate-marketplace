---
id: "AGP-163"
title: "Scatter-Gather"
category: "Agentic Patterns"
subcategory: "Parallelization"
score: 4
context: "Multiple independent information sources."
avoid_when: "Services have dependencies; Single service is sufficient; Real-time latency requirements; Resource-constrained environments"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-381.png"
notion: "https://app.notion.com/p/Scatter-Gather-425a9aed534483aeaf8801a3538a885b"
---

## Why
Distributes requests to multiple services and collects responses. The pattern: broadcast requests to multiple services, then aggregate responses. Maximizes information coverage, improves resilience, leverages diverse capabilities.
**Key insight:** Request → [Service1, Service2, ServiceN] → Gather → Aggregate → Result

## How to implement
1. **Identify** — Find independent services/resources
1. **Scatter** — Send concurrent requests to all services
1. **Timeout** — Set realistic response deadlines
1. **Gather** — Collect responses as they arrive
1. **Aggregate** — Merge using voting/scoring strategies
- Example flow: `query → [service_A, service_B, service_C] → gather_responses → merge_results`
- **Do:** Design consistent interfaces across all services; Implement circuit breakers for unreliable services; Use partial result aggregation for resilience; Cache responses to reduce redundant calls; Monitor service performance and adapt strategies
- **Don't:** Create dependencies between services; Rely on all services succeeding; Use inconsistent request formats; Ignore slow or failing service patterns; Skip result validation from individual services

## Metrics
Key metrics to track when applying this pattern:
  - Service Response Rate (% services responding within timeout)
  - Aggregation Completeness (% expected information gathered)
  - Overall Latency (End-to-end response time)
  - Service Reliability (Individual service uptime)
  - Result Quality (Accuracy vs single-service baseline)
  - Resource Efficiency (Cost vs sequential calls)
  **Proven use cases:**
  - Multi-Source Research: Query knowledge bases → gather insights → synthesize report
  - Price Comparison: Check providers → collect quotes → recommend best option
  - Service Health Check: Poll endpoints → gather status → aggregate dashboard
  - Content Enrichment: Query APIs → collect metadata → enhance content
  - Consensus Building: Poll validators → gather opinions → determine consensus
