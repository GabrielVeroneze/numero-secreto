const menorValor = 30
const maiorValor = 35

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min)
}

document.querySelector('[data-menor-valor]').innerHTML = menorValor
document.querySelector('[data-maior-valor]').innerHTML = maiorValor