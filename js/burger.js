const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".header__burger");
const closeBtn = document.querySelector(".header__close-btn");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show-menu");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("show-menu");
  }
});