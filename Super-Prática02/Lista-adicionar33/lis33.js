const num = document.getElementById('txtn');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
const btn2 = document.getElementById('btn2');
const valores = [];
const res = document.getElementById('res')

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
        item.textContent = `${num.value} foi adicionado`
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
    if(valores.length == 0){
        alert('Por favor, adicione valores antes de finalizar')
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
        res.innerHTML = `<p>No total temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `A media é ${media.toFixed(2)}`
    }
}