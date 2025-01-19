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