const laptopWidth = 1024;
const laptopLWidth = 1440;
const mobileWidth = 431;
const tabletWidth = 769;

const swiperReviews = new Swiper('#swiper-technologies', {
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    [mobileWidth]: {
      slidesPerView: 4,
    },
    [laptopWidth]: {
      slidesPerView: 5,
    },
  },
});

const reviewsButtonNext = document.querySelector('.technologies-button-next');
const reviewsButtonPrev = document.querySelector('.technologies-button-prev');

reviewsButtonNext?.addEventListener('click', () => swiperReviews.slideNext());
reviewsButtonPrev?.addEventListener('click', () => swiperReviews.slidePrev());
