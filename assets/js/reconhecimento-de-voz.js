const chuteElemento = document.querySelector('[data-id="chute"]')
const principalElemento = document.querySelector('[data-id="principal"]')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'

recognition.start()
 
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript

    exibirChuteNaTela(chute)
    verificaChute(chute)
    desistir(chute)
}

function exibirChuteNaTela(chute) {
    chuteElemento.innerHTML = `
        <p class="box__texto">Você disse:</p>
        <div class="box__fala">${chute}</div>
    `
}

function desistir(chute) {
    if (chute.toLowerCase() === 'desistir') {
        principalElemento.innerHTML = `
            <h1 class="box__titulo">Você desistiu!!!</h1>
            <h3 class="box__dica">O número secreto era ${numeroSecreto}</h3>
            <button class="box__btn" data-id="jogar-novamente">Jogar novamente</button>
        `
    }
}

recognition.addEventListener('end', () => recognition.start())