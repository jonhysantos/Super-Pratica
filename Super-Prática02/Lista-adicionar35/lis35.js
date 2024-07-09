const numero = document.getElementById('txtn')
const btn = document.getElementById('btn')
const selectLista = document.getElementById('lista')
const res = document.getElementById('res')
const valores = []

btn.addEventListener('click',adicionar)

function isNum(n){
    if(Number(n) <= 100 && Number(n) >= 1){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n))!= -1 ){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNum(numero.value) && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        const option = document.createElement('option')
        option.textContent = `${numero.value} foi adicionado`
        selectLista.appendChild(option)
        res.innerHTML = ''
        numero.value = ''
        numero.focus()

    }else{
        alert('Número já consta em lista ou inválido')
    }
}

btn2.addEventListener('click',finalizar)

function finalizar(){
    if(valores.lentgh === 0 ){
        alert('Por favor, adicione valores antes de finalizar')
        
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
        res.innerHTML = `<p>No total temos ${total} números cadastrado</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor número informado foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A média é ${media.toFixed(2)}</p>`

    }
}