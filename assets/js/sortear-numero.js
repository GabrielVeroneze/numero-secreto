const menorValor = 5
const maiorValor = 15

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {  
    return parseInt(Math.random() * ((max + 1) - min) + min)
}

document.querySelector('[data-menor-valor]').innerHTML = menorValor
document.querySelector('[data-maior-valor]').innerHTML = maiorValor

export default {
    menorValor,
    maiorValor
}