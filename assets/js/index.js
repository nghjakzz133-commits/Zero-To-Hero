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
