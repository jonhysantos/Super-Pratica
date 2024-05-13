// Obtem os elementos do HTML
const inputFilme = document.getElementById('inputFilme');
const btn = document.getElementById('adicionarFilme');
const listaFilmes = document.getElementById('listaFilmes');

// adiciona um ouvinte de evento ao botão.
btn.addEventListener('click',function(){
    const nomeFilme = inputFilme.value

    // Verifica se o campo de entrada não está vazio.
    if(nomeFilme !== ""){
        const novoItem = document.createElement('li')
        novoItem.textContent = nomeFilme;
        listaFilmes.appendChild(novoItem);

        // limpa o campo de entrada.
        inputFilme.value  = ""
        inputFilme.focus()
        return
    }
    alert('Por favor adicione filme antes de clicar no botão.')
})
