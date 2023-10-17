const swiperServices = new Swiper("#swiper-services", {
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

const servicesButtonNext = document.querySelector(".services-button-next");
const servicesButtonPrev = document.querySelector(".services-button-prev");

servicesButtonNext.addEventListener("click", () => swiperServices.slideNext());
servicesButtonPrev.addEventListener("click", () => swiperServices.slidePrev());

const swiperReviews = new Swiper('#swiper-reviews', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 4,
    },
  },
})

const reviewsButtonNext = document.querySelector('.reviews-button-next')
const reviewsButtonPrev = document.querySelector('.reviews-button-prev')

reviewsButtonNext.addEventListener('click', () => swiperReviews.slideNext())
reviewsButtonPrev.addEventListener('click', () => swiperReviews.slidePrev())

