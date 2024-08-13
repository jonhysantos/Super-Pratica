// Obtém os elementos do HTML
const filmeInput = document.getElementById("filmeInput");
const adicionarFilme = document.getElementById("adicionarFilme");
const listaFilmes = document.getElementById("listaFilmes");

// Adiciona um ouvinte de evento ao botão
adicionarFilme.addEventListener("click", function () {
    const nomeFilme = filmeInput.value;

    // Verifica se o campo de entrada não está vazio
    if (nomeFilme !== "") {
        const novoItem = document.createElement("li");
        novoItem.textContent = nomeFilme;
        listaFilmes.appendChild(novoItem);

        // Limpa o campo de entrada após adicionar o filme
        filmeInput.value = "";
    }
});