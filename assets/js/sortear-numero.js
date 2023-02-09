const menorValor = 50
const maiorValor = 60

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * ((max + 1) - min) + min)
}

document.querySelector('[data-menor-valor]').innerHTML = menorValor
document.querySelector('[data-maior-valor]').innerHTML = maiorValor