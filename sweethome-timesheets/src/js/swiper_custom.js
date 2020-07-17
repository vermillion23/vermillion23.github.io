import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const slider = document.querySelector('.swiper-container');

// console.log(slider);

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    slidesOffsetBefore: -75,
    spaceBetween: 168,
    loop: true,
    // updateOnWindowResize: true,
    breakpoints: {
        700: {
            slidesOffsetBefore: 0,
            spaceBetween: 0,
        },
        650: {
            slidesOffsetBefore: -20,
            spaceBetween: 30,
        },
        525: {
            slidesOffsetBefore: -30,
            spaceBetween: 150,
        }
    }
});