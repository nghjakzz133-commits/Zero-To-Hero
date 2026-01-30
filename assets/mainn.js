/* ===============================================
   ZERO TO HERO - MAIN JAVASCRIPT (FIXED)
   Only fix language switch – keep everything else
   =============================================== */

/* ================= i18n ================= */

let currentLang = 'en';

function initI18n() {
  const saved = localStorage.getItem('preferredLanguage');
  if (saved === 'en' || saved === 'vi') currentLang = saved;
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!window.translations || !window.translations[currentLang]) return;
    const text = window.translations[currentLang][key];
    if (!text) return;

    if (key === 'footer_disclaimer') el.innerHTML = text;
    else el.textContent = text;
  });
}

function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'vi') return;
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  applyTranslations();
  updateLangButtons();
}

function updateLangButtons() {
  ['btnEN', 'btnVI', 'btnEN2', 'btnVI2'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.remove('active');
  });

  if (currentLang === 'en') {
    document.getElementById('btnEN')?.classList.add('active');
    document.getElementById('btnEN2')?.classList.add('active');
  } else {
    document.getElementById('btnVI')?.classList.add('active');
    document.getElementById('btnVI2')?.classList.add('active');
  }
}

/* ================= LANGUAGE BUTTON FIX ================= */

function bindLangButtons() {
  const map = {
    btnEN: 'en',
    btnEN2: 'en',
    btnVI: 'vi',
    btnVI2: 'vi'
  };

  Object.keys(map).forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation(); // 🔥 FIX QUAN TRỌNG
      switchLanguage(map[id]);
    });
  });
}

/* ================= MOBILE MENU ================= */

function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('navDrawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', e => {
    e.stopPropagation();
    drawer.classList.toggle('show');
    menuBtn.classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
      drawer.classList.remove('show');
      menuBtn.classList.remove('active');
    }
  });
}

/* ================= MARKET TABS ================= */

function initMarketTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('show'));
      btn.classList.add('active');
      document.getElementById(`tab-${tab}`)?.classList.add('show');
    });
  });
}

/* ================= TRADINGVIEW ================= */

function initTradingView() {
  if (typeof TradingView === 'undefined') return;
  // giữ nguyên – file tradingview.js xử lý
}

/* ================= INIT ================= */

function init() {
  initI18n();
  bindLangButtons();      // ✅ FIX NÚT DỊCH
  initMobileMenu();
  initMarketTabs();
  initTradingView();

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
