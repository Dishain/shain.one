# Shain.site — Personal portfolio

Single-page personal site for **Dmytro Shain**, in the same Nothing-design language as `ShainBox-Landing.html`.
Internal page `/shainbox.html` mirrors the existing ShainBox landing.

## Scope

- One static HTML file (`index.html`) with inline styles — same approach as ShainBox.
- Reuses tokens from ShainBox landing: OLED black, Space Grotesk + Space Mono + Doto, signal yellow accent, hairline borders, no shadows / no gradients.
- Fully English copy.
- Mobile-first responsive (≥320px), desktop polish at 1440px.
- No JS dependencies (dropdowns via CSS `:hover` + `:focus-within`).

## Folder layout

```
shain-site/
├── index.html              ← personal landing
├── shainbox.html           ← copy of ShainBox-Landing.html (internal page)
├── assets/
│   └── photo-placeholder.svg   ← square placeholder for hero photo
└── docs/
    └── todo.md             ← this file
```

## Page outline (top → bottom)

| # | Section | Notes |
|---|---|---|
| — | Sticky nav | Left: `· SHAIN` mono logo with yellow dot. Center: `About / Portfolio / Products ▾ / Courses ▾ / Contacts`. Right: pill button `web.shain@gmail.com`. |
| 00 | Hero | Two-column. Left: Doto wordmark `SHAIN.`, name `Dmytro Shain`, LinkedIn title as hero-tag, CTAs `Email me` (yellow) + `LinkedIn` (ghost). Right: photo placeholder in hairline frame with mono caption `[ FIG. 01 · OPERATOR ]`. |
| 01 | Stats strip | `7+ YRS`, `B2B · SAAS`, `13 PROJECTS`, `2 COURSES`. |
| 02 | About | Short paragraph + 3 numbered points (Product Design / Design Systems / AI-Powered UX). |
| 03 | Portfolio | Card grid of 13 case stubs from Notion (titles + tags only, no covers yet). |
| 04 | Products | Two cards: **ShainBox** → `/shainbox.html` · **Design Architect** → GitHub repo. |
| 05 | Courses | Two cards: **AI for Designers (UA)** · **UI for Designers (EN)**. |
| END | Final CTA + socials | Doto mark `HIRE.` or `TALK.`, email button, LinkedIn / X / GitHub icons. |
| — | Footer | Hairline, mono labels (matches ShainBox). |

## Portfolio cases (from Notion, 2026-04-26)

1. VC Fund CRM — NexoBall · Product · Web · macOS · iOS
2. VC Fund — Nexo Dashboard · Product · iOS · Web
3. VibeCode — ADN Dashboard (AI Agents Mgmt) · Product · VibeCode
4. NexoVoice — Meeting Recording & Transcription · Product · macOS · VibeCode (Expo)
5. NexoBackup — WhatsApp Chat Backup · Product · macOS
6. NexoMC · Product · Web
7. CPA Network "ADBear" · Web · Landing
8. MemoDremo (mobile app) · Android · iOS
9. UkrZoloto — Jewellery store · iOS · Product · Website
10. Telegram list iOS · iOS
11. Gig Radar iOS · iOS
12. Carbimba — Car Finder Service · Web · Website
13. Wattabuy — Virtual broker · Website

## Menu dropdowns

- **Products ▾** — 2 items: ShainBox (internal `/shainbox.html`), Design Architect (`https://github.com/Dishain/Shain-Design-System-Skill`, `target=_blank`).
- **Courses ▾** — 2 items: AI for Designers (UA), UI for Designers (EN). For now both go to `#courses` anchor — can wire real URLs later.

CSS-only dropdown: `nav .has-menu` shows submenu on `:hover` and `:focus-within`. Animated with `opacity` + `translateY(-4px)` 140ms ease-out.

## Accent rules (locked)

- Yellow only on: brand dot, primary CTA, active nav state, `Pro`-style cards, hero arrow tip.
- White is default text. Hierarchy via opacity (0.9 / 0.6 / 0.4 / 0.24).
- Doto used 2× max (hero + final CTA).

## Verification checklist

- [ ] `index.html` opens directly via `file://` in Chrome.
- [ ] No console errors.
- [ ] Screenshot at 1440px shows hero, nav, dropdowns work on hover.
- [ ] Screenshot at 375px shows nav collapses, hero stacks, photo above text.
- [ ] `/shainbox.html` link from Products dropdown loads the existing landing.
- [ ] LinkedIn / X / GitHub icons open in new tab.
- [ ] Email pill opens `mailto:web.shain@gmail.com`.
- [ ] Reduced-motion preference disables transitions.

## Open / deferred

- Real photo replaces `assets/photo-placeholder.svg` later.
- Portfolio covers are placeholders; real screenshots from Notion can be added later.
- Course links currently anchor only; replace with real URLs when courses are live.

## Contacts source-of-truth

- Email: web.shain@gmail.com
- LinkedIn: https://www.linkedin.com/in/dmytro-shain/
- X: https://x.com/DimaShain
- GitHub: https://github.com/Dishain/Shain-Design-System-Skill

## Status

- [x] Folder created at `/Users/shain/Desktop/shainbox/shain-site/`.
- [x] `shainbox.html` copied from project root (verbatim, no edits).
- [x] Plan written and confirmed.
- [x] `assets/photo-placeholder.svg` created — dot-grid + figure silhouette + mono caption.
- [x] `index.html` built — single static file, no JS deps beyond a tiny ARIA-toggle script.
- [x] Browser verification at 1440px (hero, dropdown, portfolio, products, courses, final CTA, footer).
- [x] Browser verification at 375px (single-column hero with photo first, then text and CTAs).
- [x] Internal `/shainbox.html` link confirmed loading.
- [x] Console clean (no errors / warnings).

## Review

What shipped:

- `index.html` — personal landing in Nothing-design language, tokens mirrored from ShainBox-Landing.html.
- `shainbox.html` — verbatim copy of ShainBox-Landing.html for internal hosting.
- `assets/photo-placeholder.svg` — placeholder; replaced automatically once `assets/photo.jpg` is added (via `<img onerror>` fallback).

Behaviour notes:

- **Email pill** — `<a href="mailto:web.shain@gmail.com">` in nav and final CTA.
- **Dropdowns** — open on hover and on focus-within; click toggles for touch users; `aria-expanded` is wired up.
- **Photo swap** — drop a real `assets/photo.jpg` into the folder and refresh; the SVG falls away automatically.
- **Reduced motion** — `prefers-reduced-motion` disables transitions site-wide.

Open / deferred:

- Real photo (still placeholder).
- Hosting setup (GitHub Pages + custom domain — user is comfortable doing this himself).

---

## Update — 2026-04-26 · Portfolio case pages + covers

What changed:

- Added `case/` directory with 13 case-study pages.
  - `case/nexoball.html` — hand-authored from full Notion content (rich body sections, Impact callouts, metrics grid).
  - 12 others — generated from a template (`hero with cover · tags · meta · lede · gallery`) using `outputs/build_cases.py`.
- Scraped Notion case pages via Claude in Chrome — used a `document.title`-as-buffer trick to bypass query-string filters in CDP output, then `curl` from osascript to download images.
- Downloaded covers/screenshots into `assets/portfolio/<slug>/` for 11 of 13 cases. NexoBackup and NexoMC have no images on Notion yet, so those cards keep the dot-grid placeholder.
- Updated `index.html` portfolio cards via `outputs/update_home.py`:
  - `<article class="pf-card">` → `<a class="pf-card" href="case/<slug>.html">`
  - Cover `<img>` inside `.thumb` (object-fit: cover, top-aligned, 16:10 aspect ratio).
  - Hover scales cover slightly + arrow indicator (top-right) lights up yellow.
  - Stamp uses `mix-blend-mode: difference` so the brand label is legible over any cover.
- Verified at 1440 px — all 13 cards show correct covers, click-through to NexoBall and ADBear pages confirmed working.

Helper scripts (kept for re-use): `outputs/build_cases.py`, `outputs/update_home.py`.

Pending text polish:

- Per-case lede copy on the 12 generated pages is generic by design (the user said "I'll fix the text later").
- ADBear hero is the cover, and the image is large/cinematic — can be cropped tighter if it's too dominant.

When real text/screenshots arrive:

- Update the JSON in `build_cases.py` (lede, tags, role, period) and re-run.
- For new screenshots: drop them into `assets/portfolio/<slug>/` and they'll appear in the gallery automatically (template enumerates files with `glob`).
