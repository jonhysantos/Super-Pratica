const numberRandom = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= 10; tries ++){
    const guess = parseInt(prompt(`Tentativa ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess < 0 || guess > 100){
        alert(`Número fora do solicitado`)
        tries --
    }else if(guess === numberRandom){
        alert(`Parabens! você acertou o número ${numberRandom} em ${tries} tentativas`)
        break
    }else if(guess > numberRandom){
        alert('Tente um número menor')
    }else{
        alert('Tente um número maior')
    }
}

if(tries > maxTries){
    alert(`Suas ${maxTries} tentativas acabaram, o número era ${numberRandom} tente novamente`)
}