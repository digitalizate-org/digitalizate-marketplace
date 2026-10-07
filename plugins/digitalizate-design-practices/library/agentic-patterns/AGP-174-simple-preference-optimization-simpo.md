---
id: "AGP-174"
title: "Simple Preference Optimization (SimPO)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 3
context: "Reference model is unavailable or unreliable."
avoid_when: "Reference model provides crucial stability; Need explicit KL regularization for safety; Domain requires careful distribution control; Training data quality is questionable; Reference model baseline is well-established"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-469.png"
notion: "https://app.notion.com/p/Simple-Preference-Optimization-SimPO-b92a9aed5344839d94dd81e291f7c03f"
---

## Why
Simplified preference optimization eliminating reference models and reward margins for efficient training. The pattern: reference-free preference optimization using length-normalized reward margins for alignment training. Eliminates reference model dependency, reduces computational overhead, and mitigates length bias in preference learning.
**Key insight:** Average log probability differences create implicit rewards without requiring reference model baselines

## How to implement
1. **SFT** — Supervised fine-tuning on demonstration data
1. **Preference Data** — Collect pairwise preference comparisons
1. **SimPO Loss** — Apply reference-free preference optimization
1. **Length Control** — Normalize by response length differences
1. **Validate** — Evaluate alignment without reference model dependency
- Example flow: `sft_data + preference_pairs → simpo_training → aligned_model (reference_free)`
- **Do:** Use high-quality preference data with clear distinctions; Implement length normalization to handle response length bias; Tune gamma parameter for optimal reward margin scaling; Monitor training stability with appropriate learning rates; Validate against reference model baselines when available; Use diverse preference datasets covering multiple domains
- **Don't:** Ignore length bias in preference data collection; Set gamma too high (causes training instability); Use without proper hyperparameter tuning; Apply to domains where reference models are critical; Skip comparison with DPO and other reference-based methods

## Metrics
Key metrics to track when applying this pattern:
  - Preference Accuracy (% correct pairwise predictions without reference)
  - Length Bias Mitigation (Correlation reduction between length and preference)
  - Training Efficiency (Convergence speed without reference model)
  - Response Quality (Human evaluation scores vs baselines)
  - Stability Score (Training convergence reliability)
  - Computational Savings (Resource reduction vs reference-based methods)
  **Proven use cases:**
  - Resource-Constrained Training: Preference optimization without reference model overhead
  - Length-Sensitive Domains: Applications where response length significantly affects preferences
  - Rapid Prototyping: Quick preference alignment without complex reference model setup
  - Domain Adaptation: Preference learning in new domains without established baselines
  - Educational Systems: Simple preference optimization for learning applications
