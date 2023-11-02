const buttonToBazar = document.querySelectorAll('.button-to-bazar');

buttonToBazar.forEach(item =>
  item.addEventListener('click', () => {
    window.open('https://www.bazar.club', '_blank');
  })
);

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
