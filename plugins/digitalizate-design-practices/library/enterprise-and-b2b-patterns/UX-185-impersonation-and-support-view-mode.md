---
id: "UX-185"
title: "Impersonation and Support View Mode"
category: "Enterprise & B2B Patterns"
subcategory: "Admin Tools"
score: 3
context: "Enterprise SaaS applications with support teams that handle customer issues. Also valuable for QA testing role-specific functionality."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
wireframe: "https://files.catbox.moe/xp1a5k.jpg"
notion: "https://app.notion.com/p/Impersonation-and-Support-View-Mode-4ffa9aed5344839b8eb001b9caf729a2"
---

## Why
An impersonation mode that lets support staff view the application from another user's perspective — without requiring the customer's credentials — is essential for diagnosing user-specific issues. The requirement for a persistent visual indicator ("Viewing as: [john@acme.com](mailto:john@acme.com) — Exit impersonation") is non-negotiable: support staff must always know they are impersonating, and the mode must never be invisible. All actions taken during impersonation must be logged separately in the audit trail.

## How to implement
- Restrict impersonation to specific admin/support roles with explicit permission.
- Require a reason note before entering impersonation mode (logged to audit trail).
- Show a high-visibility persistent banner at the top of the application during impersonation: "Support mode: Viewing as [user name] at [org name] — [Exit]." Disable destructive actions (delete, payment changes) in impersonation mode.
- Automatically exit impersonation on session timeout.

## Sources
- [Nexiby — Multi-Tenant SaaS](https://nexiby.com/build-multi-tenant-saas-application/)
