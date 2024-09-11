import { Fancybox } from "../vendor/fancybox.js";
const items = document.querySelectorAll('[data-fancybox]');

if(items){
    Fancybox.bind('[data-fancybox]', {});
}
