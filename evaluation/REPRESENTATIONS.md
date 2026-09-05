# Visual Representation Evaluation

Use this when a learning arc relies on a diagram, plot, roadmap, tensor/matrix sketch, timeline, architecture diagram, or other external representation.

The purpose is to test whether the representation improved reasoning, not whether it looked polished.

## Before the representation

- Current frontier:
- Hidden relation or representational friction:
- What the learner can currently explain / predict without the visual:
- Why prose, equations, or the current representation appear insufficient:
- Confidence in that diagnosis: `low | medium | high`

## Representation decision

- Target inference:
- Representation chosen:
- Why this encoding matches the structure:
- Simpler alternatives considered:
- Semantics that must remain explicit (objects, axes, direction, scale, state, uncertainty, etc.):
- What the learner should do with it:

## Learner interaction

Record the first meaningful action rather than passive viewing.

Examples:

- reads a dependency correctly;
- predicts a transformation;
- identifies an axis or invariant;
- completes a missing label / edge;
- reconstructs the representation;
- translates it into an equation, explanation, or implementation;
- switches representation and preserves the underlying relation.

## Evidence after use

- What became independently possible that was not possible before?
- Evidence level: `recognition | recall | explanation | application | transfer`
- Did the learner depend on visual cues?
- Can the learner reconstruct the key relation without the artifact?
- Did switching representation preserve performance?

## Representation failure labels

### R1 — Decorative

The visual is attractive but exposes no new relation and produces no learner action.

### R2 — Wrong representation

A visual was warranted, but the chosen form hides the important structure or emphasizes the wrong one.

### R3 — Semantic ambiguity

Axes, arrows, geometry, labels, colors, or layout imply an incorrect or unclear relationship.

### R4 — Overloaded

The representation shows too much at once and becomes another source of working-memory load.

### R5 — Tooling friction

Rendering, interaction, notation, or format costs more attention than the relation being taught.

### R6 — Scaffold dependence

The learner succeeds only while the representation is present and cannot reconstruct or translate the relation later.

### R7 — Representation lock-in

The learner performs in one visual/formal encoding but fails when the same structure appears in another representation.

### R8 — Useful representation, wrong timing

The representation is sound but arrived before the learner had enough structure to interpret it or after the key inference was already complete.

## Promotion rule

Do not add a new visual rule because one diagram was poor. First ask whether the failure is:

- a general teaching-decision problem;
- a domain-specific representation problem;
- a tooling problem;
- or no protocol failure at all.

Prefer reusable semantic principles over topic-specific diagram templates.
