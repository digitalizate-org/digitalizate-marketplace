// Evaluates signal rules (entries with a `check`) against a Snapshot. Pure; used by evaluate.ts and tests.
import type { Entry } from "./library.js";
import type { Snapshot, Metric, Sample } from "./metrics.js";

export interface Finding {
  id: string; title: string; severity: "high" | "medium" | "low"; scope: "workspace" | "team"; team: string | null;
  check: string; metric: string; value: Metric; threshold: string | number | boolean; measures: string[]; fix: string; samples: Sample[];
}
export interface Pass { id: string; scope: "workspace" | "team"; team: string | null; metric: string; value: Metric }
export interface Skipped { id: string; scope: "workspace" | "team"; team: string | null; reason: string }
export interface Evaluation { generatedAt: string; workspace: string; findings: Finding[]; passes: Pass[]; skipped: Skipped[]; overrides: Record<string, number | boolean> }

const CHECK_RE = /^([A-Za-z0-9_.]+)\s*(<=|>=|==|!=|<|>)\s*(true|false|-?\d+(?:\.\d+)?)$/;

export function parseCheck(check: string): { metric: string; op: string; value: number | boolean } {
  const m = CHECK_RE.exec(check.trim());
  if (!m) throw new Error(`Bad check expression: ${check}`);
  const raw = m[3];
  const value = raw === "true" ? true : raw === "false" ? false : Number(raw);
  return { metric: m[1], op: m[2], value };
}

export function compare(actual: Metric, op: string, expected: number | boolean): boolean {
  if (actual === null || actual === undefined) return false;
  switch (op) {
    case "==": return actual === expected;
    case "!=": return actual !== expected;
    case "<": return typeof actual === "number" && typeof expected === "number" && actual < expected;
    case "<=": return typeof actual === "number" && typeof expected === "number" && actual <= expected;
    case ">": return typeof actual === "number" && typeof expected === "number" && actual > expected;
    case ">=": return typeof actual === "number" && typeof expected === "number" && actual >= expected;
    default: return false;
  }
}

// Reads a ```json block containing {"thresholds": {...}} from linear-decisions.md text.
export function parseOverrides(decisionsText: string | null): Record<string, number | boolean> {
  if (!decisionsText) return {};
  const blocks = [...decisionsText.matchAll(/```json\s*\n([\s\S]*?)```/g)];
  for (const b of blocks) {
    try {
      const obj = JSON.parse(b[1]) as { thresholds?: Record<string, number | boolean> };
      if (obj && typeof obj === "object" && obj.thresholds) return obj.thresholds;
    } catch { /* ignore malformed blocks */ }
  }
  return {};
}

function sectionText(body: string, heading: string): string {
  const re = new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\r\\n]))`, "m");
  const m = re.exec(body);
  return m ? m[1].trim() : "";
}

export function evaluate(snapshot: Snapshot, entries: Entry[], overrides: Record<string, number | boolean> = {}, exceptions: string[] = []): Evaluation {
  const signals = entries.filter((e) => e.kind === "signal" && e.check && e.status === "Active");
  const findings: Finding[] = [];
  const passes: Pass[] = [];
  const skipped: Skipped[] = [];
  const run = (sig: Entry, scope: "workspace" | "team", team: string | null, metrics: Record<string, Metric>, samples: Record<string, Sample[]>) => {
    if (exceptions.includes(sig.id)) { skipped.push({ id: sig.id, scope, team, reason: "listed as exception in linear-decisions.md" }); return; }
    const parsed = parseCheck(sig.check!);
    const threshold = overrides[sig.id] !== undefined ? overrides[sig.id] : parsed.value;
    const value = metrics[parsed.metric];
    if (value === null || value === undefined) { skipped.push({ id: sig.id, scope, team, reason: `metric ${parsed.metric} not available (feature off or no data)` }); return; }
    if (compare(value, parsed.op, threshold)) {
      findings.push({ id: sig.id, title: sig.title, severity: sig.severity ?? "medium", scope, team, check: `${parsed.metric} ${parsed.op} ${threshold}`, metric: parsed.metric, value, threshold, measures: sig.measures, fix: sectionText(sig.body, "Fix"), samples: samples[parsed.metric] ?? [] });
    } else {
      passes.push({ id: sig.id, scope, team, metric: parsed.metric, value });
    }
  };
  for (const sig of signals) {
    if (sig.checkScope === "workspace") run(sig, "workspace", null, snapshot.workspace.metrics, snapshot.workspace.samples);
    else for (const t of snapshot.teams) run(sig, "team", t.key, t.metrics, t.samples);
  }
  const order = { high: 0, medium: 1, low: 2 };
  findings.sort((a, b) => order[a.severity] - order[b.severity] || a.id.localeCompare(b.id));
  return { generatedAt: new Date().toISOString(), workspace: snapshot.workspace.name, findings, passes, skipped, overrides };
}

export function renderMarkdown(ev: Evaluation, snapshot: Snapshot): string {
  const lines: string[] = [];
  lines.push(`# Linear Method audit (automatic checks) — ${ev.workspace}`);
  lines.push("");
  lines.push(`Snapshot: ${snapshot.generatedAt.slice(0, 10)} · Teams: ${snapshot.teams.map((t) => t.key).join(", ")} · Projects: ${snapshot.workspace.metrics["projects.active_count"]} active · Initiatives: ${snapshot.workspace.metrics["initiatives.active_count"]} active`);
  lines.push(`Checks: ${ev.findings.length} findings, ${ev.passes.length} passes, ${ev.skipped.length} skipped (feature off, no data, or exception).`);
  lines.push("");
  if (ev.findings.length) {
    lines.push("## Findings");
    lines.push("");
    lines.push("| # | Sev | Signal | Scope | Evidence | Measures |");
    lines.push("|---|---|---|---|---|---|");
    ev.findings.forEach((f, i) => {
      const ev1 = `${f.metric} = ${f.value} (threshold ${f.check.split(" ").slice(1).join(" ")})` + (f.samples.length ? `; e.g. ${f.samples.slice(0, 3).map((s) => `${s.ref}: ${s.detail}`).join("; ")}` : "");
      lines.push(`| ${i + 1} | ${f.severity} | ${f.id} ${f.title} | ${f.scope}${f.team ? ` ${f.team}` : ""} | ${ev1.replace(/\|/g, "/")} | ${f.measures.join(", ")} |`);
    });
    lines.push("");
  }
  lines.push("## Passes");
  lines.push("");
  lines.push(ev.passes.map((p) => `${p.id}${p.team ? `(${p.team})` : ""}`).join(", ") || "none");
  lines.push("");
  if (ev.skipped.length) {
    lines.push("## Not evaluated");
    lines.push("");
    for (const s of ev.skipped) lines.push(`- ${s.id}${s.team ? ` (${s.team})` : ""}: ${s.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}
