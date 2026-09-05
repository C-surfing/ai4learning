# Local runner

`tools/learning.py` is a small standard-library helper for ai4learning's local workspace and v0.2 longitudinal evaluation. It does **not** teach, score learners, infer mastery, or replace the Teach/Study skills.

Its job is to remove bookkeeping friction while preserving the project's privacy and evidence boundaries.

## Initialize learner state

```bash
python tools/learning.py init
```

Creates missing files from `templates/` under `.learning/` plus `records/` and `references/`. Existing learner files are never overwritten.

## Start a real longitudinal arc

```bash
python tools/learning.py start-arc probability bayes-base-rate
```

Available domains:

```text
probability
mathematics
paper-reading
programming-agent
conceptual
```

The command initializes `.learning/` if necessary, then creates a dated directory under `.dogfooding/` containing:

```text
BRIEF.md
ARC.md
README.md
sessions/
└── 001.md
```

The files are copies of the public evaluation templates. Filled learner evidence remains local because `.dogfooding/` is Git-ignored by default.

Working names may contain Unicode, for example:

```bash
python tools/learning.py start-arc probability 贝叶斯直觉
```

## Add the next session

```bash
python tools/learning.py new-session 20260905-probability-bayes-base-rate
```

This creates the next numbered record (`002.md`, `003.md`, ...). Existing evidence is never replaced.

## Inspect local status

```bash
python tools/learning.py status
```

Shows whether `.learning/` exists and lists local arcs with their number of session records. It does not parse or print learner evidence.

## Check repository invariants

```bash
python tools/learning.py doctor
```

Checks that required templates, evaluation contracts, five domain briefs, and the `.learning/` / `.dogfooding/` privacy ignores are present.

## Tests

The runner uses only the Python standard library:

```bash
python -m unittest discover -s tests -p 'test_*.py'
python tools/learning.py doctor
```

GitHub Actions runs both checks on pushes and pull requests.

## Boundary

Keep this tool deliberately boring. New commands should remove repeated operational friction, not move teaching policy into Python. Learner-model inference, cognitive-move selection, roadmap revision, mastery decisions, and representation choice remain responsibilities of the Teach/Study protocol and must continue to be evidence-driven.
