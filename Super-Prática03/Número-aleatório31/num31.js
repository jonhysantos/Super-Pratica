const numeroAleatorio = Math.floor(Math.random() *100) +1

const maxTentativas = 10;
let tentativas = 0;

for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    const palpite = parseInt(prompt(`Tentativas ${tentativas}/${maxTentativas} tentativas.Adivinhe o número entre 1 e 100`));
    if(isNaN(palpite) || palpite < 0 || palpite > 100){
        alert('Por favor, insira um número entre 1 e 100.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        alert(`Parabens! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break
    }else if(palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor.')
    }

    
}

if(tentativas > maxTentativas){
        alert(`Suas ${maxTentativas} tentativas acabaram, o número era ${numeroAleatorio}`)
    }