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

// ================= I18N (PARTNERSHIP) =================
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    partner_kicker: "Collaboration",
    partner_page_title: "Strategic Partnership",
    partner_page_sub:
      "We collaborate with global partners to strengthen standards, systems, and long-term growth.",

    partner_core_title: "Partnership Principles",
    partner_core_sub:
      "We build partnerships based on integrity, professionalism, and sustainable collaboration.",

    partner_block_1: "Partner Network",
    partner_block_1_text:
      "Building long-term collaboration with global partners and high-quality networks.",

    partner_block_2: "Operational Standard",
    partner_block_2_text:
      "Clear workflow, disciplined execution, and professional communication.",

    partner_block_3: "Integrity",
    partner_block_3_text:
      "Transparency and trust are always prioritized in every collaboration.",

    tick_title: "Tickmill Collaboration",
    tick_text:
      "Zero To Hero is currently collaborating with Tickmill in the direction of expanding our partner network and strengthening a professional ecosystem with international standards.",

    tick_pill_1: "Partner Collaboration",
    tick_pill_2: "International Standard",
    tick_pill_3: "Professional Ecosystem",

    partner_process_title: "How We Work With Partners",
    partner_process_sub:
      "A clear, professional workflow designed for corporate-level operations and long-term collaboration.",

    partner_step_1_title: "Step 01 — Alignment",
    partner_step_1_text:
      "We align expectations, standards, and collaboration principles before execution.",

    partner_step_2_title: "Step 02 — Implementation",
    partner_step_2_text:
      "Structured workflow, consistent updates, and disciplined communication.",

    partner_step_3_title: "Step 03 — Quality Control",
    partner_step_3_text:
      "We maintain quality through measurable standards and continuous optimization.",

    partner_step_4_title: "Step 04 — Long-term Growth",
    partner_step_4_text:
      "Partnership is built for sustainability, trust, and long-term value.",

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

    partner_kicker: "Hợp tác",
    partner_page_title: "Hợp tác chiến lược",
    partner_page_sub:
      "Hợp tác cùng đối tác quốc tế nhằm củng cố tiêu chuẩn, hệ thống và tăng trưởng dài hạn.",

    partner_core_title: "Nguyên tắc hợp tác",
    partner_core_sub:
      "Xây dựng hợp tác dựa trên chính trực, chuyên nghiệp và phát triển bền vững.",

    partner_block_1: "Mạng lưới đối tác",
    partner_block_1_text:
      "Xây dựng hợp tác dài hạn với đối tác và mạng lưới chất lượng.",

    partner_block_2: "Chuẩn vận hành",
    partner_block_2_text:
      "Quy trình rõ ràng, thực thi kỷ luật và giao tiếp chuyên nghiệp.",

    partner_block_3: "Chính trực",
    partner_block_3_text:
      "Minh bạch và niềm tin luôn được ưu tiên trong mọi hợp tác.",

    tick_title: "Hợp tác cùng Tickmill",
    tick_text:
      "Zero To Hero đang hợp tác cùng Tickmill theo định hướng mở rộng mạng lưới đối tác và xây dựng hệ sinh thái chuyên nghiệp theo chuẩn quốc tế.",

    tick_pill_1: "Hợp tác đối tác",
    tick_pill_2: "Chuẩn quốc tế",
    tick_pill_3: "Hệ sinh thái chuyên nghiệp",

    partner_process_title: "Quy trình hợp tác",
    partner_process_sub:
      "Quy trình rõ ràng, phù hợp vận hành doanh nghiệp và hợp tác dài hạn.",

    partner_step_1_title: "Bước 01 — Đồng bộ",
    partner_step_1_text:
      "Đồng bộ kỳ vọng, tiêu chuẩn và nguyên tắc hợp tác.",

    partner_step_2_title: "Bước 02 — Triển khai",
    partner_step_2_text:
      "Triển khai theo cấu trúc và kỷ luật.",

    partner_step_3_title: "Bước 03 — Kiểm soát chất lượng",
    partner_step_3_text:
      "Duy trì chất lượng và tối ưu liên tục.",

    partner_step_4_title: "Bước 04 — Dài hạn",
    partner_step_4_text:
      "Hợp tác bền vững, minh bạch và lâu dài.",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",

    disclaimer:
      "Website dùng để giới thiệu doanh nghiệp.",
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
