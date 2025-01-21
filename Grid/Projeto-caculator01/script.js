
const btnAc = document.querySelector('.btn')
function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput + caracter

}

function limparTela(){
    document.querySelector('.display').value = ''
}

function calculator(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorInput)
}

function inverter(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput * -1
}

btnAc.addEventListener('click',limparTela)
