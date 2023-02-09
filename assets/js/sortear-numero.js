const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min)
}

document.querySelector('[data-menor-valor]').innerHTML = menorValor
document.querySelector('[data-maior-valor]').innerHTML = maiorValor