---
id: "AGP-026"
title: "Causal Reasoning (CR)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Understanding cause-effect relationships."
avoid_when: "Purely descriptive or classificatory tasks; When only correlational data is available; Simple pattern recognition problems; When causal mechanisms are unknowable; Real-time systems requiring immediate responses"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-360.png"
notion: "https://app.notion.com/p/Causal-Reasoning-CR-c83a9aed5344833dbe308191226ca1aa"
---

## Why
Establishes and follows explicit cause-and-effect relationships. The pattern: reasoning about cause-effect relationships, mechanisms, and interventions to understand how changes produce outcomes. Enables prediction, explanation, and decision-making by understanding the underlying causal structure of systems.
**Key insight:** Identify causes → Understand mechanisms → Control confounds → Predict interventions → Analyze counterfactuals

## How to implement
1. **Causal Model** — Identify variables and potential causal relationships
1. **Mechanism Analysis** — Understand how causes produce effects
1. **Confound Control** — Account for alternative explanations
1. **Intervention Reasoning** — Predict outcomes of hypothetical actions
1. **Counterfactual Analysis** — Consider what would happen if conditions changed
- Example flow: `X causes Y → Mechanism: X→M→Y → Control Z → Predict: do(X) → Counterfact: X=0?`
- **Do:** Distinguish correlation from causation explicitly; Identify plausible causal mechanisms and pathways; Consider confounding variables and alternative explanations; Use interventional thinking (what if we change X?); Apply temporal precedence (causes precede effects)
- **Don't:** Assume correlation implies causation; Ignore potential confounding factors; Use post-hoc reasoning without mechanism; Make causal claims without sufficient evidence; Oversimplify complex causal systems

## Metrics
Key metrics to track when applying this pattern:
  - Causal Validity (Accuracy of identified cause-effect relationships)
  - Mechanism Plausibility (Reasonableness of proposed causal pathways)
  - Confound Detection (Identification of alternative explanations)
  - Intervention Prediction (Accuracy of predicted outcomes from actions)
  - Counterfactual Reasoning (Quality of what-if scenario analysis)
  - Evidence Integration (Synthesis of multiple sources for causal claims)
  **Proven use cases:**
  - Medical Diagnosis: Symptoms → Disease mechanism → Treatment intervention → Predicted recovery
  - Business Analysis: Marketing spend → Customer acquisition mechanism → Revenue impact → ROI optimization
  - Software Debugging: Error symptoms → Root cause identification → Code fix → System restoration
  - Policy Analysis: Regulation → Behavioral change mechanism → Economic effects → Unintended consequences
  - Scientific Research: Hypothesis → Experimental design → Causal inference → Theory validation
