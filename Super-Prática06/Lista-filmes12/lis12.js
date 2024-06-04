const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement');

btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    if(inputFilme.value.length === 0) {
        alert(`Por favor, insira o nome do filme antes de adicionar.`)
        return
    }
    const liElement = document.createElement('li')
    liElement.textContent = nomeFilme
    ulElement.appendChild(liElement)
})
