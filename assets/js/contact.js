// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

if (menuBtn && navDrawer) {
  menuBtn.addEventListener("click", () => {
    navDrawer.classList.toggle("show");
  });
}

// ================= FOOTER YEAR =================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================= I18N =================
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    contact_kicker: "Connect",
    contact_title: "Contact & Corporate Presence",
    contact_sub: "Corporate-level communication and international business orientation.",

    contact_info_title: "Business Communication",
    contact_info_text:
      "Zero To Hero operates with a corporate communication mindset. Official contact channels will be updated when appropriate to ensure clarity, security, and professional alignment.",

    contact_global_title: "Global Orientation",
    contact_global_text:
      "Zero To Hero maintains an international operational perspective, supporting cross-border collaboration and long-term ecosystem development.",

    stat_1: "Global",
    stat_label_1: "Operating Scope",
    stat_2: "Multi-Region",
    stat_label_2: "Partner Network",
    stat_3: "Long-term",
    stat_label_3: "Strategic Focus",

    footer_tag: "Corporate Partner Network",
    disclaimer: "This content is provided to present an overview of our ecosystem and operational direction."
  },

  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_partnership: "Hợp tác",
    nav_team: "Đội ngũ",
    nav_market: "Thị trường",
    nav_media: "Truyền thông",
    nav_contact: "Liên hệ",

    contact_kicker: "Kết nối",
    contact_title: "Liên hệ & Hiện diện doanh nghiệp",
    contact_sub: "Giao tiếp cấp doanh nghiệp và định hướng kinh doanh quốc tế.",

    contact_info_title: "Giao tiếp doanh nghiệp",
    contact_info_text:
      "Zero To Hero vận hành theo tư duy giao tiếp doanh nghiệp. Các kênh liên hệ chính thức sẽ được cập nhật phù hợp.",

    contact_global_title: "Định hướng toàn cầu",
    contact_global_text:
      "Zero To Hero duy trì góc nhìn vận hành quốc tế, hỗ trợ hợp tác xuyên biên giới và phát triển hệ sinh thái dài hạn.",

    stat_1: "Toàn cầu",
    stat_label_1: "Phạm vi hoạt động",
    stat_2: "Đa khu vực",
    stat_label_2: "Mạng lưới đối tác",
    stat_3: "Dài hạn",
    stat_label_3: "Chiến lược phát triển",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",
    disclaimer: "Nội dung nhằm cung cấp thông tin tổng quan về hệ sinh thái và định hướng vận hành."
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  ["btnEN","btnVI","btnEN2","btnVI2"].forEach(id=>{
    document.getElementById(id)?.classList.remove("active");
  });

  document.getElementById(lang === "en" ? "btnEN" : "btnVI")?.classList.add("active");
  document.getElementById(lang === "en" ? "btnEN2" : "btnVI2")?.classList.add("active");

  localStorage.setItem("zth_lang", lang);
}

document.getElementById("btnEN")?.onclick = () => setLang("en");
document.getElementById("btnVI")?.onclick = () => setLang("vi");
document.getElementById("btnEN2")?.onclick = () => setLang("en");
document.getElementById("btnVI2")?.onclick = () => setLang("vi");

setLang(localStorage.getItem("zth_lang") || "en");
