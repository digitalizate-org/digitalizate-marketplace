---
id: "UX-181"
title: "Role Hierarchy and Permission Inheritance"
category: "Enterprise & B2B Patterns"
subcategory: "Role-Based Access Control"
score: 3
context: "Organizations with clear job hierarchies where senior roles consistently have all the access of junior roles plus additional capabilities. Simplifies administration dramatically in complex multi-role systems."
goals:
  - "Build Trust & Reduce User Anxiety"
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
wireframe: "https://files.catbox.moe/swbqxl.jpg"
notion: "https://app.notion.com/p/Role-Hierarchy-and-Permission-Inheritance-788a9aed534483f99e7481baa2faf3fb"
---

## Why
Higher-level roles inheriting all permissions from lower-level roles prevents permission duplication and simplifies administration — changing a base role cascades to all inheriting roles. Without inheritance, each role must be managed independently, leading to divergence over time where equivalent-level roles have inconsistently different permissions. This is particularly important in enterprise applications with 10+ roles where manual permission management becomes untenable.

## How to implement
- Visualize the role hierarchy as a tree in the admin settings panel.
- When viewing a role's permissions, clearly show which permissions are inherited vs. explicitly assigned (visually differentiated).
- Support multi-role assignment per user for cross-functional roles.
- Provide an audit tool that answers "Why does this user have this permission?" — tracing the inheritance chain to the source.
- Highlight when proposed changes would cascade to child roles.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Permission accuracy rate, Admin task success rate
- **Efficiency**: Time to configure roles, Support tickets for permission issues
- **Scalability**: Role management overhead as organization grows
**How to measure**: Track time for admins to set up new role configurations; measure permission-related support tickets; audit role consistency across equivalent-level roles quarterly.

## Sources
- [Glance Group — RBAC in Enterprise Apps](https://thisisglance.com/learning-centre/how-do-you-implement-role-based-access-in-enterprise-apps)
