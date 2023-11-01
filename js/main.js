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

const navigationButtonsForOurProject = document.querySelectorAll('.navigation-button');

navigationButtonsForOurProject.forEach(value => {
  value.addEventListener('click', event => {
    const target = event.target;

    target.closest('.navigation-button').classList.add('active');

    navigationButtonsForOurProject.forEach(item => {
      if (item !== target.closest('.navigation-button')) {
        item.classList.remove('active');
      }
    });
  });
});
