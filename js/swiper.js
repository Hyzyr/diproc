const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 300,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});
