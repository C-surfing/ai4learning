# Second Layer Roadmap

Second-layer infrastructure should normally be earned through real use rather than added speculatively. The Visual Learning Workspace is now an explicit product decision: it is promoted as a **thin learner-facing view over the existing runtime**, while automation that would own teaching or learner-state decisions remains evidence-gated.

This roadmap distinguishes **core teaching capabilities**, **product surfaces**, and **second-layer automation**. A capability such as choosing a useful diagram can belong to the core protocol, and a workspace can expose learner state, even when an automated renderer or specialist subagent remains deferred.

## Core now: representation-aware teaching

The teacher may already choose a compact diagram, plot, annotated derivation, tensor/shape map, local roadmap, or architecture sketch when it is the highest-value representation for the current cognitive move.

See [`VISUAL-TEACHING.md`](VISUAL-TEACHING.md).

A representation is part of teaching when it helps the learner read, predict, reconstruct, or translate a relation. It is not justified by aesthetics alone.

## Product layer now: Visual Learning Workspace

The first learner-facing product surface lives under:

```text
apps/workspace/
```

Its purpose is to expose the existing runtime clearly:

```text
MISSION + ROADMAP + STATE + longitudinal arc metadata
                         ↓
              Visual Learning Workspace
                         ↓
        map / canvas / evidence / timeline
```

The workspace is not a second source of learner truth. The current implementation is deliberately read-first: it visualizes local `.learning/` state and limited `.dogfooding/` metadata without silently promoting mastery or rewriting learner-model conclusions.

See [`VISUAL-WORKSPACE.md`](VISUAL-WORKSPACE.md).

The next product step is an authority-aware write / agent bridge that keeps explicit learner edits, agent proposals, evidence-backed accepted state changes, and evaluation records distinct.

## Layer 1: Learning Memory

Current:

```text
MISSION
LEARNER
ROADMAP
STATE
```

Future:

```text
interaction evidence
        ↓
learner model update
        ↓
review priority
        ↓
next learning action
```

The workspace may visualize this state, but it must not infer durable learner conclusions merely from UI interaction.

## Layer 2: Spaced Review

Purpose:

Protect storage strength without turning the system into flashcards.

Rules:

- review unstable concepts;
- delay retrieval enough to require reconstruction;
- prioritize concepts with high dependency centrality;
- prefer transfer tasks over recognition.

A Review view may exist before a scheduler. Scheduling automation remains deferred until longitudinal evidence supports trigger semantics.

## Layer 3: Advanced Roadmap Interaction

The basic roadmap visualization is now part of the Workspace MVP. What remains deferred is product-level editing/automation such as:

- full-screen graph editing;
- automatic graph layout persistence;
- animated roadmap transitions;
- node-level history/diff;
- roadmap revision proposals with evidence receipts;
- large-graph navigation and filtering.

The roadmap remains a living dependency hypothesis, not a syllabus or completion chart.

## Layer 4: Research Agent

Purpose:

Separate source discovery from teaching.

Pipeline:

```text
source retrieval
        ↓
teacher synthesis
        ↓
learner interaction
```

The Workspace may expose a Source Drawer, but the agent should never replace teaching with a bibliography.

## Layer 5: Visualization Agent / Rendering Pipeline

Purpose:

Automate production of high-quality diagrams and figures only after repeated evidence shows that the core teacher cannot efficiently create the needed representation inline.

A visualization remains justified only when it clarifies a specific relation such as:

- dependency;
- mechanism;
- transformation;
- spatial relationship;
- quantitative pattern;
- tensor / matrix axis semantics;
- state or data flow.

The future agent should receive a **representation brief**, not a vague request to "make this visual":

```text
target inference
semantic objects
relations / axes / invariants
learner action
required fidelity
output medium
```

The existence of the Visual Learning Workspace does not itself justify a visualizer subagent.

## Layer 6: Obsidian / md-log

Purpose:

Provide a human-readable external memory layer.

Possible outputs:

- learning records;
- concept maps;
- questions;
- unresolved edges;
- references.

The source of truth remains the learner state model, not the notes.

## Promotion rule

Product surfaces may be promoted when they reduce interaction friction while preserving the teaching runtime's authority boundaries. Automation that changes learner state, schedules interventions, generates representations autonomously, or adds specialist agents should still require evidence that the complexity solves a repeated learning bottleneck.

The project should earn operational complexity through demonstrated learning value.
