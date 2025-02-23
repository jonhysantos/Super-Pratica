const inputFilme = document.querySelector('.input-filme');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


btn.addEventListener('click',function() {
    const filme = inputFilme.value
    if(filme !== ''){
        const liElement = document.createElement('li');
        liElement.textContent = filme
        list.appendChild(liElement);
    }
})