# Arc 04 — Programming / Agent Systems

## Mission shape

Learner should become able to form and test a system model, not merely copy a fix or architecture explanation.

## Candidate arc types

Choose one:

- unfamiliar codebase → architecture model → targeted change;
- bug symptom → hypothesis → instrumentation → fix;
- Agent behavior → state/tool/control-loop diagnosis.

## Target capability

Predict behavior from the system model, gather executable evidence, and transfer the reasoning to a neighboring bug/design case.

## S1 — model before patch

Start from a real codebase, bug, or design question. Establish:

- what the learner thinks owns state;
- what path data/control takes;
- which observations would distinguish competing hypotheses.

The learner should make at least one prediction before the tutor supplies a fix.

## S2 — retrieve + instrument

Ask the learner to reconstruct the relevant control/data path and propose the smallest observation, log, test, or experiment that would update the hypothesis.

Execution evidence is stronger than verbal confidence when execution is available.

## S3 — representation perturbation

Switch between code and a compact state/dataflow/control-loop diagram when useful.

Require the learner to map a concrete line/component/tool call onto the diagram and predict what changes if one edge/state owner changes.

## S4 — transfer

Present a neighboring failure mode or design variant. Avoid giving the same diagnostic signature.

Transfer requires the learner to create a new hypothesis and choose discriminative evidence, not simply reuse the previous patch.

## Runtime questions

- Did the tutor write the solution before the learner formed a model?
- Did it discuss executable claims without execution when tools were available?
- Did architecture diagrams preserve state ownership and directionality?
- Did the learner become less dependent on tutor-generated instrumentation?

## Exit evidence

A strong arc ends with the learner independently proposing a plausible model, a discriminative test, and a targeted change in a related but non-identical case.
