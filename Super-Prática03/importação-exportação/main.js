// Importamos ela de outro arquivo.
import {dobro} from './funções.js'

// Solicitamos ao usuário um número.
let numero = parseFloat(prompt('Digite um número:'))

if(!isNaN(numero)){
    // Se for um número válido, executamos a função dobro
    let resultado = dobro(numero)
    window.alert(`O dobro de ${numero} é ${resultado} `)
}else{
    window.alert('Por favor, insita um número válido.')
}