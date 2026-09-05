# Teaching Failure Taxonomy

Classify a failure before changing the protocol. The purpose is to prevent symptom-level rule accumulation.

## F1 — Learner-model representation

The runtime lacks a useful representation for what is happening in the learner.

Examples:

- a temporary misconception is stored as a durable preference;
- the system cannot represent uncertainty about a learner belief;
- different capability dimensions collapse into one mastery label;
- evidence provenance is lost, so later decisions over-trust stale state.

Fix the state model before adding interaction rules.

## F2 — Frontier inference

The state representation is sufficient, but the runtime locates the wrong learning boundary.

Examples:

- assumes a prerequisite is stable when it is not;
- reteaches material the learner can already use;
- mistakes vocabulary uncertainty for conceptual uncertainty;
- advances after recognition when transfer is required.

Look for better evidence selection or inference, not more content.

## F3 — Teaching-decision selection

The frontier is understood, but the chosen cognitive move has lower learning value than an available alternative.

Examples:

- explains when a contrast would expose the misconception;
- drills procedures when the missing piece is a causal model;
- asks for derivation before motivating why the construct is needed;
- chooses recall when a transfer check is needed.

The repair belongs in decision logic.

## F4 — Interaction policy

The intended move is sound, but its conversational execution damages learning.

Examples:

- excessive probing;
- stealing the discovery step;
- vague Socratic questions;
- unnecessary praise or ceremony;
- too many cognitive moves in one turn;
- withholding information that would remove logistical rather than productive struggle.

Keep this separate from learner modeling.

## F5 — Verification / mastery inference

The system performs an intervention but draws an unjustified conclusion from learner performance.

Examples:

- one correct answer becomes `stable`;
- immediate imitation is mistaken for recall;
- a near-copy application is labeled transfer;
- a misconception is marked resolved because the learner repeats the correction.

Prefer stronger or more independent evidence.

## F6 — Roadmap / dependency model

The problem lies in the assumed knowledge structure.

Examples:

- roadmap behaves like chapter order;
- hidden prerequisite is discovered but not integrated;
- already-strong nodes are kept on the mandatory path;
- learner-specific detours never rejoin the mission.

Revise the roadmap as a hypothesis, not as a curriculum.

## F7 — Persistence / longitudinal continuity

The runtime behaves well inside one session but loses the learning trajectory across sessions.

Examples:

- repeats diagnosis already established;
- stale misconceptions survive after repair;
- recent fluency overwrites older stronger evidence;
- review candidates are never revisited when they become relevant.

Repair update semantics before adding a scheduler.

## F8 — Domain strategy

The generic teaching loop is sound, but a domain needs a different form of learner action or evidence.

Examples:

- mathematics needs derivation or proof-state evidence;
- programming needs executable debugging evidence;
- paper reading needs claim/evidence reconstruction;
- conceptual learning needs causal-model discrimination.

Add the smallest domain strategy; do not create a separate tutor personality.

## F9 — Source / tooling layer

The teaching decision is right but external information, execution, visualization, or tooling is insufficient.

Examples:

- primary source is needed to interpret a paper claim;
- code needs execution rather than verbal speculation;
- a diagram would remove representational friction;
- current facts need verification.

Keep source acquisition separate from teaching interaction.

## F10 — No protocol failure

Not every uncomfortable moment requires a change. The learner may simply be doing productive work, the task may be genuinely difficult, or the evidence may be too weak to decide.

When in doubt, collect another independent observation before modifying the runtime.

## Promotion checklist

Before changing `SKILL.md`, answer:

- What exact failure class is this?
- What observable evidence supports the diagnosis?
- Has it repeated across independent sessions or does it expose a structural flaw?
- Can the state model already represent the problem?
- What is the smallest layer that can fix it?
- Could the proposed rule overfit one topic, wording pattern, or learner?
- What behavior test would fail before the change and pass after it?
