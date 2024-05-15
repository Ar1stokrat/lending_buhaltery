let swiper = new Swiper(".promo_swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promo .arrow_next",
        prevEl: ".promo .arrow_prew",
    },
});