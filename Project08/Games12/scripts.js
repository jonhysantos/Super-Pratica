import {games} from './products.js'

const ulElement = document.querySelector('ul')
const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');



function showall(arrayProduct){
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
    ulElement.innerHTML = myLi
}

function mapAll(){
    const newPrices = games.map((product) => ({
        ...product,
        price:product.price * 0.43
    }))
    showall(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0);
    ulElement.innerHTML = `O total é de ${total}`
    ulElement.style.fontSize = '2em'
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror');
    showall(justHorror)
}

btnShowAll.addEventListener('click',() => showall(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)