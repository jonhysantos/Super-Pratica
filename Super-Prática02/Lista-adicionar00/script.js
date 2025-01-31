const num = document.querySelector('#txt-number');
const btnAdd = document.querySelector('.btn-add');
const btnFinish = document.querySelector('.btn-finish');
const list = document.querySelector('.list')
const valores = []
const res = document.querySelector('.res');

function isNum(n){
    if(Number(n) <= 100 &&  Number(n) >= 1){
        return true
    }else {
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    }else {
        return false
    }
}

function add(){
    if(isNum(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value));
        const option = document.createElement('option')
        option.innerHTML = `${num.value} adicionado`
        list.appendChild(option)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    }else{
        alert('Número já consta em lista ou esta acima do solicitado')
    }
}

btnAdd.addEventListener('click',add)

function finish(){
    if(valores.length == 0){
        alert(`Por favor adicione valores antes de finalizar`)
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
    res.innerHTML = `<p> No total temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p>A media de todos os valores somados é de ${media.toFixed(2)}`
}

btnFinish.addEventListener('click',finish)