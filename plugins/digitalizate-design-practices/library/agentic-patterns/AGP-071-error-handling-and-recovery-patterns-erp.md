---
id: "AGP-071"
title: "Error Handling and Recovery Patterns (ERP)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 5
context: "Production systems with high user dependency."
avoid_when: "Simple prototype or demonstration systems; Internal tools with technical users only; Low-stakes experimental applications; Systems with 100% reliable operations"
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-542.png"
notion: "https://app.notion.com/p/Error-Handling-and-Recovery-Patterns-ERP-8d2a9aed53448224be80816815e65c32"
---

## Why
Comprehensive error communication and recovery interface patterns for graceful failure handling in agent systems. The pattern: comprehensive error communication and recovery interfaces for graceful failure handling. Agent system failures need clear communication and effective recovery paths to maintain user trust.
**Key insight:** Use three-element structure: Problem + Cause + Solution with context preservation and progressive disclosure

## How to implement
1. **Error Classification** — Categorize errors by severity, recoverability, and user impact
1. **Display Strategy** — Choose appropriate modality: inline, tooltip, modal, or banner
1. **Message Structure** — Problem + Cause + Solution with progressive disclosure
1. **Recovery Mechanisms** — Automatic retry, context preservation, and manual recovery
1. **Prevention Patterns** — Input validation, confirmation dialogs, and undo capabilities
- Example flow: `agent_failure → classify_error → context_preserved → recovery_options → user_choice`
- **Do:** Use clear, jargon-free language for error messages; Provide specific actionable solutions, not generic advice; Preserve user context and work during error recovery; Implement progressive disclosure for technical details; Use consistent visual design for error states
- **Don't:** Blame users or use negative language in error messages; Show technical stack traces or error codes to end users; Use error dialogs for non-critical validation messages; Leave users stranded without clear next steps; Hide errors or fail silently without user notification

## Metrics
Key metrics to track when applying this pattern:
  - Error Recovery Rate (% of errors successfully resolved automatically)
  - User Error Resolution (Time from error to successful user resolution)
  - Context Preservation (% of user work preserved during error recovery)
  - Error Comprehension (User understanding of error cause and solution)
  - Prevention Effectiveness (Reduction in preventable errors over time)
  - Support Ticket Reduction (Decrease in error-related support requests)
  **Proven use cases:**
  - Agent Communication Failures: Network timeouts with automatic retry and manual override
  - Input Validation Errors: Real-time feedback with correction suggestions
  - System Resource Limitations: Graceful degradation with alternative options
  - Permission/Authentication Issues: Clear explanations with resolution paths
  - Data Processing Errors: Context preservation with partial result recovery
