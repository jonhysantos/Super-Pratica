// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() *100) +1

// armazena o número máximo de tentativas e a tentativa começando em 0

const maxTentativas = 10
let tentativas = 0

for(tentativas = 1;tentativas <= maxTentativas; tentativas ++){
    let palpite = parseFloat(prompt(`Tentativa ${tentativas} / ${maxTentativas}. Adivinhe o número (entre 1 e 100)`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('por favor, insira um número (entre 1 e 100)')
    }else if(palpite === numeroAleatorio){
        window.alert(`Parabens! você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`)
        break
    }else if(palpite < numeroAleatorio){
        window.alert('Tente um número maior')
    }else{
        window.alert('Tente um número menor.')
    }
}

if(tentativas > maxTentativas){
    window.alert(`Suas ${maxTentativas} tentativas acabaram, o número era ${numeroAleatorio}, tente novamente.`)
}