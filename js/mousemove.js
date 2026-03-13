"use strict"

const hero = document.querySelector(".hero");
const heroBlock = document.querySelector(".hero__article");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (x - centerX) / centerX;
  const moveY = (y - centerY) / centerY;

  heroBlock.style.transform = `rotateX(${moveX * 20}deg) rotateY(${moveY * 20}deg) scale(1.05)`;
});


hero.addEventListener("mouseleave", () => {
  heroBlock.style.transform = `rotateX(0) rotateY(0) scale(1)`;
})