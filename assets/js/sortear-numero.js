const menorValor = 250
const maiorValor = 725

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {  
    return parseInt(Math.random() * ((max + 1) - min) + min)
}

document.querySelector('[data-menor-valor]').innerHTML = menorValor
document.querySelector('[data-maior-valor]').innerHTML = maiorValor