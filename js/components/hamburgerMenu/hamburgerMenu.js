export default (function () {
  let header = document.querySelector('.header');
  let hamburgerMenu = header.querySelector('.header-hamburger-menu');

  hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('show');
  });
})();
