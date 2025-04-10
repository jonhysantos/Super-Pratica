import {games} from './products.js'

const list = document.querySelector('ul');

function currencyReal(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}

function showGames(arrayProduct){
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
        ...product,
        price:product.price * 0.43
    }))
    showGames(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O total é de ${total}`
    list.style.fontSize = '2.3rem'
}

function filterAll(){
    const justHorror = games.filter((product) => product.genero === "Survivor horror")
    showGames(justHorror)
}

const btnShowAll = document.querySelector('.show-all')
btnShowAll.addEventListener('click',() => showGames(games))
const btnMapAll = document.querySelector('.map-all');
btnMapAll.addEventListener('click',mapAll)
const btnSumAll = document.querySelector('.sum-all')
btnSumAll.addEventListener('click',sumAll)
const btnFilterAll = document.querySelector('.filter-all')
btnFilterAll.addEventListener('click',filterAll)