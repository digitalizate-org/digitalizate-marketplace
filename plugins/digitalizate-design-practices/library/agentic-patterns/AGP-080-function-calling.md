---
id: "AGP-080"
title: "Function Calling"
category: "Agentic Patterns"
subcategory: "Tool Use"
score: 5
context: "Need real-time data beyond model training cutoff."
avoid_when: "Information available in model knowledge with acceptable quality; Hard real-time requirements where tool overhead breaks SLOs; High-risk irreversible actions without human approval; Simple tasks solvable with basic text generation"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-387.png"
notion: "https://app.notion.com/p/Function-Calling-e5ba9aed534483ceb327017c194f628a"
---

## Why
Structured interface for AI to invoke external functions and APIs. The pattern: enable AI to invoke external functions and APIs through structured schemas. Breaks LLM knowledge limitations, enables real-time data access, external actions, and precise calculations.
**Key insight:** Schema-driven function calling with parameter validation, parallel execution, and security controls

## How to implement
1. **Define Schema** — JSON schema with parameters & types
1. **Register Tools** — Add to function registry with auth
1. **Validate Params** — Sanitize & validate all inputs
1. **Execute** — Call API with timeouts & retries
1. **Process Results** — Normalize & integrate responses
- Example flow: `get_weather(location="NYC", units="celsius") → {"temp": 18, "condition": "cloudy"}`
- **Do:** Write detailed function descriptions (3-4+ sentences minimum); Use strict JSON schemas with required/optional field validation; Implement parameter sanitization and injection attack prevention; Add timeouts, retries with exponential backoff, and circuit breakers; Use parallel execution for independent function calls; Cache deterministic function results for cost optimization
- **Don't:** Use vague function descriptions that lead to hallucinated parameters; Allow unbounded parallel calls without rate limiting; Retry non-idempotent operations after timeouts; Expose raw API credentials or secrets in function calls; Skip input validation and security scanning

## Metrics
Key metrics to track when applying this pattern:
  - Function Selection Accuracy (% correct tool chosen from registry)
  - Parameter Extraction Rate (% required params correctly identified)
  - Schema Validation Success (% calls passing validation checks)
  - API Success Rate (% successful external function calls)
  - Parallel Execution Efficiency (Latency reduction vs sequential)
  - Token Usage Optimization (Context tokens per function call)
  - Security Incident Rate (Injection/XSS attempts blocked)
  - Cost per Task (Total cost: model + API + infrastructure)
  **Proven use cases:**
  - Weather & Real-time Data: get_weather("NYC") → current conditions for decision making
  - Calendar Integration: schedule_meeting(time, attendees) → automated scheduling workflows
  - Database Operations: query_db(table, filters) → dynamic data retrieval and updates
  - Code Execution: run_python(code) → computational tasks and data analysis
  - Email & Communications: send_email(to, subject, body) → automated notifications
