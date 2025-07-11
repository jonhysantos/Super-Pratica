
import {games} from './products.js'

const listUl = document.querySelector('ul')
const btnShowAll = document.querySelector('.show-all')

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
    listUl.innerHTML = myLi
}

btnShowAll.addEventListener('click',() => showAll(games))