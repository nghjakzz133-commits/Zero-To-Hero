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

// ================= I18N =================
const i18n = {
  en: {
    // ===== NAV =====
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_media: "Media",
    nav_contact: "Contact",

    badge: "Corporate Partner Network",

    // ===== HERO =====
    hero_title_1: "From",
    hero_title_2: "Zero",
    hero_title_3: "To",
    hero_title_4: "Hero",
    hero_subtitle:
      "Building sustainable growth through global partnerships, disciplined execution, and professional operations.",

    // ===== VALUES =====
    value_1_title: "Integrity",
    value_1_desc: "Transparency • Discipline • Trust",
    value_2_title: "Professionalism",
    value_2_desc: "Corporate mindset • Clear process",
    value_3_title: "Global Partnership",
    value_3_desc: "International collaboration • Growth",

    // ===== OVERVIEW =====
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

    // ===== PARTNERSHIP =====
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

    partner_core_title: "Partnership Principles",
    partner_core_sub:
      "We build partnerships based on integrity, professionalism, and sustainable collaboration.",

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

    tick_title: "Tickmill Collaboration",
    tick_text:
      "Zero To Hero is currently collaborating with Tickmill in the direction of expanding our partner network and strengthening a professional ecosystem with international standards.",

    // ===== ABOUT =====
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

    about_value_1: "Integrity",
    about_value_1_text: "Transparency, discipline, and clear standards.",
    about_value_2: "Professional Culture",
    about_value_2_text: "Corporate mindset in every workflow and communication.",
    about_value_3: "Long-term Vision",
    about_value_3_text: "Sustainable growth through global collaboration.",

    // ===== TEAM =====
    team_kicker: "Leadership & Operations",
    team_title: "Our Team",
    team_sub:
      "A professional corporate team built on discipline, structure, and long-term execution.",

    team_1_name: "Managing Director",
    team_1_role: "Strategy • Vision • Leadership",
    team_2_name: "Operations Lead",
    team_2_role: "Process • Execution • Standards",
    team_3_name: "Business Development",
    team_3_role: "Growth • Partnerships • Network",
    team_4_name: "Partner Relations",
    team_4_role: "Communication • Support • Quality",
    team_5_name: "Research & Analysis",
    team_5_role: "Data • Discipline • Insights",
    team_6_name: "Compliance & Culture",
    team_6_role: "Integrity • Standards • Long-term",

    // ===== MARKET =====
    market_kicker: "Live Monitoring",
    market_title: "Online Market Movement",
    market_sub:
      "Realtime public market charts for monitoring general volatility.",
    market_widget_title: "Live Market Chart",
    market_widget_text:
      "This section can be upgraded later with professional widgets (TradingView) or internal dashboards.",
    market_placeholder: "Widget placeholder (Update later)",

    // ===== MEDIA (FULL – CÁCH 3) =====
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

    // ===== CONTACT =====
    contact_kicker: "Connect",
    contact_title: "Contact",
    contact_sub:
      "This section can be updated later with official corporate channels.",

    contact_info_title: "Contact Information",
    contact_info_text:
      "Placeholder content. Update later with email, phone, address, and business hours.",

    contact_email: "Email",
    contact_phone: "Phone",
    contact_location: "Location",
    contact_location_value: "Vietnam",

    // ===== FOOTER =====
    footer_tag: "Corporate Partner Network",

    // ===== DISCLAIMER (OPTION 1) =====
    disclaimer:
      "This content is provided to present an overview of our ecosystem and operational direction.",
 about_core_title: "Core Values",
about_core_sub: "Our operating principles guide every collaboration and decision.",

about_stat_label_1: "Operating Model",
about_stat_label_2: "Collaboration",
about_stat_label_3: "Long-term Vision",
 about_stat_label_1: "Operating Model",
about_stat_label_2: "Collaboration",
about_stat_label_3: "Long-term Vision",

about_core_title: "Core Values",
about_core_sub: "Our operating principles guide every collaboration and decision.",
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

    value_1_title: "Chính trực",
    value_1_desc: "Minh bạch • Kỷ luật • Niềm tin",
    value_2_title: "Chuyên nghiệp",
    value_2_desc: "Tư duy doanh nghiệp • Quy trình rõ ràng",
    value_3_title: "Hợp tác toàn cầu",
    value_3_desc: "Kết nối quốc tế • Tăng trưởng bền vững",

    overview_title: "Tổng quan doanh nghiệp",
    overview_sub:
      "Zero To Hero là đội ngũ doanh nghiệp tập trung xây dựng mạng lưới đối tác và giá trị dài hạn.",

    who_title: "Chúng tôi là ai",
    who_text:
      "Zero To Hero được xây dựng với tư duy doanh nghiệp và văn hoá vận hành kỷ luật.",

    pill_1: "Hồ sơ doanh nghiệp",
    pill_2: "Mạng lưới đối tác",
    pill_3: "Tầm nhìn dài hạn",

    mission_title: "Sứ mệnh",
    mission_text:
      "Xây dựng hệ sinh thái chuyên nghiệp với tiêu chuẩn rõ ràng và hợp tác minh bạch.",

    stat_1: "Chuẩn doanh nghiệp",
    stat_2: "Tư duy đối tác",
    stat_3: "Phát triển bền vững",

    partner_title: "Hợp tác chiến lược",
    partner_sub:
      "Hợp tác cùng đối tác quốc tế để củng cố hệ sinh thái.",

    card_1_title: "Kết nối quốc tế",
    card_1_text: "Hợp tác dài hạn theo tiêu chuẩn quốc tế.",
    card_2_title: "Thực thi chuyên nghiệp",
    card_2_text: "Vận hành có cấu trúc và kỷ luật.",
    card_3_title: "Ưu tiên chính trực",
    card_3_text: "Minh bạch và niềm tin là nền tảng.",

    partner_core_title: "Nguyên tắc hợp tác",
    partner_core_sub:
      "Xây dựng hợp tác dựa trên chính trực và phát triển bền vững.",

    tick_pill_1: "Hợp tác đối tác",
    tick_pill_2: "Chuẩn quốc tế",
    tick_pill_3: "Hệ sinh thái chuyên nghiệp",

    partner_process_title: "Quy trình hợp tác",
    partner_process_sub:
      "Quy trình rõ ràng, phù hợp vận hành doanh nghiệp.",

    partner_step_1_title: "Bước 01 — Đồng bộ",
    partner_step_1_text:
      "Đồng bộ kỳ vọng và tiêu chuẩn hợp tác.",
    partner_step_2_title: "Bước 02 — Triển khai",
    partner_step_2_text:
      "Triển khai theo cấu trúc và kỷ luật.",
    partner_step_3_title: "Bước 03 — Kiểm soát",
    partner_step_3_text:
      "Duy trì chất lượng và tối ưu.",
    partner_step_4_title: "Bước 04 — Dài hạn",
    partner_step_4_text:
      "Hợp tác bền vững và lâu dài.",

    tick_title: "Hợp tác cùng Tickmill",
    tick_text:
      "Zero To Hero hợp tác cùng Tickmill theo tiêu chuẩn quốc tế.",

    // ===== MEDIA =====
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

    // ===== CONTACT =====
    contact_kicker: "Kết nối",
    contact_title: "Liên hệ",
    contact_sub:
      "Có thể cập nhật sau với kênh chính thức.",

    contact_info_title: "Thông tin liên hệ",
    contact_info_text:
      "Nội dung mẫu, cập nhật sau.",

    contact_email: "Email",
    contact_phone: "Số điện thoại",
    contact_location: "Khu vực",
    contact_location_value: "Việt Nam",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",

    // ===== DISCLAIMER =====
    disclaimer:
      "Nội dung được xây dựng nhằm cung cấp thông tin tổng quan về hệ sinh thái và định hướng hoạt động.",
  about_core_title: "Giá trị cốt lõi",
about_core_sub: "Nguyên tắc vận hành định hướng mọi hợp tác và quyết định.",

about_stat_label_1: "Mô hình vận hành",
about_stat_label_2: "Hợp tác",
about_stat_label_3: "Tầm nhìn dài hạn",
 about_stat_label_1: "Mô hình vận hành",
about_stat_label_2: "Hợp tác",
about_stat_label_3: "Tầm nhìn dài hạn",

about_core_title: "Giá trị cốt lõi",
about_core_sub: "Nguyên tắc vận hành định hướng mọi hợp tác và quyết định.",
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
