// MENU
const menuBtn = document.getElementById("menuBtn");
const navDrawer = document.getElementById("navDrawer");
menuBtn?.addEventListener("click",()=>navDrawer.classList.toggle("show"));

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LANG (placeholder – sau này gộp i18n)
document.getElementById("btnEN")?.addEventListener("click",()=>alert("EN"));
document.getElementById("btnVI")?.addEventListener("click",()=>alert("VI"));
