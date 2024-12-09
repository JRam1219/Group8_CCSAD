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
    const navbar = document.querySelector('.navbar.navbar-expand-lg');
    console.log('Navbar found:', navbar);
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            console.log('Current scroll:', window.scrollY);
            if (window.scrollY > 50) {
                console.log('Adding scrolled class');
                navbar.classList.add('scrolled');
            } else {
                console.log('Removing scrolled class');
                navbar.classList.remove('scrolled');
            }
        });
    }
});
