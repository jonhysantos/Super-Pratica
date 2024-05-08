const paragrafo = document.querySelector('#paragrafo')
const button = document.querySelector('#botaoClique')

let contador = 0;

button.addEventListener('click',function(){
    contador ++;
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
})