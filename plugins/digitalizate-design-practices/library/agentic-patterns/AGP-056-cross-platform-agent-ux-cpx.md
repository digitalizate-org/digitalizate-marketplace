---
id: "AGP-056"
title: "Cross-Platform Agent UX (CPX)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "Multi-device user workflows."
avoid_when: "Single-platform specialized tools; Resource-constrained environments; Platform-specific features required; Simple single-purpose applications"
goals:
  - "Design a Consistent System at Scale"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-541.png"
notion: "https://app.notion.com/p/Cross-Platform-Agent-UX-CPX-26da9aed534483dfa17e8170e78300bb"
---

## Why
Consistent agent experience patterns across devices and platforms with seamless synchronization and adaptation. The pattern: consistent agent experiences across desktop, mobile, and web with seamless synchronization and platform-optimized adaptation. Enables fluid multi-device workflows, maintains user context, and leverages each platform's unique strengths.
**Key insight:** Design consistency + platform adaptation + real-time sync → unified cross-device experience

## How to implement
1. **Design System** — Unified colors, typography, layouts
1. **State Sync** — Real-time cross-device synchronization
1. **Platform Adaptation** — Device-specific optimizations
1. **Context Transfer** — Seamless device switching
1. **Feature Parity** — Consistent capabilities across platforms
- Example flow: `design_system → state_sync → platform_adaptation → context_transfer → feature_parity`
- **Do:** Maintain visual consistency across all platforms; Adapt interactions to platform conventions (gestures, navigation); Sync agent state and conversation history in real-time; Preserve context when users switch between devices; Optimize for each platform's strengths and capabilities
- **Don't:** Create completely different experiences per platform; Ignore platform-specific interaction patterns; Lose conversation state during device transitions; Force mobile interfaces to match desktop layouts; Sacrifice performance for visual consistency

## Metrics
Key metrics to track when applying this pattern:
  - Cross-Device Usage (% users active on multiple platforms)
  - Context Transfer Success (Seamless device switching rate)
  - Platform Consistency Score (UI/UX uniformity rating)
  - Feature Parity (Capability availability across platforms)
  - Sync Performance (Real-time state synchronization latency)
  - User Satisfaction (Cross-platform experience rating)
  **Proven use cases:**
  - Personal Assistant: mobile voice → desktop detailed responses → tablet visual review
  - Enterprise Tools: mobile field work → desktop analysis → tablet presentations
  - Customer Support: phone initial contact → web detailed troubleshooting → app follow-up
  - E-commerce: mobile browsing → desktop purchasing → tablet order tracking
  - Education: mobile quick questions → desktop study sessions → tablet interactive content
