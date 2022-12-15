const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(target.elements['nome'].value, target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    // numeroItem.innerHTML = quantidade + nome //não funciona
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}