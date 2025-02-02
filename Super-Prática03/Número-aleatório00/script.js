const numRandom = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= 10; tries ++){
    let guess = parseFloat(prompt(`Tentativa ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Apenas números entre 1 e 100')
        tries --
    }else if(guess === numRandom){
        alert(`Parabens! Você acertou o número ${numRandom} em ${tries} tentativas.`)
        break
    }else if(guess < numRandom){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
}

if(tries > maxTries){
    alert(`Sua ${maxTries} tentativas acabaram, o número era ${numRandom}, tente novamente`)
}