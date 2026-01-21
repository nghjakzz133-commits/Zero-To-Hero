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
// ===== PARTNERSHIP (EXTRA) =====
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
    // ===== ABOUT PAGE =====
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

    // ===== PARTNERSHIP PAGE =====
    partner_kicker: "Collaboration",
    partner_page_title: "Strategic Partnership",
    partner_page_sub:
      "We collaborate with global partners to strengthen standards, systems, and long-term growth.",

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

    // ===== TEAM PAGE =====
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

    // ===== MARKET PAGE =====
    market_kicker: "Live Monitoring",
    market_title: "Online Market Movement",
    market_sub: "Realtime public market charts for monitoring general volatility.",
    market_widget_title: "Live Market Chart",
    market_widget_text:
      "This section can be upgraded later with professional widgets (TradingView) or internal dashboards.",
    market_placeholder: "Widget placeholder (Update later)",

    // ===== MEDIA PAGE =====
    media_kicker: "Updates",
    media_title: "Media & Activities",
    media_sub:
      "Corporate updates, events, and internal activities will be published here.",

    media_1_title: "Company Update",
    media_1_text: "Placeholder for corporate announcements and milestones.",

    media_2_title: "Community Activity",
    media_2_text: "Placeholder for events, training schedules, and internal highlights.",

    media_3_title: "Press & Branding",
    media_3_text: "Placeholder for branding materials, photos, and references.",

    // ===== CONTACT PAGE =====
    contact_kicker: "Connect",
    contact_title: "Contact",
    contact_sub: "This section can be updated later with official corporate channels.",

    contact_info_title: "Contact Information",
    contact_info_text:
      "Placeholder content. Update later with email, phone, address, and business hours.",

    contact_email: "Email",
    contact_phone: "Phone",
    contact_location: "Location",
    contact_location_value: "Vietnam",
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

    // ===== ABOUT PAGE =====
    about_kicker: "Hồ sơ doanh nghiệp",
    about_title: "Giới thiệu Zero To Hero",
    about_sub:
      "Đội ngũ doanh nghiệp tập trung vận hành kỷ luật, phát triển mạng lưới đối tác và giá trị dài hạn.",

    about_who_title: "Chúng tôi là ai",
    about_who_text:
      "Zero To Hero được xây dựng theo tư duy doanh nghiệp. Chúng tôi tập trung thực thi theo cấu trúc, giao tiếp chuyên nghiệp và mô hình vận hành dài hạn hướng đến tăng trưởng bền vững.",

    about_focus_title: "Trọng tâm phát triển",
    about_focus_text:
      "Chúng tôi xây dựng tiêu chuẩn nội bộ, phát triển khung vận hành và duy trì hệ sinh thái dựa trên chính trực, chuyên nghiệp và hợp tác minh bạch.",

    about_focus_1: "Vận hành có cấu trúc",
    about_focus_2: "Phát triển đối tác",
    about_focus_3: "Giá trị bền vững",

    about_value_1: "Chính trực",
    about_value_1_text: "Minh bạch, kỷ luật và tiêu chuẩn rõ ràng.",

    about_value_2: "Văn hoá chuyên nghiệp",
    about_value_2_text: "Tư duy doanh nghiệp trong mọi quy trình và giao tiếp.",

    about_value_3: "Tầm nhìn dài hạn",
    about_value_3_text: "Tăng trưởng bền vững thông qua hợp tác quốc tế.",

    // ===== PARTNERSHIP PAGE =====
    partner_kicker: "Hợp tác",
    partner_page_title: "Hợp tác chiến lược",
    partner_page_sub:
      "Chúng tôi hợp tác cùng đối tác quốc tế để củng cố tiêu chuẩn, hệ thống và tăng trưởng dài hạn.",

    partner_block_1: "Mạng lưới đối tác",
    partner_block_1_text:
      "Xây dựng hợp tác dài hạn với đối tác quốc tế và mạng lưới chất lượng cao.",

    partner_block_2: "Chuẩn vận hành",
    partner_block_2_text:
      "Quy trình rõ ràng, thực thi kỷ luật và giao tiếp chuyên nghiệp.",

    partner_block_3: "Chính trực",
    partner_block_3_text:
      "Luôn ưu tiên minh bạch và niềm tin trong mọi hợp tác.",

    tick_title: "Hợp tác cùng Tickmill",
    tick_text:
      "Zero To Hero hiện đang hợp tác cùng Tickmill theo định hướng mở rộng mạng lưới đối tác và củng cố hệ sinh thái chuyên nghiệp theo tiêu chuẩn quốc tế.",

    // ===== TEAM PAGE =====
    team_kicker: "Điều hành & Vận hành",
    team_title: "Đội ngũ",
    team_sub:
      "Đội ngũ doanh nghiệp vận hành chuyên nghiệp dựa trên kỷ luật, cấu trúc và thực thi dài hạn.",

    team_1_name: "Giám đốc điều hành",
    team_1_role: "Chiến lược • Tầm nhìn • Lãnh đạo",

    team_2_name: "Trưởng vận hành",
    team_2_role: "Quy trình • Thực thi • Tiêu chuẩn",

    team_3_name: "Phát triển kinh doanh",
    team_3_role: "Tăng trưởng • Hợp tác • Mạng lưới",

    team_4_name: "Đối tác & Quan hệ",
    team_4_role: "Giao tiếp • Hỗ trợ • Chất lượng",

    team_5_name: "Nghiên cứu & Phân tích",
    team_5_role: "Dữ liệu • Kỷ luật • Góc nhìn",

    team_6_name: "Tuân thủ & Văn hoá",
    team_6_role: "Chính trực • Tiêu chuẩn • Dài hạn",

    // ===== MARKET PAGE =====
    market_kicker: "Theo dõi trực tuyến",
    market_title: "Biến động thị trường",
    market_sub: "Biểu đồ thị trường công khai theo thời gian thực để theo dõi biến động.",
    market_widget_title: "Biểu đồ trực tuyến",
    market_widget_text:
      "Khu vực này có thể nâng cấp sau bằng widget chuyên nghiệp (TradingView) hoặc dashboard nội bộ.",
    market_placeholder: "Khu vực widget (Cập nhật sau)",

    // ===== MEDIA PAGE =====
    media_kicker: "Cập nhật",
    media_title: "Truyền thông & Hoạt động",
    media_sub:
      "Các cập nhật doanh nghiệp, sự kiện và hoạt động nội bộ sẽ được đăng tại đây.",

    media_1_title: "Cập nhật doanh nghiệp",
    media_1_text: "Nơi đăng thông báo, cột mốc và tin tức nội bộ.",

    media_2_title: "Hoạt động cộng đồng",
    media_2_text: "Nơi đăng sự kiện, lịch đào tạo và điểm nhấn hoạt động.",

    media_3_title: "Hình ảnh & Thương hiệu",
    media_3_text: "Nơi đăng tài liệu branding, hình ảnh và tư liệu tham khảo.",

    // ===== CONTACT PAGE =====
    contact_kicker: "Kết nối",
    contact_title: "Liên hệ",
    contact_sub: "Mục này có thể cập nhật sau với kênh chính thức của doanh nghiệp.",

    contact_info_title: "Thông tin liên hệ",
    contact_info_text:
      "Nội dung mẫu. Cập nhật sau với email, số điện thoại, địa chỉ và thời gian làm việc.",

    contact_email: "Email",
    contact_phone: "Số điện thoại",
    contact_location: "Khu vực",
    contact_location_value: "Việt Nam",
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
