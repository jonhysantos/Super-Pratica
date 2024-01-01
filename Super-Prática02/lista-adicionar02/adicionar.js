let numero = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

// Ação do clique
let button = document.getElementsByTagName('input')[1]
button.addEventListener('click',adicionar)

// Função para verificar se é um número
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Função para ver se está em lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
// Função de adicionar 
function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        lista.style.width = '240px'
        lista.style.fontSize = '1.4em'
        lista.style.padding = '15px'
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

// Agora fazendo a análise dos dados //

// Ação do botão
let button2 = document.getElementsByTagName('input')[2]
button2.addEventListener('click',analisar)

// função de analizar
function analisar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de analizar')
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
        res.style.display = 'block'
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números casastrados</p>`
        res.innerHTML += `<p> Maior valor ${maior}`
        res.innerHTML += `<p> Menor valor ${menor}`
        res.innerHTML += `<p> Somando temos ${soma}`
        res.innerHTML += `<p> A média é ${media}`
    }
} 