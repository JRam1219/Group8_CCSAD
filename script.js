const swiper = new Swiper (".slider-container" , {
    effect: "slide",
    speed: 1300,
    autoplay: {delay: 2500}
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

