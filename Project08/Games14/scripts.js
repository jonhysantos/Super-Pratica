import {games} from './products.js'

const list = document.querySelector('ul')

function currencyReal(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}

function showGames(arrayProduct){
    let li = ''
    arrayProduct.forEach(product => {
        li += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${currencyReal(product.price)}</p>
        </li>
        `
        
     })
    list.innerHTML = li
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
    list.innerHTML = `O total e de ${total}`

}

function filterAll(){
    const justHorror = games.filter(product => product.genero === "Survivor horror")
    showGames(justHorror)
}


const btn = document.querySelector('.show-all')
btn.addEventListener('click',() => showGames(games))
const btnMapAll = document.querySelector('.map-all');
btnMapAll.addEventListener('click',mapAll)
const btnSumAll = document.querySelector('.sum-all');
btnSumAll.addEventListener('click',sumAll)
const btnFilterAll = document.querySelector('.filter-all')
btnFilterAll.addEventListener('click',filterAll)