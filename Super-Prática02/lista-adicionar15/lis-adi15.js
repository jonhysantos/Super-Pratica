let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')

// Verifica se é uma número e se está em lista.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificar se já consta em lista.
function inLista(n,l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    }else{
        return false
    }
}
// Ação do botão.
btn.addEventListener('click',adicionar)

// Função para a chamada da ação.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Por favor, insira um número válido.')
    }
    num.value = ''
    num.focus()
}

// Ação do botão de finalizar.
btn2.addEventListener('click',finalizar)

// Função do botão.
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.style.display = 'block'
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrado.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media é ${media.toFixed(2)} </p>`
    }
}
