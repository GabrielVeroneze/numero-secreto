import valores from './sortear-numero.js'

console.log(valores)
console.log(valores.menorValor)
console.log(valores.maiorValor)

const gramatica = '#JSGF V1.0; grammar numeros; public <numero> = '

const reconecimento = new SpeechRecognition() || new webkitSpeechRecognition
