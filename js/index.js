const hamburger = document.querySelector(".hamburger");
const btnClose = document.querySelector(".btn-close");
const sideMenu = document.querySelector(".mobile-sidemenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
});
btnClose.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
});