# Visual Learning Workspace

This is the first product surface for ai4learning. It is intentionally a **read-first, local-first workspace** over the existing teaching runtime.

## Run

From `apps/workspace/`:

```bash
npm install
npm run dev
```

Open the local Next.js URL printed by the dev server.

If the repository contains `.learning/`, the workspace reads the current mission, roadmap, frontier, evidence, misconceptions, and review candidates. It also reads only arc/session metadata from `.dogfooding/` for the session rail.

If no local learner state exists, the UI shows a clearly labeled Bayes demo snapshot so the product shell can be reviewed without fabricating learner evidence.

## Current scope

Implemented:

- three-column desktop workspace;
- responsive tablet/mobile collapse;
- Teach / Study / Map / Review mode navigation;
- React Flow learning map;
- current learner frontier and state;
- evidence ladder;
- active misconception and review cards;
- representation switcher;
- longitudinal session timeline;
- local `.learning/` filesystem adapter;
- demo fallback for design review.

Not implemented yet:

- model/provider connection;
- chat transport;
- authoritative writes to `.learning/`;
- source drawer content;
- full-screen interactive Map editor;
- structured math/diagram renderer payloads;
- scheduler or cloud persistence.

The disabled composer text is deliberate. Do not fake a working tutor by adding a client-only chat loop that cannot respect the Teach/Study protocol or evidence-backed learner-state updates.

## Architecture boundary

```text
Teach / Study runtime
      ↓
evidence-backed state
      ↓
.learning/
      ↓
workspace filesystem adapter
      ↓
Visual Learning Workspace
```

The next slice should add an authority-aware local write/agent bridge, not move teaching policy into React components.

See [`../../docs/VISUAL-WORKSPACE.md`](../../docs/VISUAL-WORKSPACE.md) for the product specification.
