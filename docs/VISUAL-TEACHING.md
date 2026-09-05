# Visual Teaching — Representations as Cognitive Instruments

Visuals in ai4learning are not decoration and not a separate presentation layer. A representation is a teaching move when it makes a relationship, mechanism, transformation, boundary, or dependency easier to reason about than prose alone.

The governing question is:

> **What inference should become easier because this representation exists?**

If there is no precise answer, do not add the visual.

## The representation decision loop

```text
learner model + current frontier
            ↓
identify hidden relation / representational friction
            ↓
build representation contract when semantics are nontrivial
            ↓
choose the lowest-friction representation that exposes it
            ↓
encode semantics faithfully
            ↓
learner reads / predicts / manipulates / reconstructs
            ↓
verify whether the representation changed reasoning
            ↓
keep, revise, switch representation, or remove
```

A visual is successful only when the learner can do something cognitively useful with it.

## Build a representation contract before rendering

For a nontrivial visual, especially in mathematics, ML, systems, or causal reasoning, first make an internal ledger of the semantics that the picture must preserve.

A useful contract can include:

| Field | Question |
|---|---|
| Object | What is this thing called? |
| Semantic kind | Value, probability, score, state, event, index, mask, component, evidence, etc.? |
| Domain / shape / state space | What values or configurations can it take? |
| Axes / fields | What does each dimension or field mean? |
| Producer | Where does it come from? |
| Consumer | What uses it next? |
| Operation / relation | What transforms, compares, contracts, routes, or connects it? |
| Invariant | What must remain unchanged for the explanation to be correct? |
| Learner action | What should the learner be able to read, predict, or reconstruct from the representation? |

Not every diagram needs every field. The purpose is to prevent rendering from inventing semantics.

For tensors this may be a shape-and-axis ledger. For an Agent architecture it may track state ownership, authority, control flow, and data flow. For a causal model it may track variables, direction, intervention, and uncertainty. For a probability representation it may distinguish event, conditional direction, probability mass, frequency, and normalization.

Never collapse distinct semantic objects merely because they have similar shapes or visual roles. A score, an index set, and a mask may participate in one pipeline but are not one object.

## Choose the representation from the structure

| Learning need | Useful representation | What it should expose |
|---|---|---|
| Prerequisite / dependency | compact graph or local roadmap | what depends on what; current frontier |
| Causal or procedural mechanism | flow / state diagram | ordering, branching, feedback, invariants |
| Matrix / tensor operation | axis-and-shape diagram | object roles, axis meanings, contraction, transpose |
| Transformation | before → operation → after | what changes and what is preserved |
| Geometry / spatial relation | coordinate or geometric sketch | position, orientation, symmetry, constraint |
| Function / distribution / dynamics | plot | variation, scale, slope, extrema, uncertainty |
| Temporal evolution | timeline / state trajectory | order, duration, transition, delayed effects |
| Comparison / discrimination | aligned panels or structured table | invariant vs changed features |
| Mathematical derivation | annotated aligned equations | decisive step and property used |
| Software / Agent system | component + dataflow diagram | authority, state ownership, control/data boundaries |
| Concept model | small causal map | generative relation rather than vocabulary list |

Do not force a graph where a two-line equation is clearer. Do not generate an image when a small ASCII diagram is enough.

## Semantic integrity

A teaching representation must preserve the semantics that matter to the current inference.

### Objects

Make clear what each object is. Distinguish, when relevant:

- values from probabilities;
- scores from indices or masks;
- states from observations;
- data from control;
- vectors from covectors;
- queries from keys and values;
- evidence from conclusions;
- model state from learner-facing text.

### Axes and dimensions

For matrices, tensors, plots, and tables, name the dimensions that carry meaning. If equal dimensions represent the same semantic axis, encode them consistently. If an operation removes or swaps an axis, make that visible.

The learner should be able to answer questions such as:

```text
Which axis is being summed over?
Which quantity survives the transformation?
Why do these two dimensions have to match?
```

### Geometry and layout

Spatial position should mean something when possible. Keep repeated objects visually consistent. Alignment can encode correspondence; distance can encode separation; arrows can encode direction or dependency. Do not use geometry that suggests a false relationship.

When geometry encodes formal structure, preserve geometric invariants. Equal shapes should not silently change size; a transpose should visibly swap the relevant axes; partitions should tile or recombine consistently; contracted dimensions should visually correspond.

Illustrative geometry need not use literal real-world scale, but it must not contradict the relation being taught.

### Color

Color can reinforce categories, states, or correspondence, but it must not carry essential information alone. Pair it with labels, shape, pattern, or position. Keep color semantics consistent inside one learning arc.

### Schematic simplification

If a diagram is schematic rather than quantitative, say so. Do not let a convenient sketch imply a false scale, probability, metric, or causal strength.

## Make the learner use the representation

Passive viewing is weak evidence. When the visual is central, ask for one meaningful action such as:

- read a relation from it;
- predict the next state;
- identify the contracted axis;
- explain what changes under a parameter change;
- complete a missing edge or label;
- redraw the structure from memory;
- translate the visual back into an equation or verbal model;
- translate an equation or explanation into a visual;
- compare two representations and state what each makes easier to see.

The representation should create evidence about the learner model, not just make the answer attractive.

## Scaffolding should fade

A useful progression is:

```text
teacher-generated representation
        ↓
partially completed representation
        ↓
learner annotates / modifies it
        ↓
learner reconstructs it
        ↓
learner chooses a representation
        ↓
learner transfers across representations
```

Do not keep producing polished diagrams after the learner can externalize the structure independently.

## Representation switching is diagnostic

A learner can appear fluent because the presentation matches memorized surface form. Switching representation can expose whether the underlying model transfers.

Examples:

```text
formula → graph
verbal mechanism → state diagram
matrix expression → axis diagram
code → dataflow
roadmap → dependency explanation
probability statement → frequency tree
```

A failure after representation switching is useful evidence. Diagnose whether the learner lacks the concept or merely the translation skill.

## Visuals and motivated discovery

A visual can reveal exactly one missing relation without revealing the full solution. Good uses include:

- show two objects and hide the decisive connection;
- expose a symmetry and ask what must remain invariant;
- show a dependency graph and ask which prerequisite blocks the route;
- show a tensor layout and ask which dimensions can contract;
- show two curves and ask what changed when an assumption changed.

This preserves the learner's moment of discovery while reducing representational friction.

## Tool choice

Use the lowest-friction medium that preserves the needed semantics:

```text
inline text / ASCII
→ Markdown table
→ Mermaid or equivalent diagram
→ plotted data / generated figure
→ editable vector / TikZ / document-quality artifact
```

The order is not a quality ranking. A complex renderer is worse than a five-line diagram when the five-line diagram exposes the idea.

When producing an artifact, keep editable source when practical and check the rendered result for unreadable labels, broken layout, cropped content, and misleading encodings.

## Validate semantics separately from rendering

A syntactically valid diagram can still teach the wrong model. Review in this order:

### Semantic audit

- Is every non-obvious object correctly typed and named?
- Are direction, dependency, causality, and authority represented correctly?
- Are axes, domains, states, or ranges correct where they matter?
- Are distinct objects kept distinct through transformations?
- Does the representation preserve the actual invariant or boundary the explanation depends on?

### Geometry / encoding audit

- Does position, size, shape, arrow direction, grouping, or color imply the intended relation?
- Are equal or corresponding structures encoded consistently?
- Are transformations visible rather than merely relabeled?
- Could the diagram imply a false scale, order, strength, or equivalence?

### Rendering audit

- Are labels legible?
- Is anything clipped, overlapping, or visually ambiguous?
- Is the important relation visible at normal reading size?
- Has secondary annotation crowded out the primary mechanism?

Only after all three pass should the artifact be treated as teaching-ready.

## Visual roadmap vs visual teaching

These are different layers.

**Visual teaching is core now.** The teacher may choose a diagram, plot, axis map, or local roadmap whenever it is the highest-value representation for the current cognitive move.

**A visual roadmap renderer is second-layer infrastructure.** Automatically maintaining a polished interactive knowledge graph, layout engine, or dedicated visualizer subagent should still wait for longitudinal evidence.

The project should not postpone good visual reasoning merely because a visualization product layer is not built.

## Evaluation questions

After a representation is used, ask:

- What exact inference was it meant to support?
- Did the learner interact with it or only view it?
- What evidence changed after using it?
- Could a simpler representation have done the job?
- Did the visual introduce a false implication or new notation burden?
- Can the learner reconstruct or translate the relation without the visual?

The target remains capability delta, not visual sophistication.
