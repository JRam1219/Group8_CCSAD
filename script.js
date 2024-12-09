const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#slide-next"
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar.navbar-expand-lg.fixed-top');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
});
