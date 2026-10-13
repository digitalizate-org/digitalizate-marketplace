// Deterministic guard rules for Linear MCP writes. Pure functions; used by guard.mjs and by tests.
// Each rule returns { level: "deny" | "warn", id, message } or null.

export const USER_STORY_RE = /\b(as\s+an?|como(?:\s+una?)?)\s+[^\n]{1,80}?\b(i\s+want|quiero|necesito)\b/i;
export const STATUS_LABEL_RE = /\b(blocked|bloqueado|bloqueada|waiting|esperando|awaiting|in review|en revisi[oó]n|review|qa|ready|listo|lista|done|hecho|todo|in progress|en progreso|on hold|pending|pendiente|wip)\b/i;
export const PRIORITY_LABEL_RE = /\b(urgent|urgente|critical|cr[ií]tico|p0|p1|p2|p3|high priority|low priority|prioridad alta|prioridad baja)\b/i;
const TYPE_LABELS = ["bug", "feature", "improvement", "chore"];
const INCIDENT_RE = /\b(incident|incidente|outage|caída|caida|down in production|producción caída|data (loss|error|corruption)|datos (incorrectos|corruptos)|security|seguridad|blocker|bloquea a|hard blocker|P0)\b/i;
const NEXT_RE = /\b(next|siguiente|próximo|proximo|next week|la próxima|la proxima)\b/i;
const TITLE_PREFIX_RE = /^\s*(\[[^\]]+\]|(urgent|urgente|bug|feature|frontend|backend|fe|be)\s*:)/i;

export function toolKind(toolName) {
  const n = toolName.toLowerCase();
  if (/(save|create|update)_issue_label/.test(n)) return "label";
  if (/(save|create|update)_issue\b/.test(n) || /_issue$/.test(n)) return "issue";
  if (/(save|create|update)_project$/.test(n)) return "project";
  if (/(save|create|update)_initiative/.test(n)) return "initiative";
  if (/status_update|project_update/.test(n)) return "update";
  return "other";
}

const labelsOf = (input) => [...(input.labels ?? []), ...(input.addLabels ?? [])].map(String);
const hasTypeLabel = (labels) => labels.some((l) => TYPE_LABELS.includes(l.toLowerCase()));

export function checkIssue(input, ctx) {
  const out = [];
  const creating = !input.id;
  const title = String(input.title ?? "");
  const desc = String(input.description ?? "");
  if (creating && !input.template && title.trim() === "") out.push({ level: "deny", id: "LM-041", message: "Issue needs a title (verb + object, under 80 characters)." });
  if (title.length > 100) out.push({ level: "deny", id: "LM-041", message: `Title has ${title.length} characters; keep it under 80 and move detail to the description.` });
  else if (title.length > 80) out.push({ level: "warn", id: "LM-041", message: `Title has ${title.length} characters; the rule is 80 or fewer.` });
  if (TITLE_PREFIX_RE.test(title)) out.push({ level: "warn", id: "LM-041", message: "Title carries a prefix like [Frontend] or URGENT:; use labels and priority instead." });
  if (USER_STORY_RE.test(title) || USER_STORY_RE.test(desc.slice(0, 600))) out.push({ level: "deny", id: "LM-040", message: "User-story format detected (As a… I want… / Como… quiero…). Put the why in the project spec and write the issue as a task." });
  const labels = labelsOf(input);
  for (const l of labels) {
    if (STATUS_LABEL_RE.test(l)) out.push({ level: "deny", id: "LM-072", message: `Label "${l}" encodes a workflow status. Use states, blocking relations or snooze.` });
    if (PRIORITY_LABEL_RE.test(l)) out.push({ level: "deny", id: "LM-073", message: `Label "${l}" encodes priority. Use the priority field.` });
  }
  if (creating && !input.template && labels.length > 0 && !hasTypeLabel(labels)) out.push({ level: "warn", id: "LM-073", message: "No Type label (Bug, Feature, Improvement, Chore) among the labels." });
  if (creating && !input.template && labels.length === 0) out.push({ level: ctx.typeLabelRequired ? "deny" : "warn", id: "LM-073", message: ctx.typeLabelRequired ? "linear-decisions.md requires a Type label on every issue." : "No labels; add the Type label (Bug, Feature, Improvement, Chore)." });
  if (input.priority === 1 && !ctx.allowUrgent) {
    const justified = INCIDENT_RE.test(desc) || labels.some((l) => /incident|incidente/i.test(l));
    if (!justified) out.push({ level: "deny", id: "LM-074", message: "Urgent is for incidents and hard blockers decided by the goalie. Add the justification to the description (incident, outage, data error, blocker) or set High." });
  }
  if (input.delegate && (input.assignee === null || (creating && input.assignee === undefined))) out.push({ level: "deny", id: "LM-090", message: "Delegated issues keep a human assignee. Set assignee together with delegate." });
  if (input.cycle && creating && !input.assignee) out.push({ level: "deny", id: "LM-047", message: "An issue entering a cycle needs an assignee." });
  if (creating && input.state && /^(todo|in progress|in review|started|unstarted)$/i.test(String(input.state)) && !input.assignee) out.push({ level: "warn", id: "LM-047", message: "Issue created directly in a planned state without an assignee." });
  if (creating && !input.template && desc.length > 2500) out.push({ level: "warn", id: "LM-042", message: "Description is very long; context belongs in the project spec, the issue should be a task." });
  return out;
}

export function checkProject(input) {
  const out = [];
  const creating = !input.id;
  const state = String(input.state ?? "");
  const candidate = /backlog|idea|proposal|propuesta|candidate|candidato|discovery/i.test(state);
  if (creating && !input.template && !candidate) {
    if (!input.lead) out.push({ level: "deny", id: "LM-022", message: "Every project has exactly one lead. Set `lead` (a person on the project team) or create it in a candidate status (Proposal/Idea)." });
    if (!input.targetDate) out.push({ level: "warn", id: "LM-024", message: "No target date. Set one within one to three weeks for the current stage." });
    const spec = String(input.description ?? "");
    if (spec.length < 200) out.push({ level: "warn", id: "LM-023", message: "Description is shorter than a one-page spec (why, what, out of scope, how, milestones, success). Add it now or as a project document right after." });
    if (input.startDate && input.targetDate) {
      const weeks = (new Date(input.targetDate).getTime() - new Date(input.startDate).getTime()) / (7 * 86_400_000);
      if (weeks > 6) out.push({ level: "warn", id: "LM-020", message: `Target date is ${weeks.toFixed(1)} weeks after start. Projects should be 1-3 weeks per stage; add milestones or split.` });
    }
  }
  if (input.lead === null && !creating) out.push({ level: "deny", id: "LM-022", message: "Removing the lead leaves the project unowned. Set another lead instead." });
  for (const l of [...(input.labels ?? [])].map(String)) if (STATUS_LABEL_RE.test(l) || /approved|aprobado|wip|parked|draft|borrador/i.test(l)) out.push({ level: "deny", id: "LM-027", message: `Project label "${l}" encodes lifecycle. Use project statuses.` });
  if (/^\s*\[(draft|wip|borrador)\]/i.test(String(input.name ?? ""))) out.push({ level: "warn", id: "LM-027", message: "Project name carries a lifecycle prefix; use the project status." });
  return out;
}

export function checkInitiative(input) {
  const out = [];
  const creating = !input.id;
  const name = String(input.name ?? "");
  if (creating && !input.owner && !input.ownerId) out.push({ level: "deny", id: "LM-010", message: "Initiatives need an owner who writes the updates." });
  if ((name.match(/,/g) ?? []).length >= 2) out.push({ level: "warn", id: "LM-010", message: "Initiative name reads like a feature list. Name it as an outcome." });
  if (creating && !input.targetDate) out.push({ level: "warn", id: "LM-010", message: "No target date on the initiative (quarter or semester)." });
  return out;
}

export function checkUpdate(input) {
  const out = [];
  const body = String(input.body ?? "");
  if (!input.id && !input.health) out.push({ level: "deny", id: "LM-025", message: "A project or initiative update needs a health value (onTrack, atRisk, offTrack) set by the lead." });
  if (body.length < 80) out.push({ level: "warn", id: "LM-025", message: "Update body is very short; include what shipped, next step, risks and date changes." });
  else if (!NEXT_RE.test(body)) out.push({ level: "warn", id: "LM-025", message: "Update has no next step." });
  return out;
}

export function checkLabel(input) {
  const out = [];
  const name = String(input.name ?? "");
  if (STATUS_LABEL_RE.test(name)) out.push({ level: "deny", id: "LM-072", message: `Label "${name}" encodes a workflow status.` });
  if (PRIORITY_LABEL_RE.test(name)) out.push({ level: "deny", id: "LM-073", message: `Label "${name}" encodes priority.` });
  return out;
}

export function evaluateToolCall(toolName, input, ctx = {}) {
  const kind = toolKind(toolName);
  const safeInput = input && typeof input === "object" ? input : {};
  switch (kind) {
    case "issue": return checkIssue(safeInput, ctx);
    case "project": return checkProject(safeInput);
    case "initiative": return checkInitiative(safeInput);
    case "update": return checkUpdate(safeInput);
    case "label": return checkLabel(safeInput);
    default: return [];
  }
}
