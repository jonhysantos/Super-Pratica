// Obtem os elementos do HTML
const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn');

// Cria uma variável multável como contador
let contador = 0;

// Adiciona um ouvinte ao evento
btn.addEventListener('click',function(){
    contador ++;
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
})