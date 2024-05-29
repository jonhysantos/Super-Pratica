const num = document.getElementById('txtn');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
const valores = []
const res = document.getElementById('res')
const btn2 = document.getElementById('btn2')

btn.addEventListener('click',adicionar)

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inLista(num.value,valores)){
        alert('tudo ok')
    }else{
        alert('Por favor apenas números.')
    }
}