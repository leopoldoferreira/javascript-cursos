const btnOrderPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrderPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdendos = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdendos)
}