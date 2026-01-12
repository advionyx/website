# Advionyx – Vite + React + Tailwind (JSX)

This is a single-page site (About/Hero → What you get (sticky scroll) → Services → Contact) built with **Vite + React** and **Tailwind CSS**.

## Run locally

1. **Unzip** the project
2. Open a terminal in the project folder
3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Where to edit content

- `src/content/siteContent.js` – about text, services, and email
- `src/components/*` – layout and sections

## Notes

- The sticky “What you get” scroll transition is in `src/components/WhatYouGet.jsx`.
- The right-side "Menu" panel is in `src/components/SidePanel.jsx`.
- The site-wide gradient is defined in `src/styles.css` (`.bg-site` + `.film-overlay`).
