import {games} from './products.js'

const list = document.querySelector('ul');
const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

const currencyReal = (value) => {
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

const showAll = (arrayProduct) => {
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

const mapAll = () => {
    const newPrices = games.map((product) => ({
        ...product,
        price:product.price * 0.43
    }))
    showAll(newPrices)
}

const sumAll = () => {
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O total ${currencyReal(total)}`
}

const filterAll = () => {
    const justHorror = games.filter(product => product.genero === "Survivor horror")
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() =>  showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)

