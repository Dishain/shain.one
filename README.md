# shain.one

Personal site for Dmytro Shain - product design, portfolio, blog.
Static HTML, no build step. Custom domain via GitHub Pages.

## Structure

- `index.html` - home
- `case/*.html` - 13 portfolio case pages
- `blog/index.html` + `blog/<slug>.html` - blog
- `shainbox.html` - ShainBox product landing
- `assets/` - shared CSS, JS, i18n bags, images, og-default
- `robots.txt`, `sitemap.xml`, `CNAME` - SEO + Pages config

## Local preview

Open any `*.html` file directly in Chrome via `file://`. No runtime deps
beyond CDN-hosted Google Fonts. For accurate analytics + SEO checks,
serve via `python3 -m http.server` and open at `http://localhost:8000/`.

## Theming

- Theme: dark (default) / light. Toggle in top-right nav. Auto-detects
  via `prefers-color-scheme` on first visit. Choice persists in
  `localStorage`.
- Accent: yellow `#F4D700` in dark, orange `#FF7849` in light (yellow
  fails contrast on light backgrounds).

## Languages

- English (default) and Ukrainian. Toggle in nav. Auto-detects from
  `navigator.language` on first visit.
- i18n bags: `assets/i18n.shell.js` (shared nav/footer/cta keys),
  `assets/i18n.home.js` (homepage), `assets/i18n.dark-patterns.js`
  (dark-patterns article).

## Deploy

### 1. Push to GitHub

```bash
git remote add origin https://github.com/Dishain/shain.one.git
git push -u origin main
```

### 2. Enable GitHub Pages

Repo Settings → Pages:
- Source: Deploy from a branch
- Branch: `main` / folder `/ (root)` → Save
- Custom domain: `shain.one` → Save (CNAME file already in repo)

### 3. DNS at GoDaddy

shain.one → DNS Management. Remove the parked-page A record. Add:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| AAAA | @ | 2606:50c0:8000::153 | 600 |
| AAAA | @ | 2606:50c0:8001::153 | 600 |
| AAAA | @ | 2606:50c0:8002::153 | 600 |
| AAAA | @ | 2606:50c0:8003::153 | 600 |
| CNAME | www | dishain.github.io | 600 |

Wait 10-60 min for DNS propagation. Check at whatsmydns.net or via
`dig shain.one`.

### 4. Enforce HTTPS

When GitHub finishes DNS verification (green tick in Pages settings),
tick "Enforce HTTPS". Let's Encrypt cert auto-provisioned.

## Analytics: Microsoft Clarity

1. Sign up at https://clarity.microsoft.com
2. Create a new project, get the Project ID (10-char alphanumeric).
3. Open `assets/analytics.js`, paste the ID into `CLARITY_PROJECT_ID`.
4. Push. The script auto-loads on every page, skips on localhost,
   and respects Do-Not-Track.

## SEO: Google Search Console

Two ways to verify ownership of shain.one. Pick one.

### Option A - HTML meta tag (simplest)

1. Open https://search.google.com/search-console → Add property →
   "URL prefix" → enter `https://shain.one`.
2. Choose "HTML tag" verification method. Google gives a token like
   `<meta name="google-site-verification" content="abc123...">`.
3. Open `index.html`, find the `REPLACE_ME_GSC_TOKEN` placeholder
   (around line 1012), paste your token in `content`.
4. Push. Click "Verify" in GSC.

### Option B - DNS TXT record (best for domain-wide property)

1. GSC → Add property → "Domain" → enter `shain.one`.
2. Google gives a TXT record value.
3. GoDaddy DNS Management → Add record:
   - Type: TXT, Host: @, Value: `google-site-verification=...`
4. Wait ~5 min for DNS, click "Verify" in GSC.
5. This covers all subdomains (www, etc) automatically.

### After verification

1. GSC → Sitemaps → Add `https://shain.one/sitemap.xml` → Submit.
2. GSC will index pages within hours-to-days.
3. Use URL Inspection on key pages to request faster indexing.

## SEO: Bing Webmaster (optional)

Similar to GSC but at https://www.bing.com/webmasters. Same sitemap.
Bonus: Bing supports IndexNow for instant indexing - see
"Future improvements" below.

## Updating content

### Add a blog post

1. Create `blog/<slug>.html` (copy figma-ne-vmerla.html as template).
2. Drop cover + inline images into `assets/blog/<slug>/`.
3. Add a card to `blog/index.html`.
4. Add an entry to `sitemap.xml` with today's `<lastmod>`.
5. Push. Once live, in GSC do URL Inspection → "Request indexing"
   for the new page.

### Add a portfolio case

1. Create `case/<slug>.html` (copy adbear.html as template).
2. Drop screenshots into `assets/portfolio/<slug>/`.
3. Add a card to `index.html` portfolio section.
4. Add a sitemap entry.

### Update an existing page

Bump the `<lastmod>` for that URL in `sitemap.xml` (today's date,
ISO `YYYY-MM-DD`). GSC re-crawls based on lastmod.

## Future improvements (not implemented)

- IndexNow integration (faster Bing indexing, see assets/ for stub)
- Image sitemap extension (for portfolio screenshots)
- 404.html (GitHub Pages auto-serves if present)
- A small build script to regenerate sitemap from filesystem
