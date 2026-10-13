---
id: "UX-174"
title: "Role-Resource-Action Permission Matrix"
category: "Enterprise & B2B Patterns"
subcategory: "Role-Based Access Control"
score: 4
context: "During initial RBAC system design for any enterprise application. Serves as the single source of truth for all UI conditional rendering decisions throughout development."
goals:
  - "Build Trust & Reduce User Anxiety"
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
wireframe: "https://files.catbox.moe/63wqnq.jpg"
notion: "https://app.notion.com/p/Role-Resource-Action-Permission-Matrix-573a9aed534482db9e228181747020a5"
---

## Why
Modeling permissions as a Role × Resource × Action matrix (who can do what to which resource) creates a formal contract between design, development, and product that prevents the inconsistent permission enforcement that plagues enterprise applications. The matrix clarifies every conditional rendering decision in the UI and ensures that "can this user delete this record?" has a definitive, consistent answer everywhere it's implemented.

## How to implement
- Build the matrix as a reference document: roles in rows, resource+action combinations (Customer Record / View, Customer Record / Edit, Customer Record / Delete, etc.) in columns, with checkmarks for allowed combinations.
- Expand to include field-level permissions for sensitive data (can view salary field, cannot edit it).
- Design the admin settings panel to expose and configure this matrix to non-technical administrators.
- Review quarterly as the product evolves.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Permission accuracy rate, Task success rate
- **Efficiency**: Time to configure permissions, Support tickets for access issues
- **Security**: Unauthorized access incidents, Audit compliance rate
**How to measure**: Track permission-related support tickets before and after matrix implementation; measure time for admins to configure new role permissions; audit for unauthorized data exposure incidents.

## Sources
- [NocoBase — How to Design an RBAC System](https://www.nocobase.com/en/blog/how-to-design-rbac-role-based-access-control-system)
