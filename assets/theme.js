/* ============================================================
   theme.js
   - Theme toggle (dark/light) with system preference + localStorage
   - Language toggle (EN/UA) with auto-detect by navigator.language
   - i18n: swaps text in [data-i18n] elements using window.I18N
   - Smooth color transition class on theme switch
   ============================================================ */

(() => {
  const STORE_THEME = "shain.theme";       // "dark" | "light"
  const STORE_LANG  = "shain.lang";        // "en" | "uk"

  // ---------- theme ----------
  const getStoredTheme = () => {
    try { return localStorage.getItem(STORE_THEME); } catch { return null; }
  };
  const setStoredTheme = (v) => {
    try { localStorage.setItem(STORE_THEME, v); } catch {}
  };
  const detectTheme = () => {
    // Default: light. Switch to dark only if user's OS explicitly prefers dark.
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  };
  const applyTheme = (theme, animate) => {
    const root = document.documentElement;
    if (animate) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 240);
    }
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    // Clarity custom tag - lets Microsoft Clarity dashboard segment by theme
    if (typeof window.clarity === "function") {
      try { window.clarity("set", "theme", theme); } catch {}
    }
  };

  // ---------- language ----------
  const getStoredLang = () => {
    try { return localStorage.getItem(STORE_LANG); } catch { return null; }
  };
  const setStoredLang = (v) => {
    try { localStorage.setItem(STORE_LANG, v); } catch {}
  };
  const detectLang = () => {
    const candidates = [
      navigator.language,
      ...(navigator.languages || []),
    ].filter(Boolean).map(s => s.toLowerCase());
    const isUkr = candidates.some(l => l.startsWith("uk"));
    return isUkr ? "uk" : "en";
  };

  // i18n bag is provided per-page as window.I18N = { en: {...}, uk: {...} }
  const applyLang = (lang) => {
    const root = document.documentElement;
    root.setAttribute("lang", lang === "uk" ? "uk" : "en");

    const bag = window.I18N;
    if (bag && bag[lang]) {
      const dict = bag[lang];
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
          el.innerHTML = dict[key];
        }
      });
      // Attribute translations: data-i18n-attr="aria-label:hero.aria,title:hero.title"
      document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const spec = el.getAttribute("data-i18n-attr") || "";
        spec.split(",").map(s => s.trim()).filter(Boolean).forEach(pair => {
          const [attr, key] = pair.split(":").map(s => s.trim());
          if (attr && key && Object.prototype.hasOwnProperty.call(dict, key)) {
            el.setAttribute(attr, dict[key]);
          }
        });
      });
    }

    // Update lang button state
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      const cur = btn.querySelector(".lang-current");
      const oth = btn.querySelector(".lang-other");
      if (cur && oth) {
        cur.textContent = lang === "uk" ? "UA" : "EN";
        oth.textContent = lang === "uk" ? "EN" : "UA";
      }
      btn.setAttribute("aria-label", lang === "uk"
        ? "Змінити мову на англійську"
        : "Switch language to Ukrainian");
    });

    // Clarity custom tag - lets Microsoft Clarity dashboard segment by language
    if (typeof window.clarity === "function") {
      try { window.clarity("set", "lang", lang); } catch {}
    }
  };

  // ---------- bootstrap (run BEFORE DOMContentLoaded to avoid flash) ----------
  const initialTheme = getStoredTheme() || detectTheme();
  applyTheme(initialTheme, false);

  const initialLang = getStoredLang() || detectLang();
  // Apply lang attr only at this point - i18n DOM swap happens after DOM ready
  document.documentElement.setAttribute("lang", initialLang === "uk" ? "uk" : "en");

  // ---------- after DOM ready ----------
  const ready = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  };

  ready(() => {
    applyLang(initialLang);

    // Wire theme button(s)
    document.querySelectorAll("[data-theme-btn]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        const next = cur === "light" ? "dark" : "light";
        applyTheme(next, true);
        setStoredTheme(next);
      });
    });

    // Wire lang button(s)
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cur = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("uk") ? "uk" : "en";
        const next = cur === "uk" ? "en" : "uk";
        applyLang(next);
        setStoredLang(next);
      });
    });

    // React to system theme change ONLY if user hasn't chosen explicitly
    if (!getStoredTheme() && window.matchMedia) {
      const mql = window.matchMedia("(prefers-color-scheme: light)");
      const onChange = (e) => applyTheme(e.matches ? "light" : "dark", true);
      mql.addEventListener ? mql.addEventListener("change", onChange) : mql.addListener(onChange);
    }
  });
})();
