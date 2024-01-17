// Número aleatório da biblioteca Math.
const numeroAleatorio = Math.floor(Math.random() *100) +1

// Número máximos de tentativas.
const maxTentativas = 10
let tentativas = 0

// Loop para adivinhar o número.
for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} \ ${maxTentativas} tentativas. Adivinhe o número (entre 1 e 100).`))
    if(isNaN(palpite) || palpite <1 || palpite > 100){
        window.alert('Por favor, insira um número entre 1 e 100.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        window.alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break;
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(palpite > maxTentativas){
    window.alert(`Suas ${maxTentativas} acabaram, o número era ${numeroAleatorio}.`)
}