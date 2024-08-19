// Função para exibir a mensagem e removê-la após 5 segundos
function exibirMensagem() {
    const mensagem = document.querySelector(".message")
    mensagem.classList.remove("hidden")

    setTimeout(function () {
        mensagem.classList.add("hidden")
    }, 5 * 1000) // 5000 milissegundos (5 segundos)
}

// Adiciona um ouvinte de evento ao botão
const botaoAdicionar = document.getElementById("addToCart")
botaoAdicionar.addEventListener("click", exibirMensagem)