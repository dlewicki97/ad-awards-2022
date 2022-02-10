export default class ScrollCarousel {
  constructor(options) {
    this.options = options;
    this.container = document.querySelector(`.${this.options?.containerClass}`);
    this.containerHeight = +getComputedStyle(this.container).height.replace(
      'px',
      ''
    );
    this.wrapper = this.container.querySelector(
      `.${this.options?.wrapperClass}`
    );
    this.carousel = this.container.querySelector(
      `.${this.options?.carouselClass}`
    );
    this.carouselMarginLeft = Number(
      getComputedStyle(this.carousel).marginLeft.replace('px', '')
    );
    this.carouselItems = this.carousel.querySelectorAll(
      `.scroll-carousel-item`
    );
    this.carouselItemWidth = Number(
      getComputedStyle(this.carouselItems[0]).width.replace('px', '')
    );
    this.carouselItemMarginRight = Number(
      getComputedStyle(this.carouselItems[0]).marginRight.replace('px', '')
    );

    this.carouselWidth = 0;
    this.maxCarouselTranslateX = 0;

    this.calculateCarouselWidth();
    this.applyCarouselWidth();
    this.calculateMaxCarouselTranslateX();
    this.setContainerHeight();
    this.setWrapperPosition();

    window.addEventListener('resize', () => {
      this.calculateMaxCarouselTranslateX();
      this.setContainerHeight();
    });
  }
  calculateCarouselWidth() {
    this.carouselWidth =
      (this.carouselItemWidth + this.carouselItemMarginRight) *
      this.carouselItems.length;
  }
  applyCarouselWidth() {
    this.carousel.style.width = this.carouselWidth + 'px';
  }
  calculateMaxCarouselTranslateX() {
    this.maxCarouselTranslateX = -(
      this.carouselWidth -
      window.innerWidth +
      this.carouselMarginLeft * 2
    );
  }
  setContainerHeight() {
    this.container.style.height =
      this.containerHeight + Math.abs(this.maxCarouselTranslateX) + 'px';
  }
  setWrapperPosition() {
    window.addEventListener('scroll', () => {
      let containerRects = this.container.getBoundingClientRect();
      let wrapperRects = this.wrapper.getBoundingClientRect();
      let carouselRects = this.carousel.getBoundingClientRect();
      let fixedBreakpoint = Math.abs(containerRects.top - window.innerHeight);

      let translateX = wrapperRects.height - fixedBreakpoint;
      let endFixedBreakpoint =
        carouselRects.right - innerWidth >= -this.carouselMarginLeft;
      let fixedState =
        fixedBreakpoint >= wrapperRects.height && endFixedBreakpoint;
      let wrapperPosition = 'static';
      if (translateX <= 0 && translateX >= this.maxCarouselTranslateX)
        wrapperPosition = 'fixed';
      if (translateX <= this.maxCarouselTranslateX)
        wrapperPosition = 'absolute';
      this.wrapper.style.position = wrapperPosition;

      if (translateX > 0) translateX = 0;
      if (translateX < this.maxCarouselTranslateX)
        translateX = this.maxCarouselTranslateX;

      this.carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
    });
  }
}
