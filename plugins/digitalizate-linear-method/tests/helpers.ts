// Builders for raw workspace fixtures used by the tests. Dates are relative to NOW.
import type { RawWorkspace, RawTeam, RawIssue, RawProject, RawCycle, RawInitiative } from "../scripts/lib/raw-types.js";

export const NOW = new Date("2026-10-13T12:00:00.000Z");
const DAY = 86_400_000;
export const ago = (d: number) => new Date(NOW.getTime() - d * DAY).toISOString();
export const ahead = (d: number) => new Date(NOW.getTime() + d * DAY).toISOString().slice(0, 10);

let seq = 0;
const id = (p: string) => `${p}-${++seq}`;

const defaultStates = [
  { id: "st-triage", name: "Triage", type: "triage", position: 0 },
  { id: "st-backlog", name: "Backlog", type: "backlog", position: 1 },
  { id: "st-todo", name: "Todo", type: "unstarted", position: 2 },
  { id: "st-prog", name: "In Progress", type: "started", position: 3 },
  { id: "st-review", name: "In Review", type: "started", position: 4 },
  { id: "st-done", name: "Done", type: "completed", position: 5 },
  { id: "st-canceled", name: "Canceled", type: "canceled", position: 6 },
  { id: "st-dup", name: "Duplicate", type: "duplicate", position: 7 },
];
const stateByType: Record<string, { id: string; name: string; type: string }> = {
  triage: defaultStates[0], backlog: defaultStates[1], unstarted: defaultStates[2], started: defaultStates[3],
};

export function issue(key: string, n: number, p: Partial<RawIssue> & { stateType?: string; labelNames?: string[] } = {}): RawIssue {
  const st = stateByType[p.stateType ?? "unstarted"];
  return {
    id: id("iss"), identifier: `${key}-${n}`, title: p.title ?? `Add thing ${n}`, description: p.description ?? null, priority: p.priority ?? 3, estimate: null,
    createdAt: p.createdAt ?? ago(10), updatedAt: p.updatedAt ?? ago(2), startedAt: p.startedAt ?? (st.type === "started" ? ago(2) : null),
    startedTriageAt: p.startedTriageAt ?? (st.type === "triage" ? ago(1) : null), triagedAt: null,
    assignee: p.assignee === undefined ? (st.type === "triage" || st.type === "backlog" ? null : { id: "u1" }) : p.assignee,
    delegate: p.delegate ?? null, creator: p.creator ?? { id: `u${(n % 3) + 1}` }, project: p.project === undefined ? { id: "proj-1" } : p.project,
    cycle: p.cycle ?? null, parent: null, state: { id: st.id, name: st.name, type: st.type }, labels: { nodes: (p.labelNames ?? ["Feature"]).map((name) => ({ name })) },
  };
}

export function cycle(number: number, p: Partial<RawCycle> & { planned?: number; done?: number; rolled?: number; bugs?: number } = {}): RawCycle {
  const planned = p.planned ?? 10, done = p.done ?? 8, rolled = p.rolled ?? planned - done;
  const bugs = p.bugs ?? 2;
  return {
    id: `cyc-${number}`, number, name: null, startsAt: p.startsAt ?? ago(14 * (4 - number) + 14), endsAt: p.endsAt ?? ago(14 * (4 - number)), completedAt: p.completedAt ?? ago(14 * (4 - number)),
    isActive: p.isActive ?? false, isPast: p.isPast ?? true, isNext: false, isFuture: false, progress: done / planned,
    issueCountHistory: [planned], completedIssueCountHistory: [done], scopeHistory: [planned], completedScopeHistory: [done],
    uncompletedIssuesUponClose: { nodes: Array.from({ length: rolled }, () => ({ id: id("r") })) },
    completedIssues: Array.from({ length: done }, (_, i) => ({ id: id("d"), labels: i < bugs ? ["Bug"] : ["Feature"] })),
  };
}

export function team(key: string, p: Partial<RawTeam> = {}): RawTeam {
  return {
    id: `team-${key}`, key, name: key, timezone: "UTC", parent: null,
    cyclesEnabled: true, cycleDuration: 2, cycleCooldownTime: 0, cycleStartDay: 1,
    cycleIssueAutoAssignStarted: true, cycleIssueAutoAssignCompleted: true, cycleLockToActive: false, upcomingCycleCount: 2,
    triageEnabled: true, requirePriorityToLeaveTriage: false, triageResponsibility: { id: "tr", action: "notify", currentUser: { id: "u1", name: "Ana" } },
    autoClosePeriod: 6, autoArchivePeriod: 1, issueEstimationType: "notUsed",
    states: { nodes: defaultStates }, labels: { nodes: [] },
    cycles: [cycle(1), cycle(2), cycle(3), cycle(4, { isActive: true, isPast: false, completedAt: null, startsAt: ago(5), endsAt: ahead(9), planned: 9, done: 2, rolled: 0 })],
    issues: [],
    ...p,
  };
}

export function project(name: string, p: Partial<RawProject> = {}): RawProject {
  return {
    id: p.id ?? id("proj"), name, url: "", state: "started", status: { name: "In Progress", type: "started", indefinite: false },
    lead: { id: "u1", name: "Ana" }, startDate: ago(10).slice(0, 10), targetDate: ahead(11), startedAt: ago(10), completedAt: null, canceledAt: null,
    createdAt: ago(12), updatedAt: ago(1), health: "onTrack", healthUpdatedAt: ago(3), progress: 0.4, scope: 10,
    lastUpdate: { id: "pu", createdAt: ago(3), health: "onTrack" },
    projectMilestones: { nodes: [{ id: "m1", name: "Beta", targetDate: ahead(5), status: "next" }] },
    initiatives: { nodes: [{ id: "init-1", name: "Activation" }] }, teams: { nodes: [{ id: "team-ENG", key: "ENG" }] },
    members: { nodes: [{ id: "u1" }, { id: "u2" }] }, documents: { nodes: [] },
    content: "## Why\nUsers drop at step 3 of 5. ## What\nTwo-step checkout. Out of scope: passes. ## How\nReuse calendar. ## Milestones\n1. Flagged. 2. Everyone. ## Success\nCompletion 59% to 70%.",
    description: "Two-step checkout",
    ...p,
  };
}

export function initiative(name: string, p: Partial<RawInitiative> = {}): RawInitiative {
  return { id: `init-${name}`, name, status: "Active", owner: { id: "u1", name: "Ana" }, targetDate: ahead(80), health: "onTrack", updatedAt: ago(2), lastUpdate: { createdAt: ago(10), health: "onTrack" }, projects: { nodes: [] }, ...p };
}

export function workspace(p: Partial<RawWorkspace> = {}): RawWorkspace {
  return {
    fetchedAt: NOW.toISOString(),
    organization: { name: "Fixture Co", urlKey: "fixture", userCount: 6, projectUpdateReminderFrequencyInWeeks: 1 },
    integrations: [{ service: "github" }, { service: "slack" }],
    workspaceLabels: [
      { id: "l-bug", name: "Bug", isGroup: false, parent: null, lastAppliedAt: ago(1), retiredAt: null, team: null },
      { id: "l-feat", name: "Feature", isGroup: false, parent: null, lastAppliedAt: ago(1), retiredAt: null, team: null },
      { id: "l-chore", name: "Chore", isGroup: false, parent: null, lastAppliedAt: ago(1), retiredAt: null, team: null },
    ],
    teams: [], projects: [], initiatives: [],
    ...p,
  };
}

export function healthyWorkspace(): RawWorkspace {
  const eng = team("ENG");
  eng.issues = [
    issue("ENG", 1, { stateType: "triage" }),
    issue("ENG", 2, { stateType: "backlog", updatedAt: ago(20) }),
    issue("ENG", 3, { stateType: "unstarted", cycle: { id: "cyc-4" } }),
    issue("ENG", 4, { stateType: "started", cycle: { id: "cyc-4" }, labelNames: ["Bug"], project: null }),
    issue("ENG", 5, { stateType: "started", cycle: { id: "cyc-4" }, creator: { id: "u2" } }),
  ];
  return workspace({ teams: [eng], projects: [project("Two-step checkout", { id: "proj-1" })], initiatives: [initiative("Activation", { projects: { nodes: [{ id: "proj-1" }] } })] });
}

export function messyWorkspace(): RawWorkspace {
  const mk = (key: string, extra: Partial<RawTeam> = {}) => team(key, { cycleIssueAutoAssignStarted: false, upcomingCycleCount: 8, autoClosePeriod: null, triageResponsibility: null, issueEstimationType: "exponential", ...extra });
  const fe = mk("FE");
  fe.states = { nodes: [...fe.states.nodes, { id: "st-qa", name: "Esperando QA", type: "started", position: 8 }, { id: "st-demo", name: "Listo para demo", type: "started", position: 9 }] };
  fe.labels = { nodes: [
    { id: "l1", name: "Bloqueado", isGroup: false, parent: null, lastAppliedAt: ago(3), retiredAt: null, team: { id: "team-FE" } },
    { id: "l2", name: "P1", isGroup: false, parent: null, lastAppliedAt: ago(3), retiredAt: null, team: { id: "team-FE" } },
  ] };
  fe.cycles = [cycle(1, { planned: 20, done: 8, rolled: 12, bugs: 0 }), cycle(2, { planned: 22, done: 9, rolled: 13, bugs: 0 }), cycle(3, { planned: 21, done: 9, rolled: 12, bugs: 1 }), cycle(4, { isActive: true, isPast: false, completedAt: null, startsAt: ago(5), endsAt: ahead(9), planned: 25, done: 3, rolled: 0 })];
  fe.issues = [
    ...Array.from({ length: 6 }, (_, i) => issue("FE", 100 + i, { stateType: "triage", startedTriageAt: ago(12 + i), createdAt: ago(12 + i) })),
    ...Array.from({ length: 40 }, (_, i) => issue("FE", 200 + i, { stateType: "backlog", updatedAt: ago(200 + i), creator: { id: "po" }, priority: i % 2 === 0 ? 1 : 3 })),
    issue("FE", 300, { stateType: "unstarted", title: "Como tutor quiero recibir una notificación cuando se publique una nota para poder informar a la familia a tiempo y sin demoras", assignee: null, priority: 1, creator: { id: "po" }, cycle: { id: "cyc-4" }, project: null }),
    issue("FE", 301, { stateType: "started", startedAt: ago(30), priority: 1, creator: { id: "po" }, delegate: { id: "agent" }, assignee: null }),
    issue("FE", 302, { stateType: "started", description: "As a parent, I want to see grades so that I know", priority: 1, creator: { id: "po" }, cycle: { id: "cyc-4" }, project: null }),
    issue("FE", 303, { stateType: "unstarted", priority: 1, creator: { id: "po" }, cycle: { id: "cyc-4" }, project: null }),
    issue("FE", 304, { stateType: "unstarted", priority: 1, creator: { id: "po" }, cycle: { id: "cyc-4" }, project: null }),
  ];
  const be = mk("BE"); const qa = mk("QA"); const dz = mk("DZ");
  const container = project("App familias v2", { startedAt: ago(150), startDate: ago(150).slice(0, 10), lead: null, targetDate: null, lastUpdate: null, health: null, projectMilestones: { nodes: [] }, initiatives: { nodes: [] }, members: { nodes: [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u4" }, { id: "u5" }] }, content: "", description: "v2", progress: 0.9 });
  return workspace({ integrations: [{ service: "slack" }], teams: [fe, be, qa, dz], projects: [container], initiatives: [initiative("Q3", { owner: null, lastUpdate: null }), initiative("Q3b"), initiative("Q3c"), initiative("Q3d"), initiative("Q3e")] });
}
