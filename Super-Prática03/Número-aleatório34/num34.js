const numeroAleatorio = Math.floor(Math.random() *100) + 1

const maxTentativas = 10;
let tentativas = 0

for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    const palpite = parseInt(prompt(`Tentativas ${tentativas} \ ${maxTentativas}.Adivinhe o número entre 1 e 100:`))
    if(isNaN(palpite)){
        alert(`Número inválido`)
        tentativas --
    }else if(palpite === numeroAleatorio){
        alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break
    }else if(palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('tente um número menor')
    }

}

if(tentativas > maxTentativas){
    alert(`Suas ${maxTentativas} tentativas de ${maxTentativas} acabaram, o número era ${numeroAleatorio}`)
}