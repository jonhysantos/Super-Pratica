let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista')
let btn2 = document.querySelector('#btn2')
let valores = []
let res = document.querySelector("#res")

// Verifica se é um número e se está entre 1 e 100.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }
}

// Verifica se já consta em lista.
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// Ação do botão.
btn.addEventListener('click', adicionar)

// chamada para a ação do botão com a função.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Insira números entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}

// Segunda parte do programa //

// Ação do botão.
btn2.addEventListener('click',finalizar)

// Função do botão.
function finalizar(){
    if(valores.value == 0){
        window.alert('Por favor, adicione valores ates de finalizar.')
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
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores ${soma}.</p>`
        media = soma / total
        res.innerHTML += `<p>A média é ${media.toFixed(2)}.</p>`    
        
           
    }
}