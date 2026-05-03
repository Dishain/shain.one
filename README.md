# shain.one

Personal site for Dmytro Shain - product design, portfolio, blog.

Static HTML, no build step. Custom domain via GitHub Pages.

## Structure

- `index.html` - home page
- `case/*.html` - 13 portfolio case pages
- `blog/index.html` + `blog/<slug>.html` - blog
- `shainbox.html` - ShainBox product landing
- `assets/` - shared CSS, JS, i18n bags, images
- `CNAME` - GitHub Pages custom domain config

## Local preview

Open `index.html` directly in Chrome via `file://` - the site has no
runtime dependencies beyond CDN-hosted Google Fonts.

## Theming

- Theme: dark (default) / light. Toggle in top-right nav. Auto-detects
  via `prefers-color-scheme` on first visit. Choice persists in
  `localStorage`.
- Accent: yellow in dark, orange in light (yellow fails contrast on
  light backgrounds).

## Languages

- English (default) and Ukrainian. Toggle in nav. Auto-detects from
  `navigator.language` on first visit.
- i18n bags: `assets/i18n.shell.js` (shared), `assets/i18n.home.js`
  (homepage), `assets/i18n.dark-patterns.js` (article-specific).

## Deploy

Push to `main` - GitHub Pages serves from repo root.
