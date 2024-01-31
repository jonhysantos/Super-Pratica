let num = document.querySelector('#txtn')
let tab = document.querySelector('#lista')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let valores = []

// Verifica se é um número e se está entre 1 e 100.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// verifica se o já consta na lista.
function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// Ação do botão.
btn.addEventListener('click',adicionar)

// Chamada para a ação com a função.
function adicionar(){
    if(isNumero(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Por favor, insira um número válido entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}

// Segunda parte do programa. // Finalizar. //

// Ação do botão.
btn2.addEventListener('click',finalizar)

// Chamada para a ação com a função.
function finalizar(){
    if(valores.length == 0){
        window.alert('Por favor, adicione valores antes de finalizar.')
    }else{
        res.style.display = 'block'
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrado.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média é ${media.toFixed(2)}</p>`
    }
}
