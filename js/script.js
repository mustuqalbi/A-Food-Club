//  ================================ Typing Animation Start ======================================
var typed = new Typed(".typing", {
    strings: ["", "My Foods Club", "My Foods Club"],
    typeSpeed: 100,
    BackSpeed: 80,
    loop: true
  })
  //  ================================ Typing Animation End =====================================

let nav_toggler = document.querySelector('#nav-toggler');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-btn-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    nav_toggler.classList.remove('open');
    navbar.classList.remove('active');
}

nav_toggler.addEventListener('click', () => {
    nav_toggler.classList.toggle('open');
    navbar.classList.toggle('active');
  
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".Swiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 90000,
        disableOnIneraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
    },
});