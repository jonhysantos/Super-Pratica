const numRandom = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= 10; tries ++){
    let guess = parseFloat(prompt(`Tentativa ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Não e um numero ou esta fora do padrao')
        tries --
    }else if(guess === numRandom){
        alert(`Parabéns! Você acertou o número ${numRandom} em ${tries} tentativas`)
        break
    }else if(guess < numRandom){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
}

if(tries >= maxTries){
    alert(`Suas ${tries} / ${maxTries} acabram o número era ${numRandom}`)
}