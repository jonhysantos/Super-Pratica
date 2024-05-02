// Obtem o item do paragrafo.
const contadorParagrafo = document.getElementById('contadorParagrafo')

// Obtem o item do botao
const botaoContador = document.getElementById('botaoClicar')

let contadorCliques = 0;

// Adiciona um evento de ouvinte (listener)
botaoContador.addEventListener('click',function() {
    contadorCliques ++
    contadorParagrafo.textContent = `${contadorCliques} Clique${contadorCliques !== 1 ? "s" : ""}`
})