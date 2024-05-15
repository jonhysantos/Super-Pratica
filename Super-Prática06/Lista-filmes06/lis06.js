// Obtem os elemento do HTML
const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const listaFilmes = document.getElementById('listaFilmes')

// Evento de ouvinte.
btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    const liElement = document.createElement('li');
    liElement.textContent = nomeFilme
    listaFilmes.appendChild(liElement)
})