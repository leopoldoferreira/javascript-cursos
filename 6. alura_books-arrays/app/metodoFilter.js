// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)

// function filtrarLivros() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end' )
//     console.table(livrosFiltrados)
// }

const botoes = document.querySelectorAll('.btn')

botoes.forEach( btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria )
    exibirOsLivrosNaTela(livrosFiltrados)
}
