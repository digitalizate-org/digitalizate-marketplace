---
id: "UX-300"
title: "Role-Based Onboarding Flows"
category: "Onboarding & Empty States"
subcategory: "Onboarding"
score: 4
context: "All enterprise applications with distinct user roles that have different primary use cases — critical when the same platform serves technical admins and non-technical end users."
goals:
  - "Optimize Onboarding & First-Time Experience"
  - "Design for Enterprise & B2B Scale"
tags:
  - "onboarding"
  - "enterprise"
wireframe: "https://files.catbox.moe/iiyilk.jpg"
notion: "https://app.notion.com/p/Role-Based-Onboarding-Flows-d26a9aed53448369b2fe017ba66cd25e"
---

## Why
Enterprise applications serve multiple roles with completely different workflows, priorities, and mental models. Showing all users the same onboarding flow forces every persona through content irrelevant to their job — an admin provisioned from Active Directory doesn't need a tutorial on how to create their first project, but the employee they provisioned does. Role-based onboarding reduces time-to-value and prevents the common enterprise scenario where users arrive at an empty interface with no guidance.

## How to implement
- Ask the user's role at signup or derive it from directory provisioning (AD group, SCIM attributes).
- Branch the onboarding checklist per role: Admin sees SSO/LDAP setup + user provisioning; Analyst sees data connection + first dashboard creation; Operator sees task queue + SLA settings.
- Track onboarding completion per role.
- Surface incomplete onboarding steps as a persistent sidebar widget until dismissed or completed.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Training time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
- **Adoption & Retention**: Account creation rate, Signup completion rate
**How to measure**: Segment onboarding completion rates and time-to-first-value by user role in your analytics platform; run usability tests with each role segment to validate that role-specific flows reduce errors and confusion.

## Sources
- [Code Theorem — SaaS Onboarding UX](https://codetheorem.co/blogs/saas-onboarding-ux/)
- [Formbricks — User Onboarding Best Practices](https://formbricks.com/blog/user-onboarding-best-practices)
