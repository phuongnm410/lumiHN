import { loadHTML } from "./loadHtml.js";

document.addEventListener("DOMContentLoaded", function() {
    // loadHTML("header", "../component/header.html");
    loadHTML("footer", "../component/footer.html");
});

//////
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    hashNavigation: {
        watchState: true,
    },
    effect: 'slide', // You can also use 'fade', 'cube', 'coverflow', 'flip'
});