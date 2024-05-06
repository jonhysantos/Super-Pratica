// Salva um número aleatório entre 1 e 100.
const numeroAleatorio = Math.floor(Math.random() *100) +1

// Salva o número de tentativas e  máximo de tentativas
const maxTentativas = 10
let tentativas = 0

for(tentativas = 1;tentativas <= maxTentativas; tentativas ++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maxTentativas}.Adivinhe um número entre 1 e 100`))

    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        alert('Por favor insite um número entre 1 e 100.')
        tentativas --
    }else if(palpite === numeroAleatorio){
        alert(`Parabéns! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`)
        break
    }else if(palpite < numeroAleatorio){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor.')
    }
}

if(tentativas > maxTentativas){
    alert(`Suas ${maxTentativas} tentativas acabaram, o número era ${numeroAleatorio}, tente novamente.`)
}