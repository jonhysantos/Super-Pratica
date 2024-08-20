// Função para gerar um número aleatório e exibir na tela
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = randomNumber.toString().padStart(6, '0')
    const randomNumberElement = document.getElementById("confirmationCode")
    randomNumberElement.textContent = paddedNumber
}

// Chama a função para gerar o número aleatório a cada 10 segundos
setInterval(generateRandomNumber, 10 * 1000) // 10000 milissegundos (10 segundos)