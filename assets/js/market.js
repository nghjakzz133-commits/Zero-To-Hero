// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

if (menuBtn && navDrawer) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// ================= FOOTER YEAR =================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================= I18N (MARKET) =================
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    market_kicker: "Live Monitoring",
    market_title: "Online Market Movement",
    market_sub:
      "Realtime public market charts for monitoring general volatility.",

    market_widget_title: "Live Market Chart",
    market_widget_text:
      "This section can be upgraded later with professional widgets or internal dashboards.",

    footer_tag: "Corporate Partner Network",

    disclaimer:
      "This website is for company introduction purposes only.",
  },

  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_partnership: "Hợp tác",
    nav_team: "Đội ngũ",
    nav_market: "Thị trường",
    nav_media: "Truyền thông",
    nav_contact: "Liên hệ",

    market_kicker: "Theo dõi",
    market_title: "Biến động thị trường",
    market_sub:
      "Biểu đồ thị trường công khai theo thời gian thực để theo dõi xu hướng chung.",

    market_widget_title: "Biểu đồ thị trường",
    market_widget_text:
      "Khu vực này có thể nâng cấp sau với hệ thống phân tích chuyên nghiệp.",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",

    disclaimer:
      "Website dùng cho mục đích giới thiệu doanh nghiệp.",
  },
};

// ================= I18N FUNCTIONS =================
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  ["btnEN", "btnVI", "btnEN2", "btnVI2"].forEach((id) => {
    const btn = document.getElementById(id);
    btn && btn.classList.remove("active");
  });

  if (lang === "en") {
    document.getElementById("btnEN")?.classList.add("active");
    document.getElementById("btnEN2")?.classList.add("active");
  } else {
    document.getElementById("btnVI")?.classList.add("active");
    document.getElementById("btnVI2")?.classList.add("active");
  }

  localStorage.setItem("zth_lang", lang);
}

function initLang() {
  setLang(localStorage.getItem("zth_lang") || "en");
}

document.getElementById("btnEN")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnVI")?.addEventListener("click", () => setLang("vi"));
document.getElementById("btnEN2")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnVI2")?.addEventListener("click", () => setLang("vi"));

initLang();

// ================= MARKET TABS =================
const tabBtns = document.querySelectorAll(".tab-btn");
const panels = {
  fx: document.getElementById("tab-fx"),
  gold: document.getElementById("tab-gold"),
  crypto: document.getElementById("tab-crypto"),
};

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    Object.values(panels).forEach((p) => p.classList.remove("show"));
    panels[btn.dataset.tab]?.classList.add("show");
  });
});

// ================= TRADINGVIEW =================
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
    toolbar_bg: "#0b0b10",
    enable_publishing: false,
    hide_top_toolbar: false,
    hide_legend: false,
    container_id: id,
  });
}

// FX
[
  ["tv_eurusd", "OANDA:EURUSD"],
  ["tv_gbpusd", "OANDA:GBPUSD"],
  ["tv_usdjpy", "OANDA:USDJPY"],
  ["tv_audusd", "OANDA:AUDUSD"],
  ["tv_usdcad", "OANDA:USDCAD"],
  ["tv_usdchf", "OANDA:USDCHF"],
  ["tv_eurgbp", "OANDA:EURGBP"],
  ["tv_eurjpy", "OANDA:EURJPY"],
  ["tv_gbpaud", "OANDA:GBPAUD"],
  ["tv_gbpjpy", "OANDA:GBPJPY"],
].forEach(([id, sym]) => createTV(id, sym));

// GOLD
createTV("tv_xauusd", "OANDA:XAUUSD", "30");

// CRYPTO
createTV("tv_btcusd", "BITSTAMP:BTCUSD");
createTV("tv_ethusd", "BITSTAMP:ETHUSD");
