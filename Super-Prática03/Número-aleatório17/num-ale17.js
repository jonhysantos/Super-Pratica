// Gera um número aleatório entre 1 e 100.
const numAle = Math.floor(Math.random() *100) +1

// Número de tentativas.
const maxTentativas = 10
let tentativas = 0

// Loop para verificar 
for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    let palpite = parseInt(prompt(`Tentativas ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100).`))
    if(isNaN(palpite) || palpite > 100 || palpite < 1){
        window.alert('Por favor, insira número entre 1 e 100')
        tentativas --
    }else if(palpite === numAle){
        window.alert(`Parabéns! você acertou o número ${numAle} em ${tentativas} Tentativas`)
        break
    }else if(palpite < numAle){
        window.alert('Tente um número maior.')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(tentativas > maxTentativas){
    window.alert(`Suas ${maxTentativas} acabaram, o número era ${numAle}`)
}