let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let lista = document.querySelector('#lista')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let valores = []

function isNumero(n){
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

btn.addEventListener('click',adicionar)

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Por favor, insira números entre 1 e 100')
    }
    num.value = ''
    num.focus()
}

// Segunda parte //

btn2.addEventListener('click',finalizar)

function finalizar(){
    if(valores.length == 0){
        window.alert('Por favor, insira valores antes de finalizar.')
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
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrado.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media.toFixed(2)}.</p>`
    }

}