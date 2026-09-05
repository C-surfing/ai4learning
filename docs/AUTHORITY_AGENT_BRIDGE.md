# Authority-aware Agent Bridge Contract

## Purpose

The Visual Learning Workspace must become an interactive teaching surface without becoming a second learner-state authority.

The bridge separates:

- reversible conversation state;
- model/tool proposals;
- evidence receipts;
- accepted learner-state mutations.

## Flow

```text
learner action
    ↓
Teach / Study runtime
    ↓
Agent proposal + representation payload
    ↓
evidence receipt
    ↓
authority acceptance boundary
    ↓
.learning update
    ↓
Workspace refresh
```

## Client boundary

React components may:

- display teaching payloads;
- collect learner actions;
- request a new turn;
- render reversible streaming output.

React components must not:

- write learner state directly;
- promote capability state;
- infer mastery from UI interaction;
- bypass evidence receipts.

## Proposed payload shape

```ts
{
  kind: "text" | "math" | "diagram" | "table" | "code" | "dataflow",
  content: unknown,
  intent: "explain" | "probe" | "repair" | "transfer",
  evidence: []
}
```

The renderer consumes structured payloads only after validation.

## Durable update rule

A failed or partial model turn can update temporary conversation state, but must not mutate durable learner state.

Only the authority layer may accept:

- learner model changes;
- roadmap state transitions;
- evidence-backed capability updates.

## Next implementation slices

1. provider-agnostic bridge interface;
2. local authority-aware write API;
3. streaming canvas transport;
4. state transition receipt tests;
5. real learning session validation.
