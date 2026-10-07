# Elsewise — Architecture

## Version

v0.0

## 1. Architecture Goal

Elsewise v0.0 should provide a simple, maintainable foundation for building short cognitive, discovery, and reset experiences.

The architecture should avoid unnecessary infrastructure until the product requires it.

---

## 2. Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Data

v0.0 uses browser-local storage for basic session/progress data.

No external database is required for the initial version.

### Backend

No dedicated backend service is required for v0.0.

Backend functionality will be introduced when product requirements justify it.

### Deployment

Vercel is the initial deployment target.

### Version Control

Git and GitHub.

---

## 3. Initial Application Structure

The application will contain three primary product areas:

### Challenge

Short activities requiring active thinking.

### Discover

Short experiences designed to encourage curiosity and learning.

### Reset

Short experiences intended to provide a mental pause or reset.

---

## 4. Data Strategy

v0.0 will use local browser storage for basic non-sensitive session information.

The application should be designed so that persistence can later be moved to a server/database without rewriting the core experience logic.

---

## 5. Authentication

Authentication is intentionally excluded from v0.0.

The initial experience should be usable without creating an account.

---

## 6. Database

A database is intentionally excluded from v0.0.

A persistent backend can be introduced in a later version when features such as accounts, synchronization, community functionality, or cross-device progress require it.

---

## 7. Architecture Principles

### Simple first

Do not introduce infrastructure without a concrete requirement.

### Modular experiences

Each cognitive or discovery experience should be implemented as an independent module/component where practical.

### Evidence-aware

Cognitive-related claims should be separated from the implementation of the activity itself.

### Privacy-conscious

Avoid collecting user information unless it is necessary.

### Replaceable persistence

Local storage should not become tightly coupled to application logic.

### Progressive architecture

The architecture should evolve as product requirements become clearer rather than attempting to solve every future problem in v0.0.

---

## 8. Planned Evolution

Future versions may introduce:

- User accounts
- Cloud database
- Cross-device synchronization
- Community features
- Analytics
- Personalized recommendations
- Additional cognitive experiences
- Evidence/research cards
- AI-assisted discovery

These are intentionally outside the v0.0 scope.