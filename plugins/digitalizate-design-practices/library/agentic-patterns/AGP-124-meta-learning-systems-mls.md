---
id: "AGP-124"
title: "Meta-Learning Systems (MLS)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 2
context: "Many related tasks with limited data each."
avoid_when: "Single task with abundant training data; Tasks are completely unrelated; Real-time inference constraints are severe; Limited computational resources for meta-training; Task distribution is poorly defined"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-463.png"
notion: "https://app.notion.com/p/Meta-Learning-Systems-MLS-b93a9aed534482f0ac9b819569a9d3f3"
---

## Why
Learning how to learn efficiently across different tasks and domains through meta-optimization. The pattern: learn to learn: acquire meta-knowledge enabling rapid adaptation to new tasks with minimal data. Enables few-shot learning, rapid domain adaptation, and efficient knowledge transfer across related tasks.
**Key insight:** Models learn optimization procedures and inductive biases that generalize across task distributions

## How to implement
1. **Tasks** — Define distribution of related learning tasks
1. **Meta-Train** — Learn to adapt quickly across task distribution
1. **Support Set** — Provide few examples of new target task
1. **Adapt** — Rapidly specialize to new task using meta-knowledge
1. **Query** — Perform target task with minimal examples
- Example flow: `task_distribution → meta_model → support_examples → adapted_model → predictions`
- **Do:** Design diverse meta-training task distributions; Balance task complexity and similarity in meta-training; Use proper train/validation/test task splits; Monitor for overfitting to meta-training tasks; Implement gradient-based and gradient-free approaches; Track adaptation speed and final performance metrics
- **Don't:** Use identical tasks in meta-training and meta-testing; Ignore computational overhead of meta-optimization; Apply to domains with insufficient task diversity; Skip ablation studies on meta-learning components; Use inadequate support set sizes for evaluation

## Metrics
Key metrics to track when applying this pattern:
  - Few-Shot Accuracy (Performance with K examples per class)
  - Adaptation Speed (Gradient steps to convergence)
  - Transfer Efficiency (Performance vs baseline on new tasks)
  - Meta-Generalization (Performance on unseen task types)
  - Sample Efficiency (Examples needed for target performance)
  - Computational Cost (FLOPs for meta-training and adaptation)
  **Proven use cases:**
  - Few-Shot Classification: Image recognition with limited labeled examples per class
  - Domain Adaptation: Rapidly adapt models to new domains with minimal data
  - Neural Architecture Search: Learn to design architectures for new tasks
  - Hyperparameter Optimization: Learn optimal hyperparameters across task families
  - Reinforcement Learning: Quick adaptation to new environments and reward structures
