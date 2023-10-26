const laptopWidth = 1024;
const laptopLWidth = 1440;
const mobileWidth = 431;
const tabletWidth = 769;

const swiperReviews = new Swiper('#swiper-reviews', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    [mobileWidth]: {
      slidesPerView: 2,
    },
    [laptopLWidth]: {
      slidesPerView: 4,
    },
  },
});

const reviewsButtonNext = document.querySelector('.reviews-button-next');
const reviewsButtonPrev = document.querySelector('.reviews-button-prev');

reviewsButtonNext?.addEventListener('click', () => swiperReviews.slideNext());
reviewsButtonPrev?.addEventListener('click', () => swiperReviews.slidePrev());
