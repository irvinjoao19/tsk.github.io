# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static website for **Tito Santur King Construction LLC** — a log & country home remodeling contractor in Totowa, NJ. No build tools, no dependencies, no backend. Everything lives in `index.html`.

## Previewing the site

Must be served (not opened as a file) so the browser loads `css/` and `js/`:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Structure

```
tsk/
├── index.html        ← markup only
├── css/styles.css    ← all styles
├── js/main.js        ← all behaviour
├── images/           ← add real photos here (see comments in index.html)
├── logo-mark.svg
└── logo-horizontal.svg
```

No build tools or preprocessors — plain HTML/CSS/JS.

## Key patterns

- **Bilingual (EN/ES):** Every user-facing string needs both `data-en` and `data-es` attributes. `setLang()` in `js/main.js` swaps `innerHTML` of all `[data-en]` elements on click.
- **Images:** Placeholders use `picsum.photos` with `filter: grayscale(1)` in `.ph`. Real images go in `images/`; swap each URL and remove the filter. Expected filenames are in comments inside `index.html`.
- **Contact form:** `action="https://formspree.io/f/YOUR_FORM_ID"` — replace `YOUR_FORM_ID` with the real Formspree ID before deploying.
- **Phone/WhatsApp:** Placeholder `(973) 000-0000` / `19730000000` — search for `9730000000` to find all occurrences.
- **Navbar:** Uses `display:grid; grid-template-columns:1fr auto 1fr` so the brand sits left, links are truly centered, and actions sit right. Collapses to hamburger at 860 px (`.nav-links.open` toggled by `js/main.js`).
- **Scroll reveal:** `.reveal` elements animate in via `IntersectionObserver` → adds class `in`.
- **Sticky header:** Gains class `solid` after scrolling past 70 % of viewport height.

## Deployment

Upload `index.html`, `css/`, `js/`, and `images/` to any static host (GitHub Pages, Netlify, Vercel). No build step needed.
