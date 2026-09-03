# Second Layer Roadmap

Do not implement these before dogfooding exposes a real need.

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

## Layer 3: Visual Roadmap

Purpose:

Expose global structure without overwhelming working memory.

Possible output:

```text
Knowledge Graph
      +
Learner Overlay
      +
Current Frontier
```

The roadmap is a living hypothesis, not a syllabus.

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

## Layer 5: Visualization Agent

Purpose:

Generate only diagrams that reduce cognitive load.

Not decoration.

A visualization is justified only when it clarifies:

- dependency;
- mechanism;
- transformation;
- spatial relationship.

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
