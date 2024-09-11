import { ElementReplacer } from '../functions/scripts/replacer.js';

const menu = document.querySelector('.header .main-nav');
const headerWrapp = document.querySelector('.header__wrapp');

const parentDesktop = document.querySelector('.header__inner');
const parentMobile = document.querySelector('.mobile__box');

const paramsMenu = {
    element: menu,
    parentDesktop: parentDesktop,
    parentMobile: parentMobile,
    breakpoint: 1024,
    mobilePlace: 'beforeend',
    desktopPlace: 'beforeend'
};

const params = {
    element: headerWrapp,
    parentDesktop: parentDesktop,
    parentMobile: parentMobile,
    breakpoint: 1024,
    mobilePlace: 'beforeend',
    desktopPlace: 'beforeend'
};

const elReplacerMenu = new ElementReplacer(paramsMenu);
const elReplacer = new ElementReplacer(params);