export type LearnerAction = {
  sessionId: string;
  text: string;
  mode: "teach" | "study";
};

export type RepresentationPayload =
  | { kind: "text"; content: string }
  | { kind: "math"; latex: string; explanation?: string }
  | { kind: "diagram"; format: "mermaid" | "svg"; content: string }
  | { kind: "code"; language: string; content: string };

export type EvidenceReceipt = {
  receiptId: string;
  evidenceKind: "interaction" | "transfer" | "assessment";
  summary: string;
  confidence: "low" | "medium" | "high";
};

export type ProposedStateChange = {
  target: string;
  requestedTransition?: "exposed" | "developing" | "stable" | "transferable";
  reason: string;
};

export type TeachingEvent =
  | { kind: "message"; content: string }
  | { kind: "representation"; payload: RepresentationPayload }
  | { kind: "proposal"; change: ProposedStateChange; receipt: EvidenceReceipt };

export interface TeachingAgentBridge {
  startTurn(action: LearnerAction): AsyncIterable<TeachingEvent>;
}
