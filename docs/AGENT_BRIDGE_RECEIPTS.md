# Teaching Bridge Receipts

The Visual Learning Workspace does not own learner truth.

A durable learner update requires:

```
learner action
    ↓
agent proposal
    ↓
structured evidence receipt
    ↓
authority acceptance
    ↓
.learning mutation
```

The bridge separates:

- conversation events: reversible UI state
- representation payloads: renderable learning artifacts
- proposals: requested state changes
- receipts: evidence supporting a proposal
- accepted mutations: durable learner state

The client must never directly promote concepts to `stable` or `transferable`.
