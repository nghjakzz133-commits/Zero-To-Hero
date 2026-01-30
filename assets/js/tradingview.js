/* =====================================================
   TRADINGVIEW.JS – ZERO TO HERO
   Purpose: Embed TradingView charts only
   Rule: Init ONCE – No DOM rewrite – No i18n conflict
===================================================== */

(function () {

  // Prevent double init
  let tvInitialized = false;

  function createWidget(config) {
    if (!document.getElementById(config.container_id)) return;

    new TradingView.widget({
      autosize: true,
      symbol: config.symbol,
      interval: "60",
      timezone: "[node]UTC[/node]",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#0b0f14",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      allow_symbol_change: false,
      container_id: config.container_id
    });
  }

  function createMini(config) {
    if (!document.getElementById(config.container_id)) return;

    new TradingView.MiniChart({
      autosize: true,
      symbol: config.symbol,
      interval: "60",
      timezone: "UTC",
      theme: "dark",
      locale: "en",
      container_id: config.container_id
    });
  }

  function initTradingView() {
    if (tvInitialized) return;
    if (typeof TradingView === "undefined") return;

    tvInitialized = true;

    /* ===== GOLD ===== */
    createWidget({ container_id: "tv_index_xauusd", symbol: "OANDA:XAUUSD" });
    createMini({ container_id: "tv_index_eurusd", symbol: "OANDA:EURUSD" });
    createMini({ container_id: "tv_index_btcusd", symbol: "BINANCE:BTCUSDT" });
    createMini({ container_id: "tv_index_xagusd", symbol: "OANDA:XAGUSD" });

    /* ===== FX ===== */
    createMini({ container_id: "tv_fx_eurusd", symbol: "OANDA:EURUSD" });
    createMini({ container_id: "tv_fx_gbpusd", symbol: "OANDA:GBPUSD" });
    createMini({ container_id: "tv_fx_usdjpy", symbol: "OANDA:USDJPY" });
    createMini({ container_id: "tv_fx_audusd", symbol: "OANDA:AUDUSD" });

    /* ===== CRYPTO ===== */
    createMini({ container_id: "tv_crypto_btc", symbol: "BINANCE:BTCUSDT" });
    createMini({ container_id: "tv_crypto_eth", symbol: "BINANCE:ETHUSDT" });
    createMini({ container_id: "tv_crypto_bnb", symbol: "BINANCE:BNBUSDT" });
    createMini({ container_id: "tv_crypto_xrp", symbol: "BINANCE:XRPUSDT" });

    /* ===== INDICES ===== */
    createMini({ container_id: "tv_indices_spx", symbol: "SP:SPX" });
    createMini({ container_id: "tv_indices_ndx", symbol: "NASDAQ:NDX" });
    createMini({ container_id: "tv_indices_dji", symbol: "DJ:DJI" });
    createMini({ container_id: "tv_indices_dax", symbol: "XETR:DAX" });

    /* ===== COMMODITIES ===== */
    createMini({ container_id: "tv_commodities_oil", symbol: "TVC:USOIL" });
    createMini({ container_id: "tv_commodities_gas", symbol: "NYMEX:NG1!" });
    createMini({ container_id: "tv_commodities_silver", symbol: "OANDA:XAGUSD" });
    createMini({ container_id: "tv_commodities_copper", symbol: "COMEX:HG1!" });

    console.log("TradingView initialized once ✔");
  }

  // Init when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTradingView);
  } else {
    initTradingView();
  }

})();
