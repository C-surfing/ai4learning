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

## Alchemist-Jo — `textbook-anything`

Repository: <https://github.com/Alchemist-Jo/textbook-anything>

`textbook-anything` is a textbook / course-material generation skill rather than a longitudinal learner-model runtime, so ai4learning does not adopt its product surface directly. It is nevertheless a strong reference for two design areas.

### Representations as teaching instruments

Its figure guidance starts from the relation a figure should make easier to understand, keeps labels and geometry semantically meaningful, and treats matrix / tensor shapes, axes, contraction, transposition, and object roles as part of the explanation rather than visual decoration.

This reinforced ai4learning's distinction between:

```text
visual teaching capability — core
visualization automation / renderer / subagent — optional infrastructure
```

The corresponding ai4learning design is documented in [`VISUAL-TEACHING.md`](VISUAL-TEACHING.md).

### Connected exercise progression

Its exercise design reuses one mathematical or technical object while changing an assumption, boundary condition, representation, implementation convention, or special case. Immediate practice checks a local idea; later connected problems test synthesis and transfer.

ai4learning adapts this as a learner-interaction pattern rather than a textbook worksheet format. See [`PRACTICE-PROGRESSION.md`](PRACTICE-PROGRESSION.md).

No `textbook-anything` source code, templates, figures, or assets are copied into this repository. The reference is for design principles and attribution; referenced works retain their own licenses.

## wdkns — `tensor-formula-viz`

Source: <https://github.com/wdkns/wdkns-skills/blob/main/skills/tensor-formula-viz/SKILL.md>

This skill is a focused reference for semantically faithful technical visualization. Particularly useful ideas include:

- establish a shape-and-semantics ledger before rendering;
- choose the smallest visual grammar that exposes the computation;
- treat symbol kind/domain and axis meaning as first-class semantics, not annotations added after the picture;
- preserve geometry invariants when shape, transpose, contraction, split, concat, or partition are part of the claim;
- keep scores, values, indices, masks, and routing objects distinct through the visual pipeline;
- validate mathematical/semantic correctness separately from visual layout correctness.

ai4learning generalizes these ideas into a representation contract that also applies to causal maps, probability representations, Agent/system dataflow, state diagrams, and other teaching representations. It does not adopt the source skill's house style, rendering pipeline, branding, or topic-specific output format.

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
