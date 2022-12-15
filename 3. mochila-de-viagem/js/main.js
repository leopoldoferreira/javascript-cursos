const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const items = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = target.elements['nome'].value
    const quantidade = target.elements['quantidade'].value

    criaElemento(nome, quantidade)
     
    nome.value = ""
    quantidade.value = ""
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

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    items.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(items))
}