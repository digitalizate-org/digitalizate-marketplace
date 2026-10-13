---
id: "AGP-187"
title: "Tree-of-Thought (ToT)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Complex problems with multiple solution paths."
avoid_when: "Simple linear reasoning tasks; Real-time/low-latency requirements; Tight computational budgets; Tasks without clear evaluation criteria; When CoT already works well"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-371.png"
notion: "https://app.notion.com/p/Tree-of-Thought-ToT-ce4a9aed534482ae89c981ee0b87e590"
---

## Why
Explores multiple reasoning paths through branching and backtracking. The pattern: explore multiple reasoning paths through branching tree structure with evaluation and pruning. Enables backtracking, lookahead, and exploration of alternatives for complex problem-solving.
**Key insight:** Generate K candidates → Evaluate → Prune weak paths → Expand promising ones → Repeat until solution

## How to implement
1. **Define Tree** — Set branching factor K & max depth
1. **Generate** — Create K candidate thoughts per node
1. **Evaluate** — Score each candidate (rubrics/verifier)
1. **Prune** — Keep top candidates, discard weak paths
1. **Search** — BFS/DFS/beam until solution found
- Example flow: `Problem → [Branch 1, Branch 2, Branch 3] → Evaluate → Prune → Expand best → Solution`
- **Do:** Use small branching factor (K=3-5) to control costs; Implement explicit evaluation criteria/rubrics; Cache and deduplicate equivalent states; Set budget limits (max tokens/time) with fallbacks; Use beam search for balanced exploration
- **Don't:** Allow unlimited branching (combinatorial explosion); Skip evaluation steps (leads to random exploration); Use for simple problems (overkill vs CoT); Ignore cycles/loops in reasoning paths; Over-prune early promising paths

## Metrics
Key metrics to track when applying this pattern:
  - Solution Quality (Accuracy vs CoT baseline)
  - Search Efficiency (Nodes explored per solution)
  - Token Cost (Total tokens vs linear approaches)
  - Path Diversity (Unique reasoning strategies explored)
  - Evaluation Accuracy (Pruning quality (keep good, discard bad))
  - Budget Utilization (% of max depth/tokens used)
  **Proven use cases:**
  - Game of 24: Explore different operator combinations → evaluate validity → prune impossible paths
  - Strategic Planning: Generate scenario branches → assess outcomes → select optimal strategy
  - Creative Writing: Develop plot alternatives → evaluate narrative coherence → pursue best storylines
  - Math Puzzles: Try multiple solution approaches → verify correctness → backtrack if needed
  - Code Architecture: Explore design patterns → evaluate trade-offs → select best approach
