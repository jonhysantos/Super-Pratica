// Importamos ele de outro arquivo.
import {dobro} from './funções.js'

// solicitamos ao usuário um número.
let num = document.querySelector('#txtn')
let res = document.querySelector('#res')

// Pegamos o botão com o DOM.
let button = document.querySelector('#button')

// Ação do botão.
button.addEventListener('click',resultado)

// Função da ação.
function resultado(){
    if(num.value.length == 0){
        window.alert('Insira um número.')
    }else if(!isNaN(Number(num.value))){
        // Se for um número válido, executamos a função dobro.
        let resultado = dobro(Number(num.value))
        res.innerHTML = `<p>O dobro de ${num.value} é ${resultado}.</p> `
    }else{
        window.alert('Por favor, insira um número válido.')
    }
    
num.value = ''
num.focus()
}
