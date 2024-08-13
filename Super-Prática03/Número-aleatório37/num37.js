const numeroAleatorio = Math.floor(Math.random() * 100) + 1

let tentativas = 0;
const maxTentativas = 10

for(tentativas = 1; tentativas <= maxTentativas; tentativas++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maxTentativas} Adivinhe o número entre 1 e 100.`));
    if(isNaN(palpite) || palpite <= 0 || palpite > 100){
        alert('numero inválido');
        tentativas --

    }else if(palpite === numeroAleatorio){
        alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        break
    }else if(palpite > numeroAleatorio){
        alert('tente um número menor');
    }else{
        alert(`Tente um número maior`);
    }

    if(tentativas >= maxTentativas){
        alert(`Suas ${maxTentativas} de ${maxTentativas} tentativas acabaram`)
        break
    }
}