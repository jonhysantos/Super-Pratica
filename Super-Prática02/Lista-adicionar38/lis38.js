const txtn = document.getElementById('txtn');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
const btn2 = document.getElementById('btn2')
const valores = [];
const res = document.getElementById('res');

btn.addEventListener('click',adicionar);

function isNum(n){
    if(Number(n) <= 100 && Number(n) >= 1){
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
        valores.push(Number(txtn.value));
        const option = document.createElement('option')
        option.innerHTML = `${txtn.value} adicionado`
        lista.appendChild(option)
        txtn.value = ''
        txtn.focus()
        res.innerHTML = ''

    }else{
        alert('Numero inválido')
    }
}

btn2.addEventListener('click',finalizar);
function finalizar(){
    if(valores.length === 0){
        alert(`Adicione valores antes de finalizar.`)
        return
    }
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor )
            menor = valores[pos]
        
    }
    media = soma / total
    res.innerHTML = `<p>No total temos ${total} numeros cadastrado.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p>Somando os valores e dividindo pelo total temos a media de ${media}</p>`
    
}