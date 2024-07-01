const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement')

btn.addEventListener('click',function(){
    if(inputFilme.value.length === 0){
        alert(`Por favor, insira um nome do filme antes de adicionar`)
        return
    }
    const liElement = document.createElement('li');
    const nomeFilme = inputFilme.value
    liElement.textContent = nomeFilme
    ulElement.appendChild(liElement)
    
})