// Importamos ele de outro arquivo.
import {dobro} from './funções03.js'

// Pegamos o número solicitado ao usuário.
let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

// Chamada para o evento, Ação do botão.
button.addEventListener('click',resultado)

// O evento, função da ação.
function resultado(){
    if(num.value.length == 0){
        window.alert('Por favor, insira um número.')
    }else if(!isNaN(Number(num.value))){
        // Se for um número válido, executamos a função dobro
        let resultado = dobro(Number(num.value))
        res.innerHTML = `O dobro de ${num.value} é ${resultado} `
    }else{
        window.alert('Por favor,insira um número válido.')
    }
    num.value = ''
    num.focus()
}