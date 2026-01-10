# Kakulus Frontend

Kakulus is a React frontend scaffolded with Vite. It includes an admin area and user-facing components, Tailwind tooling hooks, and several UI/helper components used across the app.

## Tech stack

- React 19
- Vite
- TailwindCSS
- Axios
- Recharts
- react-signature-canvas

## Requirements

- Node.js 18+ (or a recent LTS)
- npm or yarn

## Quick start

Install dependencies:

```bash
npm install
# or
yarn
```

Run development server:

```bash
npm run dev
# or
yarn dev
```

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

Run linter:

```bash
npm run lint
# or
yarn lint
```

## Scripts

- `dev`: start Vite dev server
- `build`: produce optimized production build
- `preview`: serve built output locally
- `lint`: run ESLint across the codebase

## Project structure (important files)

- `index.html` — app HTML entry
- `vite.config.js` — Vite configuration
- `src/main.jsx` — React entry point
- `src/App.jsx` — top-level app component
- `src/index.css` / `src/App.css` — styling

Key folders:

- `src/admin_component/` — admin UI pieces (UserTable, UserModal, KycCharts, ExportCSVButton)
- `src/component/` — user-facing form steps and profile components (KycForm, PersonalInfo, InvestmentInfo, SignaturePad)
- `src/assets/` — images and static assets

## Notes about the codebase

- Routing uses `react-router-dom` and the app mounts from `src/main.jsx`.
- The admin area contains components such as `UserModal.jsx` and `UserTable.jsx` for management workflows.
- Charts rely on `recharts`; forms use controlled React components and a signature capture using `react-signature-canvas`.

## Contributing

1. Create a branch for your change.
2. Follow existing code style and run `npm run lint`.
3. Open a PR with a clear description of changes.

## Further work / TODOs

- Add tests and CI pipeline
- Add documentation for common components and prop contracts
- Add example environment variables and API integration notes

---

If you'd like, I can: add badges, document specific components (like `UserModal.jsx`), or create a shorter README for deployment.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
