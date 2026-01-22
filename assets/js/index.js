// MENU
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");
menuBtn?.addEventListener("click", () =>
  navDrawer.classList.toggle("show")
);

// YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// TRADINGVIEW HELPER
function createTV(id, symbol, interval = "60") {
  if (!document.getElementById(id) || typeof TradingView === "undefined") return;
  new TradingView.widget({
    autosize: true,
    symbol,
    interval,
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    hide_top_toolbar: true,
    hide_legend: true,
    enable_publishing: false,
    container_id: id,
  });
}

// INIT GOLD (DEFAULT)
createTV("tv_xauusd", "OANDA:XAUUSD", "30");
createTV("tv_eurusd", "OANDA:EURUSD", "60");
createTV("tv_btcusd", "BITSTAMP:BTCUSD", "60");

// TABS
const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = {
  gold: document.getElementById("tab-gold"),
  fx: document.getElementById("tab-fx"),
  crypto: document.getElementById("tab-crypto"),
};

let fxLoaded = false;
let cryptoLoaded = false;

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    Object.values(tabs).forEach(t => t.classList.remove("show"));
    tabs[btn.dataset.tab].classList.add("show");

    if (btn.dataset.tab === "fx" && !fxLoaded) {
      createTV("tv_fx_eurusd", "OANDA:EURUSD");
      createTV("tv_fx_gbpusd", "OANDA:GBPUSD");
      fxLoaded = true;
    }

    if (btn.dataset.tab === "crypto" && !cryptoLoaded) {
      createTV("tv_crypto_btc", "BITSTAMP:BTCUSD");
      createTV("tv_crypto_eth", "BITSTAMP:ETHUSD");
      cryptoLoaded = true;
    }
  });
});
