export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,

  header: document.querySelector('header'),
  footer: document.querySelector('footer'),

  clientsSliders: document.querySelectorAll('.clients-slider .swiper-container'),
  logoSliders: document.querySelectorAll('.logo-slider'),
  teamSliders: document.querySelectorAll('.team-slider'),
  brandsSliders: document.querySelectorAll('.brands-slider'),
  exampleSliders: document.querySelectorAll('.example-slider'),
  galleries: document.querySelectorAll('.gallery'),
  forms: document.querySelectorAll('.main-form'),


  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsMode: [...document.querySelectorAll('[data-mode-modal]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile'),
  activeMode: 'active-mode',
}
