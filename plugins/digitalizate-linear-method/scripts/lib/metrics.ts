// Pure functions: RawWorkspace -> Snapshot (metrics + samples). No network. Tested with fixtures.
import type { RawWorkspace, RawTeam, RawIssue, RawProject, RawCycle, RawLabel } from "./raw-types.js";

export type Metric = number | boolean | null;
export type Metrics = Record<string, Metric>;
export interface Sample { ref: string; detail: string }
export type Samples = Record<string, Sample[]>;

export interface TeamSnapshot {
  id: string; key: string; name: string; parentKey: string | null;
  metrics: Metrics; samples: Samples;
  states: { name: string; type: string }[];
  labels: string[];
}
export interface Snapshot {
  generatedAt: string;
  workspace: { name: string; urlKey: string; userCount: number; metrics: Metrics; samples: Samples };
  teams: TeamSnapshot[];
  projects: { id: string; name: string; status: string; lead: string | null; targetDate: string | null; health: string | null; lastUpdateAt: string | null; ageDays: number | null; milestones: number; initiatives: number; progress: number }[];
  initiatives: { id: string; name: string; status: string; owner: string | null; targetDate: string | null; lastUpdateAt: string | null }[];
}

const DAY = 86_400_000;
const days = (from: string | null | undefined, now: Date): number | null => (from ? Math.floor((now.getTime() - new Date(from).getTime()) / DAY) : null);
const share = (part: number, total: number): number | null => (total === 0 ? null : Number((part / total).toFixed(3)));
const avg = (xs: number[]): number | null => (xs.length === 0 ? null : Number((xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(3)));
const median = (xs: number[]): number | null => {
  if (xs.length === 0) return null;
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Number(((s[mid - 1] + s[mid]) / 2).toFixed(1));
};
const last = <T>(xs: T[]): T | undefined => xs[xs.length - 1];
const cap = <T>(xs: T[], n = 5): T[] => xs.slice(0, n);

export const USER_STORY_RE = /\b(as\s+an?|como(?:\s+una?)?)\s+[^\n]{1,80}?\b(i\s+want|quiero|necesito)\b/i;
export const STATUS_LABEL_RE = /\b(blocked|bloqueado|bloqueada|waiting|esperando|awaiting|in review|en revisi[oó]n|review|qa|ready|listo|lista|done|hecho|todo|in progress|en progreso|on hold|pending|pendiente|wip)\b/i;
export const PRIORITY_LABEL_RE = /\b(urgent|urgente|critical|cr[ií]tico|p0|p1|p2|p3|high priority|low priority|prioridad alta|prioridad baja)\b/i;
const DEFAULT_STATES = new Set(["triage", "backlog", "todo", "in progress", "done", "canceled", "cancelled", "duplicate", "in review", "won't fix", "wont fix"]);
const TYPE_LABELS = ["bug", "feature", "improvement", "chore"];
const ACTIVE_STATE_TYPES = new Set(["triage", "backlog", "unstarted", "started"]);

function isActiveIssue(i: RawIssue): boolean {
  return ACTIVE_STATE_TYPES.has(i.state.type);
}

function labelMetrics(labels: RawLabel[]): { metrics: Metrics; samples: Samples } {
  const live = labels.filter((l) => !l.retiredAt && !l.isGroup);
  const statusLike = live.filter((l) => STATUS_LABEL_RE.test(l.name));
  const priorityLike = live.filter((l) => PRIORITY_LABEL_RE.test(l.name));
  const names = live.map((l) => l.name.toLowerCase());
  return {
    metrics: {
      "labels.total": live.length,
      "labels.status_like_count": statusLike.length,
      "labels.priority_like_count": priorityLike.length,
      "labels.type_group_present": TYPE_LABELS.filter((t) => names.includes(t)).length >= 2,
    },
    samples: {
      "labels.status_like_count": cap(statusLike.map((l) => ({ ref: l.name, detail: "label name reads as a workflow status" }))),
      "labels.priority_like_count": cap(priorityLike.map((l) => ({ ref: l.name, detail: "label name reads as a priority" }))),
    },
  };
}

function cycleMetrics(cycles: RawCycle[], now: Date): { metrics: Metrics; samples: Samples } {
  const closed = cycles.filter((c) => c.isPast || (c.completedAt && new Date(c.endsAt) < now)).sort((a, b) => a.number - b.number).slice(-3);
  const completion = closed.map((c) => {
    const planned = last(c.issueCountHistory) ?? 0;
    const done = last(c.completedIssueCountHistory) ?? 0;
    return planned === 0 ? null : done / planned;
  }).filter((x): x is number => x !== null);
  const rollover = closed.map((c) => {
    const planned = last(c.issueCountHistory) ?? 0;
    return planned === 0 ? null : c.uncompletedIssuesUponClose.nodes.length / planned;
  }).filter((x): x is number => x !== null);
  const completedCounts = closed.map((c) => last(c.completedIssueCountHistory) ?? 0);
  const withBugData = closed.filter((c) => c.completedIssues !== undefined);
  const zeroBugCycles = withBugData.filter((c) => (c.completedIssues ?? []).length > 0 && !(c.completedIssues ?? []).some((i) => i.labels.some((l) => /^(bug|chore)$/i.test(l))));
  const bugShare = withBugData.length === 0 ? null : avg(withBugData.map((c) => {
    const all = c.completedIssues ?? [];
    return all.length === 0 ? 0 : all.filter((i) => i.labels.some((l) => /^(bug|chore)$/i.test(l))).length / all.length;
  }));
  const active = cycles.find((c) => c.isActive);
  const avgCompleted = avg(completedCounts);
  const activeLoad = active ? (last(active.issueCountHistory) ?? 0) : null;
  return {
    metrics: {
      "cycles.closed_in_window": closed.length,
      "cycles.last3_completion_avg": avg(completion),
      "cycles.last3_completion_min": completion.length ? Number(Math.min(...completion).toFixed(3)) : null,
      "cycles.rollover_rate_last3": avg(rollover),
      "cycles.avg_completed_last3": avgCompleted,
      "cycles.active_load_ratio": active && avgCompleted ? Number(((activeLoad ?? 0) / avgCompleted).toFixed(2)) : null,
      "cycles.bug_share_last3": bugShare,
      "cycles.cycles_with_zero_bugs_last3": withBugData.length === 0 ? null : zeroBugCycles.length,
    },
    samples: {
      "cycles.last3_completion_avg": closed.map((c) => ({ ref: `cycle ${c.number}`, detail: `${last(c.completedIssueCountHistory) ?? 0}/${last(c.issueCountHistory) ?? 0} completed` })),
      "cycles.rollover_rate_last3": closed.map((c) => ({ ref: `cycle ${c.number}`, detail: `${c.uncompletedIssuesUponClose.nodes.length} rolled over` })),
      "cycles.cycles_with_zero_bugs_last3": zeroBugCycles.map((c) => ({ ref: `cycle ${c.number}`, detail: "no Bug/Chore completed" })),
    },
  };
}

export type PrimaryReader = "technical" | "business" | "external";
export interface WritingOptions {
  primaryReader: PrimaryReader | null;
  descriptionMaxChars: number;
  batchCount: number;
  batchMinutes: number;
}
export const DEFAULT_WRITING: WritingOptions = { primaryReader: null, descriptionMaxChars: 2500, batchCount: 5, batchMinutes: 10 };

const FENCE_RE = /```[\s\S]*?```/g;
const CODE_SPAN_RE = /`[^`\n]+`/g;
const PATH_RE = /(?:^|[\s(`"'])((?![\w-]+\.[a-z][\w.-]*\/)(?:[\w.-]+\/)+[\w.-]+\.\w{1,5}|[a-z0-9][\w-]*\.(?:vue|yml|yaml|env|md|php|js|ts|tsx|json|sh|py|sql|rb|go|java|cs))(?=[\s)`"',.:;]|$)/g;
const COMMAND_RE = /(?:^|[\s`])(?:(?:doctl|npx|npm|pnpm|yarn|ssh|ufw|curl|wget|docker|kubectl|composer|artisan|chmod|chown|systemctl|brew|pip|psql|mysql)\s+[a-z-]|git\s+(?:pull|push|clone|checkout|rebase|merge|commit|fetch|log|diff|status|reset|revert|tag|branch|stash|apply|switch|cherry-pick)(?![\w-]))/gm;
const CHECKLIST_ITEM_RE = /^\s*[-*]\s*\[[ xX]\]/;
const countOf = (s: string, re: RegExp): number => (s.match(re) ?? []).length;
const isBug = (i: RawIssue): boolean => i.labels.nodes.some((l) => /^bug$/i.test(l.name));

export function proseLength(description: string): number {
  let inItem = false;
  let n = 0;
  for (const line of description.split("\n")) {
    if (CHECKLIST_ITEM_RE.test(line)) { inItem = true; continue; }
    if (inItem && /^\s+\S/.test(line)) continue;
    inItem = false;
    n += line.length + 1;
  }
  return Math.max(0, n - 1);
}

export function technicalTrail(i: RawIssue): { technical: boolean; detail: string } {
  const d = i.description ?? "";
  const fences = countOf(d, FENCE_RE);
  const rest = d.replace(FENCE_RE, " ");
  const spans = countOf(rest, CODE_SPAN_RE);
  const paths = countOf(rest, PATH_RE);
  const commands = countOf(rest, COMMAND_RE);
  const technical = (fences > 0 && !isBug(i)) || spans >= 10 || paths >= 3 || commands >= 2;
  return { technical, detail: `${spans} code spans, ${paths} paths, ${commands} commands, ${fences} code blocks` };
}

function writingMetrics(issues: RawIssue[], o: WritingOptions): { metrics: Metrics; samples: Samples } {
  const described = issues.filter((i) => (i.description ?? "").trim().length > 0);
  const readerIsOutsider = o.primaryReader === "business" || o.primaryReader === "external";
  const trails = readerIsOutsider ? described.map((i) => ({ i, t: technicalTrail(i) })).filter((x) => x.t.technical) : [];
  const long = described.filter((i) => proseLength(i.description ?? "") > o.descriptionMaxChars);
  const children = new Map<string, RawIssue[]>();
  for (const i of issues) if (i.parent) children.set(i.parent.id, [...(children.get(i.parent.id) ?? []), i]);
  const widestBatch = (kids: RawIssue[]): number => {
    const byCreator = new Map<string, number[]>();
    for (const k of kids) byCreator.set(k.creator?.id ?? "", [...(byCreator.get(k.creator?.id ?? "") ?? []), new Date(k.createdAt).getTime()]);
    let best = 0;
    for (const raw of byCreator.values()) {
      const times = raw.sort((a, b) => a - b);
      let lo = 0;
      for (let hi = 0; hi < times.length; hi++) {
        while (times[hi] - times[lo] > o.batchMinutes * 60_000) lo++;
        best = Math.max(best, hi - lo + 1);
      }
    }
    return best;
  };
  const batched = [...children].map(([pid, kids]) => ({ pid, size: widestBatch(kids) })).filter((b) => b.size >= o.batchCount);
  const parentRef = (id: string) => issues.find((i) => i.id === id)?.identifier ?? id;
  return {
    metrics: {
      "issues.with_description_count": described.length,
      "issues.technical_description_share": readerIsOutsider ? share(trails.length, described.length) : null,
      "issues.long_description_share": share(long.length, described.length),
      "issues.batched_subissue_parent_count": batched.length,
    },
    samples: {
      "issues.technical_description_share": cap(trails.map((x) => ({ ref: x.i.identifier, detail: x.t.detail }))),
      "issues.long_description_share": cap(long.map((i) => ({ ref: i.identifier, detail: `${proseLength(i.description ?? "")} chars outside the checklist` }))),
      "issues.batched_subissue_parent_count": cap(batched.map(({ pid, size }) => ({ ref: parentRef(pid), detail: `${size} sub-issues by one creator within ${o.batchMinutes} min` }))),
    },
  };
}

function teamSnapshot(t: RawTeam, workspaceLabels: RawLabel[], now: Date, writing: WritingOptions = DEFAULT_WRITING): TeamSnapshot {
  const issues = t.issues.filter(isActiveIssue);
  const triage = issues.filter((i) => i.state.type === "triage");
  const backlog = issues.filter((i) => i.state.type === "backlog");
  const planned = issues.filter((i) => i.state.type === "unstarted" || i.state.type === "started");
  const started = issues.filter((i) => i.state.type === "started");
  const triageAges = triage.map((i) => days(i.startedTriageAt ?? i.createdAt, now) ?? 0);
  const stories = issues.filter((i) => USER_STORY_RE.test(i.title) || USER_STORY_RE.test((i.description ?? "").slice(0, 400)));
  const longTitles = issues.filter((i) => i.title.length > 80);
  const unassigned = planned.filter((i) => !i.assignee);
  const startedOld = started.filter((i) => (days(i.startedAt, now) ?? 0) > 14);
  const activeCycle = t.cycles.find((c) => c.isActive);
  const inCycleNoProject = activeCycle ? issues.filter((i) => i.cycle?.id === activeCycle.id && !i.project && !i.parent && !i.labels.nodes.some((l) => /^(bug|chore)$/i.test(l.name))) : [];
  const delegatedNoAssignee = issues.filter((i) => i.delegate && !i.assignee);
  const creators = new Map<string, number>();
  for (const i of issues) if (i.creator) creators.set(i.creator.id, (creators.get(i.creator.id) ?? 0) + 1);
  const topCreator = Math.max(0, ...creators.values());
  const staleBacklog = backlog.filter((i) => (days(i.updatedAt, now) ?? 0) > 180);
  const cyc = cycleMetrics(t.cycles, now);
  const avgCompleted = cyc.metrics["cycles.avg_completed_last3"];
  const stateNames = t.states.nodes.map((s) => s.name);
  const extraStates = t.states.nodes.filter((s) => !DEFAULT_STATES.has(s.name.toLowerCase()));
  const lab = labelMetrics([...t.labels.nodes, ...workspaceLabels]);
  const urgent = issues.filter((i) => i.priority === 1);
  const wr = writingMetrics(issues, writing);
  const metrics: Metrics = {
    "cycles.enabled": t.cyclesEnabled,
    "cycles.duration_weeks": t.cyclesEnabled ? t.cycleDuration : null,
    "cycles.start_day": t.cyclesEnabled ? t.cycleStartDay : null,
    "cycles.cooldown_weeks": t.cyclesEnabled ? t.cycleCooldownTime : null,
    "cycles.auto_add_started": t.cyclesEnabled ? t.cycleIssueAutoAssignStarted : null,
    "cycles.auto_add_completed": t.cyclesEnabled ? t.cycleIssueAutoAssignCompleted : null,
    "cycles.upcoming_count": t.cyclesEnabled ? t.upcomingCycleCount : null,
    ...(t.cyclesEnabled ? cyc.metrics : {}),
    "triage.enabled": t.triageEnabled,
    "triage.has_responsibility": t.triageEnabled ? t.triageResponsibility !== null : null,
    "triage.count": triage.length,
    "triage.max_age_days": triage.length ? Math.max(...triageAges) : 0,
    "triage.over_3d_count": triageAges.filter((a) => a > 3).length,
    "backlog.count": backlog.length,
    "backlog.stale_180d_count": staleBacklog.length,
    "backlog.oldest_days": backlog.length ? Math.max(...backlog.map((i) => days(i.updatedAt, now) ?? 0)) : 0,
    "backlog.cycles_of_work": typeof avgCompleted === "number" && avgCompleted > 0 ? Number((backlog.length / avgCompleted).toFixed(1)) : null,
    "issues.active_count": issues.length,
    "issues.urgent_share": share(urgent.length, issues.length),
    "issues.no_priority_share": share(issues.filter((i) => i.priority === 0).length, issues.length),
    "issues.user_story_count": stories.length,
    "issues.long_title_count": longTitles.length,
    "issues.active_unassigned_count": unassigned.length,
    "issues.started_over_14d_count": startedOld.length,
    "issues.in_cycle_without_project_count": inCycleNoProject.length,
    "issues.delegated_without_assignee_count": delegatedNoAssignee.length,
    "issues.single_creator_share": share(topCreator, issues.length),
    ...wr.metrics,
    ...lab.metrics,
    "states.count": t.states.nodes.length,
    "states.extra_count": extraStates.length,
    "settings.auto_close_enabled": t.autoClosePeriod !== null && t.autoClosePeriod > 0,
    "settings.auto_archive_enabled": t.autoArchivePeriod > 0,
    "settings.estimates_enabled": t.issueEstimationType !== "notUsed",
    "settings.require_priority_to_leave_triage": t.requirePriorityToLeaveTriage,
  };
  const ref = (i: RawIssue) => i.identifier;
  const samples: Samples = {
    ...(t.cyclesEnabled ? cyc.samples : {}),
    ...lab.samples,
    "triage.max_age_days": cap([...triage].sort((a, b) => (days(b.startedTriageAt ?? b.createdAt, now) ?? 0) - (days(a.startedTriageAt ?? a.createdAt, now) ?? 0)).map((i) => ({ ref: ref(i), detail: `${days(i.startedTriageAt ?? i.createdAt, now)} days in triage: ${i.title.slice(0, 60)}` }))),
    "backlog.stale_180d_count": cap(staleBacklog.map((i) => ({ ref: ref(i), detail: `untouched ${days(i.updatedAt, now)} days` }))),
    "issues.user_story_count": cap(stories.map((i) => ({ ref: ref(i), detail: i.title.slice(0, 80) }))),
    "issues.long_title_count": cap(longTitles.map((i) => ({ ref: ref(i), detail: `${i.title.length} chars` }))),
    "issues.active_unassigned_count": cap(unassigned.map((i) => ({ ref: ref(i), detail: `${i.state.name}, no assignee` }))),
    "issues.started_over_14d_count": cap(startedOld.map((i) => ({ ref: ref(i), detail: `started ${days(i.startedAt, now)} days ago` }))),
    "issues.in_cycle_without_project_count": cap(inCycleNoProject.map((i) => ({ ref: ref(i), detail: i.title.slice(0, 60) }))),
    "issues.delegated_without_assignee_count": cap(delegatedNoAssignee.map((i) => ({ ref: ref(i), detail: "delegate set, no human assignee" }))),
    ...wr.samples,
    "issues.urgent_share": cap(urgent.map((i) => ({ ref: ref(i), detail: i.title.slice(0, 60) }))),
    "states.extra_count": cap(extraStates.map((s) => ({ ref: s.name, detail: `category ${s.type}` }))),
  };
  return { id: t.id, key: t.key, name: t.name, parentKey: t.parent?.key ?? null, metrics, samples, states: t.states.nodes.map((s) => ({ name: s.name, type: s.type })), labels: lab.metrics["labels.total"] === null ? [] : [...t.labels.nodes, ...workspaceLabels].filter((l) => !l.retiredAt).map((l) => l.name) };
}

function projectMetrics(projects: RawProject[], now: Date): { metrics: Metrics; samples: Samples } {
  const active = projects.filter((p) => ["planned", "started", "paused"].includes(p.status.type) && !p.canceledAt && !p.completedAt);
  const started = active.filter((p) => p.status.type === "started");
  const noLead = active.filter((p) => !p.lead);
  const noDate = active.filter((p) => !p.targetDate);
  const stale = started.filter((p) => !p.lastUpdate || (days(p.lastUpdate.createdAt, now) ?? 0) > 7);
  const noHealth = started.filter((p) => !p.health);
  const ageOf = (p: RawProject) => days(p.startedAt ?? p.startDate ?? p.createdAt, now) ?? 0;
  const over6w = started.filter((p) => !p.status.indefinite && ageOf(p) > 42);
  const over6wNoMs = over6w.filter((p) => p.projectMilestones.nodes.length === 0);
  const noSpec = started.filter((p) => (p.content ?? "").length < 200 && (p.description ?? "").length < 200 && p.documents.nodes.length === 0);
  const noInitiative = active.filter((p) => p.initiatives.nodes.length === 0 && !p.status.indefinite);
  const bigTeams = started.filter((p) => p.members.nodes.length > 3);
  const stuck = started.filter((p) => p.progress > 0.85);
  const completed = projects.filter((p) => p.completedAt && p.startedAt).map((p) => (new Date(p.completedAt!).getTime() - new Date(p.startedAt!).getTime()) / DAY).filter((d) => d >= 0).slice(-10);
  const s = (list: RawProject[], detail: (p: RawProject) => string) => cap(list.map((p) => ({ ref: p.name, detail: detail(p) })));
  return {
    metrics: {
      "projects.total": projects.length,
      "projects.active_count": active.length,
      "projects.started_count": started.length,
      "projects.active_without_lead_count": noLead.length,
      "projects.active_without_target_date_count": noDate.length,
      "projects.active_update_stale_7d_count": stale.length,
      "projects.active_without_health_count": noHealth.length,
      "projects.active_over_6w_count": over6w.length,
      "projects.active_over_6w_without_milestones_count": over6wNoMs.length,
      "projects.active_without_spec_count": noSpec.length,
      "projects.active_without_initiative_count": noInitiative.length,
      "projects.active_members_over_3_count": bigTeams.length,
      "projects.active_progress_over_85_count": stuck.length,
      "projects.completed_median_duration_days": median(completed.map((d) => Math.round(d))),
    },
    samples: {
      "projects.active_without_lead_count": s(noLead, (p) => `status ${p.status.name}, no lead`),
      "projects.active_without_target_date_count": s(noDate, (p) => `status ${p.status.name}`),
      "projects.active_update_stale_7d_count": s(stale, (p) => (p.lastUpdate ? `last update ${days(p.lastUpdate.createdAt, now)} days ago` : "no update ever")),
      "projects.active_over_6w_without_milestones_count": s(over6wNoMs, (p) => `started ${ageOf(p)} days ago, no milestones`),
      "projects.active_without_spec_count": s(noSpec, (p) => "overview under 200 chars and no document"),
      "projects.active_without_initiative_count": s(noInitiative, (p) => `status ${p.status.name}`),
      "projects.active_members_over_3_count": s(bigTeams, (p) => `${p.members.nodes.length} members`),
      "projects.active_progress_over_85_count": s(stuck, (p) => `progress ${Math.round(p.progress * 100)}%`),
    },
  };
}

function initiativeMetrics(initiatives: RawWorkspace["initiatives"], now: Date): { metrics: Metrics; samples: Samples } {
  const active = initiatives.filter((i) => i.status === "Active" || i.status === "Planned");
  const live = initiatives.filter((i) => i.status === "Active");
  const noOwner = active.filter((i) => !i.owner);
  const noDate = active.filter((i) => !i.targetDate);
  const stale = live.filter((i) => !i.lastUpdate || (days(i.lastUpdate.createdAt, now) ?? 0) > 30);
  const s = (list: typeof initiatives, detail: (i: (typeof initiatives)[number]) => string) => cap(list.map((i) => ({ ref: i.name, detail: detail(i) })));
  return {
    metrics: {
      "initiatives.total": initiatives.length,
      "initiatives.active_count": live.length,
      "initiatives.active_without_owner_count": noOwner.length,
      "initiatives.active_without_target_date_count": noDate.length,
      "initiatives.active_update_stale_30d_count": stale.length,
    },
    samples: {
      "initiatives.active_without_owner_count": s(noOwner, (i) => `status ${i.status}`),
      "initiatives.active_update_stale_30d_count": s(stale, (i) => (i.lastUpdate ? `last update ${days(i.lastUpdate.createdAt, now)} days ago` : "no update ever")),
    },
  };
}

export function computeSnapshot(raw: RawWorkspace, now = new Date(raw.fetchedAt), writing: WritingOptions = DEFAULT_WRITING): Snapshot {
  const teams = raw.teams.map((t) => teamSnapshot(t, raw.workspaceLabels, now, writing));
  const cadences = new Set(raw.teams.map((t) => (t.cyclesEnabled ? `${t.cycleDuration}-${t.cycleStartDay}-${t.cycleCooldownTime}` : "none")));
  const proj = projectMetrics(raw.projects, now);
  const init = initiativeMetrics(raw.initiatives, now);
  const services = raw.integrations?.map((i) => i.service.toLowerCase()) ?? null;
  const wsLabels = labelMetrics(raw.workspaceLabels);
  const workspaceMetrics: Metrics = {
    "teams.count": raw.teams.length,
    "teams.distinct_cadences": cadences.size,
    "teams.excess_over_cadences": Math.max(0, raw.teams.length - cadences.size),
    "integrations.git_connected": services === null ? null : services.some((s) => s === "github" || s === "gitlab"),
    "integrations.services_count": services === null ? null : services.length,
    ...proj.metrics,
    ...init.metrics,
    ...Object.fromEntries(Object.entries(wsLabels.metrics).map(([k, v]) => [`workspace_${k}`, v])),
  };
  return {
    generatedAt: now.toISOString(),
    workspace: { name: raw.organization.name, urlKey: raw.organization.urlKey, userCount: raw.organization.userCount, metrics: workspaceMetrics, samples: { ...proj.samples, ...init.samples, "teams.excess_over_cadences": raw.teams.map((t) => ({ ref: t.key, detail: t.cyclesEnabled ? `${t.cycleDuration}w cycles, start day ${t.cycleStartDay}` : "cycles off" })) } },
    teams,
    projects: raw.projects.map((p) => ({ id: p.id, name: p.name, status: p.status.name, lead: p.lead?.name ?? null, targetDate: p.targetDate, health: p.health, lastUpdateAt: p.lastUpdate?.createdAt ?? null, ageDays: days(p.startedAt ?? p.startDate ?? p.createdAt, now), milestones: p.projectMilestones.nodes.length, initiatives: p.initiatives.nodes.length, progress: p.progress })),
    initiatives: raw.initiatives.map((i) => ({ id: i.id, name: i.name, status: i.status, owner: i.owner?.name ?? null, targetDate: i.targetDate, lastUpdateAt: i.lastUpdate?.createdAt ?? null })),
  };
}
