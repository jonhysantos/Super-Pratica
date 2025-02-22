const inputFilme = document.querySelector('.input-filme');
const btn = document.querySelector('.btn');
const ulElement = document.querySelector('.ul-element')

function addMovie(){
    const newFilme = inputFilme.value
    if(newFilme !== ''){
        const liElement = document.createElement('li');
        liElement.textContent = newFilme
        ulElement.appendChild(liElement);
    }
}

btn.addEventListener('click',addMovie)