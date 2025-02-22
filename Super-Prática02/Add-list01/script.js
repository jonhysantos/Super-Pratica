const number = document.querySelector('#txt-n');
const btnAdd = document.querySelector('.btn-add');
const select = document.querySelector('.list');
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

function inlist(n,l){
    if(l.indexOf(Number(n)) !== - 1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNum(number.value) && !inlist(number.value,valores)){
        valores.push(Number(number.value))
        const option = document.createElement('option')
        option.innerHTML = `${number.value} adicionado`
        select.appendChild(option)
        number.value = ''
        number.focus()
        res.innerHTML = ''
    }else{
        alert('Numbero fora do padrao')
    }
}

btnAdd.addEventListener('click',add)

function finish(){
    if(valores.length === 0 ){
        alert(`Adicione valores antes de finalizar`)
    }else{
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
        res.innerHTML = `<p>No total temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média é de ${media}</p>`
    }
}

btnFinish.addEventListener('click',finish)