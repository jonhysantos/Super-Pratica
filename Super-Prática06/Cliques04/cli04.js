// Obtem o paragrafo 
const paragrafo = document.getElementById('paragrafo')

// Obtem o item do botão.
const botaoClique = document.getElementById('botaoClique')

// Salva o item na variavel começando em 0.
let contador = 0;

botaoClique.addEventListener('click',function(){
    contador ++;
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
})