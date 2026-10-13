// Shape of the data fetched from Linear before metrics are computed. Field names match the GraphQL schema (SDK 97.x).
export interface RawState { id: string; name: string; type: string; position: number }
export interface RawLabel { id: string; name: string; isGroup: boolean; parent: { id: string; name: string } | null; lastAppliedAt: string | null; retiredAt: string | null; team: { id: string } | null }
export interface RawCycle {
  id: string; number: number; name: string | null; startsAt: string; endsAt: string; completedAt: string | null;
  isActive: boolean; isPast: boolean; isNext: boolean; isFuture: boolean; progress: number;
  issueCountHistory: number[]; completedIssueCountHistory: number[]; scopeHistory: number[]; completedScopeHistory: number[];
  uncompletedIssuesUponClose: { nodes: { id: string }[] };
  completedIssues?: { id: string; labels: string[] }[]; // filled separately for the last closed cycles
}
export interface RawIssue {
  id: string; identifier: string; title: string; description: string | null; priority: number; estimate: number | null;
  createdAt: string; updatedAt: string; startedAt: string | null; startedTriageAt: string | null; triagedAt: string | null;
  assignee: { id: string } | null; delegate: { id: string } | null; creator: { id: string } | null;
  project: { id: string } | null; cycle: { id: string } | null; parent: { id: string } | null;
  state: { id: string; name: string; type: string }; labels: { nodes: { name: string }[] };
}
export interface RawTeam {
  id: string; key: string; name: string; timezone: string; parent: { id: string; key: string } | null;
  cyclesEnabled: boolean; cycleDuration: number; cycleCooldownTime: number; cycleStartDay: number;
  cycleIssueAutoAssignStarted: boolean; cycleIssueAutoAssignCompleted: boolean; cycleLockToActive: boolean; upcomingCycleCount: number;
  triageEnabled: boolean; requirePriorityToLeaveTriage: boolean;
  triageResponsibility: { id: string; action: string; currentUser: { id: string; name: string } | null } | null;
  autoClosePeriod: number | null; autoArchivePeriod: number; issueEstimationType: string;
  states: { nodes: RawState[] }; labels: { nodes: RawLabel[] };
  cycles: RawCycle[]; issues: RawIssue[];
}
export interface RawProject {
  id: string; name: string; url: string; state: string; status: { name: string; type: string; indefinite: boolean };
  lead: { id: string; name: string } | null; startDate: string | null; targetDate: string | null;
  startedAt: string | null; completedAt: string | null; canceledAt: string | null; createdAt: string; updatedAt: string;
  health: string | null; healthUpdatedAt: string | null; progress: number; scope: number;
  lastUpdate: { id: string; createdAt: string; health: string } | null;
  projectMilestones: { nodes: { id: string; name: string; targetDate: string | null; status: string }[] };
  initiatives: { nodes: { id: string; name: string }[] };
  teams: { nodes: { id: string; key: string }[] };
  members: { nodes: { id: string }[] };
  documents: { nodes: { id: string }[] };
  content: string | null; description: string;
}
export interface RawInitiative {
  id: string; name: string; status: string; owner: { id: string; name: string } | null; targetDate: string | null;
  health: string | null; updatedAt: string; lastUpdate: { createdAt: string; health: string } | null;
  projects: { nodes: { id: string }[] };
}
export interface RawWorkspace {
  fetchedAt: string;
  organization: { name: string; urlKey: string; userCount: number; projectUpdateReminderFrequencyInWeeks: number | null };
  integrations: { service: string }[] | null;
  workspaceLabels: RawLabel[];
  teams: RawTeam[];
  projects: RawProject[];
  initiatives: RawInitiative[];
}
