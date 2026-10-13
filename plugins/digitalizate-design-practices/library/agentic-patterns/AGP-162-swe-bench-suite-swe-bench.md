---
id: "AGP-162"
title: "SWE-bench Suite (SWE-bench)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Evaluating coding agents on real-world software engineering tasks."
avoid_when: "Simple coding task evaluation (use HumanEval instead); Non-Python programming language assessment; Rapid prototyping evaluation without full repository context; Educational coding exercises rather than real bugs; Time-sensitive evaluations (can take hours per issue)"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-524.png"
notion: "https://app.notion.com/p/SWE-bench-Suite-SWE-bench-c07a9aed5344838d973501396a5d054f"
---

## Why
Comprehensive software engineering benchmark suite including SWE-bench, SWE-bench Verified, and SWE-bench Live for evaluating coding agents on real-world GitHub issues. The pattern: comprehensive software engineering benchmark suite evaluating LLM agents on real GitHub issues across multiple variants. Industry standard for testing automated coding capabilities using 2,294+ authentic software bugs from popular Python repositories.
**Key insight:** Claude 3.5 Sonnet achieves 49% on Verified (500 issues) while original benchmark has 32.67% solution leakage - variant selection critical

## How to implement
1. **Setup** — Install SWE-bench evaluation framework and dependencies
1. **Select** — Choose variant: SWE-bench (2,294 issues), Verified (500), Live (1,319), or Multimodal (517)
1. **Configure** — Set up GitHub repository access and test environment
1. **Evaluate** — Run agent on real GitHub issues from 12+ popular Python repositories
1. **Assess** — Measure patch generation success and functional correctness
- Example flow: `swe_bench = SWEBench(variant="verified", repos=["django", "flask"], model=coding_agent, timeout=1800)`
- **Do:** Use SWE-bench Verified (500 issues) for reliable human-validated evaluation; Test on multiple repository types (Django, Flask, Requests, Matplotlib, etc.); Monitor for data contamination - many issues predate model training cutoffs; Include multimodal variant (517 issues) for visual debugging tasks; Use SWE-bench Live for contamination-free evaluation with post-2024 issues
- **Don't:** Rely solely on original SWE-bench - 32.67% have solution leakage issues; Ignore patch correctness validation - weak test cases affect 31% of results; Skip repository-specific setup requirements and dependency management; Assume high scores without validating actual problem-solving capability; Overlook visual elements in multimodal issues requiring image interpretation

## Metrics
Key metrics to track when applying this pattern:
  - % Resolved (Primary) (Percentage of GitHub issues successfully resolved with working patches)
  - Pass@k Success Rate (Success rate across k attempts (typically k=1))
  - Functional Correctness (Patches that actually fix the issue without breaking existing tests)
  - Repository Coverage (Performance across 12+ diverse Python repositories)
  - Solution Quality (Patch elegance, maintainability, and adherence to coding standards)
  - Time to Resolution (Average time taken to generate working patches)
  **Proven use cases:**
  - Industry Standard Evaluation: Primary benchmark for coding LLMs like Claude 3.5 Sonnet (49% on Verified)
  - Academic Research: Princeton/CMU framework for LLM software engineering capability assessment
  - Production Readiness Testing: Validating AI coding assistants on real GitHub issues before deployment
  - Automated Debugging: Testing AI agents' ability to understand, analyze, and fix complex software bugs
  - Multi-Repository Assessment: Evaluating code understanding across Django, Flask, Matplotlib, Requests, and more
