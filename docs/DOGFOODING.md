# Longitudinal Dogfooding Protocol

## Purpose

This document defines how ai4learning improves through real learning sessions. The goal is not benchmark optimization or conversation scoring. The goal is discovering failures in learner modeling and teaching decisions.

## Principle

Optimize:

```
capability_after - capability_before
```

not explanation volume.

## Initial domains

- Probability and statistics: intuition, derivation, transfer.
- Mathematics: misconception diagnosis and model repair.
- Paper reading: claims, assumptions, evidence, limitations.
- Programming and Agent systems: mechanism understanding and debugging.
- Conceptual learning: mental models and causal reasoning.

## Session evidence

Record:

- learner goal;
- current frontier;
- teaching decision;
- evidence produced;
- learner model changes;
- roadmap changes;
- failure patterns.

## Failure categories

Look for:

- excessive diagnosis;
- premature explanation;
- incorrect mastery inference;
- weak misconception diagnosis;
- roadmap rigidity;
- missing prerequisite discovery;
- insufficient transfer checks.

## Iteration rule

Do not add rules to SKILL.md because one conversation was inconvenient. First identify whether the failure belongs to:

1. learner state representation;
2. teaching decision logic;
3. interaction policy;
4. missing capability.

Then modify the smallest appropriate layer.
