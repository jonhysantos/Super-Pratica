import {dobro} from './funcções.js'

let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

button.addEventListener('click',verDobro)

function verDobro(){
    if(num.value.length == 0){
        window.alert('Digite um número válido.')
    }else{
        let resultado = dobro(Number(num.value))
        res.innerHTML = `O dobro de ${num.value} é ${resultado} `
    }
}