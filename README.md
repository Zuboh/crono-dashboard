# Crono Dashboard

A responsive React implementation of Crono's frontend take-home assignment, built from the provided [Figma design](https://www.figma.com/design/9stjTEFTCNpLiHePX2GYOk/Crono-dashboard---test-task?node-id=0-1&p=f&t=S2otFApGVSzl9t3G-0).

The project recreates the static sales dashboard and implements the required Signals interaction through an Axios client backed by a local mock HTTP API.

## Assignment coverage

- Dashboard layout matching the supplied desktop design, with responsive tablet and mobile fallbacks.
- Sidebar, welcome, replies, daily tasks, performance, signals, and onboarding sections.
- Action menu for every signal with keyboard-accessible **Complete** and **Delete** options.
- Unread counter that updates when an unread signal is completed or deleted.
- Loading, error, empty, and read states for the Signals list.
- Reusable UI primitives and design tokens for the shared visual language.

Only the Signals list is functional, as required by the brief. The other dashboard controls are presentational.

## Tech stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Radix UI Dropdown Menu
- Lucide React
- Axios and Mock Service Worker
- Vitest
- ESLint and Prettier

## Getting started

Prerequisites: Node.js and npm.

```bash
git clone https://github.com/Zuboh/crono-dashboard.git
cd crono-dashboard
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Available scripts

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Vite development server        |
| `npm run build`        | Type-check and create a production build |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format the repository with Prettier      |
| `npm run format:check` | Check formatting without modifying files |
| `npm test`             | Run the Signals API contract test        |

## Signals behavior

Signal records are seeded from `signals.data.json` and exposed through an MSW-backed `/api/signals` HTTP API that simulates network latency. Set `VITE_API_URL` to use a real backend instead.

- **Complete** marks the selected signal as read and leaves it in the list.
- **Delete** removes the selected signal from the list.
- Acting on an unread signal decreases the unread counter.
- API failures are surfaced as an alert in the Signals panel.

The mock API runs when `VITE_API_URL` is absent. Its store is kept in memory, so refreshing the page restores the original JSON data.

## Architecture

```text
src/
├── app/                 # Application composition and global styles
├── pages/               # Page-level screens and page-owned UI
├── widgets/             # Standalone layout blocks such as the sidebar
├── features/            # Business features: API, model, UI, and assets
└── shared/              # Cross-slice UI primitives and shared assets
```

Code stays with its narrowest owner:

- `DashboardPage` composes the screen without owning feature state.
- The Signals feature owns its types, JSON seed, mock API, hook, and UI.
- Dashboard-only cards live beside the dashboard page.
- The sidebar is a self-contained widget with its own model, UI, and assets.
- Shared visual primitives such as `Card`, `Avatar`, and `Tooltip` live in `shared/ui`.
- Page, widget, and feature roots expose their public entrypoints; internal and shared imports remain direct.
- The `@/` alias resolves to `src/` so cross-slice imports do not depend on folder depth.

The Signals feature is split by responsibility into `api`, `model`, and `ui` segments. Its data flow remains intentionally small:

```text
signals.data.json → MSW handlers → Axios API → useSignals → SignalsPanel
```

## Implementation decisions

- **Feature-scoped state:** signal state is owned by `useSignals`; no global state or server-cache library is needed for this single-screen assignment.
- **Replaceable data boundary:** UI components call the Axios API rather than importing JSON directly, so setting `VITE_API_URL` swaps in a real backend without changing the presentation layer.
- **Accessible action menu:** Radix UI provides focus management and keyboard navigation for the required menu interaction.
- **Design fidelity:** Tailwind theme tokens centralize repeated colors while one-off Figma values remain local to the element that uses them.
- **Icon ownership:** themeable, single-color icons are React components; fixed-color decorative artwork remains imported SVG assets.

## Verification

Run the complete local quality check with:

```bash
npm run build
npm run lint
npm run format:check
npm test
```

The primary interaction can be checked by opening any signal's **Action** menu: completing it keeps the row and clears its unread state, while deleting it removes the row. In both cases, an unread signal reduces the counter by one.

## Scope and limitations

This is a frontend assessment implementation, not a production-connected Crono environment:

- No real backend, authentication, routing, analytics, or persistent storage is included.
- Signal mutations reset on page refresh.
- Sidebar destinations and dashboard actions outside Signals do not navigate or mutate data.
- The supplied Figma screen is the source of truth for visual behavior.
