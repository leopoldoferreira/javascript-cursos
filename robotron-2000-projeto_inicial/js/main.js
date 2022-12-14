// const subtrair = document.querySelector("#subtrair")
// const somar = document.querySelector("#somar")
// const braco = document.querySelector("#braco")

// const controle = document.querySelectorAll(".controle-ajuste") //se alguém mudar html vai parar
// por isso devemos usar data atributes
const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        // console.log(evento.target.textContent)
        // manipulaDados(evento.target.textContent, evento.target.parentNode) //desacoplado js do html n faz sentido textcontent
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)

    })
})

// somar.addEventListener("click", () => {
//     braco.value = parseInt(braco.value) + 1;
// })
// subtrair.addEventListener("click", () => {
//     braco.value = parseInt(braco.value) - 1;
// })
// somar.addEventListener("click", () => {manipulaDados("somar")})
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})


// function manipulaDados(operacao){
//     if(operacao === "-") {
//         braco.value = parseInt(braco.value) - 1
//     } else {
//         braco.value = parseInt(braco.value) + 1
//     }
// }
function manipulaDados(operacao, controle){
    // const peca = controle.querySelector(".controle-contador")
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}