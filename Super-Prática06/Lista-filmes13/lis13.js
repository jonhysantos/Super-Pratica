const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');

btn.addEventListener('click',function(){
    if(inputFilme.value.length === 0){
        alert('Por favor, insira o nome do filme antes de adicionar')
        return
    }

    const filme = inputFilme.value
    const liElement = document.createElement('li');
    liElement.textContent = filme
    lista.appendChild(liElement)
    inputFilme.value = ''
    inputFilme.focus()
})