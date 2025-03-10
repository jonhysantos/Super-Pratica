const inputFilme = document.querySelector('.input-filme')
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    const textFilme = inputFilme.value
    if(textFilme !== ""){
        const li = document.createElement('li');
        const ul = document.querySelector('.ul')
        li.innerHTML = textFilme
        ul.appendChild(li)
    }else{
        alert('Digite o nome do filme')
    }
})