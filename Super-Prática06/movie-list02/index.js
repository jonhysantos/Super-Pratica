const filme = document.querySelector('.input-filme');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click',function() {
    const nomeFilme = filme.value
    if(nomeFilme !== ''){
        const liElement = document.createElement('li');
        liElement.textContent = nomeFilme
        list.appendChild(liElement);
        return
    }

    alert(`Digie o nome do filme`)
})