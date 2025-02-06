window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    // Ajusta el movimiento del video (lento)
    // Ajusta el movimiento de los divs (rápido)
    document.querySelector(".front-div1").style.transform = `translateY(${scrollY * -0.7}px)`;
    document.querySelector(".front-div2").style.transform = `translateY(${scrollY * -0.3}px)`;

      
});
function isInViewport(element, percentage = 1) {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
  
    // Retorna true si el elemento ha entrado al viewport en un porcentaje definido
    return rect.top <= windowHeight * percentage;
  }
  