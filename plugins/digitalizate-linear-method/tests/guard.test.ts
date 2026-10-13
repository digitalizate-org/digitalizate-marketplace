import { test } from "node:test";
import assert from "node:assert/strict";
// @ts-ignore plain ESM module without types
import { evaluateToolCall } from "../hooks/rules.mjs";

const ids = (r: { id: string; level: string }[], level?: string) => r.filter((x) => !level || x.level === level).map((x) => x.id);

test("good issue passes the guard", () => {
  const r = evaluateToolCall("mcp__linear__save_issue", { title: "Add pagination to /invoices", team: "ENG", labels: ["Feature"], assignee: "me" });
  assert.deepEqual(r, []);
});

test("user story, status label, urgent without justification and delegate without assignee are denied", () => {
  const r = evaluateToolCall("mcp__Linear__save_issue", { title: "Como tutor quiero recibir una notificación", team: "ENG", labels: ["Bloqueado"], priority: 1, delegate: "Linear" });
  assert.deepEqual(ids(r, "deny").sort(), ["LM-040", "LM-072", "LM-074", "LM-090"]);
});

test("urgent with incident justification is allowed", () => {
  const r = evaluateToolCall("mcp__linear__save_issue", { title: "Fix SMS reminders sent in UTC", team: "ENG", labels: ["Bug"], priority: 1, description: "Incident: patients received wrong times since the DST change.", assignee: "me" });
  assert.deepEqual(ids(r, "deny"), []);
});

test("long title warns, very long title denies", () => {
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_issue", { title: "x".repeat(90), team: "T", labels: ["Bug"] }), "warn"), ["LM-041"]);
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_issue", { title: "x".repeat(120), team: "T", labels: ["Bug"] }), "deny"), ["LM-041"]);
});

test("project without lead is denied unless it is a candidate", () => {
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_project", { name: "Two-step checkout", addTeams: ["ENG"] }), "deny"), ["LM-022"]);
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_project", { name: "Idea: offline mode", addTeams: ["ENG"], state: "Proposal" }), "deny"), []);
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_project", { id: "P-ENG-1", lead: null }), "deny"), ["LM-022"]);
});

test("status update without health is denied and without next step warns", () => {
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_status_update", { type: "project", project: "X", body: "Shipped the filters UI behind a flag. Risk: migration is more complex than planned, decision needed on Wednesday." }), "deny"), ["LM-025"]);
  const r = evaluateToolCall("mcp__linear__save_status_update", { type: "project", project: "X", health: "atRisk", body: "Shipped the filters UI behind a flag. Risk: migration is more complex than planned, decision needed on Wednesday." });
  assert.deepEqual(ids(r, "deny"), []);
  assert.deepEqual(ids(r, "warn"), ["LM-025"]);
});

test("labels that encode status or priority are denied at creation", () => {
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__save_issue_label", { name: "Esperando QA" }), "deny"), ["LM-072"]);
  assert.deepEqual(ids(evaluateToolCall("mcp__linear__create_issue_label", { name: "P1" }), "deny"), ["LM-073"]);
});
