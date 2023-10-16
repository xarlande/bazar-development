const swiper = new Swiper("#swiper-services", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,
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
