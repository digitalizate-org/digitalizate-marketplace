// Fetches a workspace through Linear's GraphQL API and writes .linear-method/snapshot.json (plus raw.json for debugging).
// Usage: LINEAR_API_KEY=... npx tsx scripts/snapshot.ts [--team KEY] [--out .linear-method/snapshot.json] [--completed-days 180] [--decisions linear-decisions.md]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { LinearClient } from "./lib/graphql.js";
import { computeSnapshot } from "./lib/metrics.js";
import { parseWriting } from "./lib/evaluate-core.js";
import type { RawWorkspace, RawTeam, RawCycle, RawIssue, RawProject, RawInitiative, RawLabel } from "./lib/raw-types.js";

const args = process.argv.slice(2);
const opt = (name: string, fallback: string) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : fallback; };
const teamKey = opt("--team", "");
const out = opt("--out", ".linear-method/snapshot.json");
const completedDays = Number(opt("--completed-days", "180"));
const cycleWindowDays = Number(opt("--cycle-window-days", "120"));

const ISSUE_FIELDS = `id identifier title description priority estimate createdAt updatedAt startedAt startedTriageAt triagedAt
  assignee { id } delegate { id } creator { id } project { id } cycle { id } parent { id }
  state { id name type } labels { nodes { name } }`;
const LABEL_FIELDS = `id name isGroup parent { id name } lastAppliedAt retiredAt team { id }`;
const PROJECT_FIELDS = `id name url state status { name type indefinite } lead { id name } startDate targetDate startedAt completedAt canceledAt createdAt updatedAt
  health healthUpdatedAt progress scope lastUpdate { id createdAt health }
  projectMilestones(first: 50) { nodes { id name targetDate status } }
  initiatives(first: 10) { nodes { id name } } teams(first: 10) { nodes { id key } } members(first: 25) { nodes { id } }
  documents(first: 1) { nodes { id } } content description`;

const Q_ORG = `query { organization { name urlKey userCount projectUpdateReminderFrequencyInWeeks } }`;
const Q_INTEGRATIONS = `query { integrations(first: 50) { nodes { id service } } }`;
const Q_TEAMS = `query Teams($first: Int, $after: String) { teams(first: $first, after: $after) { pageInfo { hasNextPage endCursor } nodes {
  id key name timezone parent { id key }
  cyclesEnabled cycleDuration cycleCooldownTime cycleStartDay cycleIssueAutoAssignStarted cycleIssueAutoAssignCompleted cycleLockToActive upcomingCycleCount
  triageEnabled requirePriorityToLeaveTriage triageResponsibility { id action currentUser { id name } }
  autoClosePeriod autoArchivePeriod issueEstimationType
  states { nodes { id name type position } }
  labels(first: 250) { nodes { ${LABEL_FIELDS} } } } } }`;
const Q_WS_LABELS = `query Labels($first: Int, $after: String) { issueLabels(first: $first, after: $after, filter: { team: { null: true } }) { pageInfo { hasNextPage endCursor } nodes { ${LABEL_FIELDS} } } }`;
const Q_CYCLES = `query Cycles($teamId: ID!, $since: DateTimeOrDuration!) { cycles(first: 50, filter: { team: { id: { eq: $teamId } }, endsAt: { gt: $since } }) { nodes {
  id number name startsAt endsAt completedAt isActive isPast isNext isFuture progress
  issueCountHistory completedIssueCountHistory scopeHistory completedScopeHistory
  uncompletedIssuesUponClose(first: 250) { nodes { id } } } } }`;
const Q_CYCLE_COMPLETED = `query CycleDone($cycleId: ID!, $first: Int, $after: String) { issues(first: $first, after: $after, filter: { cycle: { id: { eq: $cycleId } }, completedAt: { null: false } }) { pageInfo { hasNextPage endCursor } nodes { id labels { nodes { name } } } } }`;
const Q_ISSUES = `query Issues($teamId: ID!, $first: Int, $after: String) { issues(first: $first, after: $after, filter: { team: { id: { eq: $teamId } }, state: { type: { nin: ["completed", "canceled", "duplicate"] } } }) { pageInfo { hasNextPage endCursor } nodes { ${ISSUE_FIELDS} } } }`;
const Q_PROJECTS_ACTIVE = `query Projects($first: Int, $after: String) { projects(first: $first, after: $after, filter: { status: { type: { in: ["backlog", "planned", "started", "paused"] } } }) { pageInfo { hasNextPage endCursor } nodes { ${PROJECT_FIELDS} } } }`;
const Q_PROJECTS_DONE = `query ProjectsDone($first: Int, $after: String, $since: DateTimeOrDuration!) { projects(first: $first, after: $after, filter: { completedAt: { gt: $since } }) { pageInfo { hasNextPage endCursor } nodes { ${PROJECT_FIELDS} } } }`;
const Q_INITIATIVES = `query Initiatives($first: Int, $after: String) { initiatives(first: $first, after: $after) { pageInfo { hasNextPage endCursor } nodes {
  id name status owner { id name } targetDate health updatedAt lastUpdate { createdAt health } projects(first: 50) { nodes { id } } } } }`;

function writingOptions() {
  const file = [opt("--decisions", ""), "linear-decisions.md", ".linear-method/linear-decisions.md", "docs/linear-decisions.md"].find((p) => p && existsSync(p));
  const writing = parseWriting(file ? readFileSync(file, "utf8") : null);
  console.error(writing.primaryReader ? `reader: ${writing.primaryReader}` : "no reader declared; LM-139 will be skipped");
  return writing;
}

async function main() {
  const client = new LinearClient();
  const now = new Date();
  const since = (d: number) => new Date(now.getTime() - d * 86_400_000).toISOString();
  const org = (await client.query<{ organization: RawWorkspace["organization"] }>(Q_ORG)).organization;
  console.error(`Workspace: ${org.name} (${org.urlKey})`);

  let integrations: RawWorkspace["integrations"] = null;
  try { integrations = (await client.query<{ integrations: { nodes: { id: string; service: string }[] } }>(Q_INTEGRATIONS)).integrations.nodes; }
  catch (e) { console.error(`integrations query failed, git_connected will be unknown: ${(e as Error).message}`); }

  let teams = await client.paginate<Omit<RawTeam, "cycles" | "issues">>(Q_TEAMS, {}, ["teams"], 50);
  if (teamKey) teams = teams.filter((t) => t.key === teamKey || t.name === teamKey);
  if (teams.length === 0) throw new Error(`No team matched ${teamKey}`);
  const workspaceLabels = await client.paginate<RawLabel>(Q_WS_LABELS, {}, ["issueLabels"], 250);

  const fullTeams: RawTeam[] = [];
  for (const t of teams) {
    console.error(`Team ${t.key}: fetching cycles and issues`);
    let cycles: RawCycle[] = [];
    if (t.cyclesEnabled) {
      cycles = (await client.query<{ cycles: { nodes: RawCycle[] } }>(Q_CYCLES, { teamId: t.id, since: since(cycleWindowDays) })).cycles.nodes;
      const closed = cycles.filter((c) => c.isPast).sort((a, b) => a.number - b.number).slice(-3);
      for (const c of closed) {
        const done = await client.paginate<{ id: string; labels: { nodes: { name: string }[] } }>(Q_CYCLE_COMPLETED, { cycleId: c.id }, ["issues"], 250);
        c.completedIssues = done.map((i) => ({ id: i.id, labels: i.labels.nodes.map((l) => l.name) }));
      }
    }
    const issues = await client.paginate<RawIssue>(Q_ISSUES, { teamId: t.id }, ["issues"], 100);
    fullTeams.push({ ...t, cycles, issues });
  }

  const projectsActive = await client.paginate<RawProject>(Q_PROJECTS_ACTIVE, {}, ["projects"], 50);
  const projectsDone = await client.paginate<RawProject>(Q_PROJECTS_DONE, { since: since(completedDays) }, ["projects"], 50);
  const seen = new Set<string>();
  const projects = [...projectsActive, ...projectsDone].filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));
  const initiatives = await client.paginate<RawInitiative>(Q_INITIATIVES, {}, ["initiatives"], 50);

  const raw: RawWorkspace = { fetchedAt: now.toISOString(), organization: org, integrations, workspaceLabels, teams: fullTeams, projects, initiatives };
  const snapshot = computeSnapshot(raw, now, writingOptions());
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(snapshot, null, 2));
  writeFileSync(out.replace(/snapshot\.json$/, "raw.json"), JSON.stringify(raw));
  console.error(`Snapshot written to ${out} (${fullTeams.length} teams, ${projects.length} projects, ${initiatives.length} initiatives)`);
}

main().catch((e) => { console.error(e.message ?? e); process.exit(1); });
