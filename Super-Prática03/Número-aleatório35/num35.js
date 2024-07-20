const numeroAleatorio = Math.floor(Math.random() *100) +1


const maxTentativas = 10;
let tentativas = 0;

for(tentativas = 1; tentativas <= maxTentativas;tentativas ++){
    const palpite = parseInt(prompt(`Tentativa ${tentativas} / ${maxTentativas}. Adivinhe o número entre 1 e 100:`))
    if(isNaN(palpite)){
        tentativas --
        alert(`Por favor, insira número entre 1 e 100 positivo.`)

    }else if(palpite === numeroAleatorio){
        alert(`Parabéns você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`)
        break

    }else if(palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
}

if(tentativas > maxTentativas){
    alert(`Suas ${maxTentativas} / ${maxTentativas} acabaram, o número era ${numeroAleatorio}`)
}