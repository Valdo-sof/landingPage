src="https://unpkg.com/swiper/swiper-bundle.min.js"

var swiper = new Swiper('#technologies-carousel', {
    loop: true,
    speed: 500,
    autoplay: {
        delay: 2000
    },
    slidesPerView: 'auto',
    spaceBetween: 40,
    pagination: {
        el: '#technologies-carousel .swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 2,       // Muestra 2 elementos por vista
            spaceBetween: 20        // Espacio entre los elementos de 20px
        },
        480: {
            slidesPerView: 3,       // Muestra 3 elementos por vista
            spaceBetween: 30        // Espacio entre los elementos de 30px
        },
        640: {
            slidesPerView: 4,       // Muestra 4 elementos por vista
            spaceBetween: 40        // Espacio entre los elementos de 40px
        },
        992: {
            slidesPerView: 5,       // Muestra 5 elementos por vista (ajustado)
            spaceBetween: 60        // Espacio entre los elementos de 60px
        }
    }

});

function isSafariMobile() {
    let ua = navigator.userAgent;
    return /iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/Chrome/.test(ua);
}

if (isSafariMobile()) {
    document.getElementById("videoSource").src = "video/Videomp4.mp4";
    document.getElementById("videoPlayer").load(); // Recargar el video con la nueva fuente
}