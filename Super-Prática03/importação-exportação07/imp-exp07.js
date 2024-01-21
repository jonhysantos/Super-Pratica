// Importamos a função de outro arquivo.
import {dobro} from './funções07.js'

let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

// Ação do botão.
button.addEventListener('click', verDobro)

// Função do botão.
function verDobro(){
    if(num.value.length == 0){
        window.alert('Campor em branco! Por favor digite um valor.')
    }else{
        let resultado = parseInt(dobro(num.value))
        res.style.display = 'block'
        res.innerHTML = `O dobro de ${num.value} é ${resultado}`
    }
}
