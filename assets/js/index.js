// ================= MENU =================
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

menuBtn?.addEventListener("click", () => {
  navDrawer.classList.toggle("show");
});

// ================= YEAR =================
document.getElementById("year").textContent =
  new Date().getFullYear();

// ================= I18N =================
const i18n = {
  en: {
    nav_home:"Home",
    nav_about:"About",
    nav_partnership:"Partnership",
    nav_team:"Team",
    nav_market:"Market",
    nav_contact:"Contact",
    badge:"Embark on a journey to conquer the market",
    hero_sub:"Building sustainable growth through global partnerships and professional execution.",
    market_title:"Market Snapshot",
    market_sub:"Live public market overview for general monitoring.",
    footer_tag:"Corporate Partner Network"
  },
  vi: {
    nav_home:"Trang chủ",
    nav_about:"Giới thiệu",
    nav_partnership:"Hợp tác",
    nav_team:"Đội ngũ",
    nav_market:"Thị trường",
    nav_contact:"Liên hệ",
    badge:"Bắt đầu hành trình chinh phục thị trường",
    hero_sub:"Xây dựng tăng trưởng bền vững thông qua hợp tác toàn cầu và vận hành chuyên nghiệp.",
    market_title:"Tổng quan thị trường",
    market_sub:"Theo dõi biến động thị trường công khai.",
    footer_tag:"Mạng lưới đối tác doanh nghiệp"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  localStorage.setItem("lang",lang);
  document.getElementById("btnEN").classList.toggle("active",lang==="en");
  document.getElementById("btnVI").classList.toggle("active",lang==="vi");
}

document.getElementById("btnEN").onclick=()=>setLang("en");
document.getElementById("btnVI").onclick=()=>setLang("vi");
setLang(localStorage.getItem("lang")||"en");

// ================= TABS =================
const tabBtns=document.querySelectorAll(".tab-btn");
const tabs={
  gold:document.getElementById("tab-gold"),
  fx:document.getElementById("tab-fx"),
  crypto:document.getElementById("tab-crypto")
};

tabBtns.forEach(btn=>{
  btn.onclick=()=>{
    tabBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    Object.values(tabs).forEach(t=>t.classList.remove("show"));
    tabs[btn.dataset.tab].classList.add("show");
  };
});

// ================= TRADINGVIEW =================
function createTV(id, symbol, interval="60"){
  if(typeof TradingView==="undefined") return;
  new TradingView.widget({
    autosize:true,
    symbol,
    interval,
    timezone:"Etc/UTC",
    theme:"dark",
    hide_top_toolbar:true,
    hide_legend:true,
    container_id:id
  });
}

createTV("tv_index_xauusd","OANDA:XAUUSD","30");
createTV("tv_index_eurusd","OANDA:EURUSD");
createTV("tv_index_btcusd","BITSTAMP:BTCUSD");
createTV("tv_fx_eurusd","OANDA:EURUSD");
createTV("tv_fx_gbpusd","OANDA:GBPUSD");
createTV("tv_crypto_btc","BITSTAMP:BTCUSD");
createTV("tv_crypto_eth","BITSTAMP:ETHUSD");

// ================= HERO MOBILE PARALLAX =================
if (window.innerWidth <= 768) {
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    hero.style.backgroundPosition =
      `center ${35 + window.scrollY * 0.04}%`;
  });
}
