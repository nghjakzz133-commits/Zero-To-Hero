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

// ================= I18N (ABOUT ONLY) =================
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    about_kicker: "Company Profile",
    about_title: "About Zero To Hero",
    about_sub:
      "A corporate team focusing on disciplined operations, partner networks, and long-term value.",

    about_who_title: "Who We Are",
    about_who_text:
      "Zero To Hero is built with a corporate mindset. We focus on structured execution, professional communication, and a long-term operating model designed for sustainable growth.",

    about_focus_title: "Our Focus",
    about_focus_text:
      "We develop internal standards, build operational frameworks, and maintain an ecosystem driven by integrity, professionalism, and transparent collaboration.",

    about_focus_1: "Structured Operations",
    about_focus_2: "Partner Growth",
    about_focus_3: "Sustainable Value",

    stat_1: "Corporate Standard",
    stat_2: "Partner Mindset",
    stat_3: "Sustainable Growth",

    about_stat_label_1: "Operating Model",
    about_stat_label_2: "Collaboration",
    about_stat_label_3: "Long-term Vision",

    about_core_title: "Core Values",
    about_core_sub:
      "Our operating principles guide every collaboration and decision.",

    about_value_1: "Integrity",
    about_value_1_text: "Transparency, discipline, and clear standards.",
    about_value_2: "Professional Culture",
    about_value_2_text:
      "Corporate mindset in every workflow and communication.",
    about_value_3: "Long-term Vision",
    about_value_3_text:
      "Sustainable growth through global collaboration.",

    footer_tag: "Corporate Partner Network",

    disclaimer:
      "This content is provided to present an overview of our ecosystem and operational direction.",
  },

  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_partnership: "Hợp tác",
    nav_team: "Đội ngũ",
    nav_market: "Thị trường",
    nav_media: "Truyền thông",
    nav_contact: "Liên hệ",

    about_kicker: "Hồ sơ doanh nghiệp",
    about_title: "Về Zero To Hero",
    about_sub:
      "Đội ngũ doanh nghiệp tập trung vận hành kỷ luật, phát triển đối tác và giá trị dài hạn.",

    about_who_title: "Chúng tôi là ai",
    about_who_text:
      "Zero To Hero được xây dựng với tư duy doanh nghiệp, chú trọng thực thi có cấu trúc, giao tiếp chuyên nghiệp và định hướng dài hạn.",

    about_focus_title: "Trọng tâm hoạt động",
    about_focus_text:
      "Phát triển tiêu chuẩn nội bộ, xây dựng khung vận hành và duy trì hệ sinh thái minh bạch, chuyên nghiệp.",

    about_focus_1: "Vận hành có cấu trúc",
    about_focus_2: "Phát triển đối tác",
    about_focus_3: "Giá trị bền vững",

    stat_1: "Chuẩn doanh nghiệp",
    stat_2: "Tư duy đối tác",
    stat_3: "Phát triển bền vững",

    about_stat_label_1: "Mô hình vận hành",
    about_stat_label_2: "Hợp tác",
    about_stat_label_3: "Tầm nhìn dài hạn",

    about_core_title: "Giá trị cốt lõi",
    about_core_sub:
      "Nguyên tắc vận hành định hướng mọi hợp tác và quyết định.",

    about_value_1: "Chính trực",
    about_value_1_text: "Minh bạch, kỷ luật và tiêu chuẩn rõ ràng.",
    about_value_2: "Văn hoá chuyên nghiệp",
    about_value_2_text:
      "Tư duy doanh nghiệp trong mọi quy trình và giao tiếp.",
    about_value_3: "Tầm nhìn dài hạn",
    about_value_3_text:
      "Phát triển bền vững thông qua hợp tác toàn cầu.",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",

    disclaimer:
      "Nội dung nhằm cung cấp thông tin tổng quan về hệ sinh thái và định hướng vận hành.",
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
