// Gerar um número aleatório entre 1 e 100.
const numeroAleatório = Math.floor(Math.random() * 100) +1

// Número máximo de tentativas.
const maxTentativas = 10
let tentativas = 0

// loop para adivinhar número.
for(tentativas = 1; tentativas <= maxTentativas; tentativas ++){
    const palpite = parseInt(prompt(`Tenativas ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100).`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Por favor, insira um número válido entre 1 e 100.')
        tentativas --
    }else if(palpite === numeroAleatório){
        window.alert(`Parabéns! você acertou ${numeroAleatório} em ${tentativas} tentativas.`)
    }else if(palpite < numeroAleatório){
        window.alert('Tente um número maior.')
    }else{
        window.alert('Tente um número menor.')
    }
} 

if(tentativas > maxTentativas){
    window.alert(`Suas ${maxTentativas} tentativas acabaram, o número era ${numeroAleatório}`)
}
