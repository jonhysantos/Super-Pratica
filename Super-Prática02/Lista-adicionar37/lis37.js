const txtn = document.getElementById('txtn');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
const btn2 = document.getElementById('btn2');
const valores = [];
const res = document.getElementById('res');

btn.addEventListener('click',adicionar)

function isNum(n){
    if(txtn.value >= 1 && txtn.value <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNum(txtn.value) && !inLista(txtn.value,valores)){
        valores.push(Number(txtn.value))
        const item = document.createElement('option');
        item.innerHTML = `${txtn.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert(`Número inválido ou já consta em lista`)
    }
    txtn.value = ''
    txtn.focus()
}

btn2.addEventListener('click',finalizar)
function finalizar(){
    if(valores.length === 0){
        alert(`Por favor, adicione números antes de finalizar`)
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
        res.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A Média é ${media.toFixed(2)} </p>`
    }
}