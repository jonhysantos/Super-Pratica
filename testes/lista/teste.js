let coisas = document.querySelector('#txtc')
let lista = document.querySelector('#lista')
let toList = []
let button = document.querySelector('#button')

button.addEventListener('click',adicionar)
function adicionar(){
    if(coisas.value.length == 0){
        window.alert('Por favor, escreva coisas para adicionar')
    }else{
        toList.push(coisas.value)
        let item = document.createElement('option')
        item.text = `${coisas.value}`
        lista.appendChild(item)

    }
}