/* ============================================================
   analytics.js
   - Microsoft Clarity (heatmaps, session recording)
   - Loaded from every HTML page via <script src="assets/analytics.js" defer>
   - Honors Do-Not-Track and prefers-reduced-data when set
   ============================================================ */

(() => {
  // Microsoft Clarity Project ID (https://clarity.microsoft.com).
  // Leave empty to disable analytics entirely.
  const CLARITY_PROJECT_ID = "wlahfoozk7";

  // Skip when ID not set
  if (!CLARITY_PROJECT_ID) return;

  // Respect Do-Not-Track
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;

  // Skip on localhost / preview to keep dev sessions out of stats
  const host = location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "" || host.endsWith(".local")) return;

  // Clarity tracking snippet (official, from clarity.microsoft.com)
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
})();
