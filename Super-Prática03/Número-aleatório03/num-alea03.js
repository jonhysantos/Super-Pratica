const numeroAleatorio = Math.floor(Math.random() *100) +1
let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let button = document.querySelector('#button')
button.addEventListener('click',ver)

const maxTentativas = 10
const tentativas = 0
let palpite = Number(num.value)




