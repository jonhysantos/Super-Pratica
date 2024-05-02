// Obtem o item do parágrafo.
const paragrafo = document.getElementById('paragrafo');

// Obtem o item do botão.
const botaoClicar = document.getElementById('botaoClicar');

// Criamos uma variável começando em 0
let contadorClique = 0;

// Adiciona um evento de ouvinte (listener)
botaoClicar.addEventListener('click',function(){
    contadorClique ++
    paragrafo.textContent = `${contadorClique} clique${contadorClique !== 1 ? "s" : ""}`
})