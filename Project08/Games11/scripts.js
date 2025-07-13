import {games} from './products.js'

const ulElement = document.querySelector('ul');
const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all')


function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class='item-price'>${product.price}</p>
            </li>
        `
    })
    ulElement.innerHTML = myLi
}

function mapAll(){
    const newPrices = games.map(product => ({
        ...product,
        price:product.price * 0.43
    }))
    showAll(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    ulElement.innerHTML = `O valor total é de ${total}`
    ulElement.style.fontSize = '2em'
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === "Survivor horror")
    console.log(justHorror)
    showAll(justHorror)
}
btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll);
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)
