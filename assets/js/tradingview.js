/* =====================================================
   TRADINGVIEW INIT – ZERO TO HERO
   Purpose: Embed all TradingView charts
   Stable / Static site friendly
===================================================== */

function createTV(id, symbol, interval = "60") {
  if (!document.getElementById(id)) return;

  new TradingView.widget({
    autosize: true,
    symbol: symbol,
    interval: interval,
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#0b0f14",
    enable_publishing: false,
    hide_top_toolbar: true,
    hide_legend: true,
    allow_symbol_change: false,
    container_id: id
  });
}

document.addEventListener("DOMContentLoaded", () => {

  /* ===== GOLD TAB ===== */
  createTV("tv_index_xauusd", "OANDA:XAUUSD", "60");
  createTV("tv_index_eurusd", "OANDA:EURUSD", "60");
  createTV("tv_index_btcusd", "BINANCE:BTCUSDT", "60");
  createTV("tv_index_xagusd", "OANDA:XAGUSD", "60");

  /* ===== FX TAB ===== */
  createTV("tv_fx_eurusd", "OANDA:EURUSD", "60");
  createTV("tv_fx_gbpusd", "OANDA:GBPUSD", "60");
  createTV("tv_fx_usdjpy", "OANDA:USDJPY", "60");
  createTV("tv_fx_audusd", "OANDA:AUDUSD", "60");

  /* ===== CRYPTO TAB ===== */
  createTV("tv_crypto_btc", "BINANCE:BTCUSDT", "60");
  createTV("tv_crypto_eth", "BINANCE:ETHUSDT", "60");
  createTV("tv_crypto_bnb", "BINANCE:BNBUSDT", "60");
  createTV("tv_crypto_xrp", "BINANCE:XRPUSDT", "60");

  /* ===== INDICES TAB ===== */
  createTV("tv_indices_spx", "SP:SPX", "60");
  createTV("tv_indices_ndx", "NASDAQ:NDX", "60");
  createTV("tv_indices_dji", "DJ:DJI", "60");
  createTV("tv_indices_dax", "XETR:DAX", "60");

  /* ===== COMMODITIES TAB ===== */
  createTV("tv_commodities_oil", "TVC:USOIL", "60");
  createTV("tv_commodities_gas", "TVC:NATGAS", "60");
  createTV("tv_commodities_silver", "OANDA:XAGUSD", "60");
  createTV("tv_commodities_copper", "COMEX:HG1!", "60");

});
