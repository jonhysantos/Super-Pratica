let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let lista = document.querySelector('#lista')
let valores = []
let res = document.querySelector('#res')

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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Número já consta em lista ou fora do padrão entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}


btn2.addEventListener('click',finalizar)