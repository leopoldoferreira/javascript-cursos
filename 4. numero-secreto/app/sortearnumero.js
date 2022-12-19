const menorValor = 1
const maiorValor = 3
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor+1)
}
console.log(gerarNumeroAleatorio())
//<i class="fa-sharp fa-solid fa-arrow-down"></i>

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor