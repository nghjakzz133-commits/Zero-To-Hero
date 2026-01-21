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

// ================= I18N (MEDIA) =================
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    media_kicker: "Updates",
    media_title: "Media & Activities",
    media_sub:
      "Corporate updates, internal activities, and ecosystem development highlights.",

    media_section_1: "Corporate Updates",
    media_section_1_sub:
      "Official updates reflecting operational progress and strategic direction.",

    media_item_1_title: "Operational Development",
    media_item_1_text:
      "Internal process optimization and system development activities.",

    media_item_2_title: "Partner Collaboration",
    media_item_2_text:
      "Ongoing collaboration initiatives with strategic partners.",

    media_item_3_title: "Ecosystem Expansion",
    media_item_3_text:
      "Gradual expansion of internal teams and partner networks.",

    media_section_2: "Activities & Engagement",
    media_section_2_sub:
      "Highlights of internal coordination and ecosystem engagement.",

    media_activity_1: "Internal Coordination",
    media_activity_1_text:
      "Structured internal meetings, training sessions, and workflow alignment.",

    media_activity_2: "Strategic Planning",
    media_activity_2_text:
      "Strategic discussions focused on long-term sustainability and growth.",

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

    media_kicker: "Cập nhật",
    media_title: "Truyền thông & Hoạt động",
    media_sub:
      "Cập nhật doanh nghiệp, hoạt động nội bộ và phát triển hệ sinh thái.",

    media_section_1: "Cập nhật doanh nghiệp",
    media_section_1_sub:
      "Phản ánh tiến độ vận hành và định hướng chiến lược.",

    media_item_1_title: "Phát triển vận hành",
    media_item_1_text:
      "Tối ưu quy trình nội bộ và hệ thống.",

    media_item_2_title: "Hợp tác đối tác",
    media_item_2_text:
      "Triển khai hợp tác cùng đối tác chiến lược.",

    media_item_3_title: "Mở rộng hệ sinh thái",
    media_item_3_text:
      "Phát triển đội ngũ và mạng lưới.",

    media_section_2: "Hoạt động & Kết nối",
    media_section_2_sub:
      "Điểm nhấn hoạt động nội bộ.",

    media_activity_1: "Điều phối nội bộ",
    media_activity_1_text:
      "Họp nội bộ, đào tạo và đồng bộ.",

    media_activity_2: "Hoạch định chiến lược",
    media_activity_2_text:
      "Lập kế hoạch tăng trưởng bền vững.",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",

    disclaimer:
      "Nội dung nhằm cung cấp thông tin tổng quan về hệ sinh thái và định hướng hoạt động.",
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
