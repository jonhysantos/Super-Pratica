const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement');


btn.addEventListener('click',function(){
    if(inputFilme.value !== ""){
    const filme = inputFilme.value
    const liElement = document.createElement('li');
    liElement.textContent = filme
    ulElement.appendChild(liElement)
    }else{
        alert('Por favor, digite o nome do filme.')
    }
})