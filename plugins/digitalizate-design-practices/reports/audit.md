# Auditoría de la librería

Fichas: 843 · IDs distintos en Notion: 633 · IDs repetidos: 196 · sin ID: 14 · sin cuerpo: 0

## 1. IDs

El build asignará 0 IDs nuevos (ver data/id_changes.csv tras correr build_skills.py). Regla: en una colisión conserva el ID la ficha cuyo grupo no está en `reassign_groups`; las demás reciben el siguiente número libre de su prefijo.

IDs repetidos (196): UX-357, UX-358, UX-359, UX-360, UX-361, UX-362, UX-363, UX-364, UX-365, UX-366, UX-367, UX-368, UX-369, UX-370, UX-371, UX-372, UX-373, UX-374, UX-375, UX-376, UX-377, UX-378, UX-379, UX-380, UX-381, UX-382, UX-383, UX-384, UX-385, UX-386, UX-387, UX-388, UX-389, UX-390, UX-391, UX-392, UX-393, UX-394, UX-395, UX-396 …

## 2. Duplicados cercanos

22 pares con similitud de título ≥ 0.82. Detalle en reports/duplicates.md. Un par es candidato a fusión cuando además la similitud de Context es alta o comparten subcategoría.

## 3. Texto plantilla repetido

"How to Present It": 40 bloques idénticos repetidos; el mayor aparece en 51 fichas. Esta sección se descarta en el build (config.drop_sections).

## 4. Secciones faltantes

Sin How to Implement: 45 · Sin What & Why: 14. Los IDs son los canónicos que asignará el build.

### Sin How to Implement (45)

- UX-131 Composition Over Configuration in Design Systems (Design Systems & Tokens) https://app.notion.com/p/Composition-Over-Configuration-in-Design-Systems-58da9aed5344830d8ba4015812939a0a
- UX-122 Group Decision-Making Failure Modes — Structured Decision Processes (Design Process & Methodology) https://app.notion.com/p/Group-Decision-Making-Failure-Modes-Structured-Decision-Processes-f92a9aed534483fd802f8155e799399b
- UX-204 Notification Center with Categorization (Feedback & Error Handling) https://app.notion.com/p/Notification-Center-with-Categorization-a79a9aed5344838783d381c1242c59b1
- UX-267 Peripheral Vision Determines Dashboard Character (Layout & Visual Hierarchy) https://app.notion.com/p/Peripheral-Vision-Determines-Dashboard-Character-45ba9aed5344831ab1cc811f38e77bf5
- UX-275 Time Perception — Accurate Estimates Reduce Frustration (Loading & Performance Perception) https://app.notion.com/p/Time-Perception-Accurate-Estimates-Reduce-Frustration-631a9aed534483f0a12981e0b13568ca
- UX-303 Celebratory Empty States (Zero-State Completion) (Onboarding & Empty States) https://app.notion.com/p/Celebratory-Empty-States-Zero-State-Completion-760a9aed534482bb9fc30123e490be07
- UX-162 Design for Interruption — Autosave and Session Resumability (Enterprise & B2B Patterns) https://app.notion.com/p/Design-for-Interruption-Autosave-and-Session-Resumability-107a9aed534483149f0e81f5e8874405
- UX-157 High-Density Interface Design Principles (Desktop-Specific Patterns) https://app.notion.com/p/High-Density-Interface-Design-Principles-098a9aed5344833b9a7601dc2cdeb203
- UX-336 Map Between System and Real World — Natural Mapping for Controls (Usability Heuristics) https://app.notion.com/p/Map-Between-System-and-Real-World-Natural-Mapping-for-Controls-b74a9aed534482d39c3d810616db3690
- UX-187 Rich Excel Export with Conditional Formatting (Enterprise & B2B Patterns) https://app.notion.com/p/Rich-Excel-Export-with-Conditional-Formatting-410a9aed5344838f85e6816b6873a1fd
- UX-036 Sustained Attention Design — 10-Minute Pause Points (Cognitive Psychology) https://app.notion.com/p/Sustained-Attention-Design-10-Minute-Pause-Points-487a9aed5344820aa6dd019cbdf40375
- UX-291 Deep Linking and URL State Persistence (Navigation & Information Architecture) https://app.notion.com/p/Deep-Linking-and-URL-State-Persistence-f59a9aed53448304866281572bbe66cf
- UX-219 Parkinson's Law — Constrain Forms and Workflows to Reduce Task Inflation (Forms & Input) https://app.notion.com/p/Parkinson-s-Law-Constrain-Forms-and-Workflows-to-Reduce-Task-Inflation-0d4a9aed5344821fac61814e0b7096be
- AGP-004 AI - Component Generation Context (Agentic Patterns) https://app.notion.com/p/AI-Component-Generation-Context-181a9aed534482afa1368185daeac2b5
- AGP-009 Actor Model Coordination (Agentic Patterns) https://app.notion.com/p/Actor-Model-Coordination-5d0a9aed534482e6af720134f96ea7a8
- AGP-010 Adaptive Compute Scaling (ACS) (Agentic Patterns) https://app.notion.com/p/Adaptive-Compute-Scaling-ACS-99da9aed5344837993b3817b385519d9
- AGP-011 Adaptive Context Sizing (ACS) (Agentic Patterns) https://app.notion.com/p/Adaptive-Context-Sizing-ACS-912a9aed534483d58e44014a1b39d6e1
- AGP-053 Conversational Orchestration (Agentic Patterns) https://app.notion.com/p/Conversational-Orchestration-a3ea9aed53448257812081f70349cbe7
- AGP-055 Cost-Aware Model Selection (CAMS) (Agentic Patterns) https://app.notion.com/p/Cost-Aware-Model-Selection-CAMS-124a9aed534483d9a2040110e307f34a
- UX-634 Design - Adoption & Value Metrics (Design Systems & Tokens) https://app.notion.com/p/Design-Adoption-Value-Metrics-365a9aed5344830d8d8701629611d04a
- UX-635 Design - Collaboration & Contribution Model (Design Process & Methodology) https://app.notion.com/p/Design-Collaboration-Contribution-Model-c51a9aed534482cbb710013b96ee9a21
- UX-636 Design - Documentation Operations (Design Systems & Tokens) https://app.notion.com/p/Design-Documentation-Operations-22ca9aed534483b5999a011eca798cd7
- UX-638 Design - System Backlog & Pilot Delivery (Design Process & Methodology) https://app.notion.com/p/Design-System-Backlog-Pilot-Delivery-594a9aed5344828aa9ca817c27d1c43c
- UX-639 Design - System Discovery & Audit (Design Process & Methodology) https://app.notion.com/p/Design-System-Discovery-Audit-f36a9aed534483599837011d18dd93fe
- UX-640 Design - System Foundations, Principles & Documentation (Design Systems & Tokens) https://app.notion.com/p/Design-System-Foundations-Principles-Documentation-bb8a9aed53448296bd0001eb39988351
- UX-641 Design - System Governance, Adoption & Measurement (Design Process & Methodology) https://app.notion.com/p/Design-System-Governance-Adoption-Measurement-9a2a9aed534483e3b5e101349d8717cf
- UX-642 Design - System Initiation & Alignment (Design Process & Methodology) https://app.notion.com/p/Design-System-Initiation-Alignment-c02a9aed53448332ad36010c52c4965d
- UX-643 Design - System Product Team & Operating Model (Design Systems & Tokens) https://app.notion.com/p/Design-System-Product-Team-Operating-Model-34ea9aed534483a2839b0146e44ae023
- AGP-066 Edge AI Optimization (EAO) (Agentic Patterns) https://app.notion.com/p/Edge-AI-Optimization-EAO-232a9aed53448200823781f88ffe8006
- AGP-068 Energy-Efficient Inference (EEI) (Agentic Patterns) https://app.notion.com/p/Energy-Efficient-Inference-EEI-034a9aed534482d6b80781c1527ee2ee
- AGP-069 Enterprise Orchestration (Agentic Patterns) https://app.notion.com/p/Enterprise-Orchestration-583a9aed53448268a7af0106b9b2a948
- AGP-073 Event-Driven Hierarchical Agents (EDHA) (Agentic Patterns) https://app.notion.com/p/Event-Driven-Hierarchical-Agents-EDHA-9b0a9aed53448303ac5b81856af00cde
- AGP-074 Event-Driven Market-Based (EDMB) (Agentic Patterns) https://app.notion.com/p/Event-Driven-Market-Based-EDMB-b18a9aed534483ffbf88019f4be9a80c
- AGP-075 Event-Driven Orchestrator-Worker (EDOW) (Agentic Patterns) https://app.notion.com/p/Event-Driven-Orchestrator-Worker-EDOW-5e8a9aed53448214ae3481c40d0edd73
- AGP-077 Federated Orchestration (FO) (Agentic Patterns) https://app.notion.com/p/Federated-Orchestration-FO-44fa9aed5344836d861601b15e2b52e5
- AGP-083 Graph State Machines (Agentic Patterns) https://app.notion.com/p/Graph-State-Machines-621a9aed5344837cbbf201769a83c43c
- AGP-098 Intelligent Context Routing (ICR) (Agentic Patterns) https://app.notion.com/p/Intelligent-Context-Routing-ICR-186a9aed5344829483fc81e9c6f0f95e
- AGP-106 Latency Optimization (LO) (Agentic Patterns) https://app.notion.com/p/Latency-Optimization-LO-fbda9aed534482a09303016c30bf4159
- AGP-121 Memory Optimization (MO) (Agentic Patterns) https://app.notion.com/p/Memory-Optimization-MO-352a9aed534483ccbbc0814bce20e784
- AGP-134 Multi-Source Context Fusion (MSCF) (Agentic Patterns) https://app.notion.com/p/Multi-Source-Context-Fusion-MSCF-010a9aed5344837f8c7f0159413a85ee
- AGP-150 Progressive Enhancement (PE) (Agentic Patterns) https://app.notion.com/p/Progressive-Enhancement-PE-316a9aed5344828a828081f67f556f14
- AGP-158 Resource-Aware Scheduling (RAS) (Agentic Patterns) https://app.notion.com/p/Resource-Aware-Scheduling-RAS-8d1a9aed53448290a5e9013baefe6d6c
- AGP-159 Role-Based Teamwork (Agentic Patterns) https://app.notion.com/p/Role-Based-Teamwork-a72a9aed534483d08da281a69239696a
- AGP-177 Stateful Graph Workflows (Agentic Patterns) https://app.notion.com/p/Stateful-Graph-Workflows-414a9aed53448200a39881e3d7b69c40
- UX-645 Design - System Technical Architecture & Distribution (Design Systems & Tokens) https://app.notion.com/p/Design-System-Technical-Architecture-Distribution-9a8a9aed534482f9b49a81222c735271

### Sin What & Why (14)

- AGP-004 AI - Component Generation Context (Agentic Patterns) https://app.notion.com/p/AI-Component-Generation-Context-181a9aed534482afa1368185daeac2b5
- AGP-005 AI - Pattern Assembly & State Modeling (Agentic Patterns) https://app.notion.com/p/AI-Pattern-Assembly-State-Modeling-788a9aed534482b6bb7401335843dd29
- UX-634 Design - Adoption & Value Metrics (Design Systems & Tokens) https://app.notion.com/p/Design-Adoption-Value-Metrics-365a9aed5344830d8d8701629611d04a
- UX-635 Design - Collaboration & Contribution Model (Design Process & Methodology) https://app.notion.com/p/Design-Collaboration-Contribution-Model-c51a9aed534482cbb710013b96ee9a21
- UX-636 Design - Documentation Operations (Design Systems & Tokens) https://app.notion.com/p/Design-Documentation-Operations-22ca9aed534483b5999a011eca798cd7
- UX-637 Design - Foundations & Component Scope (Design Systems & Tokens) https://app.notion.com/p/Design-Foundations-Component-Scope-68da9aed53448258989f01ac49cdf0e8
- UX-638 Design - System Backlog & Pilot Delivery (Design Process & Methodology) https://app.notion.com/p/Design-System-Backlog-Pilot-Delivery-594a9aed5344828aa9ca817c27d1c43c
- UX-639 Design - System Discovery & Audit (Design Process & Methodology) https://app.notion.com/p/Design-System-Discovery-Audit-f36a9aed534483599837011d18dd93fe
- UX-640 Design - System Foundations, Principles & Documentation (Design Systems & Tokens) https://app.notion.com/p/Design-System-Foundations-Principles-Documentation-bb8a9aed53448296bd0001eb39988351
- UX-641 Design - System Governance, Adoption & Measurement (Design Process & Methodology) https://app.notion.com/p/Design-System-Governance-Adoption-Measurement-9a2a9aed534483e3b5e101349d8717cf
- UX-642 Design - System Initiation & Alignment (Design Process & Methodology) https://app.notion.com/p/Design-System-Initiation-Alignment-c02a9aed53448332ad36010c52c4965d
- UX-643 Design - System Product Team & Operating Model (Design Systems & Tokens) https://app.notion.com/p/Design-System-Product-Team-Operating-Model-34ea9aed534483a2839b0146e44ae023
- UX-644 Design - Token Architecture (Design Systems & Tokens) https://app.notion.com/p/Design-Token-Architecture-530a9aed53448302ae8a812df29fa848
- UX-645 Design - System Technical Architecture & Distribution (Design Systems & Tokens) https://app.notion.com/p/Design-System-Technical-Architecture-Distribution-9a8a9aed534482f9b49a81222c735271

## 5. Categorías

| Categoría | Grupo | Fichas | Score medio | ≥4 | Subcategorías |
|---|---|---|---|---|---|
| Agentic Patterns | agentic | 198 | 2.88 | 49 | 25 |
| Human Biases in Interfaces | ux | 85 | 4.14 | 68 | 0 |
| Gestalt Principles | ux | 55 | 4.73 | 55 | 37 |
| Design Process & Methodology | ux | 36 | 4.33 | 31 | 34 |
| Interaction Patterns | ux | 35 | 4.51 | 34 | 29 |
| Enterprise & B2B Patterns | ux | 30 | 4.20 | 23 | 19 |
| Behavioral Psychology | ux | 30 | 3.43 | 13 | 22 |
| Cognitive Load | ux | 30 | 3.90 | 21 | 13 |
| Gamification | ux | 29 | 2.69 | 6 | 16 |
| Reading Psychology | ux | 29 | 4.14 | 22 | 9 |
| Desktop-Specific Patterns | ux | 26 | 4.27 | 22 | 19 |
| Cognitive Psychology | ux | 23 | 4.48 | 19 | 22 |
| Workflow & Multi-Step Processes | ux | 20 | 4.15 | 18 | 11 |
| Data Display & Tables | ux | 20 | 4.55 | 19 | 20 |
| Human-Centered Design | ux | 19 | 2.95 | 6 | 15 |
| Dashboard Design | ux | 19 | 4.53 | 17 | 15 |
| Product Strategy | ux | 19 | 4.26 | 15 | 18 |
| Feedback & Error Handling | ux | 17 | 4.88 | 17 | 16 |
| Design Systems & Tokens | ux | 16 | 4.69 | 16 | 15 |
| Component Patterns | ux | 16 | 4.62 | 16 | 16 |
| Navigation & Information Architecture | ux | 16 | 4.69 | 16 | 15 |
| Forms & Input | ux | 15 | 4.60 | 14 | 15 |
| Layout & Visual Hierarchy | ux | 13 | 4.62 | 13 | 13 |
| Accessibility | ux | 13 | 4.46 | 12 | 13 |
| Onboarding & Empty States | ux | 12 | 4.17 | 11 | 10 |
| Search Filter & Sort | ux | 11 | 4.91 | 11 | 9 |
| Loading & Performance Perception | ux | 8 | 4.62 | 8 | 7 |
| Usability Heuristics | ux | 3 | 4.67 | 3 | 3 |
