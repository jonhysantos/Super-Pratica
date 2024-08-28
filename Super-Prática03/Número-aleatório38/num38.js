const numeroAleatorio = Math.floor(Math.random() *100) + 1

let tentativas = 0
const maxTentativas = 10

for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maxTentativas}.Adivinhe o número entre 1 e 100: `));
    if(isNaN(palpite) || palpite < 0 || palpite > 100){
        alert(`Palpite inválido ou não está entre 1 e 100`);
        tentativas --
    }else if(palpite === numeroAleatorio){
        alert(`Parabens! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break
    }else if(palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
    if(tentativas >= maxTentativas){
        alert(`Suas ${maxTentativas} tentativas acabaram, o  número era ${numeroAleatorio}, tente novamente.`)
        break
    }
}