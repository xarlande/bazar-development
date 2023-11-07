particlesJS.load('particles-js', 'assets/particles.json');
particlesJS.load('particles-js-duplicate', 'assets/particles.json');

const buttonToBazar = document.querySelectorAll('.button-to-bazar');

buttonToBazar.forEach(item =>
  item.addEventListener('click', () => {
    window.open('https://www.bazar.club', '_blank');
  })
);

const buttonToScrollFirstSection = document.querySelector('#button-scroll-to-first-section');

if (buttonToScrollFirstSection) {
  const firstSection = document.querySelector('section');

  buttonToScrollFirstSection.addEventListener('click', () => {
    firstSection.scrollIntoView({behavior: 'smooth', block: 'center'});
  });
}

const selectForOrderTheService = document.querySelector('#select-for-order-the-service');
const selectDropdown = selectForOrderTheService.querySelector('.dropdown-body');
const dropdownItems = selectDropdown.querySelectorAll('.dropdown-item');

selectForOrderTheService.addEventListener('click', event => {
  event.stopPropagation();
  selectForOrderTheService.classList.toggle('select-open');
});
selectDropdown.addEventListener('click', event => {
  event.stopPropagation();
});
dropdownItems.forEach(component => {
  component.addEventListener('click', () => {
    selectForOrderTheService.classList.remove('select-open');
  });
});

const openServices = document.querySelector('.open-header-services');
const header = document.querySelector('header');
const burgerBtn = document.querySelector('.burger-btn');

const closeBurgerBtn = () => {
  header.classList.remove('open-burger');
  document.body.style = undefined;
};
const openBurgerBtn = () => {
  header.classList.add('open-burger');
  document.body.style = 'overflow: hidden;';
};

openServices.addEventListener('click', () => {
  if (header.attributes['open-services']) {
    header.attributes.removeNamedItem('open-services');
  } else {
    header.setAttribute('open-services', '');
  }
});
burgerBtn.addEventListener('click', () => {
  if (header.classList.contains('open-burger')) {
    closeBurgerBtn();
  } else {
    openBurgerBtn();
  }
});

const buttonToForm = document.querySelectorAll('.button-to-form');
const form = document.querySelector('#order-the-service .modal');

buttonToForm.forEach(element => {
  element.addEventListener('click', () => {
    closeBurgerBtn();
    form.scrollIntoView({behavior: 'smooth', block: 'center'});
  });
});

const menuDropdownList = document.querySelectorAll('.menu-dropdown');

menuDropdownList.forEach(menuDropdown => {
  menuDropdown.addEventListener('click', event => {
    const target = event.target;
    const menu = target.closest('.menu-dropdown');
    if (target.closest('.dropdown-title')) {
      menu.classList.toggle('open');
    }
  });
});

const menuChildDropdownList = document.querySelectorAll('.menu-child-dropdown');

menuChildDropdownList.forEach(menuChildDropdown => {
  menuChildDropdown.addEventListener('click', event => {
    const target = event.target;
    const menu = target.closest('.menu-child-dropdown');

    menuChildDropdownList.forEach(element => {
      if (element !== menuChildDropdown) {
        element.classList.remove('open');
      }
    });

    if (target.closest('.menu-child-title')) {
      menu.classList.toggle('open');
    }
  });
});

let ourProjectCurrentFilter = 'all';

const ourProjectLoadData = [
  {
    title: 'Plumber',
    image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
    description:
      'You will get complete information about each program we offer. There are several available options according to your needs',
    link: '',
  },
  {
    title: 'Plumber',
    image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
    description:
      'You will get complete information about each program we offer. There are several available options according to your needs',
    link: '',
  },
];
const ourProjectData = {
  all: [
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image17.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image16.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
  ],
  landing: [
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image17.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image16.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
  ],
  business: [
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image17.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image16.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
  ],
  corporate: [
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image17.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image16.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
  ],
  store: [
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image13.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image14.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image: 'http://localhost:63342/bazar-development/image/ourProject/image16.png',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
    {
      title: 'Plumber',
      image:
        'https://fastly.picsum.photos/id/916/1000/1000.jpg?hmac=vZFIy_I2jjSzf_Y_JCM_UH7-xPdATxuUvPCRvXARFaQ',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs',
      link: '',
    },
  ],
};

const ourProjectBody = document.querySelector('#our-project .content');
const ourProjectGenerateItems = () => {
  let content = '';

  ourProjectData[ourProjectCurrentFilter].forEach(item => {
    content += `<div class="project-block">
            <img alt="img" src="${item.image}">
            <div class="our-project-block">
              <p class="title">${item.title}</p>
              <div class="link-block">
                <button class="button">Business card site</button><button class="button">web site development</button>
              </div>
              <div class="description-block">
                <p class="description">
                  ${item.description}
                </p>
                <div class="button-block">
                  <button class="button button-rounded" onclick="(() => window.open('${item.link}', '_blank'))()"></button>
                </div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>`;
  });

  ourProjectBody.innerHTML = content;
};
const ourProjectDownloadMore = document.querySelector('.download-more');
const ourProjectDownloadButton = ourProjectDownloadMore.querySelector('.download-more-button');
const ourProjectDownloadButtonImage = ourProjectDownloadMore.querySelector('img');
const ourProjectLoadingContent = () => {
  ourProjectLoadData.forEach(item => {
    let content = '';

    content += `<div class="project-block">
            <img alt="img" src="${item.image}">
            <div class="our-project-block">
              <p class="title">${item.title}</p>
              <div class="link-block">
                <button class="button">Business card site</button><button class="button">web site development</button>
              </div>
              <div class="description-block">
                <p class="description">
                  ${item.description}
                </p>
                <div class="button-block">
                  <button class="button button-rounded" onclick="(() => window.open('${item.link}', '_blank'))()"></button>
                </div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>`;

    ourProjectDownloadButtonImage.classList.add('rotating');

    setTimeout(() => {
      ourProjectDownloadButtonImage.classList.remove('rotating');
      ourProjectDownloadMore.classList.add('display-none');
      ourProjectBody.innerHTML += content;
    }, 5000);
  });
};
ourProjectGenerateItems();
ourProjectDownloadButton.addEventListener('click', () => {
  ourProjectLoadingContent();
});

const navigationButtonsForOurProject = document.querySelectorAll('.navigation-button');

navigationButtonsForOurProject.forEach(value => {
  value.addEventListener('click', event => {
    const target = event.target;
    const currentButton = target.closest('.navigation-button');
    const buttonValue = currentButton.getAttribute('value');

    ourProjectCurrentFilter = buttonValue;
    ourProjectGenerateItems();
    currentButton.classList.add('active');

    navigationButtonsForOurProject.forEach(item => {
      if (item !== currentButton) {
        item.classList.remove('active');
      }
    });
  });
});
