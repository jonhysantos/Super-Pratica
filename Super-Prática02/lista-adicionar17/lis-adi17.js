let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

// Verifica se é um número e se está entre 1 e 100.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verifica se o número já consta em lista.
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// Ação do botão.
btn.addEventListener('click', adicionar)

// Chamada para a função do botão.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Número já em lista ou se encontra vazio')
    }
    num.value = ''
    num.focus()
}

// Segunda parte do programa // finalizar

let btn2 = document.querySelector('#btn2')
// Ação do botão.
btn2.addEventListener('click',finalizar)

// Chamada para a função do botão.
function finalizar(){
    if(valores.length == 0){
        window.alert('Por favor, adicione valores antes de finalizar.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            
        }
        res.style.display = 'block'
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastraso</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    }
}