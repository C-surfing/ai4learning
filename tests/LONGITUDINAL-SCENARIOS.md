# Longitudinal Behavioral Scenarios

These scenarios test whether ai4learning behaves like a persistent adaptive tutor across sessions rather than a good single-turn teacher.

## 1. Do not restart diagnosis

**Session 1 evidence**

Learner repeatedly confuses likelihood with posterior probability. `STATE.md` records the misconception and one partial repair.

**Session 2 request**

```text
Let's continue Bayes.
```

**Expected behavior**

- reads current state before responding;
- does not ask the same broad prerequisite questions again;
- begins with retrieval or a discriminative check targeted at the known uncertainty;
- updates or rejects the old learner-model hypothesis from new evidence.

## 2. Immediate success may fail later retrieval

**Session 1**

Learner solves a near-copy application correctly; state remains `developing`.

**Session 2**

Learner cannot reconstruct the mechanism without cues.

**Expected behavior**

- treats the later failure as stronger evidence against premature promotion;
- does not preserve `stable` merely to maintain consistency;
- diagnoses whether the problem is storage strength, representation dependence, or unresolved mechanism.

## 3. Later evidence may downgrade state

A concept was previously marked `stable` from two independent-looking tasks. A later representation switch reveals brittle pattern matching.

**Expected behavior**

- state may be downgraded to `developing`;
- evidence provenance is preserved;
- downgrade is not framed as punishment or failure of the learner;
- next move targets the newly exposed structural gap.

## 4. Scaffolding should recede

Across three sessions, learner moves from guided derivation to independent reconstruction.

**Expected behavior**

- prompts become less leading;
- tutor does not keep re-explaining the same intermediate steps;
- later tasks require more learner-generated structure;
- reduced scaffolding is driven by evidence, not by a fixed session count.

## 5. Roadmap detour must rejoin mission

A hidden prerequisite is discovered and inserted into the roadmap.

**Expected behavior**

- the detour has an explicit reason tied to the mission;
- once sufficiently repaired, the runtime returns to the original frontier;
- the prerequisite does not silently become a new curriculum branch that consumes the rest of the learning plan.

## 6. Representation should not become dependency

**Session 1**

A frequency tree helps the learner understand Bayes.

**Later session**

The learner sees only symbolic conditional-probability notation.

**Expected behavior**

- asks the learner to reconstruct or translate the structure;
- does not immediately redraw the same tree;
- if the learner fails, records representation dependence as evidence rather than assuming conceptual mastery.

## 7. Learner model can be wrong

`STATE.md` records a suspected misconception with medium confidence. A later task shows the learner actually understands the mechanism; the earlier error was procedural.

**Expected behavior**

- rejects/revises the misconception hypothesis;
- does not force new evidence into the old model;
- durable learner profile is not polluted by a temporary wrong inference.

## 8. Study should use teaching history

A learner returns to review a concept learned in Teach mode.

**Expected behavior**

- Study reads the same learner state;
- retrieves before reteaching;
- prioritizes previously shaky/high-leverage nodes;
- does not behave as though Teach and Study belong to separate learners.

## 9. Mission change should reshape the arc

The learner changes from broad conceptual mastery to an exam in ten days.

**Expected behavior**

- mission/constraints update explicitly;
- review/application priorities change;
- stable concepts receive less time;
- core misconceptions still receive repair rather than being replaced entirely by test tricks.

## 10. Transfer failure is informative

Learner succeeds on representative applications but fails a surface-different transfer case.

**Expected behavior**

- preserves evidence of application success;
- does not collapse the concept to `unknown`;
- marks transfer as unsupported and identifies what surface cue or representation the learner depended on;
- next intervention aims at structural recognition.

## 11. Runtime failure vs learner difficulty

A session is hard and slow, but the learner is performing productive reasoning and the runtime is targeting the correct frontier.

**Expected behavior**

- classify as `F10 — No protocol failure` if supported;
- do not add a rule merely to make the conversation smoother;
- preserve desirable difficulty where it is doing cognitive work.

## 12. Promotion requires evidence

One arc reveals a tutor tendency to overuse diagrams.

**Expected development behavior**

- record the representation failure;
- do not immediately modify core `SKILL.md`;
- look for recurrence or structural consequence;
- use `evaluation/PROMOTION.md` before general promotion.

## Review dimensions

For each longitudinal scenario inspect:

| Dimension | Question |
|---|---|
| Continuity | Did later behavior actually depend on persisted evidence? |
| Revisability | Could the runtime revise its own learner model and roadmap? |
| Evidence discipline | Were immediate and delayed signals distinguished? |
| Scaffold adaptation | Did support change with learner capability? |
| Representation independence | Could capability survive a representation change? |
| Mission alignment | Did detours and review remain tied to the learner's goal? |
| Failure attribution | Was learner difficulty distinguished from runtime defect? |
