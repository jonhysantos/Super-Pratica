const numeroAleatorio = Math.floor(Math.random() *100) +1

const maximoTentativas = 10
let tentativas = 0

for(tentativas = 1;tentativas <= maximoTentativas; tentativas ++){
    const palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maximoTentativas}. Adivinhe o número (entre 1 e 100)`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Número inválido.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        window.alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`)
        break
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior')
    }else{
        window.alert('Tente um número menor')
    }
}

if(tentativas > maximoTentativas){
    window.alert(`Suas ${maximoTentativas} tentativas acabaram, tente novamente`)
}