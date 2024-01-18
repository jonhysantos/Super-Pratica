// Importamos a função de outro arquivo
import {dobro} from './funções-06.js'

let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let btn = document.querySelector('#button')

// Ação do botão.
btn.addEventListener('click',calcular)

// Chamda para a ação do botão.
function calcular(){
    if(num.value.length == 0){
        window.alert('Por favor, insira um número válido.')
    }else{
        let resultado = dobro(Number(num.value))
        res.innerHTML = `O dobro de ${num.value} é ${resultado}.`
    }
}