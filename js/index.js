document.addEventListener('DOMContentLoaded', function() {
    $('#formModal').modal('show');
    document.querySelector('#formModal').addEventListener("shown.bs.modal", function (e) {
        $('#formModal').find(".inner").addClass("go");
    });
    $('#formModal').on('submit', function(event) {
        event.preventDefault();
        $('#formModal').modal('hide');
        $('#thanksModal').modal('show');
        setTimeout(() => {
            $('#thanksModal').modal('hide');
        }, 5000);
    });

    $('#thanksModal').on('shown.bs.modal', function () {
        fullpage_api.setAllowScrolling(false);
    });

    // Enable fullPage.js scrolling when modal is closed
    $('#thanksModal').on('hidden.bs.modal', function () {
        fullpage_api.setAllowScrolling(true);
    });
});



var swiper =new Swiper(".home-slide", {
    loop: true,
    autoplay: {
        delay: 4000
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

var swiper = new Swiper('.matbangtang', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.matbangcanho', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

function methodPost(api, data) {
	fetch(api, {
		method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json; charset=UTF-8',
        // },
		body: JSON.stringify(data),
	})
	.then((response) => console.log(response))
	.then((result) => {
		return result;
	})		
}
let formRegister = document.querySelector("#form_register");
formRegister.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = new FormData(formRegister);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    methodPost("https://api-kp.vdns.app/api/v1/customers", data);
})
let formRegisterPopup = document.querySelector("#form_register_popup");
formRegisterPopup.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = new FormData(formRegisterPopup);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    methodPost("https://api-kp.vdns.app/api/v1/customers", data);
})


// let arrowContainer = document.getElementById('arrow-container');