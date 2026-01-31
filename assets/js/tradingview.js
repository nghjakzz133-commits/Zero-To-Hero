/* ======================================================
   tradingview.js — Live Market Logic
   Zero To Hero
   ====================================================== */

(function () {
  "use strict";

  const chartFrame = document.getElementById("tvChart");
  const marketSelect = document.getElementById("marketSelect");
  const serviceSelect = document.getElementById("serviceSelect");
  const themeToggle = document.getElementById("themeToggle");

  if (!chartFrame || !marketSelect) return;

  let theme = localStorage.getItem("tv-theme") || "light";

  function buildChartURL() {
    const symbol = marketSelect.value;
    const service = serviceSelect ? serviceSelect.value : "finance";

    const interval = service === "finance" ? "15" : "D";

    return (
      "https://www.tradingview.com/widgetembed/?" +
      "symbol=" + encodeURIComponent(symbol) +
      "&interval=" + interval +
      "&theme=" + theme +
      "&timezone=Asia/Ho_Chi_Minh" +
      "&locale=vi" +
      "&toolbarbg=f1f3f6" +
      "&hidesidetoolbar=0" +
      "&saveimage=1" +
      "&symboledit=1"
    );
  }

  function loadChart() {
    chartFrame.src = buildChartURL();
  }

  /* ===== EVENTS ===== */
  marketSelect.addEventListener("change", loadChart);

  if (serviceSelect) {
    serviceSelect.addEventListener("change", loadChart);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      theme = theme === "light" ? "dark" : "light";
      localStorage.setItem("tv-theme", theme);
      themeToggle.textContent = theme === "light" ? "Dark mode" : "Light mode";
      loadChart();
    });
  }

  /* ===== INIT ===== */
  loadChart();

})();
