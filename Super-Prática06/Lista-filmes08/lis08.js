// Obtem os elementos do HTML
const inputFilme = document.getElementById('nomeFilme');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');

// Adiciona um evento de ouvinte
btn.addEventListener('click', function () {
    const filme = inputFilme.value
    if (inputFilme.value === 0) {
        alert('Por favor,digite nome do filme antes de adicionar')
    }else{
        const listaFilmes = lista
        const liElement = document.createElement('li')
        liElement.textContent = filme
        listaFilmes.appendChild(liElement)
    }

})