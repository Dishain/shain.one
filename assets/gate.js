/* ============================================================
   gate.js - lightweight password gate for case pages.
   Client-side only (static hosting): deters casual visitors,
   not a substitute for server-side auth. The password is not
   stored in source - only a salted SHA-256 hash.

   Include SYNCHRONOUSLY in <head> (no defer) so the lock class
   and styles land before first paint.
   ============================================================ */
(function () {
  "use strict";

  var SALT = "shain.one:";
  /* sha256(SALT + password) */
  var HASH = "30882430ccf3c00734ba3ab323f57f2ba02726557a084e5db5e37da29e924c8b";
  var STORE = "shain.gate";

  var unlocked = false;
  try { unlocked = localStorage.getItem(STORE) === HASH; } catch (e) {}
  if (unlocked) return;

  var root = document.documentElement;
  root.classList.add("gate-locked");

  /* Styles injected synchronously so content never flashes. */
  var css = [
    "html.gate-locked{overflow:hidden;}",
    "html.gate-locked body > :not(.gate-overlay){visibility:hidden;}",
    ".gate-overlay{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:var(--canvas,#EFEEEC);}",
    ".gate-card{background:var(--surface,#fff);border:1px solid var(--hair,rgba(28,28,30,0.08));border-radius:24px;box-shadow:var(--sh-lg,0 24px 60px rgba(28,28,40,0.10));padding:40px 36px;max-width:400px;width:100%;text-align:left;}",
    ".gate-chip{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:var(--acc,#2A85FF);background:var(--acc-soft,rgba(42,133,255,0.10));padding:7px 14px;border-radius:100px;margin-bottom:20px;}",
    ".gate-card h2{font-size:22px;font-weight:600;letter-spacing:-0.01em;line-height:1.25;margin:0 0 8px;color:var(--ink,#1C1C1E);}",
    ".gate-card p{font-size:14px;line-height:1.6;color:var(--ink-2,#54545A);margin:0 0 24px;}",
    ".gate-form{display:flex;flex-direction:column;gap:12px;}",
    ".gate-input{width:100%;background:var(--surface-2,#F4F3F1);border:1px solid var(--hair-2,rgba(28,28,30,0.12));border-radius:14px;padding:14px 16px;font-family:inherit;font-size:16px;letter-spacing:0.2em;color:var(--ink,#1C1C1E);transition:border-color 200ms,background 200ms;}",
    ".gate-input:focus{outline:none;border-color:var(--acc,#2A85FF);}",
    ".gate-input.is-error{border-color:#E5484D;}",
    ".gate-btn{height:52px;border:0;border-radius:999px;background:var(--acc,#2A85FF);color:#fff;font-family:inherit;font-size:16px;font-weight:600;cursor:pointer;box-shadow:var(--sh-sm,0 4px 14px rgba(28,28,40,0.05));transition:background 200ms,transform 200ms,box-shadow 200ms;}",
    ".gate-btn:hover{background:var(--acc-hi,#1F6FE0);transform:translateY(-1px);box-shadow:var(--sh-md,0 10px 30px rgba(28,28,40,0.07));}",
    ".gate-btn:active{transform:scale(0.99);}",
    ".gate-error{font-size:13px;color:#E5484D;margin:0;min-height:18px;}",
    ".gate-back{display:inline-block;margin-top:16px;font-size:14px;font-weight:500;color:var(--ink-2,#54545A);text-decoration:none;}",
    ".gate-back:hover{color:var(--ink,#1C1C1E);}",
    "@keyframes gateShake{0%,100%{transform:translateX(0);}25%{transform:translateX(-6px);}75%{transform:translateX(6px);}}",
    ".gate-card.is-shake{animation:gateShake 240ms ease;}"
  ].join("\n");
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function sha256hex(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function isUk() {
    try {
      var stored = localStorage.getItem("shain.lang");
      if (stored) return stored === "uk";
    } catch (e) {}
    var langs = [navigator.language].concat(navigator.languages || []);
    return langs.filter(Boolean).some(function (l) { return String(l).toLowerCase().indexOf("uk") === 0; });
  }

  function buildOverlay() {
    var uk = isUk();
    var t = uk ? {
      chip: "Приватний кейс",
      h: "Цей кейс захищено паролем.",
      p: "Введіть пароль, щоб переглянути. Немає пароля? Напишіть мені - надішлю.",
      ph: "Пароль",
      btn: "Відкрити кейс",
      err: "Невірний пароль. Спробуйте ще раз.",
      back: "← Назад до портфоліо"
    } : {
      chip: "Private case",
      h: "This case is password-protected.",
      p: "Enter the password to view it. Don't have one? Email me and I'll share it.",
      ph: "Password",
      btn: "Unlock case",
      err: "Wrong password. Try again.",
      back: "← Back to portfolio"
    };

    var overlay = document.createElement("div");
    overlay.className = "gate-overlay";
    overlay.innerHTML =
      '<div class="gate-card" role="dialog" aria-modal="true" aria-label="' + t.h + '">' +
        '<span class="gate-chip">🔒 ' + t.chip + "</span>" +
        "<h2>" + t.h + "</h2>" +
        "<p>" + t.p + "</p>" +
        '<form class="gate-form">' +
          '<input class="gate-input" type="password" inputmode="numeric" autocomplete="off" placeholder="' + t.ph + '" aria-label="' + t.ph + '" />' +
          '<p class="gate-error" aria-live="polite"></p>' +
          '<button class="gate-btn" type="submit">' + t.btn + "</button>" +
        "</form>" +
        '<a class="gate-back" href="../index.html#portfolio">' + t.back + "</a>" +
      "</div>";

    var card = overlay.querySelector(".gate-card");
    var form = overlay.querySelector(".gate-form");
    var input = overlay.querySelector(".gate-input");
    var error = overlay.querySelector(".gate-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = input.value.trim();
      if (!value) return;
      sha256hex(SALT + value).then(function (hex) {
        if (hex === HASH) {
          try { localStorage.setItem(STORE, HASH); } catch (err) {}
          overlay.remove();
          root.classList.remove("gate-locked");
        } else {
          error.textContent = t.err;
          input.classList.add("is-error");
          card.classList.add("is-shake");
          input.select();
          setTimeout(function () { card.classList.remove("is-shake"); }, 260);
        }
      });
    });
    input.addEventListener("input", function () {
      input.classList.remove("is-error");
      error.textContent = "";
    });

    document.body.appendChild(overlay);
    input.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildOverlay);
  } else {
    buildOverlay();
  }
})();
