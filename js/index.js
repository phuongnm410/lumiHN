import { loadHTML } from "./loadHtml.js";

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "../component/header.html");
    loadHTML("footer", "../component/footer.html");
    let screenHeight = window.innerHeight;;
    let slideItem = document.querySelectorAll(".home_slider .home_slider--item");
    slideItem.forEach((index, item)=>{
        index.style.height = screenHeight +"px";
    })
    document.querySelector("#myVideo").style.height =  screenHeight +"px";
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
    autoplay: {
        delay: 4000
    },
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
        }, 1000);

        if(destination.index == 0){
            document.getElementById('header').className = 'header header-section-1';
        } else if(destination.index == 1){
            document.getElementById('header').className = 'header header-section-2';
        } else if(destination.index == 2){
            document.getElementById('header').className = 'header header-section-3';
        }
    }
});
// suto playvideo

// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('myVideo', {
//         events: {
//             'onReady': onPlayerReady
//         }
//     });
// }

// function onPlayerReady(event) {
//     var iframe = document.getElementById('myVideo');

//     var options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5 // 50% của video phải xuất hiện trong khung nhìn
//     };

//     var observer = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//             if (entry.isIntersecting) {
//                 console.log("vào view");
//                 player.playVideo();
//             } else {
//                 player.pauseVideo();
//             }
//         });
//     }, options);

//     observer.observe(iframe);
// }