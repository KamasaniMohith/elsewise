# ELSEWISE — Agent Engineering Rules

This file defines the engineering rules for AI coding agents working on the ELSEWISE repository.

All coding agents must follow these rules unless a higher-priority project instruction explicitly overrides them.

---

## 1. Project Context

ELSEWISE is a cognitive and knowledge playground designed to make spare minutes mentally meaningful.

The product is built around three primary pillars:

- Challenge
- Discover
- Reset

Read these documents before making significant product or architectural changes:

- `README.md`
- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`

---

## 2. Core Development Principle

Follow:

> Research → Design → Build → Test → Learn → Improve

Do not jump directly from an idea to implementation when the feature requires product, UX, scientific, or architectural decisions.

---

## 3. Before Coding

Before modifying the repository:

1. Understand the task.
2. Read the relevant existing files.
3. Read `docs/PRODUCT.md` when the task affects product behavior.
4. Read `docs/ARCHITECTURE.md` when the task affects architecture.
5. Inspect existing components before creating new ones.
6. Identify the smallest reasonable implementation.

Do not modify unrelated files.

---

## 4. Product Rules

Agents must not independently change major product decisions.

Do not introduce or change:

- Core product pillars
- Product positioning
- Major navigation structure
- Monetization strategy
- Authentication architecture
- Database architecture
- Community architecture
- AI architecture
- Scientific/cognitive claims

without explicit approval.

---

## 5. Architecture Rules

Prefer:

- Simple solutions
- Modular components
- Reusable abstractions
- Clear separation of concerns
- Minimal dependencies
- Existing project patterns

Avoid:

- Premature abstraction
- Unnecessary libraries
- Duplicate functionality
- Over-engineering
- Building infrastructure before it is required

Do not introduce a new dependency when the requirement can reasonably be solved with the existing stack.

---

## 6. Technology Stack

Current foundation:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Git
- GitHub

Use the existing stack unless there is an approved reason to change it.

---

## 7. UI and Design

When implementing UI:

- Follow the approved design system.
- Reuse components where appropriate.
- Maintain visual consistency.
- Prefer accessible HTML and interactions.
- Support responsive layouts.
- Avoid introducing arbitrary visual patterns that conflict with the approved design.

If an implementation conflicts with the accepted design, stop and flag the conflict rather than silently changing the design direction.

---

## 8. Game Architecture

Cognitive experiences should be modular.

A game should ideally be separable from the application shell and should have clearly defined:

- Metadata
- Instructions
- Start state
- Playing state
- Result state
- Restart/replay behavior
- Scoring or outcome logic where applicable

Do not tightly couple an individual game to unrelated application features.

---

## 9. Scientific and Evidence Rules

ELSEWISE should distinguish between:

1. Performance on a specific task.
2. Improvement through practice on similar tasks.
3. Broader claims about cognition or real-world ability.

Do not make unsupported claims such as:

- "This game increases IQ."
- "This permanently makes you smarter."
- "This prevents cognitive decline."
- "This treats anxiety, depression, ADHD, or another medical condition."

When implementing evidence-related content, preserve appropriate uncertainty and limitations.

---

## 10. Privacy and Security

Never commit:

- API keys
- Passwords
- Access tokens
- Private credentials
- `.env` secrets
- Personal sensitive data

Use environment variables where secrets are required.

Never disable security mechanisms merely to make development easier.

---

## 11. Dependencies

Before adding a dependency:

1. Check whether the functionality already exists in the project.
2. Check whether it can reasonably be implemented with the existing stack.
3. Consider maintenance and bundle-size impact.
4. Add the dependency only when justified.

Do not add dependencies merely for convenience.

---

## 12. Git Rules

Work should normally be performed on a feature branch rather than directly on `main`.

Use descriptive branch names such as:

```text
feat/app-shell
feat/game-architecture
feat/game-01
feat/progress-system
fix/navigation
refactor/game-engine