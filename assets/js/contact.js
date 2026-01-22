// MENU
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");
menuBtn?.addEventListener("click",()=>navDrawer.classList.toggle("show"));

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

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

    contact_kicker:"Connect",
    contact_title:"Contact & Corporate Presence",
    contact_sub:"Corporate-level communication and international orientation.",

    contact_info_title:"Business Communication",
    contact_info_text:
      "Zero To Hero operates with a corporate communication mindset. Official contact channels will be updated when appropriate.",

    contact_global_title:"Global Orientation",
    contact_global_text:
      "International operational perspective supporting long-term ecosystem development.",

    footer_tag:"Corporate Partner Network",
    disclaimer:"This content is for company introduction purposes only."
  },
  vi:{
    nav_home:"Trang chủ",
    nav_about:"Giới thiệu",
    nav_partnership:"Hợp tác",
    nav_team:"Đội ngũ",
    nav_market:"Thị trường",
    nav_media:"Truyền thông",
    nav_contact:"Liên hệ",

    contact_kicker:"Kết nối",
    contact_title:"Liên hệ & Hiện diện doanh nghiệp",
    contact_sub:"Giao tiếp cấp doanh nghiệp và định hướng quốc tế.",

    contact_info_title:"Giao tiếp doanh nghiệp",
    contact_info_text:
      "Zero To Hero vận hành theo tư duy giao tiếp doanh nghiệp. Các kênh liên hệ sẽ được cập nhật phù hợp.",

    contact_global_title:"Định hướng toàn cầu",
    contact_global_text:
      "Góc nhìn vận hành quốc tế, phát triển hệ sinh thái dài hạn.",

    footer_tag:"Mạng lưới đối tác doanh nghiệp",
    disclaimer:"Nội dung dùng cho mục đích giới thiệu doanh nghiệp."
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
