const num = document.querySelector('#txt-number');
const btnAdd = document.querySelector('.btn-add');
const btnFinish = document.querySelector('.btn-finish');
const res = document.querySelector('.res');
const list = document.querySelector('.list')
const valores = []


function isNum(n){
    if(Number(n) <= 100 && Number(n) >= 1 ){
        return true
    }else {
        return false
    }
}

function inList(n,l){
    if(l.indexOf(Number(n)) !== - 1){
        return true
    }else {
        return false
    }
}

function add(){
    if(isNum(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value))
        const item = document.createElement('option');
        item.innerHTML = `${num.value} adicionado`
        list.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''

    }else{
        alert('Numero acima de 100 ou já consta em lista')
    }
}

btnAdd.addEventListener('click',add)

function finish(){
    if(valores.length == 0 ){
        alert('Adicione valores antes de finalizar')
        return 
    }

    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0;
    let media = 0;
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
        maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / total
    res.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` 
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p>A média de todos os valores somado é de ${media.toFixed(1)}`
}

btnFinish.addEventListener('click',finish)