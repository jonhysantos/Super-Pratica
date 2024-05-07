let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista')
let btn2 = document.querySelector('#btn2')
let res = document.querySelector('#res')
let valores = []

btn.addEventListener('click',adcionar)

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
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

function adcionar(){
    if(isNum(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    }else{
        alert('Número inválido ou já consta em lista.')
    }
}

btn2.addEventListener('click',finalizar)

function finalizar(){
    if(valores.length === 0){
        alert('Por favor, Adicione valores antes de finalizar')
        return
    }
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
    res.innerHTML = `<p>No total, temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O mairo valor informado ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p>A média é ${media.toFixed(2)}.</p>`
}
