let numero = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

// Ação do cliqque
let button = document.getElementsByTagName('input')[1]
button.addEventListener('click',adicionar)

// Verificar se é um número
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Verificar se já foi adicionado em lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,valores) ){
        
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        lista.style.width = '240px'
        lista.style.fontSize = '1.4em'
        lista.style.padding = '15px'
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

// Agora fazendo a análise dos dados

// Ação do clique
let button2 = document.getElementsByTagName('input')[2]
button2.addEventListener('click', finalizar)

// função 
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
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
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML += `<p>Maior valor ${maior} </p>`
        res.innerHTML += `<p> Menor valor ${menor}</p>`
        res.innerHTML += `<p> Somando temos ${soma}</p>`
        res.innerHTML += `<p> A média é ${media}`

    }
}