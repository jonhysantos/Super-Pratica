import {games} from './products.js'

const ul = document.querySelector('ul')

const btnShowAll = document.querySelector('.show-all');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

function real(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class='item-price'>${real(product.price)}</p>
            </li>
        `
    })
    ul.innerHTML = myLi
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
    ul.innerHTML = `<p class='item-price'>O total é de ${real(total)}</p>`
    ul.style.fontSize = '2em'
}

function filerAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filerAll)