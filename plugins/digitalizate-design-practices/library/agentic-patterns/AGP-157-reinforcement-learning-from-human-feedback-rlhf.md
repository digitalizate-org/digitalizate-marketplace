---
id: "AGP-157"
title: "Reinforcement Learning from Human Feedback (RLHF)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 2
context: "Human preference alignment crucial."
avoid_when: "Simple objective tasks with clear metrics; Limited human annotation budget; Real-time inference requirements; Tasks with well-defined ground truth; Small-scale or research-only applications"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-467.png"
notion: "https://app.notion.com/p/Reinforcement-Learning-from-Human-Feedback-RLHF-0b1a9aed5344835884a681b69ac8dd9c"
---

## Why
Training AI agents to align with human preferences through reinforcement learning on human feedback. The pattern: three-phase training: SFT → Reward Model → PPO optimization with human preference alignment. Aligns AI behavior with human values, improves safety, helpfulness, and reduces harmful outputs.
**Key insight:** Human preferences > reward model > policy optimization creates scalable alignment mechanism

## How to implement
1. **SFT** — Supervised fine-tuning on demonstrations
1. **Collect** — Human preference comparisons
1. **Train RM** — Reward model on preferences
1. **PPO** — Policy optimization with RM rewards
1. **Evaluate** — Human preference win rates
- Example flow: `base_model → sft_model → preference_data → reward_model → aligned_model`
- **Do:** Use diverse, high-quality human preference data; Apply KL regularization to prevent policy drift; Monitor reward hacking and Goodhart's law effects; Use multiple evaluation metrics beyond reward scores; Implement careful hyperparameter tuning for PPO; Validate reward model correlation with human judgments
- **Don't:** Skip reward model validation on held-out data; Use biased or low-quality preference annotations; Ignore distribution shift in deployment; Optimize purely for reward model scores; Use unstable RL training without safety measures

## Metrics
Key metrics to track when applying this pattern:
  - Human Preference Win Rate (% preferred over baseline)
  - Reward Model Accuracy (Agreement with human labels)
  - KL Divergence (Policy drift from reference model)
  - Helpfulness Score (Task completion quality)
  - Harmlessness Rate (% safe responses)
  - PPO Training Stability (Reward curve convergence)
  **Proven use cases:**
  - Conversational AI: Align chatbots for helpful, harmless, honest responses
  - Content Generation: Optimize creative writing for human preferences
  - Code Assistants: Improve code quality and safety recommendations
  - Summarization: Generate summaries matching human quality judgments
  - Question Answering: Provide accurate, well-formatted answers
