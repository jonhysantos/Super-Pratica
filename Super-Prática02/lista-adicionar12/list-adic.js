let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')

// Verificar se é número e se está em entre 1 e 100.
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
btn.addEventListener('click',adicionar)

// Função da ação.
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '/88888888888888888888m,+*'
    }else{
        window.alert('Por favor, insira números válidos entre 1 e 100')
    }
    num.value = ''
    num.focus()
}

// Ação do botão finalizar.
btn2.addEventListener('click',finalizar)

// Função da ação.
function finalizar(){
    if(valores.length == 0){
        window.alert('Por Favor, adicione valores antes de finalizar.')
    }else{
        res.style.display = 'block'
        
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
        res.innerHTML = `<p>Ao todo temos ${total} números cadastrado.</p>`
        res.innerHTML += `<p>O maior valor informado ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A média é ${media} </p>`
        res.innerHTML += `<p> </p>`
    }
}
