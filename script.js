const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '#slide-next',
        prevEl: '#slide-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
