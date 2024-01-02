let numero = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

// Ação do botão adicionar
let button = document.querySelector('.button1')
button.addEventListener('click',Adicionar)

// função de verificar se é numero
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

// Função para ver se o número já consta em lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
// Função da ação adicionar
function Adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

// Finalizar //

// Ação do botão 
let button2 = document.querySelector('.button2')
button2.addEventListener('click',Finalizar)

// Função da ação finalizar
function Finalizar(){
    if(valores.length == 0){
        window.alert('Digite valores antes de finalizar')
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
        res.innerHTML += `<p> Ao todo temos ${total}. números cadastrados`
        res.innerHTML += `<p>O maior valor foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média é  ${media}. </p>`
    }
}