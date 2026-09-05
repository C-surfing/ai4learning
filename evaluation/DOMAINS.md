# Initial Dogfooding Domains

These five domains are deliberately different. The goal is to expose failures that generalize across teaching contexts rather than tune the protocol to one subject.

## 1. Probability and statistics

Representative arc:

```text
conditional probability → Bayes theorem → Bayesian reasoning
```

Test:

- prerequisite detection;
- base-rate and inverse-probability misconceptions;
- intuition before formula when useful;
- derivation rather than formula recall;
- transfer to a structurally similar but surface-different problem.

Failure signals:

- formula appears before the learner has a reason for it;
- `P(A|B)` and `P(B|A)` confusion is corrected verbally but persists in use;
- one numerical success is treated as conceptual mastery.

## 2. Mathematics

Representative arcs:

- vectors → linear maps → eigenstructure;
- limit → derivative → local linearization;
- vector → covector → differential forms.

Test:

- roadmap as dependency hypothesis rather than chapter order;
- formalism / intuition calibration;
- hidden prerequisite discovery;
- proof or derivation evidence;
- transfer between representations.

Failure signals:

- terminology substitutes for mechanism;
- learner can manipulate symbols but cannot explain the invariant idea;
- roadmap remains unchanged after prerequisite evidence contradicts it.

## 3. Paper reading

Representative arc:

```text
problem → claim → method → evidence → limitation → research judgment
```

Test:

- distinguish summarization from understanding;
- reconstruct why the method is needed;
- map claims to evidence;
- identify assumptions and limitations;
- compare a result with an alternative explanation.

Failure signals:

- abstract restatement without argument reconstruction;
- paper terminology is repeated without causal understanding;
- the tutor critiques before the learner can reconstruct the authors' case.

## 4. Programming / Agent systems

Representative arcs:

- unfamiliar codebase → architecture model → targeted change;
- bug symptom → hypothesis → instrumentation → fix;
- Agent behavior → state / tool / control-loop diagnosis.

Test:

- learner acts rather than watches;
- debugging uses hypotheses and executable evidence;
- architecture explanations lead to implementation decisions;
- productive struggle is preserved while search / tooling friction is removed;
- transfer to a neighboring bug or design case.

Failure signals:

- tutor writes the solution before the learner forms a model;
- code is discussed without execution when execution is available;
- copied implementation is treated as capability.

## 5. Conceptual learning

Representative topics:

- blockchain and trust;
- distributed systems;
- attention / transformers;
- economic or philosophical mechanisms.

Test:

- causal mental-model construction;
- analogy use and eventual removal;
- discrimination between confusable models;
- explanation without borrowed vocabulary;
- transfer to a new scenario.

Failure signals:

- polished explanation creates recognition only;
- analogy becomes the learner's final model;
- Feynman check degenerates into generic "explain it in your own words".

## Cross-domain questions

For every arc, ask:

1. Did the runtime locate the right frontier?
2. Did it choose one high-value cognitive move rather than dump content?
3. Did learner action produce evidence that changed the next decision?
4. Did the learner model update conservatively?
5. Did the roadmap change when assumptions were falsified?
6. Did capability survive retrieval or transfer?
7. Did the learner become less dependent on the tutor?

## Sampling rule

Do not call a behavior a general protocol problem from one domain alone. Prefer evidence from at least two different arcs or domains before changing general teaching logic, unless the failure is clearly structural or safety-critical.
