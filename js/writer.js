const words = ["Desarrollo Web ", "Aplicaciones Móviles ", "Landing Page ","CRM a Medida ","E-commerce "]
const textElemen = document.getElementById("writer")

async function writer(){
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let e = 0; e < word.length; e++) {
            textElemen.textContent=word.slice(0,e)+("|")
            await waiter(100)
        }
        await waiter(800)
        for (let e=word.length+1; e>0 ; e--){
            textElemen.textContent=word.slice(0,e-1)+"|"
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

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    let formData = new FormData(this);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdDwHKvY94Ra5Pe63fXNf7zg1xIZPyxZ304M7uuf69z1EnlJg/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors" // Permite el envío sin esperar una respuesta del servidor
    }).then(() => {
        alert("✅ Hemos recibido tu mensaje. Te contactaremos pronto."); // Muestra alerta
        document.getElementById("contact-form").reset(); // Limpia el formulario
    }).catch(error => {
        alert("❌ Algo salió mal. Si el problema persiste, contáctanos por WhatsApp.");
        console.error("Error:", error);
    });
});

document.addEventListener("scroll", function() {
    let icon = document.getElementById("floatingIcon");
    if (window.scrollY > 450) { // Cambia el 100 si quieres que aparezca antes o después
        icon.classList.add("visible");
    } else {
        icon.classList.remove("visible");
    }
});