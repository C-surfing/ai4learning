# Teaching Runtime Evaluation

This directory evaluates whether ai4learning produces durable learner capability, not whether the tutor sounds helpful.

## Primary outcome

The unit of success is a **capability delta**:

```text
capability_after - capability_before
```

A session is useful only when there is evidence that the learner can now independently do something they could not reliably do before: recall, explain, derive, discriminate, apply, debug, or transfer.

Do not use response length, user praise, tutor fluency, or one correct answer as a mastery proxy.

## Evidence ladder

Use the same progression as the teaching protocol:

1. `recognition` — identifies or distinguishes the idea with cues;
2. `recall` — retrieves the idea without the answer being present;
3. `explanation` — reconstructs the mechanism or reasoning in their own model;
4. `application` — uses the idea in a relevant task;
5. `transfer` — uses it in a meaningfully different context with limited scaffolding.

Evidence is concept-specific. A learner may be transferable on one node and only exposed on another.

## Conservative state transitions

- One correct response is evidence, not mastery.
- Mark `stable` only when the learner succeeds on at least two meaningfully independent pieces of evidence, preferably separated by task form or time.
- Mark `transferable` only after successful use in a novel context that was not demonstrated immediately beforehand.
- A misconception is resolved only when the learner's generative model changes enough to avoid reproducing the same error in use.
- Self-reported confidence may guide probing but does not promote state by itself.

These are default evidentiary standards, not rigid scoring rules. Domain evidence can justify a different decision if recorded explicitly.

## Evaluation artifacts

- `SESSION.md` — one longitudinal session record.
- `FAILURE-TAXONOMY.md` — classify failures before changing the protocol.
- `DOMAINS.md` — initial five-domain dogfooding matrix.

Real learning state remains in `.learning/`. Evaluation records describe evidence about the runtime and should not be copied into `STATE.md` as transcript history.

## Longitudinal unit

Prefer an **arc** over a single conversation:

```text
session 1: establish frontier
session 2: retrieve + extend
session 3: transfer + revisit assumptions
```

An arc should make it possible to answer:

- Did the system remember the learner accurately?
- Did its roadmap change when evidence contradicted it?
- Did it choose different interventions as the learner changed?
- Did apparent understanding survive retrieval or transfer?
- Did the learner become less dependent on the tutor?

## Promotion rule

Do not add a new rule to `skills/teach/SKILL.md` because one conversation was awkward. First classify the failure and ask whether the smallest fix belongs in:

1. learner-state representation;
2. teaching-decision logic;
3. interaction policy;
4. domain-specific teaching strategy;
5. persistence / roadmap update behavior;
6. source / tooling layer.

Promote a protocol change when a failure is repeated across independent sessions or is a clearly structural failure with high consequence. Record the evidence that motivated the change. Avoid case-specific patches, benchmark phrases, topic-specific answer rules, or heuristics that cannot be explained as teaching logic.

## What this is not

This is not a leaderboard and not an attempt to reduce teaching quality to one scalar score. Quantitative counts can help find regressions, but the core object is the learner model transition supported by observable evidence.
