const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    if(inputFilme.value.length === 0){
        alert('Por favor, insira o nome do filme antes de adicionar.')
        return
    }
    const ulElement = document.createElement('li');
    ulElement.textContent = nomeFilme
    lista.appendChild(ulElement)
})