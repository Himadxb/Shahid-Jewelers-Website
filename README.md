# Shahid Jewelers Website

Premium jewelry storefront built with React + Vite, including product browsing, cart and checkout flow, Firebase authentication, and a live gold-rate experience.

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Routing and Pages](#routing-and-pages)
- [State Management](#state-management)
- [Performance Notes](#performance-notes)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Key Features

- Premium dark + gold UI theme optimized for jewelry brand presentation.
- Home, Shop, About, Contact, Login, Signup, Profile, Cart, and Checkout pages.
- Firebase Auth + Firestore user profile persistence.
- Product cards with animated interactions and add-to-cart feedback.
- Live gold data context integration for pricing display experiences.
- Route-level lazy loading and vendor chunk splitting for faster initial load.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Animations**: Framer Motion, React Spring
- **Icons**: Lucide React
- **Backend Services**: Firebase (Auth, Firestore, Analytics)
- **Styling**: Custom CSS (global variables + component-level styles)
- **Linting**: ESLint 9

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+ (comes with Node.js)
- Firebase project configured for:
  - Authentication
  - Firestore
  - Analytics (optional in local environments)

## Getting Started

### 1) Clone repository

```bash
git clone <your-repo-url>
cd "Shahid-Jewelers-Website RAW"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment

Copy the example file and provide your Firebase values:

```bash
cp .env.example .env
```

If you are on Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### 4) Start development server

```bash
npm run dev
```

Default app URL:

- [http://localhost:5173](http://localhost:5173)

## Environment Variables

All env vars are prefixed with `VITE_` and consumed in `src/firebase.js`.

| Variable | Purpose |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase Analytics measurement ID |

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local Vite development server |
| `npm run build` | Builds production bundle into `dist/` |
| `npm run preview` | Serves built app locally for verification |
| `npm run lint` | Runs ESLint checks |

## Architecture

### Directory Structure

```text
.
├── public/                   # Static assets served as-is
├── src/
│   ├── components/           # Shared UI components
│   ├── context/              # React context providers (Auth, Cart, Gold, Notifications)
│   ├── pages/                # Route-level pages
│   ├── App.jsx               # App shell, providers, route transitions
│   ├── firebase.js           # Firebase initialization
│   ├── index.css             # Global styles
│   └── main.jsx              # React entry point
├── .env.example              # Safe environment template
├── index.html                # HTML template + preload/preconnect hints
├── vite.config.js            # Vite config + chunk splitting
└── package.json              # Scripts and dependency manifest
```

### Request and UI Flow

1. Browser loads `index.html` and `src/main.jsx`.
2. `main.jsx` mounts React app and `App.jsx`.
3. App-level providers initialize auth/cart/gold/notifications state.
4. Router renders route components with animation wrappers.
5. Route components consume contexts and render UI/state transitions.

## Routing and Pages

Configured in `src/App.jsx`:

- `/` → Home
- `/shop` → Shop
- `/live-gold` → Live Gold
- `/about` → About
- `/contact` → Contact
- `/login` → Login
- `/signup` → Signup
- `/profile` → Profile
- `/cart` → Cart
- `/checkout` → Checkout

Unknown paths currently fall back to Home.

## State Management

Context providers in `src/context/`:

- `AuthContext`:
  - Handles Firebase login, signup, logout
  - Hydrates user profile from Firestore
- `CartContext`:
  - Tracks cart items and cart actions
- `GoldContext`:
  - Provides gold-rate related state
- `NotificationContext`:
  - Global toast/notification state

## Performance Notes

Recent improvements in this codebase:

- Route-level lazy loading via `React.lazy` + `Suspense`.
- Vendor bundle splitting in `vite.config.js` for React, animation, and Firebase chunks.
- `index.html` preconnect/dns-prefetch hints for image origin.
- Hero image preload for faster first meaningful paint.
- Product and section images use `loading="lazy"` + `decoding="async"` where appropriate.

Recommended next checks:

```bash
npm run build
npm run preview
```

Then audit with Lighthouse for Core Web Vitals.

## Deployment

### Option A: Static Hosting (recommended)

This app builds to static files, so any static host works:

- Vercel
- Netlify
- Firebase Hosting
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Set all `VITE_FIREBASE_*` environment variables in the hosting provider.

### Option B: Manual deployment

```bash
npm install
npm run build
```

Upload `dist/` contents to your static web server root.

## Troubleshooting

### Build fails with env variable issues

- Ensure `.env` exists in project root.
- Ensure all required `VITE_FIREBASE_*` values are defined.
- Restart dev server after changing `.env`.

### App loads but authentication fails

- Verify Firebase Auth is enabled in Firebase Console.
- Confirm Auth Domain matches `VITE_FIREBASE_AUTH_DOMAIN`.
- Confirm API key belongs to same Firebase project.

### Firestore reads fail

- Check Firestore security rules.
- Confirm project ID matches `VITE_FIREBASE_PROJECT_ID`.

### Analytics errors in local/dev

Analytics can fail in certain local/browser privacy setups. If required, conditionally initialize analytics in `src/firebase.js` only in supported environments.
