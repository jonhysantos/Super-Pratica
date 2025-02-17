// Obtem 0 botao e o paragrafo
const paragraph = document.querySelector('.counter-paragraph');
const btnCounter = document.querySelector('.btn-counter');
let counterClick = 0;

// Adiciona um ouvinte de evento ao botão
btnCounter.addEventListener('click',function() {
    counterClick ++
    paragraph.textContent = `${counterClick} clique${counterClick !== 1 ? 's' :''}: `
})

// Operador ternário
// condição : valor_caso_verdadeiro : valor_caso_falso