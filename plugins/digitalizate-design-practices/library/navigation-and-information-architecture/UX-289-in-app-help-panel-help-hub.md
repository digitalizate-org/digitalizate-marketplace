---
id: "UX-289"
title: "In-App Help Panel (Help Hub)"
category: "Navigation & Information Architecture"
subcategory: "Help Systems"
score: 4
context: "All enterprise applications with more than basic functionality. Especially important when serving non-technical users in professional contexts."
goals:
  - "Structure Navigation for Deep Products"
wireframe: "https://files.catbox.moe/5yl26x.jpg"
notion: "https://app.notion.com/p/In-App-Help-Panel-Help-Hub-b8ea9aed534483cdbd48817fcaaf3612"
---

## Why
A persistent slide-out help panel containing a search bar, frequently accessed articles, getting started guides, a keyboard shortcut reference, and a support contact link brings documentation into the user's workflow. Users who must open a separate browser tab to find help are interrupted, lose their application context, and are more likely to contact support instead of self-serving. The help panel eliminates the tab-switching cost while keeping users in their flow.

## How to implement
- Trigger: persistent ? button in the top-right app chrome.
- Panel width: 380–420px.
- Contents: search bar (AI-powered where possible), "Help for this page" section (context-aware), "Getting started" links, keyboard shortcuts reference, and "Contact Support" link.
- Open as a slide-over panel, not a new browser tab.
- Track which articles are accessed to improve context-aware recommendations over time.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Support tickets reduction
- **Adoption & Retention**: Signup completion rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track in-app help panel usage and task completion rates after help interactions via analytics; measure reduction in external support tickets and compare task success rates for users who use the help panel versus those who don't.
- Trigger: persistent ? button in the top-right app chrome.
- Panel width: 380–420px.
- Contents: search bar (AI-powered where possible), "Help for this page" section (context-aware), "Getting started" links, keyboard shortcuts reference, and "Contact Support" link.
- Open as a slide-over panel, not a new browser tab.
- Track which articles are accessed to improve context-aware recommendations over time.

## Sources
- [UXpilot — Enterprise UX Best Practices](https://uxpilot.ai/blogs/enterprise-ux-design)
