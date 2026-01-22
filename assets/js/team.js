// MENU
const menuBtn=document.getElementById("menuBtn");
const navDrawer=document.getElementById("navDrawer");
menuBtn&&menuBtn.addEventListener("click",()=>navDrawer.classList.toggle("show"));

// YEAR
document.getElementById("year").textContent=new Date().getFullYear();

// I18N
const i18n={
  en:{
    nav_home:"Home",
    nav_about:"About",
    nav_partnership:"Partnership",
    nav_team:"Team",
    nav_market:"Market",
    nav_media:"Media",
    nav_contact:"Contact",

    team_kicker:"People",
    team_title:"Our Core Team",
    team_sub:"Professionals driving long-term ecosystem growth.",

    team_1_name:"Core Management",
    team_1_role:"Strategic direction & operational governance",

    team_2_name:"Market Operations",
    team_2_role:"Execution, coordination & performance monitoring",

    team_3_name:"Technology & Support",
    team_3_role:"Infrastructure, systems & platform support",

    footer_tag:"Corporate Partner Network"
  },
  vi:{
    nav_home:"Trang chủ",
    nav_about:"Giới thiệu",
    nav_partnership:"Hợp tác",
    nav_team:"Đội ngũ",
    nav_market:"Thị trường",
    nav_media:"Truyền thông",
    nav_contact:"Liên hệ",

    team_kicker:"Con người",
    team_title:"Đội ngũ cốt lõi",
    team_sub:"Những người xây dựng hệ sinh thái dài hạn.",

    team_1_name:"Ban điều hành",
    team_1_role:"Định hướng chiến lược & quản trị",

    team_2_name:"Vận hành thị trường",
    team_2_role:"Triển khai & kiểm soát hiệu suất",

    team_3_name:"Công nghệ & hỗ trợ",
    team_3_role:"Hạ tầng, hệ thống & nền tảng",

    footer_tag:"Mạng lưới đối tác doanh nghiệp"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(i18n[lang][k]) el.textContent=i18n[lang][k];
  });
  localStorage.setItem("zth_lang",lang);
}

["btnEN","btnEN2"].forEach(id=>document.getElementById(id)?.addEventListener("click",()=>setLang("en")));
["btnVI","btnVI2"].forEach(id=>document.getElementById(id)?.addEventListener("click",()=>setLang("vi")));

setLang(localStorage.getItem("zth_lang")||"en");
