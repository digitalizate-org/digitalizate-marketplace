---
id: "AGP-196"
title: "Hierarchical Context Architecture (HCA)"
category: "Agentic Patterns"
subcategory: "Context Management"
score: 3
context: "Complex multi-level organizational systems."
avoid_when: "Simple single-level context requirements; Flat organizational structures; High-frequency context switching needs; Resource-constrained environments"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-437.png"
notion: "https://app.notion.com/p/Hierarchical-Context-Architecture-HCA-3d2a9aed53448337ac83018868e641a1"
---

## Why
Multi-level context organization with tree-structured hierarchies, inheritance, and scope isolation. The pattern: multi-level context organization with tree-structured hierarchies, inheritance, and scope isolation. Enables scalable context management for complex organizational structures with proper access control and inheritance.
**Key insight:** Hierarchical organization with inheritance enables context specialization while maintaining organizational consistency

## How to implement
1. **Design Hierarchy** — Define tree structure with inheritance levels
1. **Scope Isolation** — Implement context boundaries and access controls
1. **Inheritance Rules** — Configure parent-child context propagation
1. **Override Logic** — Enable selective context overrides at each level
1. **Query Engine** — Build hierarchical context resolution system
- Example flow: `global_context → department_context → project_context → agent_context → task_context`
- **Do:** Design clear inheritance hierarchies with logical levels; Implement scope isolation to prevent context bleeding; Use lazy loading for large context hierarchies; Cache frequently accessed context paths; Document context inheritance rules clearly
- **Don't:** Create deep hierarchies (>5 levels) without justification; Allow circular dependencies in context inheritance; Skip access control validation at hierarchy boundaries; Override parent context without proper validation; Store sensitive data at inappropriate hierarchy levels

## Metrics
Key metrics to track when applying this pattern:
  - Hierarchy Depth (Average levels in context tree)
  - Inheritance Accuracy (% correct context propagation)
  - Scope Isolation (% prevented unauthorized access)
  - Query Performance (Context resolution latency)
  - Cache Hit Rate (% contexts served from cache)
  - Override Success (% valid context overrides)
  **Proven use cases:**
  - Enterprise Organization: company_policies → division_rules → department_procedures → team_guidelines → individual_preferences
  - Multi-Tenant SaaS: platform_config → tenant_settings → workspace_rules → project_context → user_preferences
  - Educational Systems: institution_policies → school_rules → department_standards → course_context → student_profiles
  - Healthcare Networks: system_protocols → hospital_policies → department_procedures → patient_context → treatment_plans
  - Government Systems: federal_regulations → state_laws → local_ordinances → department_policies → case_specific_context
