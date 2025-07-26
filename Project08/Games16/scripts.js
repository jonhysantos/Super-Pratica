import {games} from './products.js'


const btnShowAll = document.querySelector('.show-all')
const ul = document.querySelector('ul');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

function real(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}

function showAll(arrayProduct){
    let myli = ''
    arrayProduct.forEach(product => {
        myli += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class='item-price'>${real(product.price)}</p>
            </li>
        `
    })
    ul.innerHTML = myli
}

function mapAll(){
    const newPrices = games.map((product) => ({
        ...product,
        price:product.price * 0.43
    }))
    showAll(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    ul.innerHTML = `<h1>O total é de ${real(total) }</h1>`
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)