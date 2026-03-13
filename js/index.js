
import "./mousemove.js";
import "./burger.js";

// typed
const typed = new Typed("#worker", {
  strings: ["Web-developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 3000,
  loop: true,
  showCursor: false,
});

// swiper

const slider = new Swiper(".hero__photos", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

