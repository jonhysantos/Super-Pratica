const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement');

btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value
    if(nomeFilme !== ""){
        const liElement = document.createElement('li');
        liElement.textContent = nomeFilme
        ulElement.appendChild(liElement)
    }
})

    

    

