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

reviewsButtonNext.addEventListener('click', () => swiperReviews.slideNext());
reviewsButtonPrev.addEventListener('click', () => swiperReviews.slidePrev());

const servicesItems = {
  seo: [
    {
      title: 'Landing page',
      titleIcon: 'image/services/card.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Business card',
      titleIcon: 'image/services/bag.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Corporate website',
      titleIcon: 'image/services/high-rise.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Landing page',
      titleIcon: 'image/services/card.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Business card',
      titleIcon: 'image/services/bag.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Corporate website',
      titleIcon: 'image/services/high-rise.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
  development: [
    {
      title: 'Landing page',
      titleIcon: 'image/services/card.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Business card',
      titleIcon: 'image/services/bag.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Corporate website',
      titleIcon: 'image/services/high-rise.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
  marketing: [
    {
      title: 'Landing page',
      titleIcon: 'image/services/card.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Business card',
      titleIcon: 'image/services/bag.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Corporate website',
      titleIcon: 'image/services/high-rise.svg',
      budget: '$1000',
      timeSpent: '14 days',
      forWhom: 'business',
      contentText: 'You will get complete information about each we offer. offer. offer. offer. offer.',
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
};
const ourProjectItems = {
  button1: [
    {
      title: 'Plumber1',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
  button2: [
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
  button3: [
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
  button4: [
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
    {
      title: 'Plumber',
      description: 'You will get complete information about each program we offer. There are several available options according to your needs',
      image: 'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      tags: ['Business card site', 'web site development'],
      actionForButton: () => window.open('https://bazar.club', '_blank'),
    },
  ],
};

const servicesButtons = document.querySelectorAll('#services .buttons-block button');
const servicesSwiperBody = document.querySelector('#swiper-services .swiper-wrapper');

const servicesSwiper = new Swiper('#swiper-services', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    [laptopWidth]: {
      slidesPerView: 2,
    },
    [laptopLWidth]: {
      slidesPerView: 3,
    },
  },
});

const servicesButtonNext = document.querySelector('.services-button-next');
const servicesButtonPrev = document.querySelector('.services-button-prev');

servicesButtonNext.addEventListener('click', () => {
  if (servicesSwiperBody.querySelectorAll('.swiper-slide').length) {
    servicesSwiper.slideNext();
  }
});
servicesButtonPrev.addEventListener('click', () => {
  if (servicesSwiperBody.querySelectorAll('.swiper-slide').length) {
    servicesSwiper.slidePrev();
  }
});

let currentServicesType = 'seo';

const generateItemsForServicesSwiper = () => {
  const container = document.createElement('div');

  servicesItems[currentServicesType].forEach((item) => {
    // prettier-ignore
    const content = `<div class='swiper-slide'>
              <div class='block-card'>
                <h3 class='title-block'>
                  <img src='${item.titleIcon}' alt='icon' />
                  ${item.title}
                </h3>
                <div class='main-block'>
                  <div class='item'>
                    <img
                      src='image/services/ion_wallet-outline.svg'
                      alt='icon'
                    />
                    <span class='name'>Budget:</span>
                    <span class='value'>${item.budget}</span>
                  </div>
                  <div class='item'>
                    <img src='image/services/ion_time-outline.svg' alt='icon' />
                    <span class='name'>Time spent:</span>
                    <span class='value'>${item.timeSpent}</span>
                  </div>
                  <div class='item'>
                    <img
                      src='image/services/mdi_target-account.svg'
                      alt='icon'
                    />
                    <span class='name'>For whom:</span>
                    <span class='value'
                      >${item.forWhom}</span
                    >
                  </div>
                </div>
                <div class='footer-block'>
                  <p class='footer-text'>
                    ${item.contentText}
                  </p>
                  <button class='button' onclick="(${item.actionForButton})()">
                    see more
                  </button>
                </div>
              </div>
            </div>`;

    container.innerHTML += content;
  });
  servicesSwiperBody.innerHTML = container.innerHTML;

  servicesSwiper.update();
  servicesSwiper.slideTo(0);
};

servicesButtons.forEach((element) => {
  if (element.getAttribute('value') === 'seo') {
    element.classList.add('button-active');
  }

  element.addEventListener('click', (event) => {
    currentServicesType = event.target.getAttribute('value');
    servicesButtons.forEach((item) => item.classList.remove('button-active'));
    event.target.classList.add('button-active');
    generateItemsForServicesSwiper();
  });
});

generateItemsForServicesSwiper();

const ourProjectButtons = document.querySelectorAll('#our-projects .buttons-block button');
const ourProjectSwiperBody = document.querySelector('#swiper-our-project .swiper-wrapper');

const ourProjectsSwiper = new Swiper('#swiper-our-project', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    [tabletWidth]: {
      slidesPerView: 2,
    },
  },
});

document.querySelector('.our-project-button-next').addEventListener('click', () => {
  if (ourProjectSwiperBody.querySelectorAll('.swiper-slide').length) {
    ourProjectsSwiper.slideNext();
  }
});

document.querySelector('.our-project-button-prev').addEventListener('click', () => {
  if (ourProjectSwiperBody.querySelectorAll('.swiper-slide').length) {
    ourProjectsSwiper.slidePrev();
  }
});

let currentOurProjectType = 'button2';

const generateItemsForOurProjectSwiper = () => {
  const container = document.createElement('div');

  ourProjectItems[currentOurProjectType].forEach((item) => {
    let buttons = '';
    item.tags.forEach((value) => {
      buttons += `<button class="button">${value}</button>`;
    });
    // prettier-ignore
    const content = `<div class="swiper-slide">
              <div class="project-block">
                <img src="${item.image}" alt="img" />
                <div class="our-project-block">
                  <p class="title">${item.title}</p>
                  <div class="link-block">
                    ${buttons}
                  </div>
                  <div class="description-block">
                    <p class="description">
                    ${item.description}
                    </p>
                    <div class="button-block">
                      <button class="button button-rounded" onclick="(${item.actionForButton})()"></button>
                    </div>
                  </div>
                </div>
                <div class="shadow"></div>
              </div>
            </div>`;

    container.innerHTML += content;
  });
  ourProjectSwiperBody.innerHTML = container.innerHTML;

  ourProjectsSwiper.update();
  ourProjectsSwiper.slideTo(0);
};

ourProjectButtons.forEach((element) => {
  if (element.getAttribute('value') === 'button2') {
    element.classList.add('button-active');
  }

  element.addEventListener('click', (event) => {
    currentOurProjectType = event.target.getAttribute('value');
    ourProjectButtons.forEach((item) => item.classList.remove('button-active'));
    event.target.classList.add('button-active');
    generateItemsForOurProjectSwiper();
  });
});

generateItemsForOurProjectSwiper();
