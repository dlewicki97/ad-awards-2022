export default (function () {
  let header = document.querySelector('.header');
  let savedScrollY = 0;
  window.addEventListener('scroll', () => {
    header.classList[
      scrollY > savedScrollY && scrollY !== 0 ? 'add' : 'remove'
    ]('scroll-down');

    savedScrollY = scrollY;
  });
})();
