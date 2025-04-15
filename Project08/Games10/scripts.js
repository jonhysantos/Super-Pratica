import {games} from './products.js'

const listUl = document.querySelector('ul')
const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnReduceAll = document.querySelector('.sum-all')
const btnFilterAll = document.querySelector('.filter-all')

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}> 
                <p>${product.name}</p>
                <p class="item-price">${product.price}</p>
            </li>
        `
    })
    listUl.innerHTML = myLi

}

function mapAll(){
    const newPrices = games.map((product) => ({
        src:product.src,
        name:product.name,
        price:product.price  - (57 / 100) * product.price
    }))
    showAll(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    listUl.innerHTML = `O total é de ${total}`
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === "Survivor horror")
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnReduceAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)