const numRandom = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0

for(tries = 1; tries <= 10; tries ++){
    const guess = parseInt(prompt(`Tentativa ${tries} / ${maxTries}. Adivinhe o número entre 1 e 100`))
    if(guess < 0 || guess > 100 || isNaN(guess)){
        alert(`Não e um numero entre 1 e 100`)
        tries --
    }else if(guess === numRandom){
        alert(`Parabens! você acertou o número ${numRandom} em ${tries} tentativas`)
        break
    }else if(guess > numRandom){
        alert('Tent um número menor')
    }else{
        alert('Tente um número maior')
    }
}

if(tries >= maxTries){
    alert(`Suas ${maxTries} / ${maxTries} acabaram, o número era ${numRandom}, tente novamente`)
}