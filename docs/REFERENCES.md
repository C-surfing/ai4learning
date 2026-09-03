# References and inspirations

This project synthesizes several compatible ideas into one lightweight adaptive teaching protocol.

## Matt Pocock — `teach` skill

Source: <https://github.com/mattpocock/skills/tree/main/skills/productivity/teach>

Important ideas carried forward:

- stateful teaching across sessions;
- mission grounding;
- zone of proximal development;
- high-quality source grounding;
- distinction between fluency and storage strength;
- retrieval practice, spacing, and interleaving;
- compressed reference artifacts.

`ai4learning` changes the center of gravity from lesson artifact generation toward learner-state estimation, dynamic roadmaps, natural dialogue, and teaching-move selection.

## Eero Alvar — AI learning workflow / philosophy

Repository: <https://github.com/amosblomqvist/learn>

Video discussed during the design of this project: <https://youtu.be/kzcI5F4tGiU>

Important ideas carried forward:

- one learner / one adaptive teaching interface over many sources;
- reduce logistical difficulty while preserving intellectual struggle;
- Probe → Plan → Teach as an internal control shape;
- explicit dependency structure rather than arbitrary exposition;
- motivated discovery: how could the learner have discovered this?;
- teaching at the edge of understanding.

`ai4learning` intentionally relaxes rigid phase exposure: the control loop remains internal while the interaction remains conversational.

## Feynman technique

The common "explain it in simple words" version is treated here as insufficient. The useful mechanism is reconstructive explanation that reveals gaps in the learner's generative model.

The protocol therefore treats teach-back as model debugging: detect unexplained jumps, hidden jargon, circular explanations, contradictions, missing mechanisms, and inability to transfer.

## Zone of proximal development

The protocol uses a pragmatic ZPD-inspired notion of a learner frontier: material should be selected near the boundary of what the learner can independently use, with scaffolding calibrated to move that boundary.

It does not attempt to turn ZPD into a precise numeric metric.

## Desirable difficulty and retrieval practice

Study mode distinguishes immediate fluency from durable knowledge. It uses effortful retrieval, delayed re-checking, interleaving, and transfer where appropriate, while preserving the principle that difficulty belongs in the cognitive task rather than in unnecessary logistics.

## Dependency-first explanatory style

The project takes inspiration from mathematical and technical teaching where results are motivated and derived rather than merely announced. 3Blue1Brown is an important stylistic reference for the felt property that a result can become "inevitable" after the right sequence of motivated representations and questions.

## Project synthesis

The project does not claim that one named learning theory uniquely justifies the whole design. Its engineering position is simpler:

```text
maintain a learner model
maintain a revisable knowledge map
choose the next teaching move from evidence
make the learner perform valuable cognition
verify through increasingly independent use
persist only state that helps future decisions
```

The repository should evolve when real use exposes failures in these assumptions.
