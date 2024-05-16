// Obtem os elementos do HTML.
const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn');

// Variável contador
let contador = 0;

// Adiciona um evento de ouvinte ao evento.
btn.addEventListener('click',function(){
    contador ++
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
});