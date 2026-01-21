// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

if (menuBtn && navDrawer) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Footer year
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

    badge: "Corporate Partner Network",

    hero_title_1: "From",
    hero_title_2: "Zero",
    hero_title_3: "To",
    hero_title_4: "Hero",

    hero_subtitle:
      "Building sustainable growth through global partnerships, disciplined execution, and professional operations.",

    value_1_title: "Integrity",
    value_1_desc: "Transparency • Discipline • Trust",

    value_2_title: "Professionalism",
    value_2_desc: "Corporate mindset • Clear process",

    value_3_title: "Global Partnership",
    value_3_desc: "International collaboration • Growth",

    overview_title: "Company Overview",
    overview_sub:
      "Zero To Hero is a corporate team focusing on building partner networks and long-term value.",

    who_title: "Who We Are",
    who_text:
      "Zero To Hero is built with a corporate mindset and a disciplined operating culture. We focus on sustainable development, structured execution, and international collaboration.",

    pill_1: "Corporate Profile",
    pill_2: "Partner Network",
    pill_3: "Long-term Vision",

    mission_title: "Our Mission",
    mission_text:
      "To create a professional ecosystem with measurable standards, transparent operations, and high-integrity collaboration.",

    stat_1: "Corporate Standard",
    stat_2: "Partner Mindset",
    stat_3: "Sustainable Growth",

    partner_title: "Strategic Partnership",
    partner_sub:
      "We collaborate with global partners to strengthen our ecosystem and operational standards.",

    card_1_title: "International Collaboration",
    card_1_text:
      "A partnership-driven approach that focuses on long-term quality and sustainability.",

    card_2_title: "Professional Execution",
    card_2_text:
      "Clear workflow, structured operations, and disciplined communication standards.",

    card_3_title: "Integrity First",
    card_3_text:
      "We prioritize transparency, trust, and sustainable value over short-term performance.",

    disclaimer: "This website is for company introduction purposes only.",
    footer_tag: "Corporate Partner Network",
  },

  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_partnership: "Hợp tác",
    nav_team: "Đội ngũ",
    nav_market: "Thị trường",
    nav_media: "Truyền thông",
    nav_contact: "Liên hệ",

    badge: "Mạng lưới đối tác doanh nghiệp",

    hero_title_1: "Từ",
    hero_title_2: "Zero",
    hero_title_3: "đến",
    hero_title_4: "Hero",

    hero_subtitle:
      "Phát triển bền vững thông qua hợp tác quốc tế, kỷ luật vận hành và tiêu chuẩn thực thi chuyên nghiệp.",

    value_1_title: "Minh bạch",
    value_1_desc: "Chính trực • Kỷ luật • Niềm tin",

    value_2_title: "Chuyên nghiệp",
    value_2_desc: "Tư duy doanh nghiệp • Quy trình rõ ràng",

    value_3_title: "Hợp tác toàn cầu",
    value_3_desc: "Kết nối quốc tế • Tăng trưởng bền vững",

    overview_title: "Tổng quan doanh nghiệp",
    overview_sub:
      "Zero To Hero là đội ngũ doanh nghiệp tập trung xây dựng mạng lưới đối tác và giá trị dài hạn.",

    who_title: "Chúng tôi là ai",
    who_text:
      "Zero To Hero được xây dựng với tư duy doanh nghiệp và văn hoá vận hành kỷ luật. Chúng tôi tập trung phát triển bền vững, thực thi theo cấu trúc và hợp tác theo tiêu chuẩn quốc tế.",

    pill_1: "Hồ sơ doanh nghiệp",
    pill_2: "Mạng lưới đối tác",
    pill_3: "Tầm nhìn dài hạn",

    mission_title: "Sứ mệnh",
    mission_text:
      "Xây dựng một hệ sinh thái chuyên nghiệp với tiêu chuẩn đo lường rõ ràng, vận hành minh bạch và hợp tác dựa trên sự chính trực.",

    stat_1: "Chuẩn doanh nghiệp",
    stat_2: "Tư duy đối tác",
    stat_3: "Phát triển bền vững",

    partner_title: "Hợp tác chiến lược",
    partner_sub:
      "Chúng tôi hợp tác cùng các đối tác quốc tế để củng cố hệ sinh thái và nâng cao tiêu chuẩn vận hành.",

    card_1_title: "Kết nối quốc tế",
    card_1_text:
      "Hướng đi dựa trên hợp tác, tập trung vào chất lượng dài hạn và sự bền vững.",

    card_2_title: "Thực thi chuyên nghiệp",
    card_2_text:
      "Quy trình rõ ràng, vận hành có cấu trúc và tiêu chuẩn giao tiếp kỷ luật.",

    card_3_title: "Ưu tiên chính trực",
    card_3_text:
      "Đặt minh bạch và niềm tin lên hàng đầu, hướng đến giá trị dài hạn thay vì ngắn hạn.",

    disclaimer: "Website này chỉ phục vụ mục đích giới thiệu doanh nghiệp.",
    footer_tag: "Mạng lưới đối tác doanh nghiệp",
  },
};

function setLang(lang) {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Active buttons
  const btnEN = document.getElementById("btnEN");
  const btnVI = document.getElementById("btnVI");
  const btnEN2 = document.getElementById("btnEN2");
  const btnVI2 = document.getElementById("btnVI2");

  [btnEN, btnVI, btnEN2, btnVI2].forEach((b) => b && b.classList.remove("active"));
  if (lang === "en") {
    btnEN && btnEN.classList.add("active");
    btnEN2 && btnEN2.classList.add("active");
  } else {
    btnVI && btnVI.classList.add("active");
    btnVI2 && btnVI2.classList.add("active");
  }

  localStorage.setItem("zth_lang", lang);
}

function initLang() {
  const saved = localStorage.getItem("zth_lang") || "en";
  setLang(saved);
}

document.getElementById("btnEN")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnVI")?.addEventListener("click", () => setLang("vi"));
document.getElementById("btnEN2")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnVI2")?.addEventListener("click", () => setLang("vi"));

initLang();
