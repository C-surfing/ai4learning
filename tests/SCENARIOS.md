# Behavioral acceptance scenarios

These scenarios are not benchmark puzzles. They are product-level tests for whether the teaching protocol behaves like the intended system rather than a generic chatbot.

A future automated evaluator can turn these into scripted conversations, but the first version treats them as review cases.

## 1. Narrow question must not trigger a diagnostic interview

**User**

```text
Why is dx a covector rather than a vector?
```

**Expected behavior**

- Gives enough orientation to place the issue in the vector/covector distinction.
- Uses at most a small discriminative probe if needed.
- Does not start with five prerequisite questions.
- Makes the functional behavior of `dx` central: it consumes a tangent vector and returns a scalar.
- Does not prematurely drown the learner in tensor notation.

**Failure mode**: "Before we begin, answer these 10 questions so I can assess your level."

## 2. Correct answer is not instant mastery

**Context**: learner has just seen Bayes' formula.

**User** correctly solves one nearly identical problem.

**Expected behavior**

- Treats it as useful evidence, not proof of stable mastery.
- Moves toward explanation, variation, delayed recall, or transfer.
- Does not mark the roadmap node `◆ transferable` from one immediate success.

## 3. Wrong answer should trigger model diagnosis

**User**

```text
A positive test that is 99% accurate means I have a 99% chance of the disease.
```

**Expected behavior**

- Looks for confusion between `P(positive | disease)` and `P(disease | positive)` plus neglect of base rate.
- Uses a small population/frequency representation or discriminative question to repair the model.
- Does not merely say "incorrect, use Bayes' theorem."

## 4. Do not steal discovery

**User** is deriving the derivative of `x^2` from first principles and has reached:

```text
((x+h)^2 - x^2) / h
```

**Expected behavior**

- If the learner can plausibly simplify it, asks/pushes for that next move instead of immediately giving the full derivation.
- Provides a hint if needed.
- Reveals more only as evidence shows the learner is stuck.

## 5. Do not force fake discovery

**User** asks why the term "eigenvector" is called that.

**Expected behavior**

- Explains the historical/linguistic fact directly or verifies a source if uncertain.
- Does not make the learner guess an obscure German etymology.

## 6. Global map without overload

**User**

```text
Teach me reinforcement learning. I know basic probability and Python.
```

**Expected behavior**

- Establishes or infers the mission.
- Shows a compact structural roadmap rather than a giant field taxonomy.
- Locates a reasonable first frontier.
- Keeps advanced branches visible as future structure without teaching them all now.

## 7. Roadmap must revise

**Context**: roadmap assumes matrix multiplication is stable.

During an explanation of attention, learner repeatedly confuses matrix shapes and linear maps.

**Expected behavior**

- Reopens the prerequisite rather than continuing blindly.
- Changes the route/roadmap to include a small matrix/linear-map repair.
- Records why the detour is mission-relevant.

## 8. Feynman is model debugging, not paraphrase ritual

**User explains**

```text
Gradient descent works because the gradient points downhill, so we subtract it.
```

**Expected behavior**

- Identifies the hidden issue: gradient is defined as steepest increase under a chosen inner product / Euclidean structure, and local linear approximation is what motivates the step.
- Chooses one gap appropriate to learner level.
- Challenges with a prediction or asks what the gradient says about a small displacement.
- Does not just ask them to "say it more simply."

## 9. Study mode retrieves before reteaching

**User**

```text
Review conditional probability with me.
```

**Expected behavior**

- Begins with retrieval/application rather than a fresh lecture.
- Gives cues only after observing difficulty.
- Repairs only the part that failed.

## 10. Productive struggle should be in the idea

**User** is learning a proof but is spending effort deciphering unexplained notation.

**Expected behavior**

- Removes notation friction immediately.
- Preserves the central proof inference for the learner to perform.
- Does not equate confusion with desirable difficulty.

## 11. Example must have instructional purpose

**Context**: learner understands one normal distribution example.

**Expected behavior**

- A second example should expose a new boundary, contrast, or transfer condition.
- Does not generate five near-identical examples merely to appear thorough.

## 12. Terminology after intuition when useful

**User** has never encountered closures in programming.

**Expected behavior**

- Can first create the need: a returned function still needs access to variables from the environment where it was created.
- Lets learner inspect/predict the behavior.
- Introduces "closure" as the handle for the mechanism.

## 13. Formalism must eventually become formal

**Context**: learner has an intuitive picture of a random variable.

**Expected behavior**

- Does not remain forever at analogy level.
- When learner's mission requires rigor, moves to a formal definition and relates it back to the intuition.
- Clearly marks which statements are intuition and which are definitions/theorems.

## 14. Source grounding must not become logistics

**User** asks about a current API or recent research claim.

**Expected behavior**

- Verifies with authoritative/current sources.
- Teaches the result in coherent form.
- Provides relevant links/citations when useful.
- Does not hand the learner a pile of links and outsource synthesis.

## 15. Learner state must not become a transcript

After a session, `STATE.md` should contain changes such as:

```text
current frontier: Bayes denominator / total probability
misconception: conflates sensitivity with posterior probability — repaired
recent evidence: application success; transfer untested
next move: novel base-rate case without formula cue
```

It should **not** contain a chronological paraphrase of every message.

## 16. Teaching should adapt as learner improves

Across several sessions the learner moves from guided examples to independent use.

**Expected behavior**

- Scaffolding recedes.
- Explanations become shorter when the learner can reconstruct missing steps.
- Tasks become more transfer-oriented.
- The agent does not preserve the verbosity/settings appropriate for the beginner state.

## 17. Direct answer remains allowed

**User**

```text
Quickly remind me what a covariance matrix is; I'm in the middle of solving something.
```

**Expected behavior**

- Gives a compact useful answer immediately.
- Does not hijack the task into a lesson.
- Can optionally connect it to existing state without demanding a probe.

## 18. Mission changes should change teaching priorities

**Context**: learner originally studied statistics for conceptual understanding; now states they have an exam in two weeks.

**Expected behavior**

- Confirms/records the changed mission or constraint.
- Rebalances roadmap priorities and study mode toward exam-relevant retrieval/application.
- Does not discard conceptual understanding, but does not pretend priorities are unchanged.

## Review rubric

For each scenario, inspect whether the agent demonstrates:

| Dimension | Question |
|---|---|
| State awareness | Did it use evidence about this learner rather than generic defaults? |
| Frontier targeting | Was the move near the learner's actual edge? |
| Cognitive agency | Did the learner perform the important inferential work when appropriate? |
| Motivation | Did non-obvious ideas have a reason to appear? |
| Diagnostic value | Did questions change possible next actions? |
| Model repair | Did feedback target the generative misunderstanding? |
| Evidence discipline | Did it avoid overclaiming mastery? |
| Structural orientation | Did the learner know where the idea fits? |
| Natural interaction | Did the tutoring machinery remain unobtrusive? |
| Taste | Did the interaction feel precise, economical, and intellectually alive? |
