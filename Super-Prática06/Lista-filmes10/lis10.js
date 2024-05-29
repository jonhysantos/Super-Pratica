const filmeInput = document.getElementById('filmeInput');

const btn = document.getElementById('btn');
const lista = document.getElementById('lista')

btn.addEventListener('click',function() {
    const liElement = document.createElement('li')
    const filme = filmeInput.value
    if(filmeInput.value.length === 0){
        alert('Por favor digite o nome do filme antes de adicionar.')
        return
    }
    liElement.textContent = filme
    lista.appendChild(liElement)

})