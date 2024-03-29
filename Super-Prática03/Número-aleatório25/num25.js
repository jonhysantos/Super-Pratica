// Criamos uma variável para salvar o número aleatório
const numeroAleatorio = Math.floor(Math.random() * 100) +1

// Confere se o número foi armazenado com sucesso.
console.log(numeroAleatorio)

// Salva o numero de tentativas
const maxTentativas = 10
let tentativas = 0

// Cria o loop para o usuário tentar adivinhar
for(tentativas = 1;tentativas <= maxTentativas;tentativas ++){
    // Solicia ao usuário digitar o número
    let palpite = parseFloat(prompt(`Tentativas ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100)`))

    // Condição para verificar possíveis erros
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Por favor, número (entre 1 e 100)')
        tentativas --
    
    // Caso o usuário acerte o número chamar o break
    }else if(palpite === numeroAleatorio){
        alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`)
        break
    // Dá dicas ao usuario
    }else if (palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
}

// Se caso todas as tentativas chegarem ao número máximo de tentativas
if(tentativas > maxTentativas){
    alert(`Suas ${maxTentativas} tentativas acabatam, o número era ${numeroAleatorio}`)
}