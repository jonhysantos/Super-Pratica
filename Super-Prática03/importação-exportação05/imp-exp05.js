// Importamos a função de outro arquivo.
import {dobro} from './funções.js'

// Pegamos o número digitado com uma variável.
let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

// Ação do botão.
button.addEventListener('click',verDobro)

// Chamada para a ação com a função
function verDobro(){
    if(num.value.length == 0){
        window.alert('Por Favor, digite um número válido.')
    }else{
        let resultado = dobro(Number(num.value))
        res.innerHTML = `O dobro de ${num.value} é ${resultado}`
    }
}