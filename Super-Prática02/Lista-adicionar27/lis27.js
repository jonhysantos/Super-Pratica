let num = document.querySelector('#txtn')
const btn = document.querySelector('#btn')
const lista = document.querySelector('#lista')
const btn2 = document.querySelector('#btn2')
let res = document.querySelector('#res')
const valores = []

btn.addEventListener('click',adicionar)

function isNum(n){
    if(num.value >= 1 && num.value <= 100){
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
        alert('Número inválido ou já consta em lista')
    }
    num.value = ''
    num.focus()

}

btn2.addEventListener('click',finalizar)

function finalizar(){
    if(valores.length == 0 ){
        alert('Por favor, adicione valores antes de finalizar.')
    }else{
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
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`
        
    }
}