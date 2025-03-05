import {games} from './products.js'
const list = document.querySelector('ul')
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all')


const btnShowAll = document.querySelector('.show-all');

function currencyReal(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}

function showAll(arrayProduct){
    let myLi = ''

    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${currencyReal(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

function mapAll(){
    const newPrices = games.map(product => ({
        // ...product,
        // price:product.price * 0.43 // pdoe ser feito assim tambem
        name:product.name,
        src:product.src,
        price:product.price  - (57/100) * product.price
    }))
    showAll(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0);
    list.innerHTML = `O total é de ${currencyReal(total)}`
    list.style.fontSize = '2em'
}

function filterAll(){
    const justHorro = games.filter(product => product.genero === "Survivor horror")
    showAll(justHorro)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)