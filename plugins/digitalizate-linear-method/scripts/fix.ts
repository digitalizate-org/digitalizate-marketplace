// Applies a plan of reversible operations to Linear, logs every mutation with its inverse, and can undo a run.
// Usage:
//   npx tsx scripts/fix.ts plan --from-findings .linear-method/findings.json --snapshot .linear-method/snapshot.json [--include LM-118,LM-128] [--out .linear-method/plan.json]
//   npx tsx scripts/fix.ts apply --plan .linear-method/plan.json --owner "Name" [--dry-run] [--limit 200]
//   npx tsx scripts/fix.ts undo --run .linear-method/runs/<file>.json
// Operations never delete. Allowed: issue.update, issue.archive, issue.comment, project.update, team.update, label.retire, label.restore.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { LinearClient } from "./lib/graphql.js";
import type { Evaluation } from "./lib/evaluate-core.js";
import type { Snapshot } from "./lib/metrics.js";
import type { RawWorkspace } from "./lib/raw-types.js";

type Op =
  | { type: "issue.update"; id: string; ref: string; input: Record<string, unknown>; before: Record<string, unknown>; reason: string }
  | { type: "issue.archive"; id: string; ref: string; reason: string }
  | { type: "issue.comment"; issueId: string; ref: string; body: string; reason: string }
  | { type: "project.update"; id: string; ref: string; input: Record<string, unknown>; before: Record<string, unknown>; reason: string }
  | { type: "team.update"; id: string; ref: string; input: Record<string, unknown>; before: Record<string, unknown>; reason: string }
  | { type: "label.retire"; id: string; ref: string; reason: string }
  | { type: "label.restore"; id: string; ref: string; reason: string };

interface Plan { createdAt: string; source: string; operations: Op[] }
interface RunEntry { op: Op; result: "ok" | "error" | "dry-run"; detail?: string; createdId?: string }
interface Run { startedAt: string; owner: string; plan: string; dryRun: boolean; entries: RunEntry[] }

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name: string, fallback: string) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : fallback; };
const flag = (name: string) => args.includes(name);

const STANDARD_COMMENT = (reason: string) => `Linear Method tooling (digitalizate-linear-method): ${reason}. If this is still relevant, reopen it and say so in a comment.`;

function planFromFindings(findings: Evaluation, snapshot: Snapshot, rawPath: string, include: string[]): Plan {
  const raw = existsSync(rawPath) ? (JSON.parse(readFileSync(rawPath, "utf8")) as RawWorkspace) : null;
  const ops: Op[] = [];
  const want = (id: string) => include.length === 0 || include.includes(id);
  for (const f of findings.findings) {
    const team = raw?.teams.find((t) => t.key === f.team);
    if (f.id === "LM-118" && want(f.id) && team) {
      // archive backlog issues untouched for 180+ days, after a standard comment
      const cutoff = Date.now() - 180 * 86_400_000;
      for (const i of team.issues.filter((x) => x.state.type === "backlog" && new Date(x.updatedAt).getTime() < cutoff)) {
        ops.push({ type: "issue.comment", issueId: i.id, ref: i.identifier, body: STANDARD_COMMENT("archived after 180 days without activity (LM-054, LM-118)"), reason: "LM-118" });
        ops.push({ type: "issue.archive", id: i.id, ref: i.identifier, reason: "LM-118 backlog untouched 180 days" });
      }
    }
    if ((f.id === "LM-128" || f.id === "LM-129") && want(f.id) && team) {
      const re = f.id === "LM-128" ? /\b(blocked|bloqueado|bloqueada|waiting|esperando|awaiting|in review|en revisi[oó]n|review|qa|ready|listo|lista|done|hecho|todo|in progress|en progreso|on hold|pending|pendiente|wip)\b/i : /\b(urgent|urgente|critical|cr[ií]tico|p0|p1|p2|p3|high priority|low priority|prioridad alta|prioridad baja)\b/i;
      for (const l of [...team.labels.nodes, ...(raw?.workspaceLabels ?? [])].filter((x) => !x.retiredAt && !x.isGroup && re.test(x.name))) {
        if (!ops.some((o) => o.type === "label.retire" && o.id === l.id)) ops.push({ type: "label.retire", id: l.id, ref: l.name, reason: `${f.id} label encodes ${f.id === "LM-128" ? "status" : "priority"}` });
      }
    }
    if (f.id === "LM-121" && want(f.id) && team) ops.push({ type: "team.update", id: team.id, ref: team.key, input: { cycleIssueAutoAssignStarted: true, cycleIssueAutoAssignCompleted: true }, before: { cycleIssueAutoAssignStarted: team.cycleIssueAutoAssignStarted, cycleIssueAutoAssignCompleted: team.cycleIssueAutoAssignCompleted }, reason: "LM-121 auto-add started and completed issues" });
    if (f.id === "LM-122" && want(f.id) && team) ops.push({ type: "team.update", id: team.id, ref: team.key, input: { upcomingCycleCount: 2 }, before: { upcomingCycleCount: team.upcomingCycleCount }, reason: "LM-122 keep 2 upcoming cycles" });
    if (f.id === "LM-123" && want(f.id) && team) ops.push({ type: "team.update", id: team.id, ref: team.key, input: { autoClosePeriod: 6 }, before: { autoClosePeriod: team.autoClosePeriod }, reason: "LM-123 auto-close inactive backlog issues after 6 months" });
    if (f.id === "LM-135" && include.includes("LM-135") && team) ops.push({ type: "team.update", id: team.id, ref: team.key, input: { issueEstimationType: "notUsed" }, before: { issueEstimationType: team.issueEstimationType }, reason: "LM-135 estimates off (explicitly requested)" });
    if (f.id === "LM-136" && want(f.id) && team) ops.push({ type: "team.update", id: team.id, ref: team.key, input: { triageEnabled: true }, before: { triageEnabled: team.triageEnabled }, reason: "LM-136 enable triage" });
  }
  return { createdAt: new Date().toISOString(), source: "findings", operations: ops };
}

async function apply(client: LinearClient | null, plan: Plan, owner: string, dryRun: boolean, limit: number): Promise<Run> {
  const run: Run = { startedAt: new Date().toISOString(), owner, plan: JSON.stringify(plan.operations.length), dryRun, entries: [] };
  const ops = plan.operations.slice(0, limit);
  if (plan.operations.length > limit) console.error(`Plan has ${plan.operations.length} operations; applying the first ${limit} (use --limit to change).`);
  for (const op of ops) {
    if (dryRun || !client) { run.entries.push({ op, result: "dry-run" }); continue; }
    try {
      let createdId: string | undefined;
      switch (op.type) {
        case "issue.update": await client.query(`mutation($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { success } }`, { id: op.id, input: op.input }); break;
        case "issue.archive": await client.query(`mutation($id: String!) { issueArchive(id: $id) { success } }`, { id: op.id }); break;
        case "issue.comment": { const r = await client.query<{ commentCreate: { comment: { id: string } } }>(`mutation($input: CommentCreateInput!) { commentCreate(input: $input) { comment { id } } }`, { input: { issueId: op.issueId, body: op.body } }); createdId = r.commentCreate.comment.id; break; }
        case "project.update": await client.query(`mutation($id: String!, $input: ProjectUpdateInput!) { projectUpdate(id: $id, input: $input) { success } }`, { id: op.id, input: op.input }); break;
        case "team.update": await client.query(`mutation($id: String!, $input: TeamUpdateInput!) { teamUpdate(id: $id, input: $input) { success } }`, { id: op.id, input: op.input }); break;
        case "label.retire": await client.query(`mutation($id: String!) { issueLabelRetire(id: $id) { success } }`, { id: op.id }); break;
        case "label.restore": await client.query(`mutation($id: String!) { issueLabelRestore(id: $id) { success } }`, { id: op.id }); break;
      }
      run.entries.push({ op, result: "ok", createdId });
    } catch (e) {
      run.entries.push({ op, result: "error", detail: (e as Error).message });
      console.error(`${op.type} ${op.ref}: ${(e as Error).message}`);
    }
  }
  return run;
}

function inverse(entry: RunEntry): Op | null {
  const op = entry.op;
  switch (op.type) {
    case "issue.update": return { type: "issue.update", id: op.id, ref: op.ref, input: op.before, before: op.input, reason: `undo ${op.reason}` };
    case "issue.archive": return { type: "issue.update", id: op.id, ref: op.ref, input: { archivedAt: null } as Record<string, unknown>, before: {}, reason: `undo ${op.reason}` };
    case "issue.comment": return null; // comments are left in place; they document what happened
    case "project.update": return { type: "project.update", id: op.id, ref: op.ref, input: op.before, before: op.input, reason: `undo ${op.reason}` };
    case "team.update": return { type: "team.update", id: op.id, ref: op.ref, input: op.before, before: op.input, reason: `undo ${op.reason}` };
    case "label.retire": return { type: "label.restore", id: op.id, ref: op.ref, reason: `undo ${op.reason}` };
    case "label.restore": return { type: "label.retire", id: op.id, ref: op.ref, reason: `undo ${op.reason}` };
  }
}

async function unarchiveIssues(client: LinearClient, ops: Op[]) {
  for (const op of ops) if (op.type === "issue.update" && "archivedAt" in op.input) {
    await client.query(`mutation($id: String!) { issueUnarchive(id: $id) { success } }`, { id: op.id });
  }
}

async function main() {
  if (cmd === "plan") {
    const findings = JSON.parse(readFileSync(opt("--from-findings", ".linear-method/findings.json"), "utf8")) as Evaluation;
    const snapshotPath = opt("--snapshot", ".linear-method/snapshot.json");
    const snapshot = JSON.parse(readFileSync(snapshotPath, "utf8")) as Snapshot;
    const include = opt("--include", "").split(",").map((s) => s.trim()).filter(Boolean);
    const plan = planFromFindings(findings, snapshot, snapshotPath.replace(/snapshot\.json$/, "raw.json"), include);
    const out = opt("--out", ".linear-method/plan.json");
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, JSON.stringify(plan, null, 2));
    console.log(`Plan with ${plan.operations.length} operations written to ${out}`);
    for (const op of plan.operations) console.log(`- ${op.type} ${op.ref}: ${op.reason}`);
    return;
  }
  if (cmd === "apply") {
    const plan = JSON.parse(readFileSync(opt("--plan", ".linear-method/plan.json"), "utf8")) as Plan;
    const owner = opt("--owner", process.env.LINEAR_METHOD_RUN_OWNER ?? "");
    if (!owner) throw new Error("Pass --owner <name> (the accountable human for this run, LM-091)");
    const dryRun = flag("--dry-run");
    const client = dryRun ? null : new LinearClient();
    const run = await apply(client, plan, owner, dryRun, Number(opt("--limit", "200")));
    const file = `.linear-method/runs/${run.startedAt.replace(/[:.]/g, "-")}.json`;
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify(run, null, 2));
    const ok = run.entries.filter((e) => e.result === "ok").length, err = run.entries.filter((e) => e.result === "error").length;
    console.log(`${dryRun ? "Dry run" : "Applied"} ${run.entries.length} operations (${ok} ok, ${err} errors). Run log: ${file}`);
    return;
  }
  if (cmd === "undo") {
    const run = JSON.parse(readFileSync(opt("--run", ""), "utf8")) as Run;
    const client = new LinearClient();
    const inverses = run.entries.filter((e) => e.result === "ok").map(inverse).filter((o): o is Op => o !== null).reverse();
    await unarchiveIssues(client, inverses);
    const rest = inverses.filter((o) => !(o.type === "issue.update" && "archivedAt" in o.input));
    const undoRun = await apply(client, { createdAt: new Date().toISOString(), source: "undo", operations: rest }, run.owner, false, 10_000);
    const file = `.linear-method/runs/${undoRun.startedAt.replace(/[:.]/g, "-")}-undo.json`;
    writeFileSync(file, JSON.stringify(undoRun, null, 2));
    console.log(`Undo applied ${undoRun.entries.length} operations. Log: ${file}`);
    return;
  }
  console.log("Usage: fix.ts plan|apply|undo (see header comment)");
}

main().catch((e) => { console.error(e.message ?? e); process.exit(1); });
