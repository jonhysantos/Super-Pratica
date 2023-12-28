let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('.res')
let button2 = document.querySelector('#button2')

// Ação do click
button2.addEventListener('click',contar)

// função do click
function contar(){
    if(inicio.value == 0){
        inicio.style.border = '3px solid red'
    }
}