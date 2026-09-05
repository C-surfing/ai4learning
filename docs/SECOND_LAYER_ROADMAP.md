# Second Layer Roadmap

Do not implement infrastructure here before dogfooding exposes a real need.

This roadmap distinguishes **core teaching capabilities** from **second-layer automation**. A capability such as choosing a useful diagram can belong to the core protocol even when an automated renderer or specialist subagent remains deferred.

## Core now: representation-aware teaching

The teacher may already choose a compact diagram, plot, annotated derivation, tensor/shape map, local roadmap, or architecture sketch when it is the highest-value representation for the current cognitive move.

See [`VISUAL-TEACHING.md`](VISUAL-TEACHING.md).

This does **not** imply that ai4learning should build a visualization platform now.

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

## Layer 2: Spaced Review

Purpose:

Protect storage strength without turning the system into flashcards.

Rules:

- review unstable concepts;
- delay retrieval enough to require reconstruction;
- prioritize concepts with high dependency centrality;
- prefer transfer tasks over recognition.

## Layer 3: Visual Roadmap Renderer

Purpose:

Turn the existing roadmap semantics into a polished or interactive learner-facing map when real use shows that text / compact diagrams are insufficient.

Possible output:

```text
Knowledge Graph
      +
Learner Overlay
      +
Current Frontier
```

The roadmap itself is already core and remains a living hypothesis, not a syllabus. What is deferred here is automated layout, persistence of rendered views, interaction, and product-level visualization.

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

The agent should never replace teaching with a bibliography.

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

Do not create a visualizer subagent merely to improve aesthetics.

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

Second-layer infrastructure should be promoted only when longitudinal evidence shows a repeated bottleneck that cannot be solved cleanly by the existing teaching runtime.

The project should earn operational complexity through demonstrated learning value.
