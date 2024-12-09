const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    //autoplay: {delay: 4000},
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#slide-next"
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar.fixed-top');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(35, 36, 35, 0.8)';
                navbar.style.boxShadow = '0 5px 10px rgba(245, 245, 245, 0.315)';
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
