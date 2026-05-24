# Vedariz Website Project Context

## Purpose

This repository contains the Vedariz marketing website. It is a React single-page application built with Vite, styled with Tailwind CSS, and prepared for Firebase Hosting.

The live website build is generated into `dist/`. Firebase Hosting is configured to serve that folder.

## Current Status

- Framework: React 18 with Vite.
- Routing: React Router with Firebase rewrite support for SPA routes.
- Styling: Tailwind CSS plus shadcn-style UI components.
- Backend integration: Base44 SDK is used by the contact form.
- Hosting target: Firebase Hosting.
- Build output: `dist/`.

The project structure is valid for a Vite/Firebase app. Large local folders such as `node_modules`, `.npm-cache`, `.git`, and `dist` are not source code.

## Requirements

Use these requirements when another AI or developer resumes work:

- Keep the app as a Vite React single-page application.
- Keep Firebase Hosting configured to serve `dist`.
- Keep `firebase.json` at the repository root.
- Keep `index.html`, `vite.config.js`, `package.json`, `package-lock.json`, Tailwind config, and PostCSS config at the repository root.
- Keep app source files under `src`.
- Keep Base44 schema/config files under `base44`.
- Do not commit `node_modules`, `.npm-cache`, `.firebase`, or generated build/cache folders.
- Preserve the `@/*` import alias, which maps to `src/*`.
- Preserve the Firebase rewrite to `/index.html` so direct visits to `/about`, `/services`, `/applications`, and `/contact` work.
- The contact form depends on the Base44 backend/entity configuration.

## Project Structure

```text
.
├── base44/
│   ├── config.jsonc
│   └── entities/
│       └── ContactSubmission.jsonc
├── dist/
│   ├── index.html
│   └── assets/
├── src/
│   ├── api/
│   │   └── base44Client.js
│   ├── components/
│   │   ├── home/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .firebaserc
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

## Important Files

- `src/main.jsx`: React entry point.
- `src/App.jsx`: app providers and routes.
- `src/components/Layout.jsx`: shared page layout.
- `src/components/Navbar.jsx`: main navigation.
- `src/components/Footer.jsx`: site footer.
- `src/pages/Home.jsx`: homepage.
- `src/pages/About.jsx`: about page.
- `src/pages/Services.jsx`: services page.
- `src/pages/Applications.jsx`: applications page.
- `src/pages/Contact.jsx`: contact page and Base44 form submission.
- `src/api/base44Client.js`: Base44 SDK client.
- `src/lib/app-params.js`: Base44 runtime parameters.
- `base44/entities/ContactSubmission.jsonc`: contact form entity schema.
- `firebase.json`: Firebase Hosting configuration.

## Build And Run

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Firebase Hosting

Firebase serves the `dist` folder:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

For Firebase Console upload, the minimum website files are:

```text
dist/
firebase.json
.firebaserc
```

For source-code maintenance, keep the full source project without generated dependency/cache folders.

## GitHub Actions Deployment

This repository is prepared for Firebase Hosting deployments from GitHub:

- `.github/workflows/firebase-hosting-merge.yml` deploys to the live Firebase Hosting channel when changes are pushed to `main`.
- `.github/workflows/firebase-hosting-pull-request.yml` creates Firebase preview channels for pull requests.

Required GitHub repository secret:

```text
FIREBASE_SERVICE_ACCOUNT_VEDARIZ_WEBSITE
```

This secret should contain the Firebase service account JSON created by Firebase Hosting's GitHub integration or by the Firebase CLI.

Optional GitHub repository variables for Base44:

```text
VITE_BASE44_APP_ID
VITE_BASE44_APP_BASE_URL
VITE_BASE44_FUNCTIONS_VERSION
```

Configure these under GitHub repository settings:

```text
Settings -> Secrets and variables -> Actions
```

Use `Secrets` for private credentials and `Variables` for non-secret Vite build values.

## Environment Variables

The Base44 integration can use these Vite environment variables:

```text
VITE_BASE44_APP_ID=
VITE_BASE44_APP_BASE_URL=
VITE_BASE44_FUNCTIONS_VERSION=
```

If these are missing, the static pages may still build, but Base44-powered features such as the contact form may not work correctly in production.

## Generated Or Disposable Folders

These folders are not source code:

- `node_modules/`: installed npm dependencies. Recreate with `npm install`.
- `.npm-cache/`: npm cache. Safe to delete.
- `dist/`: generated production build. Recreate with `npm run build`.
- `.firebase/`: Firebase CLI cache. Safe to delete.
- `.vite/`: Vite cache. Safe to delete.

## Deployment Checklist

1. Confirm any required Base44 environment variables are configured.
2. Run `npm install` if dependencies are missing.
3. Run `npm run build`.
4. Confirm `dist/index.html` and `dist/assets/*` exist.
5. Deploy `dist` through Firebase Hosting.
6. Test direct routes after deploy: `/`, `/about`, `/services`, `/applications`, `/contact`.
7. Test the contact form after deploy because it depends on Base44.

When deploying through GitHub Actions, pushing to `main` replaces steps 2-5 because the workflow runs `npm ci`, `npm run build`, and Firebase Hosting deploy automatically.

## Notes For Future AI Assistants

- Do not move root config files into another folder unless the Vite/Firebase configs are updated at the same time.
- Do not remove the SPA rewrite from `firebase.json`.
- Prefer small, scoped changes. This is a marketing site, so visual regressions matter.
- Keep documentation in English so future AI tools preserve project context.
- Avoid adding heavy new libraries unless the feature clearly requires them.
- Before changing build or deployment behavior, run `npm run build`.
