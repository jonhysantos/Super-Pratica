import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');
const btnMapAll = document.querySelector('.map-all')
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

function currencyFormat(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function showAll(arrayProduct){
    let myli = ''
    arrayProduct.forEach(product => {
        myli += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${currencyFormat(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myli
}

function mapAll(){
    const newPrice = games.map(product => ({
        ...product,
        price:product.price * 0.43
    }))
    showAll(newPrice)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O valor total é de ${currencyFormat(total)}`
    list.style.fontSize = '2em'
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === "Survivor horror")
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)