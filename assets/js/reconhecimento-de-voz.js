import valores from './sortear-numero.js'
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;

let numeros = []
for (let i = valores.menorValor; i <= valores.maiorValor; i++) {
    numeros.push(i)
}

// const gramatica = `#JSGF V1.0; grammar numeros; public <numero> = ${numeros.join(' | ')}`
const gramatica = '#JSGF V1.0; grammar numeros; public <numero> = azul'

const reconhecimento = new SpeechRecognition()

const listaDeFala = new SpeechGrammarList()
listaDeFala.addFromString(gramatica, 1)

reconhecimento.grammars = listaDeFala
reconhecimento.continuous = false
reconhecimento.lang = 'pt-br'
reconhecimento.interimResults = false
reconhecimento.maxAlternatives = 1

window.addEventListener('load', () => {
    reconhecimento.start()
})

reconhecimento.addEventListener('result', (e) => {
    document.querySelector('#teste').innerHTML = e.results
})
