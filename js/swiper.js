const laptopWidth = 1024;
const laptopLWidth = 1440;
const mobileWidth = 431;
const tabletWidth = 769;

const swiperReviews = new Swiper('#swiper-technologies', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    [mobileWidth]: {
      slidesPerView: 2,
    },
    [laptopWidth]: {
      slidesPerView: 2,
    },
  },
});

const reviewsButtonNext = document.querySelector('.technologies-button-next');
const reviewsButtonPrev = document.querySelector('.technologies-button-prev');

reviewsButtonNext?.addEventListener('click', () => swiperReviews.slideNext());
reviewsButtonPrev?.addEventListener('click', () => swiperReviews.slidePrev());
