<<<<<<< HEAD
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
=======
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
>>>>>>> f513ce7ae018fff4777f34f36fd3c095a0fea44f
