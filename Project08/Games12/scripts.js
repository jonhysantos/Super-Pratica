import {games} from './products.js'

const list = document.querySelector('ul')
const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all')


function currencyReal(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
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
        ...product,
        price:product.price * 0.43

    }))
    showAll(newPrices)
}

function sumAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `<p>O total é de ${currencyReal(total)}</p>`
    list.style.fontSize = '2em'
}

function filter(){
    const justAdventure = games.filter(product => product.genero === "Aventura")
    showAll(justAdventure)
}

btnShowAll.addEventListener('click', () => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filter)