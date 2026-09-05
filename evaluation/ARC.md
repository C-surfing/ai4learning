# Longitudinal Arc Contract

An **arc** is the minimum unit for evaluating adaptive teaching across time. It is not a collection of unrelated sessions on the same topic. Each session must depend on evidence produced earlier.

## Arc identity

Record:

- learner / arc ID;
- domain and mission;
- target capability;
- prerequisite hypotheses;
- starting learner state;
- planned representation opportunities, if any;
- planned transfer boundary;
- what evidence would falsify the initial learner model.

Do not pre-fill successful outcomes.

## Required shape

A default arc has three or four sessions:

```text
S1  locate frontier + create first capability
 ↓
S2  retrieve without replay + extend or repair
 ↓
S3  change representation / assumption / context
 ↓
S4  transfer or delayed revisit when needed
```

The exact count is not important. The dependencies are.

## Session contracts

### S1 — establish a real frontier

The runtime should identify the smallest capability that matters to the learner's mission and obtain evidence about the learner's current model.

S1 should end with:

- a concrete learner-model hypothesis;
- at least one decisive learner action;
- an evidence-backed state update;
- one explicit uncertainty to revisit later.

Avoid broad pretesting.

### S2 — retrieval before reconstruction

Do not replay S1. Give the learner a chance to reconstruct the important idea with reduced scaffolding.

Observe:

- what survives without the original wording or representation;
- whether the learner remembers the mechanism or only the surface form;
- whether stale state causes unnecessary reteaching;
- whether the runtime changes its move because the learner changed.

A failure in S2 may be a memory-strength issue, an unresolved misconception, or a bad S1 mastery inference. Distinguish them.

### S3 — perturb one meaningful dimension

Reuse the same underlying object or mechanism while changing one thing that matters:

- assumption;
- boundary condition;
- representation;
- notation;
- data distribution;
- implementation detail;
- problem surface;
- causal intervention.

This is where near-copy application should separate from structural understanding.

### S4 — transfer / delayed revisit

Use a context that was not demonstrated immediately beforehand. Reduce scaffolding again.

The question is not whether the learner remembers the answer. The question is whether they can recover the structure and make a correct decision.

## Cross-session invariants

Across the arc:

1. persistent state must be read before deciding what to do;
2. the runtime must not ask again for information already supported by current state unless testing retention is the point;
3. evidence must be timestamped/session-scoped enough to distinguish immediate fluency from later retrieval;
4. roadmap changes require evidence, not preference for a prettier curriculum;
5. a learner-model hypothesis can be revised or rejected without treating that as runtime failure;
6. scaffolding should recede when competence increases;
7. later evidence may downgrade an earlier state decision.

## Representation contract inside an arc

A representation is an intervention, not decoration. When used, record:

- what relation or mechanism it was supposed to expose;
- why prose/formula/code alone was insufficient at that point;
- what the learner had to read, predict, reconstruct, or manipulate from it;
- whether understanding survived a representation switch later.

Do not require a visual in every arc session.

## Evidence packet

An arc is reviewable only if it contains:

- one completed `SESSION.md` record per meaningful session;
- the learner-state changes that actually occurred;
- any roadmap revisions with reasons;
- failure taxonomy labels for runtime failures;
- at least one later retrieval or transfer observation;
- unresolved uncertainty rather than forced closure.

## Arc outcome

At the end, classify the arc:

- `capability_gain_supported`;
- `partial_gain_unstable`;
- `no_clear_gain`;
- `runtime_failure_dominant`;
- `insufficient_evidence`.

Do not collapse the outcome to a scalar score.

Then answer:

- What changed in the learner?
- What did the runtime infer correctly?
- What did it infer incorrectly?
- Which intervention had the strongest evidence of value?
- Which failure repeated, if any?
- Is a protocol change justified, or is more evidence needed?
