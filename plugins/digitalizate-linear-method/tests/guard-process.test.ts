import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const hooks = join(dirname(fileURLToPath(import.meta.url)), "..", "hooks");
const decisions = "## Issue writing\n- issue.primary_reader: business\n\n```json\n{ \"writing\": { \"subissue_batch_count\": 3 } }\n```\n";
const technicalInput = { title: "Fix plan scaling on the booking page", team: "T", labels: ["Feature"], description: "Run `git pull` and `ssh root@host` then edit `src/a.vue`, `src/b.vue` and `config/c.yml`." };

const run = (script: string, dir: string, toolInput: object) =>
  spawnSync("node", [join(hooks, script)], { input: JSON.stringify({ tool_name: "mcp__linear__save_issue", tool_input: toolInput }), env: { ...process.env, CLAUDE_PROJECT_DIR: dir }, encoding: "utf8" });
const warnings = (dir: string) => {
  const f = join(dir, ".linear-method", "warnings.log");
  return existsSync(f) ? readFileSync(f, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : [];
};
const warnIds = (dir: string) => warnings(dir).flatMap((w) => w.warnings.map((x: { id: string }) => x.id));

test("guard.mjs and log.mjs work end to end as processes", () => {
  const dir = mkdtempSync(join(tmpdir(), "lm-guard-"));
  const bare = mkdtempSync(join(tmpdir(), "lm-guard-bare-"));
  try {
    writeFileSync(join(dir, "linear-decisions.md"), decisions);

    const guard = run("guard.mjs", dir, technicalInput);
    assert.equal(guard.status, 0);
    assert.equal(guard.stdout, "");
    assert.ok(warnIds(dir).includes("LM-160"));

    const log = run("log.mjs", dir, technicalInput);
    assert.equal(log.status, 0);
    assert.match(JSON.parse(log.stdout).hookSpecificOutput.additionalContext, /LM-160/);
    assert.ok(existsSync(join(dir, ".linear-method", "mcp-writes.log")));

    const child = { title: "Add export button", team: "T", labels: ["Feature"], parentId: "P-1" };
    run("log.mjs", dir, child);
    run("log.mjs", dir, child);
    const third = run("guard.mjs", dir, child);
    assert.equal(third.status, 0);
    assert.ok(warnIds(dir).includes("LM-165"));

    const none = run("guard.mjs", bare, technicalInput);
    assert.equal(none.status, 0);
    assert.ok(!warnIds(bare).includes("LM-160"));
  } finally {
    rmSync(dir, { recursive: true, force: true });
    rmSync(bare, { recursive: true, force: true });
  }
});
