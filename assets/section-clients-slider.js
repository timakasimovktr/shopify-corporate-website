(() => {
  const swiperEl = document.querySelectorAll("[data-swiper-clients]");
  const swiperPagination = document.querySelectorAll(".swiper-pagination");
  if (swiperEl.length === 0) return;

  const swipers = []; // Array to store swiper instances

  swiperEl.forEach((container, index) => {
    const swiperContainerClass = `slider-${index}`;
    const paginationClass = `slider-pagination-${index}`;
    container.classList.add(swiperContainerClass);
    swiperPagination[index].classList.add(paginationClass);

    // Create an object for each swiper instance and its variables
    const swiperObj = {
      container: `.${swiperContainerClass}`,
      paginationEl: `.${paginationClass}`,
      swiper: null, // Placeholder for swiper instance
    };

    swipers.push(swiperObj); // Add the swiper object to the array
  });

  const initSwiper = (container, paginationEl) => {
    const swiper = new Swiper(container, {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 3000,
      freeModeMomentum: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      loop: true,
      freeMode: true,
      draggable: false,
    });

    const manageAutoplay = () => {
      setTimeout(() => {
        if (swiper.autoplay.paused) {
          swiper.autoplay.start();
        }
      }, 1000);
    };

    // Debounce autoplay when slide is changed
    swiper.on('slideChange', manageAutoplay);

    return swiper;
  };

  for (let index = 0; index < swipers.length; index++) {
    const swiperObj = swipers[index];
    const { container, paginationEl } = swiperObj;
    const swiperInstance = initSwiper(container, paginationEl);
    swiperObj.swiper = swiperInstance;
  }
})();
