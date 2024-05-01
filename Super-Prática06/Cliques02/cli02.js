// Obtém o elemento de parágrafo e o botão.
const contadorParagrafo = document.getElementById('contadorParagrafo')

const botaoClicar = document.getElementById("botaoClicar")

let contadorCliques = 0;

// Adiciona um ouvinte de evento no botao.
botaoClicar.addEventListener('click',function(){
    contadorCliques ++;
    contadorParagrafo.textContent = `${contadorCliques} cliques${contadorCliques !== -1 ? "s" : ""}`;

});

// Operador ternário.
// condição ? Valor_caso_verdadeiro : Valor_caso_falso