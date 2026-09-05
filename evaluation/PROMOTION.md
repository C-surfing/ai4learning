# Protocol Promotion Record

Use this before changing a general Teach/Study rule because of dogfooding evidence.

## Proposed change

- Layer to change:
- Proposed behavior change:
- Scope: `general | domain strategy | representation/tooling | persistence | evaluation only`
- Why the current behavior is insufficient:

## Evidence

List only observed evidence.

| Arc / session | Domain | Failure label | Observable behavior | Consequence |
|---|---|---|---|---|
|  |  |  |  |  |

## Generality test

- Independent sessions showing the failure:
- Independent arcs showing the failure:
- Domains represented:
- Does the failure survive wording/topic changes?
- Could this be a learner-specific event rather than a runtime defect?
- Could this be solved by better state evidence instead of a new rule?

## Smallest-fix test

Check the smallest sufficient layer:

- [ ] learner-state representation;
- [ ] frontier inference;
- [ ] teaching-decision selection;
- [ ] interaction execution;
- [ ] verification / mastery inference;
- [ ] roadmap / persistence;
- [ ] domain strategy;
- [ ] representation / source / tooling;
- [ ] core Teach/Study protocol.

Explain why a lower layer is insufficient:

## Overfitting audit

Reject or narrow the change if it depends on:

- one exact topic;
- one learner wording pattern;
- one benchmark-style phrase;
- one preferred visualization grammar;
- one successful anecdote;
- a hard-coded question sequence that has no decision-value explanation.

## Behavioral regression case

Before promotion, add or update an acceptance scenario that demonstrates:

```text
old behavior → identifiable failure
new behavior → repaired decision
```

- Scenario file / ID:
- What must remain unchanged elsewhere:

## State compatibility

- Does existing `.learning/` state remain interpretable?
- Does the proposed change require a schema/template migration?
- Could old evidence be over-trusted under the new rule?

## Decision

Choose one:

- `promote_general_rule`;
- `promote_domain_strategy`;
- `fix_state_or_evaluation_first`;
- `collect_more_evidence`;
- `no_change`.

Rationale:

## Post-promotion check

After the change lands:

- rerun the distinguishing acceptance scenario;
- inspect at least one unaffected scenario for regression;
- continue collecting real arcs rather than declaring the problem solved from the patch alone.
