# Practice Progression — Connected Tasks That Reveal Understanding

Practice in ai4learning should not be a pile of unrelated questions. A useful sequence keeps enough of the situation stable that the learner can see which assumption, representation, or mechanism actually caused the result to change.

The core pattern is:

```text
one object / setting
      ↓
understand the base case
      ↓
change one meaningful condition
      ↓
predict what follows
      ↓
explain why
      ↓
verify / implement / transfer
```

This is a design pattern, not a mandatory worksheet format.

## Three scales of practice

### Immediate check

Use a short task directly after a new cognitive move when it can expose a specific misconception while the dependency is still local.

Examples:

- choose which conditional probability the evidence changes;
- identify the axis contracted in a matrix product;
- predict what a small code change will do;
- provide a counterexample to an overgeneralized claim.

The purpose is diagnosis, not scoring.

### Connected progression

Reuse the same model, derivation, program, dataset, proof object, or conceptual case across several tasks. Change one element at a time so the learner must identify what the conclusion depended on.

Useful changes include:

- remove or weaken an assumption;
- alter a boundary or initial condition;
- switch representation;
- compare two methods on the same target;
- introduce noise or a constraint;
- examine a limiting case;
- reverse the direction of inference;
- construct a counterexample;
- implement an independent check.

The learner should not be able to solve every part by repeating the same surface procedure.

### Synthesis / transfer

Later, remove local cues and combine multiple concepts. Keep the task unfamiliar enough that structural recognition is required.

Transfer evidence is strongest when the learner must decide which idea applies rather than being told the method name.

## Hold the object fixed; vary the reason

A powerful progression often keeps the target object fixed while changing the reasoning demand.

For example:

```text
same probability model
  → compute
  → explain
  → change base rate
  → compare intuition
  → transfer to a different context
```

or:

```text
same software component
  → predict behavior
  → inspect state flow
  → introduce a failure
  → debug from evidence
  → change architecture constraint
```

or:

```text
same theorem / model
  → derive under assumptions
  → remove one assumption
  → find what breaks
  → construct a counterexample
  → restore the weakest sufficient condition
```

This helps distinguish a generative model from memorized procedure.

## Connect practice to the evidence ladder

Do not label task difficulty only as easy / medium / hard. Ask what kind of evidence it can produce.

| Evidence target | Example practice form |
|---|---|
| recognition | discriminate between nearby concepts |
| recall | reconstruct a result without cues |
| explanation | justify a decisive step or mechanism |
| application | use the idea in a representative case |
| transfer | detect and use the structure in a changed setting |

A long problem is not automatically transfer. A short question can produce strong transfer evidence if it removes the original surface cues.

## Worked example → learner decision

A worked example should make the method intelligible, not consume the learner's opportunity to reason.

Useful transition:

```text
worked example establishes the mechanism
        ↓
related task preserves the setting
        ↓
one condition changes
        ↓
learner must decide what changes in the reasoning
```

Avoid near-copy exercises where the only work is substituting new numbers.

## Hints and solutions

Hints should reduce search space without performing the central inference. Complete solutions should explain the reason for the decisive move, not only provide algebra or code.

When a task has multiple valid methods or a parameter-dependent answer, preserve that openness rather than forcing a single canonical path.

For programming tasks, require an observable contract or executable check. Code should test a specific claim, not be added because technical topics are expected to contain code.

## Failure signals

A practice sequence is weak when:

- tasks are unrelated except by topic label;
- every item repeats the same procedure;
- the prompt names the method that the learner is supposed to recognize;
- hints remove the decision that matters;
- an implementation task checks nothing conceptually meaningful;
- later parts rely on results that were never established;
- difficulty comes from wording or bookkeeping rather than reasoning;
- a successful near-copy task is treated as transfer.

## Longitudinal use

Connected practice can span sessions. A later retrieval or transfer task may deliberately reuse the same underlying structure with changed surface details. This produces evidence about storage strength and representation-independent understanding without requiring a separate flashcard system.

The target remains the same: leave the learner more capable of choosing and executing the right reasoning independently.
