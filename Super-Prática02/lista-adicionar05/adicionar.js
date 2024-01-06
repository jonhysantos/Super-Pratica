let num = document.querySelector('#txtn')
let lista = document.querySelector('#list')
let res = document.querySelector('#res')
let valores = []
let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')

// Verificar se é um número e se está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificar se já consta em lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false            
    }
}

// Ação do botão
button.addEventListener('click',adicionar)

// Função da ação
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('Número inválido ou já consta na lista.')
    }
    num.value = ''
    num.focus()
}

// Finalizando tudo //

// Ação do botão
button2.addEventListener('click', finalizar)

// Função da ação
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
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
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} número cadastrado </p>`
        res.innerHTML += `<p>O maior valor foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p>A média é ${media.toFixed(2)} </p>`
    }
}


