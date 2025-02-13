const words = ["Desarrollo Web ", "Aplicaciones Móviles ", "Landing Page ", "CRM a Medida ", "E-commerce "]
const textElemen = document.getElementById("writer")

async function writer() {
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let e = 0; e < word.length; e++) {
            textElemen.textContent = word.slice(0, e) + ("|")
            await waiter(100)
        }
        await waiter(800)
        for (let e = word.length + 1; e > 0; e--) {
            textElemen.textContent = word.slice(0, e - 1) + "|"
            await waiter(50)
        }
        await waiter(500)
    }
    writer()
}

function waiter(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
writer()

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la recarga de la página
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    const toload = document.getElementById('liveToasLoad')
    const toloadB = bootstrap.Toast.getOrCreateInstance(toload)
    const toErr = document.getElementById('liveToastError')
    const toErrB = bootstrap.Toast.getOrCreateInstance(toErr)
    let formData = new FormData(event.target);
    toloadB.show()
    fetch("https://formspree.io/f/xkgovnjy", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok){
            toastBootstrap.show()
            document.getElementById("contact-form").reset(); // Limpia el formulario
        }else{
            toErrB.show()
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    console.log(data["errors"].map(error => error["message"]).join(", "))
                } else {
                    console.log("Oops! There was a problem submitting your form")
                }
            });
        }

    }).catch(error => {
        toErrB.show()
        console.error("Error:", error);
    });
});

document.addEventListener("scroll", function () {
    let icon = document.getElementById("floatingIcon");
    if (window.scrollY > 450) { // Cambia el 100 si quieres que aparezca antes o después
        icon.classList.add("visible");
    } else {
        icon.classList.remove("visible");
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Esperamos un tiempo o un evento específico para insertar los <source>
    // Por ejemplo, al hacer scroll o unos segundos después de que cargue la página:
    setTimeout(() => {
      const video = document.getElementById('videoPlayer');
      const sourceWebm = document.createElement('source');
      sourceWebm.src = "video/Video.webm";
      sourceWebm.type = "video/webm";
  
      const sourceMp4 = document.createElement('source');
      sourceMp4.src = "video/Videomp4.mp4";
      sourceMp4.type = "video/mp4";
  
      video.appendChild(sourceWebm);
      video.appendChild(sourceMp4);
  
      // Opcional: reproducir automáticamente
      video.play();
    }, 3000);
  });