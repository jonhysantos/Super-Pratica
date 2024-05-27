// Obtem os elementos do HTML
const inputFilme = document.getElementById('inputFilmes');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');


// Adiciona um evento de ouvinte
btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    const listaFilmes = lista
    if(inputFilme.value.length === 0){
        alert('Por favor insira o nome do filme antes de adiconar.')
        return
    }
    const liElement = document.createElement('li')
    liElement.textContent = nomeFilme
    listaFilmes.appendChild(liElement)

})