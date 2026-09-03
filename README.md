# ai4learning

A lightweight, stateful **AI teaching and study protocol** for learning with agents.

The goal is not to make an AI explain more. The goal is to make the learner **more capable after each interaction**.

> Keep the whole map in view. Teach at the edge of understanding. Make the learner perform the important cognitive move.

`ai4learning` is designed around a simple idea: good teaching is an adaptive control loop over a learner model, not a stream of answers.

```text
MAP   — Where could we go?
MODEL — What does the learner actually understand?
MOVE  — What is the best next cognitive action?
EVIDENCE — Did it actually land?
```

The internal system is rigorous; the external interaction should feel natural.

## Why

Normal AI learning tends to become many-to-many: one learner jumps among many books, videos, teachers, chats, interfaces, and explanations. The switching cost is not only logistical. It consumes working memory, fragments context, and makes trust expensive.

This project tries to create one consistent teaching interface over many sources while preserving the strengths of excellent human teaching:

- a global structural view of the subject;
- teaching at the learner's current frontier;
- one important reasoning step at a time;
- motivated discovery instead of arbitrary fact delivery;
- Feynman-style explanation as model debugging;
- retrieval, application, and transfer as evidence of learning;
- persistent state across sessions;
- source verification without turning study into research logistics.

The target is **capability delta**, not information delivered.

```text
Before: I cannot reason about X independently.
After:  I can derive, explain, apply, or transfer X independently.
```

## Teaching taste

The central design rule is:

> **Never steal the learner's moment of discovery.**

The teacher should know more than it reveals. It should locate the misunderstanding before correcting it, repair models rather than sentences, introduce terminology after intuition when possible, and make every example do instructional work.

A good explanation should eventually feel inevitable: when the result appears, the learner can see why it had to appear.

This does **not** mean endless Socratic questioning. The agent chooses between direct explanation, guided discovery, worked examples, analogy, visualization, practice, retrieval, and challenge based on the learner's state and the cognitive move required.

## Core loop

```text
ORIENT
  ↓
PROBE
  ↓
LOCATE FRONTIER
  ↓
SELECT ONE LEARNING MOVE
  ↓
TEACH / ASK / DEMONSTRATE
  ↓
LEARNER ACTS
  ↓
VERIFY
  ↓
REPAIR or ADVANCE
  ↓
UPDATE MODEL + ROADMAP
```

The learner should not normally see these phase labels. They should experience a coherent conversation.

## Persistent learning workspace

When used in a learning project, the skill maintains a small `.learning/` workspace:

```text
.learning/
├── MISSION.md     # Why this matters; what success means
├── LEARNER.md     # Durable learning preferences and learner-specific constraints
├── ROADMAP.md     # Knowledge/dependency map + learner overlay
├── STATE.md       # Current frontier, misconceptions, evidence, next move
├── records/       # Significant learning-state changes
└── references/    # Optional compressed reference material
```

The four important objects are intentionally separate:

- **MISSION** grounds what is worth learning.
- **LEARNER** stores durable teaching-relevant preferences, not a transcript.
- **ROADMAP** is a revisable hypothesis about the dependency structure of the subject.
- **STATE** represents the learner now: stable, shaky, unknown, misconceptions, evidence, and next frontier.

A roadmap is not a chapter list. It is a dependency graph with a learner overlay.

```text
Vectors ● ──→ Covectors ◐ ──→ Wedge product ○ ──→ Differential forms ○
                 ↑
            YOU ARE HERE

○ unknown   ◔ exposed   ◐ developing   ● stable   ◆ transferable
```

## Teach and study are different modes

**Teach mode** grows the model: motivate, establish, connect, verify.

**Study mode** strengthens and tests it: retrieval first, targeted repair, interleaving, application, transfer, and spaced re-checks. The agent should not re-explain material before giving the learner a chance to retrieve it.

The same learner state powers both.

## Feynman, upgraded

"Explain it in your own words" is not enough. A teach-back is treated as a model-debugging artifact. The agent looks for:

- unexplained jumps;
- borrowed terminology hiding missing understanding;
- vague causal language;
- contradictions;
- missing mechanisms;
- statements that can be recited but not used.

It then chooses **one** gap to challenge or repair. The goal is a better mental model, not a prettier paraphrase.

## Evidence, not vibes

Understanding is tracked by evidence, not by the agent saying "great job". The protocol distinguishes:

```text
recognition < recall < explanation < application < transfer
```

Immediate fluency is not treated as long-term mastery. A concept can remain `developing` even after a correct answer; stronger states require stronger, preferably independent evidence.

## Agent compatibility

The primary skill lives at [`skills/teach/SKILL.md`](skills/teach/SKILL.md). A thin [`skills/study/SKILL.md`](skills/study/SKILL.md) entry activates the same protocol with a study-first posture.

For agents with native skill loading, copy or symlink the relevant skill directory into that agent's skill location. For agents without native skill loading, use [`prompts/bootstrap.md`](prompts/bootstrap.md) and point it at this repository.

See [`docs/USAGE.md`](docs/USAGE.md) for recommended workflows and commands.

## Design documents

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — state model, control loop, persistence, mode selection.
- [`docs/TEACHING-TASTE.md`](docs/TEACHING-TASTE.md) — the qualitative teaching standard.
- [`docs/REFERENCES.md`](docs/REFERENCES.md) — sources and inspirations.
- [`tests/SCENARIOS.md`](tests/SCENARIOS.md) — behavioral acceptance scenarios for the skill.

## Influences

This project is strongly influenced by Matt Pocock's stateful `teach` skill, Eero Alvar's AI-learning workflow and learning philosophy, the Feynman technique, zone-of-proximal-development thinking, desirable difficulty, retrieval practice, and the teaching style exemplified by explanations that make ideas feel discoverable rather than decreed.

The project intentionally does not clone any one of those systems. It turns the shared ideas into a compact learner-model protocol with a dynamic roadmap and natural interaction layer.

## Status

**v0.1 — complete first usable protocol.** The emphasis is on getting the teaching logic right before building a large UI or learning platform.
