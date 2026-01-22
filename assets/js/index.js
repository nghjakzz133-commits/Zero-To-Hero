// ================= MENU MOBILE =================
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

menuBtn?.addEventListener("click", () => {
  navDrawer.classList.toggle("show");
});

// ================= FOOTER YEAR =================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================= I18N (INDEX ONLY) =================
const i18n = {
  en: {
    badge: "Corporate Partner Network",
    hero_title: "From Zero To Hero",
    hero_sub:
      "Building sustainable growth through global partnerships and professional execution.",
    market_title: "Market Snapshot",
    market_sub: "Live public market overview for general monitoring.",
  },
  vi: {
    badge: "Mạng lưới đối tác doanh nghiệp",
    hero_title: "Từ Zero đến Hero",
    hero_sub:
      "Xây dựng tăng trưởng bền vững thông qua hợp tác toàn cầu và vận hành chuyên nghiệp.",
    market_title: "Tổng quan thị trường",
    market_sub: "Theo dõi biến động thị trường công khai theo thời gian thực.",
  },
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.getElementById("btnEN")?.classList.remove("active");
  document.getElementById("btnVI")?.classList.remove("active");

  if (lang === "en") {
    document.getElementById("btnEN")?.classList.add("active");
  } else {
    document.getElementById("btnVI")?.classList.add("active");
  }

  localStorage.setItem("zth_lang", lang);
}

document.getElementById("btnEN")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnVI")?.addEventListener("click", () => setLang("vi"));

setLang(localStorage.getItem("zth_lang") || "en");

// ================= TRADINGVIEW HELPER =================
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
    hide_top_toolbar: true,
    hide_legend: true,
    enable_publishing: false,
    container_id: id,
  });
}

// ================= MARKET TABS =================
const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = {
  gold: document.getElementById("tab-gold"),
  fx: document.getElementById("tab-fx"),
  crypto: document.getElementById("tab-crypto"),
};

let fxLoaded = false;
let cryptoLoaded = false;

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    Object.values(tabs).forEach((t) => t.classList.remove("show"));
    tabs[btn.dataset.tab]?.classList.add("show");

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

// ================= INIT GOLD (DEFAULT) =================
createTV("tv_index_xauusd", "OANDA:XAUUSD", "30");
createTV("tv_index_eurusd", "OANDA:EURUSD");
createTV("tv_index_btcusd", "BITSTAMP:BTCUSD");
