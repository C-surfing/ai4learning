# Visual Teaching Acceptance Scenarios

These scenarios test whether ai4learning uses representations as cognitive instruments rather than decoration. They supplement `SCENARIOS.md` and should be reviewed during visual-heavy dogfooding.

## 1. Tensor shapes should become inspectable

**Context**: learner knows matrix multiplication notation but repeatedly loses track of attention dimensions.

**Expected behavior**

- Uses a compact axis/shape representation if that is the lowest-friction way to expose the relation.
- Labels the semantic roles of dimensions, not only numeric sizes.
- Makes the contraction axis and surviving axes inspectable.
- Asks the learner to identify or predict one dimension relation.
- Does not replace the mechanism with a decorative neural-network illustration.

**Failure**: a polished diagram with unlabeled arrows and no connection to `QK^T`, softmax, or `PV`.

## 2. A plot must answer a learning question

**Context**: learner is confused about why changing variance alters a Gaussian density.

**Expected behavior**

- If a plot is used, it highlights the relation the learner must reason about: width, peak height, area, and parameter change.
- The learner predicts or interprets what changes before the explanation is completed.
- The plot is not added merely because statistics is considered visual.

## 3. Local roadmap beats field poster

**User**

```text
Where does Bayes fit into what I'm learning right now?
```

**Expected behavior**

- Shows a compact dependency slice such as conditional probability → total probability → Bayes → inference.
- Marks the current frontier.
- Avoids rendering an encyclopedic probability-theory graph unless the learner asks for it.
- Uses the map to choose or explain the next move.

## 4. The learner should manipulate the representation

**Context**: a causal/state diagram is central to explaining a process.

**Expected behavior**

- Asks the learner to predict the next state, complete an edge, identify a feedback path, or explain an invariant.
- Treats correct manipulation as evidence stronger than passive agreement.
- Does not infer mastery because the learner says the diagram is clear.

## 5. Switch representations to test the model

**Context**: learner successfully follows a matrix derivation in notation.

**Expected behavior**

- Later checks whether the learner can express the same operation as an axis diagram, verbal contraction rule, or implementation shape reasoning.
- Diagnoses whether any failure is conceptual or merely translation between representations.
- Does not call the first surface-form success transferable.

## 6. Visual complexity must earn its cost

**Context**: a two-line ASCII flow is enough to show a dependency.

**Expected behavior**

- Uses the simple representation rather than generating a large artifact.
- Escalates to Mermaid, plotted figures, vector graphics, or document-quality visuals only when the added semantics justify the tooling cost.
- Keeps difficulty in the idea rather than the rendering workflow.

## 7. Color cannot be the only semantics

**Context**: a diagram uses categories or learner states.

**Expected behavior**

- Reinforces color with labels, position, shape, or symbols.
- Keeps the same color meaning consistent inside the current artifact or arc.
- Does not make understanding depend on distinguishing subtle hues.

## 8. Practice should change a condition, not only numbers

**Context**: learner has followed one worked probability, mechanics, or programming example.

**Expected behavior**

- Gives a related task where one meaningful assumption, boundary, representation, or constraint changes.
- Leaves the decisive reasoning to the learner.
- Asks what changed in the conclusion and why.
- Does not offer several near-copy substitutions and call them transfer.

## Review questions

For each scenario ask:

- What inference was the representation or practice task designed to expose?
- Did the learner perform meaningful cognition with it?
- Was the representation semantically faithful?
- Could a simpler medium have worked better?
- Did the interaction produce new learner-model evidence?
- Did scaffolding fade when the learner no longer needed it?
