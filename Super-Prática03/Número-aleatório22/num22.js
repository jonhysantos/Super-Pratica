const numeroAleatorio = Math.floor(Math.random() *100) +1

const maxTentativas = 10
let tentativas = 0

for(let tentativas = 1; tentativas <= maxTentativas;tentativas ++){
    let palpite = parseFloat(prompt(`Tentativa ${tentativas} \ ${maxTentativas} Adivinhe o número (entre 1 e 100)`))
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        window.alert('Número inválido')
        tentativas --
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