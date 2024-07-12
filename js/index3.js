

document.addEventListener("DOMContentLoaded", function() {

 
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


function methodPost(api, data) {
	fetch(api, {
		method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
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


// let arrowContainer = document.getElementById('arrow-container');