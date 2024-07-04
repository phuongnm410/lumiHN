import { loadHTML } from "./loadHtml.js";

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "../component/header.html");
    loadHTML("footer", "../component/footer.html");
    let screenHeight = window.innerHeight;;
    let slideItem = document.querySelectorAll(".home_slider .home_slider--item");
    slideItem.forEach((index, item)=>{
        index.style.height = screenHeight +"px";
    })
});

//////
// var swiper = new Swiper('.swiper-container-MAIN', {
//     direction: 'vertical',
//     mousewheel: true,
//     speed: 1000,
//     effect: 'slide', // You can also use 'fade', 'cube', 'coverflow', 'flip'
// });

var swiper =new Swiper(".home_slider", {
    loop: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: ".home_slider-pagination",
        // dynamicBullets: true,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    disableOnInteraction: true,
});

// let arrowContainer = document.getElementById('arrow-container');
let hideTimeout;

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#ffcccb', '#add8e6', '#90ee90'],
    scrollOverflow: false,
    onLeave: function(origin, destination, direction){
        document.getElementById('arrow-container').style.opacity = 0; // Ẩn nút mũi tên khi cuộn
        document.getElementById('header').style.opacity = 0; // Ẩn header khi cuộn

        // Xóa timeout trước đó nếu có
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }

        // Hiện lại nút mũi tên sau 500ms khi dừng cuộn
        hideTimeout = setTimeout(() => {
            document.getElementById('arrow-container').style.opacity = 1;
            document.getElementById('header').style.opacity = 1;
        }, 1500);


    }
});