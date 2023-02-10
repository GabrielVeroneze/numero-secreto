const chuteElemento = document.querySelector('[data-id="chute"]')
const principalElemento = document.querySelector('[data-id="principal"]')

// O Chrome atualmente oferece suporte ao reconhecimento de fala com propriedades prefixadas, incluímos estas linhas para alimentar os objetos corretos no Chrome e quaisquer implementações futuras que possam oferecer suporte aos recursos sem um prefixo
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Define uma para controlar o reconhecimento de fala do nosso aplicativo
const recognition = new SpeechRecognition()
// Define o idioma do reconhecimento. Definir isso é uma boa prática e, portanto, recomendado
recognition.lang = 'pt-Br'

// Inicia o serviço de reconhecimento de fala ouvindo o áudio de entrada
recognition.start()

// Disparado quando o reconhecimento de fala retorna um resultado, chama a função onSpeek 
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    // Obtem uma string contendo a transcricao da palavra reconhecida
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