const num = document.querySelector('#txt-number');
const list = document.querySelector('.list');
const btnAdd = document.querySelector('.btn-add');
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
    }else{
        return false
    }
}

function add(){
    if(isNum(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `${num.value} adicionado`
        list.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }else{
        
        alert(`Não é um número ou já consta em lista`)
        num.value = ''
        num.focus()
    }
}

btnAdd.addEventListener('click',add)

function finish(){
    if(valores.length ==0){
        alert('Adicione valores antes de finalizar')
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
        res.innerHTML = `<p>Ao todo temos ${total} de números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores somando é de ${media}</p>`
        
    }
}

btnFinish.addEventListener('click',finish)