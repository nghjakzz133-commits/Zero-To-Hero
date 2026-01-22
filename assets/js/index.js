// MENU
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");
menuBtn?.addEventListener("click",()=>navDrawer.classList.toggle("show"));

// YEAR
document.getElementById("year")?.textContent = new Date().getFullYear();

// LANG (placeholder)
document.getElementById("btnEN")?.addEventListener("click",()=>alert("EN"));
document.getElementById("btnVI")?.addEventListener("click",()=>alert("VI"));

// TRADINGVIEW
function createTV(id, symbol, interval="60"){
  if(!document.getElementById(id) || typeof TradingView==="undefined") return;
  new TradingView.widget({
    autosize:true,
    symbol,
    interval,
    timezone:"Etc/UTC",
    theme:"dark",
    style:"1",
    locale:"en",
    hide_top_toolbar:true,
    hide_legend:true,
    enable_publishing:false,
    container_id:id
  });
}

createTV("tv_index_xauusd","OANDA:XAUUSD","30");
// MINI MARKETS
createTV("tv_index_eurusd","OANDA:EURUSD","60");
createTV("tv_index_btcusd","BITSTAMP:BTCUSD","60");
// MARKET TABS
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = {
  gold: document.getElementById("tab-gold"),
  fx: document.getElementById("tab-fx"),
  crypto: document.getElementById("tab-crypto"),
};

tabBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    tabBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    Object.values(tabPanels).forEach(p=>p.classList.remove("show"));
    tabPanels[btn.dataset.tab]?.classList.add("show");
  });
});

// TRADINGVIEW
createTV("tv_index_xauusd","OANDA:XAUUSD","30");
createTV("tv_index_eurusd","OANDA:EURUSD","60");
createTV("tv_index_btcusd","BITSTAMP:BTCUSD","60");

createTV("tv_fx_eurusd","OANDA:EURUSD","60");
createTV("tv_fx_gbpusd","OANDA:GBPUSD","60");

createTV("tv_crypto_btc","BITSTAMP:BTCUSD","60");
createTV("tv_crypto_eth","BITSTAMP:ETHUSD","60");
