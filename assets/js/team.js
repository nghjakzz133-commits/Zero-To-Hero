// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");

menuBtn?.addEventListener("click", () => {
  navDrawer.classList.toggle("show");
});

// ================= FOOTER YEAR =================
document.getElementById("year").textContent = new Date().getFullYear();

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

    team_kicker: "People",
    team_title: "Our Team Structure",
    team_sub: "A corporate-oriented team operating with discipline and professional standards.",

    team_section_title: "Core Team",
    team_section_sub: "Each role contributes to long-term ecosystem development and partner collaboration.",

    team_name_1: "Management Board",
    team_role_1: "Strategic direction, governance and long-term vision",

    team_name_2: "Operations Team",
    team_role_2: "Execution, coordination and operational discipline",

    team_name_3: "Partner Relations",
    team_role_3: "Global collaboration and partner ecosystem development",

    footer_tag: "Corporate Partner Network",
    disclaimer: "This website is for company introduction purposes only."
  },

  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_partnership: "Hợp tác",
    nav_team: "Đội ngũ",
    nav_market: "Thị trường",
    nav_media: "Truyền thông",
    nav_contact: "Liên hệ",

    team_kicker: "Nhân sự",
    team_title: "Cơ cấu đội ngũ",
    team_sub: "Đội ngũ vận hành theo tư duy doanh nghiệp và tiêu chuẩn chuyên nghiệp.",

    team_section_title: "Đội ngũ nòng cốt",
    team_section_sub: "Mỗi vai trò đóng góp vào hệ sinh thái và chiến lược dài hạn.",

    team_name_1: "Ban điều hành",
    team_role_1: "Định hướng chiến lược và quản trị tổng thể",

    team_name_2: "Vận hành",
    team_role_2: "Triển khai, phối hợp và kỷ luật vận hành",

    team_name_3: "Quan hệ đối tác",
    team_role_3: "Hợp tác quốc tế và phát triển hệ sinh thái",

    footer_tag: "Mạng lưới đối tác doanh nghiệp",
    disclaimer: "Website dùng cho mục đích giới thiệu doanh nghiệp."
  }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  ["btnEN","btnVI","btnEN2","btnVI2"].forEach(id=>{
    document.getElementById(id)?.classList.remove("active");
  });

  document.getElementById(lang==="en"?"btnEN":"btnVI")?.classList.add("active");
  document.getElementById(lang==="en"?"btnEN2":"btnVI2")?.classList.add("active");

  localStorage.setItem("zth_lang", lang);
}

document.getElementById("btnEN")?.onclick = ()=>setLang("en");
document.getElementById("btnVI")?.onclick = ()=>setLang("vi");
document.getElementById("btnEN2")?.onclick = ()=>setLang("en");
document.getElementById("btnVI2")?.onclick = ()=>setLang("vi");

setLang(localStorage.getItem("zth_lang") || "en");
