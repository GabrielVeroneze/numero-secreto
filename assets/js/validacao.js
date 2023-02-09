function verificaChute(chute) {
    const numero = Number(chute)

    if (chuteForInvalido(numero)) {
        chuteElemento.innerHTML += '<p class="box__texto">Valor inválido</p>'
        return
    }

    if ((chuteExcederValorPermitido(numero))) {
        chuteElemento.innerHTML += `<p class="box__texto">Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</p>`
        return
    }

    if (numero === numeroSecreto) {
        principalElemento.innerHTML = `
            <h1 class="box__titulo">Você Acertou</h1>
            <h3 class="box__dica">O número secreto era ${numeroSecreto}</h3>
            <button class="box__btn" data-id="jogar-novamente">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        chuteElemento.innerHTML += '<p class="box__texto">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></p>'
    } else if (numero < numeroSecreto) {
        chuteElemento.innerHTML += '<p class="box__texto">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></p>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteExcederValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if(e.target.dataset.id === 'jogar-novamente') {
        window.location.reload()
    }
})