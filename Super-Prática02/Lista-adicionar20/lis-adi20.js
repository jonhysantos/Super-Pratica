let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista')
let valores = []
let btn2 = document.querySelector('#btn2')
let res = document.querySelector('#res')


btn.addEventListener('click',adicionar)

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

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else{
        window.alert('Número já consta ou fora do padrão (entre1 e 100)')
    }
    num.value = ''
    num.focus()
}

btn2.addEventListener('click',finalizar)

function finalizar(){
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
    res.innerHTML = `<p>No total temos ${total} números cadastrado.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p>Média ${media}</p>`

}