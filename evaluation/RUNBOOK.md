# Dogfooding Runbook

This runbook turns the v0.2 evaluation design into a repeatable workflow for real learning sessions.

## 0. Before the arc

1. Choose one real learner mission and one domain arc.
2. Read the current `.learning/MISSION.md`, `LEARNER.md`, `ROADMAP.md`, and `STATE.md` if they exist.
3. Copy the arc brief for the chosen domain and fill only the **starting assumptions**.
4. Do not invent learner evidence, expected success, or final mastery state.
5. Identify one capability that could plausibly change during the arc.

## 1. During each session

Use the normal Teach or Study skill. Do not expose evaluation machinery to the learner unless useful.

After the interaction, complete one `evaluation/SESSION.md` record from decisive evidence only.

Capture:

- what the learner could do before;
- the learner-model hypothesis that mattered;
- the cognitive move selected;
- the learner action that tested it;
- what changed;
- what remains uncertain;
- whether the roadmap or state changed;
- any runtime failure label.

Do not copy the full transcript into the record.

## 2. Preserve longitudinal dependence

Before the next session:

- read the updated learner state;
- identify what should now be retrieved rather than retaught;
- identify one earlier assumption worth challenging;
- reduce scaffolding if prior evidence warrants it.

The next session must depend on earlier evidence. If it could have been run identically with a new learner, the arc is not yet longitudinal.

## 3. Retrieval check

A later session should test at least one earlier capability without replaying the original explanation.

Record whether the learner:

- retrieves independently;
- needs a cue;
- recognizes but cannot reconstruct;
- reconstructs but cannot apply;
- applies in the original form but fails after a representation/context change.

Use this evidence to confirm, preserve, or downgrade state.

## 4. Perturbation / representation switch

When appropriate, change one meaningful dimension while preserving the underlying structure.

Examples:

- frequency tree → conditional-probability notation;
- geometric argument → symbolic derivation;
- paper prose → claim/evidence map;
- code path → state/dataflow diagram;
- verbal causal model → counterfactual scenario.

The learner should perform a translation, prediction, repair, or reconstruction. Passive viewing is not enough.

## 5. Transfer check

Use an unfamiliar case that was not demonstrated immediately before. The task should preserve the deep structure while changing enough surface cues to make pattern matching unreliable.

Record scaffold dependence explicitly.

## 6. Arc review

After the final planned session:

1. complete the outcome section in `evaluation/ARC.md`;
2. classify runtime failures using `FAILURE-TAXONOMY.md`;
3. compare early and late learner-model hypotheses;
4. identify whether scaffolding actually receded;
5. identify whether apparent learning survived retrieval or transfer;
6. decide whether the evidence supports a runtime change.

## 7. Promotion gate

Do not edit `skills/teach/SKILL.md` or `skills/study/SKILL.md` merely because an arc felt awkward.

Use `evaluation/PROMOTION.md` first. A general protocol change should normally require repeated evidence across independent sessions/arcs or a clearly structural high-consequence failure.

## 8. What counts as a completed dogfood arc

A completed arc is not "three chats happened". It has:

- real learner evidence from more than one session;
- continuity through persistent state;
- at least one retrieval/revisit;
- at least one changed assumption, representation, or context when appropriate;
- a conservative capability decision;
- explicit unresolved uncertainty;
- a documented decision about whether the runtime should change.

If these conditions are not met, mark the arc `insufficient_evidence` and continue later rather than manufacturing closure.
