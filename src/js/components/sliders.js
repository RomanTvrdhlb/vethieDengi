import Swiper from 'swiper/bundle';

const gallerySliders = document.querySelectorAll('.main-slider');

for (const gallerySlider of gallerySliders) {
  new Swiper(gallerySlider.querySelector('.swiper-container'), {
    slidesPerView: 2.3,
    spaceBetween : 86,
    speed: 4000,
    loop: true,
    autoplay     : {
      delay: 1500,
      disableOnInteraction: false,
    },

    breakpoints  : {
      320 : {
        spaceBetween : 40,
        slidesPerView: 1,
      },
      576 : {
        slidesPerView: 1.6,
      },
      1025: {
        spaceBetween : 60,
        slidesPerView: 1.9,
      },
      1240: {
        spaceBetween : 60,
        slidesPerView: 2.1,
      },
      1440: {
        spaceBetween : 86,
        slidesPerView: 2.3,
      },
      2000: {
        spaceBetween : 86,
        slidesPerView: 'auto',
      },
    }
  });
}


