import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { computeSnapshot, DEFAULT_WRITING, technicalTrail as metricTrail } from "../scripts/lib/metrics.js";
import { evaluate, parseWriting } from "../scripts/lib/evaluate-core.js";
import { loadLibrary } from "../scripts/lib/library.js";
// @ts-ignore plain ESM module without types
import { evaluateToolCall, technicalTrail } from "../hooks/rules.mjs";
import { healthyWorkspace, messyWorkspace, runbookIssues, issue, NOW } from "./helpers.js";

const here = dirname(fileURLToPath(import.meta.url));
const entries = loadLibrary(join(here, "..", "library"));
const ids = (r: { id: string; level: string }[], level?: string) => r.filter((x) => !level || x.level === level).map((x) => x.id);
const business = { ...DEFAULT_WRITING, primaryReader: "business" as const };
const technicalDesc = "Run `git pull` and `ssh root@host` then edit `src/a.vue`, `src/b.vue` and `config/c.yml`.";
const save = (input: object, ctx: object) => evaluateToolCall("mcp__linear__save_issue", { title: "Fix plan scaling on the booking page", team: "T", labels: ["Feature"], ...input }, ctx);

test("writing signals fire on the messy workspace with samples", () => {
  const snap = computeSnapshot(messyWorkspace(), NOW, business);
  const fe = snap.teams.find((t) => t.key === "FE")!;
  assert.equal(fe.metrics["issues.batched_subissue_parent_count"], 1);
  assert.ok((fe.metrics["issues.technical_description_share"] as number) > 0.3);
  assert.ok((fe.metrics["issues.long_description_share"] as number) > 0.25);
  const ev = evaluate(snap, entries);
  for (const id of ["LM-139", "LM-170", "LM-171"]) assert.ok(ev.findings.some((f) => f.id === id && f.team === "FE"), id);
  assert.equal(ev.findings.find((f) => f.id === "LM-171")!.samples[0].ref, "FE-400");
});

test("writing signals pass on the healthy workspace with a business reader and LM-139 is skipped without one", () => {
  const ev = evaluate(computeSnapshot(healthyWorkspace(), NOW, business), entries);
  for (const id of ["LM-139", "LM-170", "LM-171"]) assert.ok(ev.passes.some((p) => p.id === id), id);
  const none = evaluate(computeSnapshot(healthyWorkspace(), NOW), entries);
  assert.ok(none.skipped.some((s) => s.id === "LM-139"));
});

test("a late or foreign seventh sub-issue does not switch off the batch signal", () => {
  for (const creator of ["agent-writer", "someone-else"]) {
    const raw = messyWorkspace();
    const fe = raw.teams.find((t) => t.key === "FE")!;
    const parent = fe.issues.find((i) => i.identifier === "FE-400")!;
    fe.issues.push(issue("FE", 450, { stateType: "backlog", creator: { id: creator }, createdAt: new Date(NOW.getTime() - 2 * 86_400_000).toISOString(), parent: { id: parent.id } }));
    const m = computeSnapshot(raw, NOW, business).teams.find((t) => t.key === "FE")!;
    assert.equal(m.metrics["issues.batched_subissue_parent_count"], 1, creator);
    assert.match(m.samples["issues.batched_subissue_parent_count"][0].detail, /^6 sub-issues/);
  }
  assert.equal(runbookIssues().length, 7);
});

test("tech names, prose verbs and links are not a technical trail; real paths and commands are", () => {
  const phrases = [
    "Migramos de Vue.js a Next.js; el backend sigue en Node.js.",
    "Users are apt to give up; see the git history and grep the logs.",
    "Attached: drive.google.com/file/a.pdf and www.site.co/img/logo.png",
  ];
  for (const p of phrases) {
    const rules = technicalTrail(p, false);
    assert.deepEqual([rules.paths, rules.commands], [0, 0], p);
    assert.match(metricTrail(issue("FE", 1, { description: p })).detail, /0 paths, 0 commands/, p);
  }
  const real = "Run `git pull` and `ssh deploy@host`, then edit src/a.vue, src/b.vue and config/c.yml";
  const r = technicalTrail(real, false);
  assert.deepEqual([r.paths, r.commands, r.technical], [3, 2, true]);
  assert.match(metricTrail(issue("FE", 1, { description: real })).detail, /3 paths, 2 commands/);
  assert.equal(technicalTrail(".github/workflows/ci.yml and a/b.ts and c/d.ts", false).paths, 3);
});

test("editing without labels ignores code blocks for the technical trail", () => {
  const fenced = "Outcome stays here.\n\n```\nTypeError: x\n```";
  const edit = (input: object) => evaluateToolCall("mcp__linear__save_issue", { id: "FE-1", description: fenced, ...input }, { primaryReader: "business" });
  assert.ok(!ids(edit({})).includes("LM-160"));
  assert.ok(ids(edit({ addLabels: ["Feature"] })).includes("LM-160"));
  assert.ok(ids(save({ description: fenced }, { primaryReader: "business" })).includes("LM-160"));
});

test("a bug with a stack trace in a code block is not a technical trail", () => {
  const raw = healthyWorkspace();
  raw.teams[0].issues[3].description = "**What happens**\n> \"The export fails\"\n\n```\nTypeError: x is undefined\n  at export (a:1)\n```";
  raw.teams[0].issues[3].labels = { nodes: [{ name: "Bug" }] };
  const snap = computeSnapshot(raw, NOW, business);
  assert.equal(snap.teams[0].metrics["issues.technical_description_share"], 0);
});

test("the guard warns, never denies, on technical trail, length and batched sub-issues", () => {
  const r = save({ description: technicalDesc + "x".repeat(2600), parentId: "P-1" }, { primaryReader: "business", recentSiblings: 4 });
  assert.deepEqual(ids(r, "deny"), []);
  assert.deepEqual(ids(r, "warn").sort(), ["LM-160", "LM-161", "LM-165"]);
  const tech = save({ description: technicalDesc }, { primaryReader: "technical" });
  assert.ok(!ids(tech).includes("LM-160"));
});

test("a long checklist does not make a description long", () => {
  const items = Array.from({ length: 12 }, (_, n) => `- [x] **Item ${n}.** ${"Visible result. ".repeat(12)}\n  Cómo se comprueba: ${"step ".repeat(30)}`).join("\n");
  const description = `**Qué cambia.** Three new fields on the booking form.\n\n**Listo cuando**\n\n${items}`;
  assert.ok(description.length > 3000);
  const raw = healthyWorkspace();
  raw.teams[0].issues[3].description = description;
  const snap = computeSnapshot(raw, NOW, business);
  assert.equal(snap.teams[0].metrics["issues.long_description_share"], 0);
  assert.ok(!ids(save({ description }, {})).includes("LM-161"));
});

test("without a declared reader the guard skips LM-160 but still warns on length, creating or editing", () => {
  const long = technicalDesc + "x".repeat(2600);
  const created = save({ description: long }, {});
  assert.ok(!ids(created).includes("LM-160"));
  assert.ok(ids(created, "warn").includes("LM-161"));
  const edited = evaluateToolCall("mcp__linear__save_issue", { id: "FE-1", description: long }, {});
  assert.ok(ids(edited, "warn").includes("LM-161"));
  assert.deepEqual(ids(created, "deny"), []);
  assert.deepEqual(ids(edited, "deny"), []);
});

test("LM-139 is evaluated only with a business or external reader", () => {
  const byDefault = evaluate(computeSnapshot(messyWorkspace(), NOW), entries);
  assert.ok(!byDefault.findings.some((f) => f.id === "LM-139"));
  const skipped = byDefault.skipped.find((s) => s.id === "LM-139" && s.team === "FE");
  assert.ok(skipped && /not available/.test(skipped.reason));
  const external = evaluate(computeSnapshot(messyWorkspace(), NOW, { ...DEFAULT_WRITING, primaryReader: "external" }), entries);
  assert.ok(external.findings.some((f) => f.id === "LM-139" && f.team === "FE"));
});

test("parseWriting reads the reader line and the writing block, ignoring the template marker", () => {
  const text = "## Issue writing\n- issue.primary_reader: business\n\n```json\n{ \"thresholds\": {}, \"writing\": { \"description_max_chars\": 1800, \"subissue_batch_count\": 3, \"subissue_batch_minutes\": 20 } }\n```\n";
  assert.deepEqual(parseWriting(text), { primaryReader: "business", descriptionMaxChars: 1800, batchCount: 3, batchMinutes: 20 });
  const template = readFileSync(join(here, "..", "templates", "linear-decisions.md"), "utf8");
  assert.deepEqual(parseWriting(template), DEFAULT_WRITING);
  assert.deepEqual(parseWriting(null), DEFAULT_WRITING);
  const invalid = "- issue.primary_reader: external\n```json\n{ \"writing\": { \"description_max_chars\": \"abc\", \"subissue_batch_count\": 0, \"subissue_batch_minutes\": -5 } }\n```\n";
  assert.deepEqual(parseWriting(invalid), { ...DEFAULT_WRITING, primaryReader: "external" });
});
