---
id: "AGP-030"
title: "Code Execution"
category: "Agentic Patterns"
subcategory: "Tool Use"
score: 4
context: "Untrusted/AI-generated code requiring maximum security isolation."
avoid_when: "Simple calculations answerable through LLM reasoning alone; Environments where container isolation is sufficient (trusted code); Resource-constrained edge devices without KVM virtualization support; Legacy applications requiring full hardware emulation or BIOS support"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-386.png"
notion: "https://app.notion.com/p/Code-Execution-0a0a9aed534483fabcd381f32d50bbf5"
---

## Why
Safely execute LLM-generated code in isolated environments for calculations and data processing. The pattern: execute LLM-generated code safely in isolated microVM environments. LLMs can generate code for calculations, data analysis, and algorithms but require secure execution due to potential malicious or buggy output.
**Key insight:** Treat LLM code as untrusted - use Firecracker microVMs for hardware isolation with <125ms startup

## How to implement
1. **Generate Code** — Create minimal, purpose-built scripts
1. **Security Scan** — Static analysis & import validation
1. **MicroVM Launch** — Start Firecracker microVM (<125ms)
1. **Execute** — Run in isolated kernel with limits
1. **Process Results** — Capture outputs & destroy microVM
- Example flow: `User: "Calculate fibonacci(20)" → Generate Python → Validate imports → Launch Firecracker → Return: 6765`
- **Do:** Use Firecracker microVMs for hardware-enforced isolation; Implement VM-level security with dedicated kernels per execution; Leverage KVM hypervisor with <5 MiB memory overhead per microVM; Use jailer process for additional cgroup/namespace isolation; Destroy microVMs after each execution for perfect isolation; Pool warm microVMs for <125ms startup performance
- **Don't:** Rely solely on containers for untrusted code (shared kernel risk); Use traditional VMs (minutes startup vs 125ms microVM); Skip hardware virtualization for critical security boundaries; Reuse microVMs across different execution contexts; Enable unnecessary devices (keep minimal virtio interface)

## Metrics
Key metrics to track when applying this pattern:
  - MicroVM Startup Time (<125ms boot to userspace (vs minutes for VMs))
  - Security Isolation Rate (Hardware VM barriers + process isolation (target: 100%))
  - Resource Density (Thousands of microVMs per host with <5 MiB overhead)
  - Performance Overhead (>95% bare-metal performance in microVM)
  - Creation Rate (Up to 150 microVMs/second per host)
  - Memory Elasticity (2-3 orders magnitude improvement with Faascale)
  - Security Incident Rate (VM escapes + kernel compromises (target: 0%))
  - Cost Efficiency (35-40% reduction vs traditional VM infrastructure)
  **Proven use cases:**
  - Serverless Functions: AWS Lambda-style execution with Firecracker microVMs
  - Untrusted Code Execution: AI agent code in isolated kernels (CI/CD, notebooks)
  - Multi-tenant Platforms: Separate microVMs per customer with hardware isolation
  - Container Security Upgrade: Replace Docker with microVM for critical workloads
  - Edge Computing: Lightweight VMs for edge deployment with minimal overhead
