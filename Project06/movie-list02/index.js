const inputFilme = document.querySelector('.input-filme')
const btn = document.querySelector('.btn')
const ul = document.querySelector('.ul')

btn.addEventListener('click',function(){
    const li = document.createElement('li');
    const filme = inputFilme.value
    if(filme !== ''){
        li.textContent = filme
        ul.appendChild(li)
    }else{
        alert('Nome do filme não digitado')
    }
    
})