// Gerar número aleatório.
const numeroAleatorio = Math.floor(Math.random() *100) +1
// Número máximo de tentativas.
const maxTentativas = 10
let tentativas = 0

// Loop para exibir o resultado.
for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    const palpite = parseInt(prompt(`Tentativa ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100)`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Por Favor, Insira um número entre 1 e 100.')
        tentativas --
    }else if(palpite == numeroAleatorio){
        window.alert(`Parabens! você acertou ${numeroAleatorio} em ${tentativas} tentativas.`)
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(tentativas > maxTentativas){
    window.alert(`sua ${maxTentativas} acabaram, o número era ${numeroAleatorio} `)
}
