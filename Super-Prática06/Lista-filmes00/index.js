const inputFilme = document.querySelector('.input-filme');
const btn = document.querySelector('.btn');
const ulElement = document.querySelector('.list');

btn.addEventListener('click',function() {
    const nomeFilme = inputFilme.value
    if(nomeFilme !== ''){
        const liElement = document.createElement('li');
        liElement.textContent = nomeFilme
        ulElement.appendChild(liElement);
    }else{
        alert('Por favor digite o nome do filme')
    }
})