const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        navigation: {
            nextEl: '#slide-next',
            prevEl: '#slide-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { // Change this value to adjust when the effect occurs
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
