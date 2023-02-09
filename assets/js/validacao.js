function verificaChute(chute) {
    const numero = Number(chute)

    if (chuteForInvalido(numero)) {
        chuteElemento.innerHTML += '<p class="box__texto">Valor inválido</p>'
    }

    if ((chuteExcederValorPermitido(numero))) {
        chuteElemento.innerHTML += `<p class="box__texto">Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</p>`
    }

    if (numero === numeroSecreto) {
        document.querySelector('[data-id="principal"]').innerHTML = `
            <h1 class="box__titulo">Você Acertou</h1>
            <h3 class="box__dica">O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteExcederValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}