const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement');

btn.addEventListener('click',function(){
    if(inputFilme.value.length === 0 ){
        alert('Por favor, insira o nome do filme antes de adicionar')
        return
    }
    const filme = inputFilme.value
    const liElement = document.createElement('li');
    liElement.textContent = filme
    ulElement.appendChild(liElement)
    
})
