// Obtem os elementos do HTML
const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn')

// cria uma variável contador
let contador = 0;

// Adiciona um ouvinte de evento
btn.addEventListener('click',function(){
    contador ++
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
})