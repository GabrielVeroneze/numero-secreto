function verificaChute(chute) {
    const numero = Number(chute)
    console.log(numero)

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido!')
    }

    if ((chuteExcederValorPermitido(numero))) {
        console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} `)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteExcederValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}