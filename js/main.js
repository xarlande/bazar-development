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

let ourProjectCurrentFilter = 'development';

const ourProjectLoadData = [
  {
    title: 'Up am intention on dependent questions oh elsewhere september.',
    tags: ['Sorting', 'Sorting'],
    date: '12.12.2023',
    link: 'https://bazar.club',
    img: 'image/ourProject/image.png',
    time: '5 min',
  },
  {
    title: 'Up am intention on dependent questions oh elsewhere september.',
    tags: ['Sorting', 'Sorting'],
    date: '12.12.2023',
    link: 'https://bazar.club',
    img: 'image/ourProject/image.png',
    time: '5 min',
  },
];
const ourProjectData = {
  development: [
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
  ],
  seo: [
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
  ],
  marketing: [
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
  ],
  other: [
    {
      title: 'Up am intention on dependent questions oh elsewhere september.',
      tags: ['Sorting', 'Sorting'],
      date: '12.12.2023',
      link: 'https://bazar.club',
      img: 'image/ourProject/image.png',
      time: '5 min',
    },
  ],
};

const ourProjectBody = document.querySelector('#our-project .content');
const ourProjectGenerateItems = () => {
  let content = '';

  ourProjectData[ourProjectCurrentFilter].forEach(item => {
    let tags = '';

    item?.tags.forEach(item => {
      tags += '<p class="tag">Item</p>';
    });

    content += `<div class="card">
            <div class="image-wrapper">
              <img alt="" src="${item.img}">
              <p class="reading-time">Read text: ${item.time}</p>
            </div>
            <div class="card-content">
              <p class="title">${item.title}</p>
              <p class="date">${item.date}</p>
              <div class="tags">
                ${tags}
              </div>
              <a class="link" href="${item.link}">See more</a>
            </div>
          </div>`;
  });

  ourProjectBody.innerHTML = content;
};
const ourProjectDownloadMore = document.querySelector('.download-more');
const ourProjectDownloadButton = ourProjectDownloadMore.querySelector('.download-more-button');
const ourProjectDownloadButtonImage = ourProjectDownloadMore.querySelector('img');
const ourProjectLoadingContent = () => {
  let content = '';

  ourProjectLoadData.forEach(item => {
    let tags = '';

    item?.tags.forEach(item => {
      tags += '<p class="tag">Item</p>';
    });

    content += `<div class="card">
            <div class="image-wrapper">
              <img alt="" src="${item.img}">
              <p class="reading-time">Read text: ${item.time}</p>
            </div>
            <div class="card-content">
              <p class="title">${item.title}</p>
              <p class="date">${item.date}</p>
              <div class="tags">
                ${tags}
              </div>
              <a class="link" href="${item.link}">See more</a>
            </div>
          </div>`;
  });

  ourProjectDownloadButtonImage.classList.add('rotating');

  setTimeout(() => {
    ourProjectDownloadButtonImage.classList.remove('rotating');
    ourProjectDownloadMore.classList.add('display-none');
    ourProjectBody.innerHTML += content;
  }, 5000);
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
