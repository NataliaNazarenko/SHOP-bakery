const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      
      1280: {
        slidesPerView: 3,
      }
    },
  
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--active',
    },
  
    navigation: {
      nextEl: '.flip-button.next',
      prevEl: '.flip-button.prev',
    },
  
  });