const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerView: "auto",
  speed: 300,
  // effect: "fade",
  // fadeEffect: { crossFade: true },
  // virtualTranslate: true,
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
});
