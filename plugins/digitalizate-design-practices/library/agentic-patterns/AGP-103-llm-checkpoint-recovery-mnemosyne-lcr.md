---
id: "AGP-103"
title: "LLM Checkpoint Recovery (Mnemosyne) (LCR)"
category: "Agentic Patterns"
subcategory: "Fault Tolerance & Infrastructure"
score: 2
context: "Distributed LLM training (7B+ parameters)."
avoid_when: "Small model training (<1B parameters); Single-node deployments; Stable hardware environments; Short training cycles (<24h)"
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-530.png"
notion: "https://app.notion.com/p/LLM-Checkpoint-Recovery-Mnemosyne-LCR-13da9aed53448221926f01a4ab04b215"
---

## Why
Lightweight device proxy architecture for LLM fault recovery with just-in-time checkpointing and partial topology reconstruction. The pattern: device proxy architecture with just-in-time checkpointing for LLM fault recovery. Reduces recovery overhead by 58.8% vs traditional approaches, enables partial topology reconstruction.
**Key insight:** Lightweight device proxies + flexible CCL + incremental communication reinitialization = 3.6% daily overhead

## How to implement
1. **Setup Proxy** — Deploy device proxy layer for error interception
1. **Configure CCL** — Initialize flexible collective communication library
1. **Enable JIT** — Activate just-in-time checkpointing triggers
1. **Partial Recovery** — Implement incremental topology reconstruction
1. **Monitor** — Track failure patterns and recovery times
- Example flow: `device_proxy → failure_detection → checkpoint_trigger → partial_reconstruction → resume_training`
- **Do:** Use lightweight device proxies optimized for fault tolerance; Implement partial topology reconstruction around failed nodes; Cache gradient states and optimizer checkpoints separately; Use incremental communication reinitialization (not full restart); Monitor memory usage patterns to predict failures
- **Don't:** Rely on elastic training features for pure fault tolerance; Perform global communication reinitialization on single failures; Store massive checkpoints to slow storage during training; Ignore temporal dominance of communication overhead; Use generic checkpointing for 70B+ parameter models

## Metrics
Key metrics to track when applying this pattern:
  - Recovery Time (Seconds to resume training)
  - Overhead (% daily training time lost)
  - Checkpoint Size (GB per model snapshot)
  - Failure Detection (Time to detect node failure)
  - Memory Utilization (% peak memory preserved)
  - Communication Cost (Bandwidth for reconstruction)
  **Proven use cases:**
  - LLM Pre-training: 70B+ parameter models with week-long training cycles
  - Distributed Fine-tuning: Multi-node adaptation with frequent hardware failures
  - MoE Training: Sparse mixture-of-experts with massive checkpoint sizes
  - Hybrid Parallelism: Data/tensor/pipeline parallel combinations with complex failure modes
  - Cloud Training: Spot instance training with predictable interruptions
