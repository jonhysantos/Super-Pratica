const num = document.querySelector('#txt-number');
const btnAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
const btnFinish = document.querySelector('.btn-finish');
const res = document.querySelector('.res');
const valores = []

function isNum(n){
    if(Number(n) <= 100 && Number(n) >= 1){
        return true
    }else{
        return false
    }
}

function inList(n,l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    }else {
        return false
    }
}

function add(){
    if(isNum(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value))
        const item = document.createElement('option');
        item.innerHTML = `${num.value} adiconado`
        list.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }else{
        alert('Por favor apenas números entre 1 e 100')
        num.focus()
    }
}

btnAdd.addEventListener('click',add)

function finish(){
    if(valores.length == 0){
        alert('Por favor adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0;
        let soma = 0;
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = `<p>Ao todo temos ${total} de números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores somando é de ${media}</p>`
    }
}

btnFinish.addEventListener('click',finish)