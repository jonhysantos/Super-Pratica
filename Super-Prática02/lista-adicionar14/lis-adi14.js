let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let valores = []
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')

// Criamos uma função pra verificar se é um número e se está entre 1 e 100.

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
// Ação do botão.
btn.addEventListener('click',adicionar)
// Função do botão.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adiconado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert(`Número já em lista ou inválido.`)
    }
    num.value = ''
    num.focus()
    
}

// Finalizar //

// Ação do botão.
btn2.addEventListener('click',finalizar)

// Função da ação.
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
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores  temos ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media.toFixed(2)}.</p>`
    }
}