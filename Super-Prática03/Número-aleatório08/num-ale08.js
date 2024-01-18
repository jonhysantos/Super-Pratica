// Gera um número aleatório.
const numeroAleatorio = Math.floor(Math.random() * 100) +1

const maxTentativas = 10
let tentativas = 0

for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maxTentativas}. Adivinhe o número entre 1 e 100.`))
    if(isNaN(palpite) || palpite > 100 || palpite < 1 ){
        window.alert('Por favor, insira um número válido.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        window.alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break;
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior.')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(palpite > maxTentativas){
    window.alert(`Suas ${maxTentativas} acabaram, o número era ${numeroAleatorio}.`)
}