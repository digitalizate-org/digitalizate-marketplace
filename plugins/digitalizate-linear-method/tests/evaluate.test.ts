import { test } from "node:test";
import assert from "node:assert/strict";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { computeSnapshot } from "../scripts/lib/metrics.js";
import { evaluate, parseOverrides, parseCheck } from "../scripts/lib/evaluate-core.js";
import { loadLibrary } from "../scripts/lib/library.js";
import { healthyWorkspace, messyWorkspace, NOW } from "./helpers.js";

const here = dirname(fileURLToPath(import.meta.url));
const entries = loadLibrary(join(here, "..", "library"));

test("library loads with unique ids and every signal has a parsable check", () => {
  assert.ok(entries.length >= 100);
  for (const e of entries.filter((x) => x.kind === "signal")) assert.doesNotThrow(() => parseCheck(e.check!), e.id);
});

test("healthy workspace produces no high findings", () => {
  const snap = computeSnapshot(healthyWorkspace(), NOW);
  const ev = evaluate(snap, entries);
  const high = ev.findings.filter((f) => f.severity === "high");
  assert.deepEqual(high.map((f) => f.id), [], JSON.stringify(high, null, 1));
  assert.ok(ev.passes.length > 20);
});

test("messy workspace fires the expected signals", () => {
  const snap = computeSnapshot(messyWorkspace(), NOW);
  const ev = evaluate(snap, entries);
  const ids = new Set(ev.findings.map((f) => f.id));
  for (const expected of ["LM-100", "LM-101", "LM-102", "LM-103", "LM-104", "LM-105", "LM-106", "LM-107", "LM-108", "LM-109", "LM-111", "LM-112", "LM-113", "LM-114", "LM-115", "LM-116", "LM-117", "LM-118", "LM-119", "LM-120", "LM-121", "LM-122", "LM-123", "LM-124", "LM-125", "LM-126", "LM-127", "LM-128", "LM-129", "LM-130", "LM-133", "LM-134", "LM-135", "LM-137"]) {
    assert.ok(ids.has(expected), `expected ${expected} to fire; got ${[...ids].join(",")}`);
  }
  const fe = snap.teams.find((t) => t.key === "FE")!;
  assert.equal(fe.metrics["triage.max_age_days"], 17);
  assert.equal(fe.metrics["labels.status_like_count"], 1);
  assert.equal(fe.metrics["labels.priority_like_count"], 1);
  assert.equal(fe.metrics["states.extra_count"], 2);
  assert.equal(snap.workspace.metrics["teams.excess_over_cadences"], 3);
  const triage = ev.findings.find((f) => f.id === "LM-102" && f.team === "FE")!;
  assert.ok(triage.samples.length > 0 && triage.samples[0].ref.startsWith("FE-"));
});

test("threshold overrides and exceptions change the outcome", () => {
  const snap = computeSnapshot(messyWorkspace(), NOW);
  const overrides = parseOverrides("# decisions\n```json\n{\"thresholds\": {\"LM-102\": 30}}\n```\n");
  assert.deepEqual(overrides, { "LM-102": 30 });
  const ev = evaluate(snap, entries, overrides, ["LM-135"]);
  assert.ok(!ev.findings.some((f) => f.id === "LM-102"));
  assert.ok(!ev.findings.some((f) => f.id === "LM-135"));
  assert.ok(ev.skipped.some((s) => s.id === "LM-135"));
});

test("metrics that do not apply are skipped, not fired", () => {
  const raw = healthyWorkspace();
  raw.teams[0].cyclesEnabled = false;
  raw.teams[0].triageEnabled = false;
  const snap = computeSnapshot(raw, NOW);
  const ev = evaluate(snap, entries);
  assert.ok(ev.findings.some((f) => f.id === "LM-110"));
  assert.ok(ev.findings.some((f) => f.id === "LM-136"));
  assert.ok(ev.skipped.some((s) => s.id === "LM-121"));
  assert.ok(ev.skipped.some((s) => s.id === "LM-134"));
});
