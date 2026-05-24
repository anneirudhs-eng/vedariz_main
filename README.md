# Vedariz Website

React/Vite single-page website for Vedariz, configured for Firebase Hosting.

Read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) before making structural, build, hosting, or AI-assisted changes.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production website is generated into `dist/`.

## Firebase Hosting

Firebase Hosting is configured in `firebase.json` to serve `dist/` and rewrite all routes to `index.html`.

GitHub Actions are configured to build and deploy automatically:

- Pushes to `main` deploy to the live Firebase Hosting channel.
- Pull requests create Firebase Hosting previews.

Required GitHub Actions secret:

```text
FIREBASE_SERVICE_ACCOUNT_VEDARIZ_WEBSITE
```

For a Firebase Console upload of the already-built site, the minimum required files are:

```text
dist/
firebase.json
.firebaserc
```
