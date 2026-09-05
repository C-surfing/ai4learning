import type { TeachingAgentBridge } from "./types";

export interface BridgeFactory {
  create(): TeachingAgentBridge;
}

export function assertDurableMutationAllowed(): never {
  throw new Error(
    "Workspace clients cannot directly mutate learner state. Use an authority receipt flow."
  );
}
