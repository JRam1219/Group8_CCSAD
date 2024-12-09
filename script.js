const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    //autoplay: {delay: 4000},
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#slide-next"
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
