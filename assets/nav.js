/* ============================================================
   nav.js - dropdown focus management for the top nav.
   target="_blank" keeps focus on the clicked link, which would
   pin the menu open via :focus-within when the user returns.
   ============================================================ */
(function () {
  "use strict";

  var releaseMenuFocus = function () {
    var a = document.activeElement;
    if (a && a.closest && a.closest(".menu")) a.blur();
  };

  var init = function () {
    var groups = document.querySelectorAll(".has-menu");
    groups.forEach(function (group) {
      var trigger = group.querySelector(".menu-trigger");
      if (!trigger) return;
      var setExpanded = function (v) { trigger.setAttribute("aria-expanded", v ? "true" : "false"); };

      group.addEventListener("mouseenter", function () {
        groups.forEach(function (other) {
          if (other !== group && other.contains(document.activeElement)) {
            document.activeElement.blur();
          }
        });
        setExpanded(true);
      });
      group.addEventListener("mouseleave", function () { setExpanded(false); });
      group.addEventListener("focusin", function () { setExpanded(true); });
      group.addEventListener("focusout", function (e) {
        if (!group.contains(e.relatedTarget)) setExpanded(false);
      });
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var open = trigger.getAttribute("aria-expanded") === "true";
        setExpanded(!open);
      });
    });

    document.querySelectorAll(".menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        setTimeout(function () { link.blur(); }, 0);
      });
    });
    window.addEventListener("focus", releaseMenuFocus);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") releaseMenuFocus();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
