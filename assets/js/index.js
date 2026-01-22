// MENU
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");
menuBtn?.addEventListener("click",()=>navDrawer.classList.toggle("show"));

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LANG (placeholder – sau này gộp i18n)
document.getElementById("btnEN")?.addEventListener("click",()=>alert("EN"));
document.getElementById("btnVI")?.addEventListener("click",()=>alert("VI"));
function createTV(id, symbol, interval = "60") {
  if (!document.getElementById(id) || typeof TradingView === "undefined") return;

  new TradingView.widget({
    autosize: true,
    symbol: symbol,
    interval: interval,
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    enable_publishing: false,
    hide_top_toolbar: true,
    hide_legend: true,
    container_id: id,
  });
}

// INDEX MARKET PREVIEW
createTV("tv_index_xauusd", "OANDA:XAUUSD", "30");
