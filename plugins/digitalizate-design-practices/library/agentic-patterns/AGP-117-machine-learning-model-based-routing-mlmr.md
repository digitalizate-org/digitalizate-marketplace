---
id: "AGP-117"
title: "Machine Learning Model-Based Routing (MLMR)"
category: "Agentic Patterns"
subcategory: "Routing"
score: 3
context: "High-volume routing with labeled training data."
avoid_when: "Limited labeled data (<1000 examples); Constantly evolving routing rules; Need interpretable routing logic; Small-scale applications"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-376.png"
notion: "https://app.notion.com/p/Machine-Learning-Model-Based-Routing-MLMR-aafa9aed53448211ad85011bebd5b9a9"
---

## Why
A specialized routing approach that employs discriminative models (classifiers) fine-tuned on labeled data to make routing decisions, encoding routing logic directly in model weights rather than prompts, enabling sub-10ms inference for high-volume agentic AI systems requiring deterministic and explainable routing decisions. The pattern: fine-tuned discriminative model encoding routing logic in learned weights. Enables ultra-fast (<10ms) routing decisions with high accuracy after supervised training.
**Key insight:** Routing logic embedded in model parameters, not in prompts - inference without generation

## How to implement
1. **Label Data** — Create training corpus with routing labels
1. **Train Model** — Fine-tune classifier on labeled examples
1. **Embed Logic** — Encode routing in model weights
1. **Deploy** — Serve model for real-time routing
1. **Monitor** — Track accuracy, drift, and performance
- Example flow: `query → classifier → {support: 0.92, sales: 0.05, billing: 0.03} → route_to_support`
- **Do:** Use supervised fine-tuning with domain-specific labeled data; Start with smaller models (BERT-base) for lower latency; Implement confidence thresholds for routing decisions; Monitor class distribution and retrain on drift; Use synthetic data generation from LLMs to augment training set
- **Don't:** Use generative models for real-time routing decisions; Deploy without fallback mechanisms for low-confidence predictions; Ignore class imbalance in training data; Skip A/B testing against baseline routing methods; Neglect explainability for critical routing decisions

## Metrics
Key metrics to track when applying this pattern:
  - Routing Accuracy (F1 score per route class)
  - Latency (P50/P95/P99 inference time)
  - Model Drift (Distribution shift detection)
  - Confidence Calibration (ECE (Expected Calibration Error))
  - Coverage (% queries above confidence threshold)
  - Cost Efficiency (Inference cost per 1M requests)
  **Proven use cases:**
  - Intent Classification: customer_query → {support: 0.89, sales: 0.08, info: 0.03}
  - Ticket Routing: issue_description → {technical_L1: 0.72, technical_L2: 0.25, billing: 0.03}
  - Language Detection: multilingual_text → {en: 0.95, es: 0.03, fr: 0.02}
  - Priority Triage: request → {urgent: 0.91, normal: 0.07, low: 0.02}
  - Department Assignment: email → {hr: 0.88, legal: 0.10, finance: 0.02}
