// Salva o item do parágrafo.
const paragrafo = document.getElementById('paragrafo')

// salva o botão do clique
const botaoClick = document.getElementById('botaoClick')

// Salva uma variável conm contador começando em 0
let contador = 0;

// Adiciona um ouvinete ao botao.
botaoClick.addEventListener('click',function(){
    contador ++
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
});