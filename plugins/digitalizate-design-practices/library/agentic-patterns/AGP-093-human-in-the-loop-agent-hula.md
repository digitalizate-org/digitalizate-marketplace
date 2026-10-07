---
id: "AGP-093"
title: "Human-in-the-Loop Agent (HULA)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Software development teams needing AI assistance."
avoid_when: "Fully autonomous coding requirements; Simple scripting or one-off coding tasks; Teams without structured issue tracking systems; Projects requiring immediate code deployment; Environments without human review capacity"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-518.png"
notion: "https://app.notion.com/p/Human-in-the-Loop-Agent-HULA-9b1a9aed534483d2b4b9811aead32653"
---

## Why
Framework for human-in-the-loop evaluation and refinement of LLM-based agents, allowing engineers to guide and assess agent performance at each development stage. The pattern: three-agent collaboration framework with AI Planner, AI Coder, and Human Agent for software development. Maintains human control while leveraging AI assistance for JIRA issue resolution and code generation.
**Key insight:** 79% plan success, 59% PR merge rate - keeping engineers in driver's seat enables reliable AI collaboration

## How to implement
1. **Setup** — Deploy AI Planner, AI Coding, and Human Agent components
1. **Plan** — AI Planner creates coding plan from JIRA issue
1. **Review** — Human agent reviews, refines, and approves plan
1. **Code** — AI Coding agent generates code based on approved plan
1. **Validate** — Human reviews code, provides feedback, approves PR
- Example flow: `hula_session = HULA(issue=jira_ticket, agents=[planner, coder, human], stages=[plan, code, review])`
- **Do:** Keep human engineer in driver's seat throughout the development process; Use three-stage evaluation: offline, online, and practitioner perception; Incorporate feedback from compilers, linters, and validation tools; Review and refine plans before moving to coding stage; Deploy in real JIRA environment for authentic evaluation
- **Don't:** Allow fully autonomous operation without human oversight; Skip plan approval stage - human validation is critical; Ignore compiler/linter feedback in code generation loop; Expect 100% automation - human collaboration is the goal; Deploy without proper three-stage evaluation framework

## Metrics
Key metrics to track when applying this pattern:
  - Plan Generation Success (79% of work items receive successful coding plans)
  - Plan Approval Rate (82% of generated plans approved by engineers)
  - Code Generation Success (87% of approved plans result in generated code)
  - Pull Request Rate (25% of generated code reaches pull request stage)
  - Merge Success Rate (59% of HULA PRs merged into repositories)
  - SWE-bench Performance (37.2% resolution rate on SWE-bench Verified)
  **Proven use cases:**
  - Enterprise Software Development: Atlassian deployment with 45 engineers, ~900 merged PRs
  - JIRA Issue Resolution: Automated plan generation and code development for work item tracking
  - Collaborative AI Coding: Human-guided development maintaining engineer control and oversight
  - Quality Assurance Workflows: Integrated compiler/linter feedback with human review processes
  - Research and Development: Academic-industry collaboration for human-AI software engineering
