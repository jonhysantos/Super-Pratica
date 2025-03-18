const inputFilme = document.querySelector('.input-filme');
const ul = document.querySelector('.ul')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    const filme = inputFilme.value
    if(filme !== ''){
        const li = document.createElement('li');
        li.innerHTML = filme
        ul.appendChild(li)
        return
    }
    alert('Faltam dados')
})