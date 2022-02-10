export default (function () {
  let menuActivators = document.querySelectorAll('.menu-activator');
  let activatorActiveClass = 'active';
  let menuPopoverActiveClass = 'active';
  let menuPopoverClass = 'menu-popover';

  createMenuPopover(menuPopoverClass);
  let menuPopover = document.querySelector(`.${menuPopoverClass}`);

  for (let i = 0; i < menuActivators.length; i++) {
    menuActivators[i].addEventListener('click', () => {
      let menuList = menuActivators[i].querySelector('.menu-list');
      if (!menuList) return;
      let header = document.querySelector('.header');

      if (header.classList.contains('show')) header.classList.remove('show');

      menuActivators[i].classList.toggle(activatorActiveClass);
      menuPopover.classList.toggle(menuPopoverActiveClass);

      menuPopover.innerHTML = menuList.outerHTML;
      let closeButton = document.createElement('span');
      closeButton.innerHTML = '&#x2715';
      closeButton.setAttribute('class', 'menu-close-button');
      menuPopover.appendChild(closeButton);

      closeButton.addEventListener('click', () => {
        menuPopover.classList.remove('active');
      });
    });
  }

  function createMenuPopover(menuPopoverClass) {
    let menuPopover = document.createElement('div');
    menuPopover.setAttribute('class', menuPopoverClass);
    document.body.appendChild(menuPopover);
  }
})();
