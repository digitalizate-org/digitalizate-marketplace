---
id: "AGP-007"
title: "Abductive Reasoning (ABR)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Diagnosing problems from symptoms."
avoid_when: "When deductive proof is required; Statistical inference problems; Well-understood routine procedures; When complete information is available; Time-critical decisions requiring speed"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-357.png"
notion: "https://app.notion.com/p/Abductive-Reasoning-ABR-e57a9aed5344832e888181ad708ffb51"
---

## Why
Infers the most likely explanation from incomplete observations. The pattern: inference to the best explanation by generating and evaluating hypotheses that explain observed phenomena. Enables discovery and explanation by finding the most plausible account of surprising or puzzling observations.
**Key insight:** Observe surprising facts → Generate explanations → Rank by plausibility → Select best → Test predictions

## How to implement
1. **Observation** — Identify surprising facts or phenomena to explain
1. **Hypothesis Generation** — Create plausible explanations for observations
1. **Plausibility Ranking** — Evaluate explanations by simplicity & likelihood
1. **Best Explanation** — Select most credible hypothesis
1. **Prediction Testing** — Generate testable predictions from hypothesis
- Example flow: `Surprising fact → Multiple explanations → Rank by plausibility → Best explanation → Test predictions`
- **Do:** Generate multiple competing hypotheses; Apply Occam's razor (prefer simpler explanations); Consider prior knowledge and domain constraints; Evaluate explanatory power and coherence; Generate testable predictions from hypotheses
- **Don't:** Stop at the first plausible explanation; Ignore contradictory evidence or anomalies; Confuse abduction with deduction or induction; Accept explanations without considering alternatives; Overly complex explanations when simple ones suffice

## Metrics
Key metrics to track when applying this pattern:
  - Explanation Quality (Coherence and completeness of generated hypotheses)
  - Hypothesis Diversity (Range of alternative explanations considered)
  - Plausibility Ranking (Accuracy of explanation preference ordering)
  - Predictive Power (Quality of testable predictions from hypotheses)
  - Parsimony Balance (Optimal trade-off between simplicity and completeness)
  - Evidence Integration (Effective use of available information)
  **Proven use cases:**
  - Medical Diagnosis: Patient symptoms → Multiple disease hypotheses → Most likely diagnosis → Treatment plan
  - Software Debugging: Error behavior → Potential bug causes → Most probable root cause → Fix strategy
  - Scientific Discovery: Anomalous data → Theoretical explanations → Best theory → New experiments
  - Business Analytics: Performance decline → Possible causes → Primary factor → Action plan
  - Detective Work: Crime evidence → Suspect theories → Most likely scenario → Investigation direction
