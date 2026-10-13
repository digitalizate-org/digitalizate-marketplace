---
id: "AGP-096"
title: "In-Context Learning (ICL)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 3
context: "Quick adaptation to new tasks needed."
avoid_when: "Large amounts of training data available; Task requires extensive domain knowledge; Context window limitations are severe; High precision requirements exceed ICL capability; Consistent performance across variations needed"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-462.png"
notion: "https://app.notion.com/p/In-Context-Learning-ICL-041a9aed534482cd9dd9013d8462dfd2"
---

## Why
Learning new tasks from examples in the input context without parameter updates (includes few-shot and zero-shot learning). The pattern: provide task examples in prompt to enable model learning without parameter updates. Enables rapid task adaptation, requires no training, leverages model's pattern recognition for immediate performance.
**Key insight:** Models can learn from demonstrations in context, performing implicit gradient descent during inference

## How to implement
1. **Select** — Choose relevant examples for task context
1. **Format** — Structure examples with input-output pairs
1. **Prompt** — Combine examples with target query
1. **Infer** — Model learns pattern from examples
1. **Generate** — Apply learned pattern to new input
- Example flow: `examples + query → model_inference → output`
- **Do:** Use diverse, high-quality examples representative of task; Maintain consistent formatting across all examples; Order examples from simple to complex when possible; Include edge cases and boundary conditions; Test with different example counts (1-shot to few-shot); Use clear separators between examples
- **Don't:** Use contradictory or inconsistent examples; Overload context with too many examples; Use biased or non-representative examples; Mix different task types in same prompt; Ignore example selection and ordering effects

## Metrics
Key metrics to track when applying this pattern:
  - Few-Shot Accuracy (Performance with K examples)
  - Example Efficiency (Performance gain per example)
  - Context Utilization (Token usage vs performance)
  - Task Transfer (Generalization to unseen inputs)
  - Example Sensitivity (Performance variance across example sets)
  - Ordering Robustness (Stability across example orders)
  **Proven use cases:**
  - Text Classification: Sentiment analysis, topic categorization with labeled examples
  - Data Extraction: Named entity recognition, information extraction from documents
  - Format Translation: JSON to XML, structured data transformation
  - Question Answering: Domain-specific QA with example question-answer pairs
  - Code Generation: Programming tasks with input-output code examples
