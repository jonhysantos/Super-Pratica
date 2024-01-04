let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

// Ação do botão 
let button = document.querySelector('.button')
button.addEventListener('click',adicionar)

// Verificando se o número está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificando se o número já consta em lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// Função da ação
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        window.alert('tudo ok')
    }else{
        window.alert('Número inválido ou ja consta em lista.')
    }
}


