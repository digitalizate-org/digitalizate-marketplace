---
id: "AGP-122"
title: "Memory Poisoning Prevention Pattern (MPP)"
category: "Agentic Patterns"
subcategory: "Security & Privacy"
score: 3
context: "Long-running conversational agents."
avoid_when: "Stateless operations only; Single-session interactions; Read-only memory systems; Ephemeral deployments"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-504.png"
notion: "https://app.notion.com/p/Memory-Poisoning-Prevention-Pattern-MPP-c80a9aed534483d8bf9181e66f1f30cd"
---

## Why
Protects agent memory systems from malicious manipulation and gradual corruption. The pattern: protects agent memory from malicious manipulation through validation, signing, and integrity checks. Poisoned memories lead to gradual behavior corruption; prevention ensures long-term reliability.
**Key insight:** Cryptographic signing + anomaly detection + regular sanitization = tamper-resistant memory

## How to implement
1. **Validate Input** — Check for injection & manipulation attempts
1. **Sign Updates** — Cryptographic signatures on memory writes
1. **Verify Integrity** — Merkle trees & checksums for chunks
1. **Detect Anomalies** — Score patterns for unusual changes
1. **Sanitize & Backup** — Regular consolidation & recovery points
- Example flow: `input_validation → signature_verification → integrity_check → anomaly_detection → sanitization`
- **Do:** Implement cryptographic signing for all memory updates; Use Merkle trees for efficient integrity verification; Maintain immutable audit logs of memory operations; Perform regular memory consolidation and pruning; Create differential backups for rollback capability
- **Don't:** Allow direct memory writes without validation; Trust memory content without verification; Skip anomaly detection for "trusted" sources; Store sensitive data without encryption; Ignore contradictory or conflicting entries

## Metrics
Key metrics to track when applying this pattern:
  - Injection Blocked (Malicious attempts prevented/month)
  - Memory Integrity (% of verified memory chunks)
  - False Memory Rate (Incorrect entries detected)
  - Recovery Time (Minutes to restore from corruption)
  - Validation Latency (ms per memory operation)
  - Storage Efficiency (Compression ratio after sanitization)
  **Proven use cases:**
  - Customer Service: Prevent preference manipulation & false history injection
  - Personal Assistants: Protect user data from adversarial memory corruption
  - Enterprise AI: Ensure business knowledge base integrity across sessions
  - Educational Bots: Maintain accurate learning progress without tampering
  - Healthcare AI: Protect patient interaction history from malicious updates
