import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10.3.1/+esm";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

const buttonNext = document.querySelector(".services-button-next");
const buttonPrev = document.querySelector(".services-button-prev");

buttonNext.addEventListener("click", () => swiper.slideNext());
buttonPrev.addEventListener("click", () => swiper.slidePrev());
