// Obtem o item do parágrafo.
const paragrafo = document.getElementById('paragrafo')

// Obtem o item do botão.
const botaoClicar = document.getElementById('botaoClicou')

// Cria uma variável com contador começando em 0.
let contadorCliques = 0;

botaoClicar.addEventListener('click',function() {
    contadorCliques ++;
    paragrafo.textContent = `${contadorCliques} clique${contadorCliques !== 1 ? "s" : ""}`;
});