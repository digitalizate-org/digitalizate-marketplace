---
id: "AGP-046"
title: "Context Write Patterns (CWP)"
category: "Agentic Patterns"
subcategory: "Context Management"
score: 4
context: "Persistent memory requirements across sessions."
avoid_when: "Stateless processing requirements; High-security environments without file access; Real-time performance critical paths; Simple short-duration tasks"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-436.png"
notion: "https://app.notion.com/p/Context-Write-Patterns-CWP-8a6a9aed5344823d9fb201a241142aac"
---

## Why
Systematic externalization of context through scratchpads, note-taking, and file system integration for unlimited persistent context. The pattern: systematic externalization of context through scratchpads, note-taking, and file system integration for unlimited persistent context. Overcomes context window limitations and enables persistent memory across sessions with structured knowledge accumulation.
**Key insight:** External memory through file operations enables unlimited context capacity and session continuity

## How to implement
1. **Scratchpad Setup** — Initialize external memory file system operations
1. **Note Structure** — Design hierarchical note-taking schemas
1. **Write Operations** — Implement real-time context externalization
1. **Session Persistence** — Enable cross-session context restoration
1. **Overflow Handling** — Manage context window overflow gracefully
- Example flow: `init_scratchpad → structure_notes → write_context → persist_session → handle_overflow`
- **Do:** Use structured file formats (JSON, YAML) for context storage; Implement hierarchical organization for external memory; Write intermediate thoughts and reasoning steps; Enable cross-session context restoration; Use timestamps and metadata for context tracking
- **Don't:** Store sensitive information in external files without encryption; Write unstructured text blobs without organization; Ignore file system permissions and access controls; Skip validation when reading external context; Allow unlimited file growth without cleanup policies

## Metrics
Key metrics to track when applying this pattern:
  - Storage Efficiency (Context compression ratio)
  - Retrieval Speed (Time to load external context)
  - Session Continuity (% successful context restoration)
  - Context Integrity (% valid context after persistence)
  - File Organization (Average depth of context hierarchy)
  - Overflow Handling (% successful context window overflows)
  **Proven use cases:**
  - Agent Scratchpad: init_workspace → write_thoughts → structure_reasoning → persist_state → resume_session
  - Knowledge Accumulation: capture_insights → organize_hierarchically → cross_reference → build_knowledge_base
  - Long-Form Reasoning: break_down_problem → externalize_steps → track_progress → synthesize_solution
  - Research Assistant: collect_sources → take_notes → organize_findings → generate_reports → maintain_context
  - Code Development: capture_requirements → design_notes → implementation_log → testing_results → documentation
