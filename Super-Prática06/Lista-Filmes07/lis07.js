// Obtem os elementos HTML
const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const lista = document.getElementById('Lista');

// Adiciona um evento de ouvinte.
btn.addEventListener('click', function () {

    const filme = inputFilme.value
    if (inputFilme.value !== "") {
        const liElement = document.createElement('li')
        liElement.textContent = filme
        lista.appendChild(liElement)
    } else {
        alert(`Digite o nome do filme antes de adicionar`)
    }

})