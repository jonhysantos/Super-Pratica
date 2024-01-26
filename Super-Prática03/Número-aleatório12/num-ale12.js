// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() *100) +1

// Número máximos de tentativas.
const maxTentativas = 10
let tentativas = 0

// Loop para getat o número.
for(tentativas = 1; tentativas < maxTentativas; tentativas ++){
    const palpite = Number(prompt(`Tentativas ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100).`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Por favor, insira um número válido.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        window.alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`)
        break
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior.')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(tentativas >= maxTentativas){
    window.alert(`Suas ${maxTentativas} tentativas acabaram, o numero era ${numeroAleatorio}, tente novamente`)
}