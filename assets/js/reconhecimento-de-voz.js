import valores from './sortear-numero.js'

const chuteElemento = document.querySelector('[data-id="chute"]')

// O Chrome atualmente oferece suporte ao reconhecimento de fala com propriedades prefixadas, incluímos estas linhas para alimentar os objetos corretos no Chrome e quaisquer implementações futuras que possam oferecer suporte aos recursos sem um prefixo
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;

let numeros = []
for (let i = valores.menorValor; i <= valores.maiorValor; i++) {
    numeros.push(i)
}

const gramatica = `#JSGF V1.0; grammar numeros; public <numero> = ${numeros.join(' | ')}`
const listaDeFala = new SpeechGrammarList()
listaDeFala.addFromString(gramatica, 1)

// Define uma para controlar o reconhecimento de fala do nosso aplicativo
const recognition = new SpeechRecognition()


recognition.grammars = listaDeFala
// Define se o sistema de reconhecimento de fala deve retornar resultados provisórios ou apenas resultados finais
recognition.continuous = false
// Define o idioma do reconhecimento. Definir isso é uma boa prática e, portanto, recomendado
recognition.lang = 'pt-Br'
// Define se o sistema de reconhecimento de fala deve retornar resultados provisórios ou apenas resultados finais
recognition.interimResults = false
// Define o número de possíveis correspondências alternativas que devem ser retornadas por resultado
recognition.maxAlternatives = 1

// Inicia o serviço de reconhecimento de fala ouvindo o áudio de entrada
recognition.start()

// Disparado quando o reconhecimento de fala retorna um resultado, chama a função onSpeek 
recognition.addEventListener('result', onSpeak)


function onSpeak(e) {
    const chute = e.results[0][0].transcript

    exibirChuteNaTela(chute)
}

function exibirChuteNaTela(chute) {
    chuteElemento.innerHTML = `
        <p class="box__texto">Você disse:</p>
        <div class="box__fala">${chute}</div>
        <p class="box__texto">O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></p>
    `
}