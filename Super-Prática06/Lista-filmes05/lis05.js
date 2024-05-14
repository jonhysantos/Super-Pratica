// Obtem os elementos do HTML
const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('botaoAction');
const lista = document.getElementById('lista');

btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    if(nomeFilme !== ""){
        const liElement = document.createElement('li');
        liElement.textContent = nomeFilme
        lista.appendChild(liElement)
    }else{
        alert(`Por favor, digite o nome do filme antes de adicionar.`)
    }
})