// Obtem os elementos do HTML
const inputFilme = document.getElementById('inputFilme');
const botaoAction = document.getElementById('botaoAction');
const listaFilmes = document.getElementById('listaFilmes');

botaoAction.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    if(nomeFilme !== ""){
        const liFilme = document.createElement('li')
        liFilme.textContent = nomeFilme
        listaFilmes.appendChild(liFilme)
    }else{
        alert('Digite o nome do filme')
    }
});