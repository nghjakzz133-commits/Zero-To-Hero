/* ======================================================
   main.js — Core Frontend Logic
   Zero To Hero
   ====================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------
     UTILS
  ------------------------------------------------------ */
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) =>
    Array.from(scope.querySelectorAll(selector));

  /* ------------------------------------------------------
     APP STATE
  ------------------------------------------------------ */
  const AppState = {
    lang: localStorage.getItem("lang") || "vi",
  };

  /* ------------------------------------------------------
     LANGUAGE SYSTEM
  ------------------------------------------------------ */
  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    $$("[data-vi]").forEach(el => {
      const value = el.getAttribute("data-" + lang);
      if (value !== null) {
        el.textContent = value;
      }
    });

    AppState.lang = lang;
    localStorage.setItem("lang", lang);
  }

  // Expose for inline buttons
  window.setLang = applyLanguage;

  /* ------------------------------------------------------
     MOBILE NAV (FIX MENU 3 GẠCH)
  ------------------------------------------------------ */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    // Optional: auto close when click link (mobile UX tốt hơn)
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }

  /* ------------------------------------------------------
     SMOOTH SCROLL (SAFE)
  ------------------------------------------------------ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (targetId.length <= 1) return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------------------
     ACTIVE NAV HIGHLIGHT (OPTIONAL BUT PRO)
  ------------------------------------------------------ */
  function initActiveNav() {
    const sections = $$("main section[id]");
    const navLinks = $$("header nav a[href^='#']");

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      const scrollY = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  /* ------------------------------------------------------
     HERO VIDEO FALLBACK
  ------------------------------------------------------ */
  function initHeroVideoFallback() {
    const video = $("#hero video");
    if (!video) return;

    video.addEventListener("error", () => {
      video.style.display = "none";
      document.body.classList.add("hero-video-fallback");
    });
  }

  /* ------------------------------------------------------
     FOOTER YEAR AUTO UPDATE
  ------------------------------------------------------ */
  function updateFooterYear() {
    const footer = $("footer");
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(
      /©\s?\d{4}/g,
      `© ${year}`
    );
  }

  /* ------------------------------------------------------
     INIT
  ------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(AppState.lang);
    initMobileNav();       // 🔥 FIX MENU
    initSmoothScroll();
    initActiveNav();
    initHeroVideoFallback();
    updateFooterYear();
  });

})();
