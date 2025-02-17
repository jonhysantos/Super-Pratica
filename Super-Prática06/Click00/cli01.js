// Obtém o elemento de parágrafo e o botão
const contadorParagrafo = document.getElementById("contadorParagrafo");
const botaoClicar = document.getElementById("botaoClicar");

let contadorCliques = 0;

// Adiciona um ouvinte de evento ao botão
botaoClicar.addEventListener("click", function () {
    contadorCliques++;
    contadorParagrafo.textContent = `${contadorCliques} clique${contadorCliques !== 1 ? "s" : ""}`;
});

// Operador ternário
// condicao ? valor_caso_verdadeiro : valor_caso_falso