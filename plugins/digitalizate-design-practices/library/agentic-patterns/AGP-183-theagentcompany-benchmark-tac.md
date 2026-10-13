---
id: "AGP-183"
title: "TheAgentCompany Benchmark (TAC)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Evaluating enterprise-ready agent capabilities."
avoid_when: "Quick capability demos or simple task evaluation; Resource-constrained environments (requires full Docker stack); Single-domain or narrow task assessment; Real-time performance testing; Academic-only or synthetic task evaluation"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-525.png"
notion: "https://app.notion.com/p/TheAgentCompany-Benchmark-TAC-f22a9aed5344835384f60130992ed892"
---

## Why
Benchmarks LLM agents on consequential real-world tasks that would typically be completed by multiple job roles in a software engineering company. The pattern: simulated software company environment with 175 real-world professional tasks. Evaluates enterprise-ready AI agents in realistic workplace scenarios with multi-tool collaboration.
**Key insight:** Current SOTA agents achieve ~30% completion rate, highlighting gaps in real-world deployment readiness

## How to implement
1. **Clone** — git clone [https://github.com/TheAgentCompany/TheAgentCompany](https://github.com/TheAgentCompany/TheAgentCompany)
1. **Setup** — Docker environment with GitLab, OwnCloud, Plane, RocketChat
1. **Configure** — Set up agent with browser, terminal, code editor access
1. **Select** — Choose tasks from 175 professional scenarios
1. **Evaluate** — Run checkpoint-based evaluation with partial credit
- Example flow: `python run_evaluation.py --agent gpt-4 --tasks software_engineering --mode full`
- **Do:** Test across multiple job roles (dev, QA, PM, admin, data science); Use checkpoint-based evaluation for partial credit assessment; Enable agent communication with simulated colleagues; Leverage the self-hosted environment for reproducible results; Focus on long-horizon, multi-step professional tasks
- **Don't:** Expect high completion rates (current SOTA ~30%); Skip proper Docker environment setup and configuration; Ignore partial credit scoring - many tasks show partial progress; Test only on simple automation tasks; Overlook agent-to-agent communication requirements

## Metrics
Key metrics to track when applying this pattern:
  - Full Completion Rate (% of tasks completed successfully (typically ~30%))
  - Partial Credit Score (Weighted score including partial progress)
  - Task Category Performance (Success rate by job role (dev, QA, PM, etc.))
  - Time to Completion (Average duration for successful task completion)
  - Communication Effectiveness (Quality of agent-to-colleague interactions)
  - Tool Usage Proficiency (Effective use of browser, terminal, code editor)
  **Proven use cases:**
  - Enterprise Readiness Assessment: Evaluating AI agents for real workplace deployment scenarios
  - Work Automation Research: Understanding which professional tasks can be automated with current AI
  - Digital Worker Development: Building and testing AI systems that collaborate with human colleagues
  - Economic Impact Analysis: Measuring AI capability progression for labor market policy research
  - Multi-Tool Agent Testing: Assessing agent proficiency across web browsers, terminals, and code editors
