const num = document.querySelector('#txt-number');
const addBtn = document.querySelector('.btn-add');
const finishBtn = document.querySelector('.btn-finish')
const list = document.querySelector('.list');
const res = document.querySelector('.res');
const valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
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

function addNumber(){
    if(isNum(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value))
        const item = document.createElement('option');
        item.innerHTML = `${num.value} foi adicionado`
        list.appendChild(item)
        num.value = ''
        num.focus()
    }else{
        alert(`Número não está entre 1 e 100, ou já em lista`)
    }
}

addBtn.addEventListener('click',addNumber)

function finish(){
    if(valores.length === 0){
        alert('Adicone valores antes de finalizar')

    }else{
        const total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior )
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

finishBtn.addEventListener('click',finish)
