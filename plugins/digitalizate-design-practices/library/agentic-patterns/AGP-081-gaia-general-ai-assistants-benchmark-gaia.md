---
id: "AGP-081"
title: "GAIA: General AI Assistants Benchmark (GAIA)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Evaluating general-purpose AI assistant capabilities."
avoid_when: "Domain-specific task evaluation (use specialized benchmarks); Simple question-answering without tool requirements; Performance testing without multimodal capabilities; Rapid evaluation needs (questions can take up to 50 human steps); Systems without web access or file handling capabilities"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-516.png"
notion: "https://app.notion.com/p/GAIA-General-AI-Assistants-Benchmark-GAIA-163a9aed534483cf8d2901fc7a978961"
---

## Why
Real-world question benchmark requiring fundamental abilities like reasoning, multi-modality, web browsing, and tool-use proficiency. Conceptually simple for humans yet challenging for AI. The pattern: real-world question benchmark requiring fundamental abilities like reasoning, multi-modality, web browsing, and tool-use proficiency. Conceptually simple for humans yet challenging for AI - tests gap between human (92%) and current best AI (65%) performance.
**Key insight:** [H2O.ai](http://h2o.ai/) h2oGPTe leads at 65% accuracy, outperforming Google (49%), Microsoft (38%) - first to achieve C-grade on general intelligence

## How to implement
1. **Setup** — Install GAIA benchmark framework and configure evaluation environment
1. **Select** — Choose difficulty level (Level 1: <5 steps, Level 2: 5-10 steps, Level 3: up to 50 steps)
1. **Configure** — Enable tool access: web browsing, file handling, multimodal processing
1. **Evaluate** — Run agent on 466 questions requiring reasoning, multimodality, and tool use
1. **Analyze** — Compare performance against human baseline (92%) and current SOTA (65%)
- Example flow: `gaia_eval = GAIA(agent=ai_assistant, levels=[1,2,3], tools=[web_browser, file_handler], timeout=3600)`
- **Do:** Test across all three difficulty levels for comprehensive capability assessment; Enable full tool suite: web browsing, file handling, multimodal understanding; Focus on real-world tasks requiring multi-step reasoning and coordination; Validate against human performance baseline of 92% accuracy; Use development set (166 questions) for model tuning and validation set for final eval
- **Don't:** Expect high scores without proper tool integration - GPT-4 achieves only 15%; Skip multimodal components - questions include images and spreadsheets; Attempt brute-force approaches - answers require full task execution; Ignore Level 3 questions - they test advanced long-term planning capabilities; Train on test questions - answers are withheld to maintain benchmark integrity

## Metrics
Key metrics to track when applying this pattern:
  - Overall Accuracy (Primary metric: percentage of correctly answered questions across all levels)
  - Level-wise Performance (Breakdown by difficulty: Level 1 (simple), Level 2 (moderate), Level 3 (complex))
  - Human-AI Gap (Current gap: 27% (Human 92% vs h2oGPTe 65%))
  - Tool Use Effectiveness (Success rate in web browsing, file handling, and multimodal tasks)
  - Multi-step Reasoning (Ability to coordinate reasoning across 5-50 steps depending on level)
  - Task Completion Rate (Percentage of tasks completed vs. partial solutions or failures)
  **Proven use cases:**
  - AGI Capability Assessment: [H2O.ai](http://h2o.ai/) h2oGPTe achieves 65% - first C grade on general intelligence test
  - Industry Benchmarking: Standard for evaluating general AI assistants vs specialized chatbots
  - Academic Research: Meta/HuggingFace/AutoGPT collaboration for fundamental AI ability measurement
  - Tool Integration Testing: Comprehensive evaluation of web browsing, file handling, and multimodal reasoning
  - Real-world Task Simulation: 466 carefully designed questions reflecting authentic assistant scenarios
