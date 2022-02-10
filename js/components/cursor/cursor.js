export default (function () {
  const self = this;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.querySelector('body').appendChild(cursor);
  cursor.appendChild(cursorDot);

  //Creating Logic
  let currentScroll = { x: window.scrollX, y: window.scrollY };
  window.addEventListener('scroll', (e) => {
    let top = Number(cursor.style.top.replace('px', ''));
    let left = Number(cursor.style.left.replace('px', ''));
    let scrollXValue = window.scrollX - currentScroll.x;
    let scrollYValue = window.scrollY - currentScroll.y;
    currentScroll = { x: window.scrollX, y: window.scrollY };
    if (scrollXValue) cursor.style.left = left + scrollXValue + 'px';
    if (scrollYValue) cursor.style.top = top + scrollYValue + 'px';
  });
  document.addEventListener('mousemove', (e) => {
    const { pageX, pageY } = e;
    if (
      pageX + 18 >= document.body.offsetWidth ||
      pageX < 0 ||
      pageY < 0 ||
      pageY >= document.body.offsetHeight
    ) {
      document.body.classList.remove('cursor-none');
      return;
    } else {
      document.body.classList.add('cursor-none');
    }
    cursor.setAttribute(
      `style`,
      `top: ${pageY - 11}px; left: ${pageX - 11}px;`
    );
  });
  let timeout;
  document.addEventListener('click', (e) => {
    clearTimeout(timeout);
    cursor.classList.remove('active');
    cursor.classList.add('active');
    timeout = setTimeout(() => cursor.classList.remove('active'), 150);
  });
})();
