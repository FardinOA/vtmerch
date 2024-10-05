var swiper = new Swiper(".hero-product-slider", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.6,
        },
        1024: {
            slidesPerView: 4.6,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 5,
            slidesOffsetBefore: 100,
        },
        1280: {
            slidesPerView: 5,
            slidesOffsetBefore: 200,
        },
    },
});
