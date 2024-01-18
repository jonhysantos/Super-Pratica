let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')

// Verificar se é número e se está entre 1 e 100.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificar se já consta em lista.
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// Ação do botão.
btn.addEventListener('click', adicionar)

// Chamada para a ação com a função.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Por favor, insira um número valido.')
    }
    num.value = ''
    num.focus()
}

// Ação do botão de finalizar.
btn2.addEventListener('click',finalizar)

// Chamada para a ação com a função finalizar.
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
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
        res.style.display = 'block'
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${total} números adicionado. </p>`
        res.innerHTML += `<p>Maior valor adicionado ${maior} </p>`
        res.innerHTML += `<p>Menor valor adicionado ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores adicionado ${soma}</p>`
        media = soma / total
        res.innerHTML += `<p>A média ${media.toFixed(2)}</p>`
    }
}