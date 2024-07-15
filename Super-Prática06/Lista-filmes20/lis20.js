const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement')

btn.addEventListener('click',function(){
    const liElement = document.createElement('li');
   
    if(inputFilme.value.length === 0
    ){
         alert('Por insira o nome do filme')
    }else{
      const filme = inputFilme.value
      liElement.textContent = filme
      ulElement.appendChild(liElement)  
    }
})