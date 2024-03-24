let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista')
let valores = []
let btn2 = document.querySelector('#btn2')
let res = document.querySelector('#res')

btn.addEventListener('click',adicionar)
function isNum(n){
    if(Number(num.value) <= 100 && Number(num.value) >= 1){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else{
        window.alert('Número já em lista ou inválido')
    }
    num.value = ''
    num.focus()
}

btn2.addEventListener('click',finalizar)

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        res.style.display = 'block'
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}