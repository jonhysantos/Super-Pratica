// Obtem os elementos do HTML
const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn');

// Cria uma variável de contador
let contador = 0;

btn.addEventListener('click', function () {
    contador ++;
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
});