# Longitudinal Dogfooding Plan

## Purpose

v0.1 established the teaching protocol. The next phase is not feature expansion. It is controlled use against real learning scenarios to discover where the learner model and teaching decisions fail.

The system should evolve from:

```text
rules about teaching
```

towards:

```text
observed learner interactions
        ↓
learner model improvements
        ↓
teaching decision improvements
        ↓
better learning outcomes
```

## Evaluation Domains

### 1. Probability Theory

Goal:

Test whether the system can build mathematical intuition rather than formula recall.

Example tasks:

- probability spaces;
- conditional probability;
- Bayes theorem;
- random variables;
- expectation and variance.

Observe:

- Does the roadmap expose prerequisites?
- Does the tutor discover misconception boundaries?
- Does it delay formulas until motivation exists?
- Can the learner derive the formula later?

Failure signals:

- formula-first explanations;
- vocabulary overload;
- confusing recognition with understanding.

---

### 2. Advanced Mathematics

Goal:

Test dependency-graph teaching.

Example tasks:

- linear algebra;
- real analysis;
- differential forms;
- optimization.

Observe:

- Are roots genuinely foundational?
- Does the roadmap change when prerequisites are missing?
- Does the learner gain transfer ability?

Failure signals:

- chapter-order teaching;
- hidden prerequisite gaps;
- proving without intuition.

---

### 3. Paper Reading

Goal:

Test research comprehension.

Pipeline:

```text
paper
 ↓
question map
 ↓
concept dependency graph
 ↓
method reconstruction
 ↓
critical evaluation
```

Observe:

- Can the system separate understanding the paper from summarizing it?
- Can it identify the author's reasoning path?
- Can it challenge weak assumptions?

Failure signals:

- abstract summarization;
- terminology dumping;
- no reconstruction of motivation.

---

### 4. Programming / Agent Learning

Goal:

Test skill acquisition.

Example tasks:

- learning a framework;
- reading an unfamiliar repository;
- designing systems;
- debugging.

Observe:

- Does the learner write or only watch?
- Does the tutor preserve productive struggle?
- Does it ask for implementation evidence?

Failure signals:

- copy-paste solutions;
- architecture explanation without execution;
- no transfer task.

---

### 5. Pure Concept Learning

Goal:

Test explanation quality.

Examples:

- blockchain;
- economics;
- philosophy;
- computer systems.

Observe:

- Does the learner obtain a compact generative model?
- Are analogies removed after they serve their purpose?
- Does the explanation create inevitable understanding?

---

## New State Signals To Capture

The current learner state should evolve with:

```yaml
concept_state:
  recognition: unknown|seen|stable
  recall: unknown|partial|stable
  explanation: unknown|partial|stable
  application: unknown|partial|stable
  transfer: unknown|partial|stable

misconception:
  claim:
  confidence:
  evidence:
  repair_attempt:

teaching_intervention:
  type:
  reason:
  outcome:
```

## Phase Order

1. Run manual dogfooding sessions.
2. Record failures, not successful conversations.
3. Modify learner model.
4. Modify teaching decision policy.
5. Only then add infrastructure:
   - spaced review scheduler;
   - visual roadmap;
   - Obsidian/md-log integration;
   - researcher agent;
   - visualizer agent.

The system should earn complexity through observed need.
