import fs from "node:fs";
import path from "node:path";
import type {
  EvidenceItem,
  MasteryState,
  MisconceptionItem,
  ReviewCandidate,
  RoadmapNode,
  SessionPoint,
  WorkspaceSnapshot,
} from "./types";

const DEMO: WorkspaceSnapshot = {
  source: "demo",
  mission: "Build an intuitive, transferable understanding of Bayes rather than memorizing the formula.",
  learnerNote: "Basic conditional probability is usable; inverse-condition reasoning is still representation-dependent.",
  frontier: "Bayes / inverse conditional reasoning",
  frontierState: "developing",
  frontierReason: "Frequency reasoning works, but symbolic reversal has not yet survived an independent context switch.",
  nextMove: "Switch from a frequency tree to conditional notation and ask the learner to reconstruct the same inference.",
  expectedLearnerAction: "Translate the tree into P(A|B) / P(B|A) and explain why the denominator changes.",
  nodes: [
    { id: "sample-space", label: "Sample space", state: "stable", missionRelevance: "supporting" },
    { id: "conditional", label: "Conditional probability", state: "stable", dependsOn: "sample-space", missionRelevance: "core" },
    { id: "bayes", label: "Bayes reasoning", state: "developing", dependsOn: "conditional", missionRelevance: "core", evidence: "frequency-tree application" },
    { id: "bayesian", label: "Bayesian inference", state: "unknown", dependsOn: "bayes", missionRelevance: "core" },
  ],
  evidence: [
    {
      task: "Medical-test frequency tree",
      level: "application",
      result: "Independent numerical inference",
      independence: "new-form",
      implication: "Mechanism is usable when frequencies are explicit.",
    },
    {
      task: "Explain condition reversal",
      level: "explanation",
      result: "Mostly correct with one prompt",
      independence: "same-form",
      implication: "Symbolic model is not yet independently stable.",
    },
  ],
  misconceptions: [
    {
      belief: "A highly accurate positive test should imply an equally high posterior probability.",
      confidence: "medium",
      status: "testing",
      evidence: "Initial answer over-weighted sensitivity and under-weighted the base rate.",
    },
  ],
  reviewCandidates: [
    {
      concept: "Condition direction",
      reason: "Critical dependency for Bayes transfer",
      strength: "medium",
      form: "retrieve from a non-medical scenario",
    },
  ],
  sessions: [
    { id: "s1", label: "S1 · Frontier", detail: "Inverse-condition confusion located", kind: "frontier" },
    { id: "s2", label: "S2 · Representation", detail: "Frequency tree supported correct inference", kind: "representation" },
    { id: "s3", label: "Next · Transfer", detail: "Switch context and remove tree scaffold", kind: "transfer" },
  ],
  activeArc: "Probability · Bayes intuition",
};

function findRepoRoot(): string {
  let current = process.cwd();
  for (let i = 0; i < 6; i += 1) {
    if (fs.existsSync(path.join(current, "skills", "teach", "SKILL.md"))) return current;
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return path.resolve(process.cwd(), "../..");
}

function readOptional(filePath: string): string | undefined {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return undefined;
  }
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function field(markdown: string | undefined, label: string): string | undefined {
  if (!markdown) return undefined;
  const pattern = new RegExp(`^-\\s*${escapeRegExp(label)}:\\s*(.+)$`, "im");
  const match = markdown.match(pattern);
  const value = match?.[1]?.trim();
  return value && value !== "-" ? value : undefined;
}

function section(markdown: string | undefined, heading: string): string {
  if (!markdown) return "";
  const lines = markdown.split(/\r?\n/);
  const index = lines.findIndex((line) => line.trim().toLowerCase() === `## ${heading.toLowerCase()}`);
  if (index < 0) return "";
  const body: string[] = [];
  for (let i = index + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) break;
    body.push(lines[i]);
  }
  return body.join("\n");
}

function firstMeaningfulLine(markdown: string | undefined, fallback: string): string {
  if (!markdown) return fallback;
  const line = markdown
    .split(/\r?\n/)
    .map((value) => value.trim())
    .find(
      (value) =>
        value &&
        !value.startsWith("#") &&
        !value.startsWith("<!--") &&
        !value.startsWith("```") &&
        !value.startsWith("|") &&
        !value.startsWith(">"),
    );
  return line?.replace(/^[-*]\s*/, "") || fallback;
}

function tableRows(body: string): string[][] {
  return body
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|") && !/^\|\s*-+/.test(line.trim()))
    .slice(1)
    .map((line) =>
      line
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((cell) => cell.trim()),
    )
    .filter((cells) => cells.some(Boolean));
}

function normalizeState(value: string | undefined): MasteryState {
  const text = (value || "").toLowerCase();
  if (text.includes("transfer") || text.includes("◆")) return "transferable";
  if (text.includes("stable") || text.includes("●")) return "stable";
  if (text.includes("develop") || text.includes("◐")) return "developing";
  if (text.includes("exposed") || text.includes("◔")) return "exposed";
  return "unknown";
}

function slug(value: string, fallback: string): string {
  const cleaned = value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
  return cleaned || fallback;
}

function parseRoadmap(markdown: string | undefined, frontier: string, frontierState: MasteryState): RoadmapNode[] {
  const rows = tableRows(section(markdown, "Nodes"));
  const nodes = rows
    .filter((cells) => cells[0])
    .map((cells, index) => ({
      id: slug(cells[0], `node-${index + 1}`),
      label: cells[0],
      state: normalizeState(cells[1]),
      dependsOn: cells[2] ? slug(cells[2], "") : undefined,
      missionRelevance: ["core", "supporting", "optional"].includes(cells[4])
        ? (cells[4] as RoadmapNode["missionRelevance"])
        : undefined,
      evidence: cells[5] || undefined,
    }));
  if (nodes.length > 0) return nodes;
  return [
    { id: "frontier", label: frontier, state: frontierState, missionRelevance: "core" },
    { id: "next", label: "Next dependency", state: "unknown", dependsOn: "frontier", missionRelevance: "core" },
  ];
}

function parseEvidence(markdown: string | undefined): EvidenceItem[] {
  return tableRows(section(markdown, "Recent decisive evidence"))
    .filter((cells) => cells[0])
    .map((cells) => ({
      task: cells[0],
      level: (["recognition", "recall", "explanation", "application", "transfer"].includes(cells[1])
        ? cells[1]
        : "recognition") as EvidenceItem["level"],
      result: cells[2] || "Observed",
      independence: cells[3] || "unspecified",
      implication: cells[4] || "Evidence recorded",
    }));
}

function parseMisconceptions(markdown: string | undefined): MisconceptionItem[] {
  return tableRows(section(markdown, "Active misconceptions"))
    .filter((cells) => cells[0])
    .map((cells) => ({
      belief: cells[0],
      confidence: (["low", "medium", "high"].includes(cells[1]) ? cells[1] : "medium") as MisconceptionItem["confidence"],
      evidence: cells[2] || undefined,
      status: (["active", "testing", "resolved"].includes(cells[3]) ? cells[3] : "active") as MisconceptionItem["status"],
    }));
}

function parseReview(markdown: string | undefined): ReviewCandidate[] {
  return tableRows(section(markdown, "Review candidates"))
    .filter((cells) => cells[0])
    .map((cells) => ({
      concept: cells[0],
      reason: cells[1] || "Review candidate",
      strength: (["weak", "medium", "strong"].includes(cells[2]) ? cells[2] : "medium") as ReviewCandidate["strength"],
      form: cells[3] || "retrieval",
    }));
}

function localTimeline(repoRoot: string): { sessions: SessionPoint[]; activeArc?: string } {
  const root = path.join(repoRoot, ".dogfooding");
  if (!fs.existsSync(root)) return { sessions: [] };
  const arcs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const activeArc = arcs.at(-1);
  if (!activeArc) return { sessions: [] };
  const sessionsDir = path.join(root, activeArc, "sessions");
  if (!fs.existsSync(sessionsDir)) return { sessions: [], activeArc };
  const files = fs
    .readdirSync(sessionsDir)
    .filter((name) => /^\d+\.md$/.test(name))
    .sort();
  return {
    activeArc,
    sessions: files.map((name, index) => ({
      id: `${activeArc}-${name}`,
      label: `S${index + 1}`,
      detail: "Local evidence record",
      kind: index === 0 ? "frontier" : "evidence",
    })),
  };
}

export function loadWorkspaceSnapshot(): WorkspaceSnapshot {
  const repoRoot = findRepoRoot();
  const learning = path.join(repoRoot, ".learning");
  const state = readOptional(path.join(learning, "STATE.md"));
  const roadmap = readOptional(path.join(learning, "ROADMAP.md"));
  const mission = readOptional(path.join(learning, "MISSION.md"));
  const learner = readOptional(path.join(learning, "LEARNER.md"));

  if (!state && !roadmap && !mission && !learner) return DEMO;

  const frontier = field(state, "Concept / capability") || "Current learning frontier";
  const frontierState = normalizeState(field(state, "State"));
  const timeline = localTimeline(repoRoot);
  const evidence = parseEvidence(state);
  const misconceptions = parseMisconceptions(state);
  const reviewCandidates = parseReview(state);

  return {
    source: "local",
    mission: firstMeaningfulLine(mission, "Learning mission is being established."),
    learnerNote: firstMeaningfulLine(learner, "Learner profile is intentionally sparse until evidence accumulates."),
    frontier,
    frontierState,
    frontierReason: field(state, "Why this is the frontier") || "The current state file marks this as the active frontier.",
    nextMove: field(state, "Move") || "Use the Teach/Study runtime to choose the next evidence-bearing cognitive move.",
    expectedLearnerAction: field(state, "Learner action expected") || "Learner action has not been specified yet.",
    nodes: parseRoadmap(roadmap, frontier, frontierState),
    evidence,
    misconceptions,
    reviewCandidates,
    sessions: timeline.sessions,
    activeArc: timeline.activeArc,
  };
}
