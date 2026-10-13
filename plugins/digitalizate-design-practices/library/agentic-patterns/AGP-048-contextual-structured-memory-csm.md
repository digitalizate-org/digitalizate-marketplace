---
id: "AGP-048"
title: "Contextual Structured Memory (CSM)"
category: "Agentic Patterns"
subcategory: "Memory Management"
score: 2
context: "Complex domain relationships need modeling."
avoid_when: "Simple key-value storage needs; Highly dynamic unstructured content; Rapid prototyping with changing requirements; Natural language processing tasks; Real-time streaming data scenarios"
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-402.png"
notion: "https://app.notion.com/p/Contextual-Structured-Memory-CSM-adda9aed5344833c9a65815faa7753af"
---

## Why
Memory organized in predefined, interpretable formats supporting symbolic reasoning and precise querying for multi-agent agentic AI systems. The pattern: memory organized in predefined, interpretable formats supporting symbolic reasoning and precise queries. Precise querying, formal logic reasoning, data integrity, consistent structured knowledge access.
**Key insight:** Schemas + Knowledge Graphs + Structured Queries + Symbolic Logic → Precise reasoning & consistency

## How to implement
1. **Define Schemas** — Create predefined memory structures & formats
1. **Build Graph** — Implement knowledge graph with typed relationships
1. **Enable Queries** — Support precise SQL-like structured queries
1. **Add Reasoning** — Implement symbolic logic & inference rules
1. **Share Structure** — Enable cross-agent structured knowledge access
- Example flow: `schema_design → knowledge_graph → structured_queries → symbolic_reasoning → cross_agent_sharing`
- **Do:** Use standardized schemas (JSON Schema, RDF, OWL) for consistency; Implement precise query capabilities with structured filters; Enable symbolic reasoning with formal logic rules; Maintain referential integrity across knowledge graphs; Version control schemas and support backward compatibility
- **Don't:** Over-structure flexible data that benefits from loose schemas; Create overly complex schemas that are hard to understand; Ignore schema evolution and migration strategies; Use structured memory for highly dynamic unstructured content; Forget to validate data integrity when updating structures

## Metrics
Key metrics to track when applying this pattern:
  - Schema Coverage (% domain concepts properly modeled)
  - Query Precision (Accuracy of structured query results)
  - Reasoning Correctness (% valid logical inferences)
  - Data Integrity (Referential consistency score)
  - Schema Utilization (% schema fields actively used)
  - Cross-Agent Consistency (Shared structure alignment rate)
  **Proven use cases:**
  - Financial Analysis: Company financials, ratios, regulations in structured schemas (SQL-like queries: "SELECT companies WHERE pe_ratio < 25 AND sector = 'technology'")
  - Legal Systems: Laws, cases, precedents with formal relationship modeling (complex legal reasoning and precedent matching)
  - Scientific Databases: Research data with standardized ontologies and precise queries (materials science, drug discovery)
  - Enterprise Resource Planning: Business entities, processes, relationships in formal schemas (inventory, supply chain optimization)
  - Healthcare Records: Patient data, treatments, outcomes with medical ontologies (clinical decision support systems)
