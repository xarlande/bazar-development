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

const faqList = document.querySelectorAll('#faq .faq-list .faq-item');

faqList.forEach(element => {
  element.addEventListener('click', event => {
    const target = event.target;
    const button = target.closest('.button-rounded');

    if (button) {
      const faqItem = target.closest('.faq-item');

      faqList.forEach(faqItemElement => {
        if (faqItemElement !== element) {
          faqItemElement.querySelector('.button-rounded').classList.remove('button-active');

          faqItemElement.classList.remove('faq-item-active');
        }
      });
      button.classList.toggle('button-active');

      if (button.classList.contains('button-active')) {
        faqItem.classList.add('faq-item-active');
      } else {
        faqItem.classList.remove('faq-item-active');
      }
    }
  });
});

const paginationButtons = document.querySelectorAll('.pagination .pagination-button');
const stepsOfWorkBody = document.querySelector('#steps-of-work .card');
const stepsOfWorkItems = {
  1: {
    image: 'image/stepsOfWork/Vector.svg',
    title: 'Residentian roofing',
    description:
      'Residentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofing',
  },
  2: {
    image: 'image/stepsOfWork/Vector.svg',
    title: 'Residentian roofing',
    description:
      'Residentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofing',
  },
  3: {
    image: 'image/stepsOfWork/Vector.svg',
    title: 'Residentian roofing',
    description:
      'Residentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofing',
  },
  4: {
    image: 'image/stepsOfWork/Vector.svg',
    title: 'Residentian roofing',
    description:
      'Residentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofingResidentian roofing',
  },
};

paginationButtons.forEach(item => {
  item.addEventListener('click', event => {
    const target = event.target;

    const value = target.getAttribute('value');
    const currentData = stepsOfWorkItems[value];

    paginationButtons.forEach(item => {
      item.classList.remove('active');
    });

    stepsOfWorkBody.innerHTML = `
          <div class="image-block">
            <div class="image-wrapper">
              <img alt="" src="${currentData.image}" />
            </div>
          </div>
          <div class="content-card">
            <p class="content-step">//step ${value}</p>
            <p class="content-title">${currentData.title}</p>
            <p class="content-description">${currentData.description}</p>
          </div> 
    `;

    target.classList.add('active');
  });
});
